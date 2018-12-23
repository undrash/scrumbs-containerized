

import { Subscriber } from "../entity/Subscriber";

import * as nodemailer from "nodemailer";




export const resolvers = {

    Query: {

        getSubscribers: (_: any, { pass }: any) => {

            if ( pass === process.env.GET_SECRET ) {
                return Subscriber.find();
            } else {
                return [];
            }
        },

        unSubscribe: async (_:any, { id }: any) => {
            await Subscriber.delete( { id } );
            return "You have successfully unsubscribed.";
        },

        subscribe: async (_: any, { name, email }: any, context: any) => {
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
                text: `Hi ${ name },\n\nThanks for subscribing to the alpha release!\n\n\nUnsubscribe: http://${ context.req.headers.host }/graphql?query={unSubscribe(id:"${ subscriber.id }")}`
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

            return JSON.stringify( { success: true, message: `Successfully subscribed with email: ${ email }` } );
        }

    }

};