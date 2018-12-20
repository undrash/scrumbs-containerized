

import { Router, Request, Response, NextFunction } from "express";

import { IUser } from "../models/interfaces/IUser";
import User from "../models/User";





class UserController {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }



    public routes() {
        this.router.post( "/login", this.login );
        this.router.post( "/sign-up", this.signUp );
    }



    public login(req: Request, res: Response, next: NextFunction) {

        // console.info( "Login request arrived." );
        //
        // const email: string = req.body.email;
        // const password: string = req.body.password;
        //
        // console.info( "Email: " + email );
        // console.info( "Password: " + password );
        //
        //
        // User.findOne( { email: email } )
        //     .then( (user: IUser) => {
        //
        //         if ( ! user ) {
        //             res.send( { success: false, message: "The email provided is not registered." } );
        //             return;
        //         }
        //
        //         user.comparePassword( password, (err, isMatch) => {
        //             if ( err ) throw err;
        //
        //             if ( isMatch ) {
        //
        //                 res.send( {
        //                     success: true,
        //                     message: user.email + " logged in successfully with password " + password,
        //                     userId: user._id,
        //                     firstName: user.firstName,
        //                     lastName: user.lastName,
        //                     email: user.email,
        //                 } );
        //
        //             } else {
        //                 res.send( { success: false, message: "Invalid password for user: " + user.email } );
        //             }
        //         })
        //     })


    }



    public signUp(req: Request, res: Response, next: NextFunction) {
        // console.info( "SignUp request received" );
        //
        // const { firstName, lastName, email, password } = req.body;
        //
        // const user = new User( {
        //     firstName: firstName,
        //     lastName: lastName,
        //     email: email,
        //     password: password
        // });
        //
        // user.save()
        //     .then( () => res.send( { success: true, userId: user._id, message: "User successfully created for " + req.body.email } ) )
        //     .catch( next );
    }



}



export default new UserController().router;