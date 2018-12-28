

import { Router, Request, Response, NextFunction } from "express";

import { ValidationHelper } from "../helpers/ValidationHelper";
import { Subscriber } from "../entity/Subscriber";

import * as nodemailer from "nodemailer";





class SubscriptionController {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }



    public routes() {
        this.router.post( "/subscribe", this.subscribe );
        this.router.get( "/unsubscribe/:id", this.unsubscribe );
    }



    public subscribe = async (req: Request, res: Response) => {
        const { name, email } = req.body;

        if ( name.length < 2 || ValidationHelper.validateEmail( email ) ) {
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

        const mailOptions = {
            to: email,
            subject: "Scrumbs - subscribed successfully!",
            text: `Hi ${ name },\n\nThanks for subscribing to the alpha release!\n\n\nUnsubscribe: http://${ req.headers.host }/http/unsubscribe/${ subscriber.id }`
        };

        await smtpTransport.sendMail( mailOptions, (err: any) => {

            if ( err ) throw err;

        });
        const adminMailOptions = {
            to: process.env.ADMIN_EMAIL_ADDRESS,
            subject: `Scrumbs subscriber - ${ name }`,
            text: `Name: ${ name }\nEmail: ${ email }`
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
                res.send( { success: true, message: "You successfully unsubscribed" } );
            })
            .catch( next );
    }
}

export default new SubscriptionController().router;