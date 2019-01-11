
import { Router, Request, Response, NextFunction } from "express";

import { ValidationHelper } from "../helpers/ValidationHelper";
import { Subscriber } from "../entity/Subscriber";

import * as nodemailer from "nodemailer";

import * as hbs from "nodemailer-express-handlebars";
import * as path from "path";


class SubscriptionController {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }



    public routes() {
        this.router.post( "/subscribe", this.subscribe );
        this.router.get( "/unsubscribe/:id", this.unsubscribe );
        this.router.get( "/subscribers/:pw", this.getSubscribers );
    }



    public subscribe = async (req: Request, res: Response) => {
        const { name, email } = req.body;

        if ( name.length < 2 || ! ValidationHelper.validateEmail( email ) ) {
            res.send( { success: false, message: "Invalid subscription credentials. Please provide a name - at least two characters long - and a valid email address to subscribe." } );
            return;
        }


        const exists  = await Subscriber.findOne( { email } );

        if ( exists ) {
            res.send( { success: false, message: "This email address is aleady subscribed!"} );
            return;
        }


        const subscriber = Subscriber.create({
            name,
            email
        });

        await subscriber.save();

        const smtpTransport = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.SUPPORT_EMAIL_ADDRESS,
                pass: process.env.SUPPORT_EMAIL_PW,
            }
        });

        smtpTransport.use( "compile", hbs({
            viewPath: path.join( __dirname, "../templates" ),
            extName: ".hbs"
        }));



        const mailOptions = {
            to: email,
            subject: "Scrumbs - successfully subscribed!",
            template: "subscribed",
            context: {
                name,
                unSubscribe: `http://${ req.headers.host }/http/unsubscribe/${ subscriber.id }`
            }
        };

        await smtpTransport.sendMail( mailOptions, (err: any) => {

            if ( err ) throw err;

        });



        const adminMailOptions = {
            to: process.env.ADMIN_EMAIL_ADDRESS,
            subject: `Scrumbs subscriber - ${ name }`,
            template: "new-subscriber",
            context: {
                name,
                email
            }
        };


        await smtpTransport.sendMail( adminMailOptions, (err: any) => {

            if ( err ) throw err;

        });

        res.send( { success: true, message: "You successfully subscribed for Scrumbs alpha access!" } );

    };



    public unsubscribe(req: Request, res: Response, next: NextFunction) {
        const id: string = req.params.id;

        Subscriber.delete( { id } )
            .then( () => {
                res.sendFile( path.join( __dirname, "../views/unsubscribed.html" ) );
            })
            .catch( next );
    }



    public getSubscribers(req: Request, res: Response, next: NextFunction) {
        const pw: string = req.params.pw;

        if ( pw === process.env.GET_SECRET ) {

            Subscriber.find( {} )
                .then( subscribers => {
                    res.send( { count: subscribers.length, subscribers } );
                })
                .catch( next );

        } else {
            res.send( { count: 0, subscribers: [] } );
        }
    }

}

export default new SubscriptionController().router;