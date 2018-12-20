

import { Router, Request, Response, NextFunction } from "express";

import Blocker from "../models/Blocker";
import Log from "../models/Log";





class BlockerController {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }



    public routes() {
        this.router.put( "/unsolve/:id", this.unsolveBlocker );
        this.router.put( "/solve/:id", this.solveBlocker );
        this.router.post( "/create", this.createBlocker );
        this.router.get( "/", this.getBlockers );
    }



    public createBlocker(req: Request, res: Response, next: NextFunction) {
        const { content, label } = req.body;

        const user = req.app.get( "user" )._id;

        const blocker = new Blocker({
            content: content,
            owner: user,
            label: label
        });

        blocker.save()
            .then( () => res.send( { success: true, blocker: blocker, message: "Blocker successfully created." } ) )
            .catch( next );

    }



    public getBlockers(req: Request, res: Response, next: NextFunction) {

        const user = req.app.get( "user" )._id;

        Blocker.find( { owner: user })
            .then( (blockers) => {
                let solved = blockers.filter( (blocker) => {
                    return blocker.solved === true;
                });

                let unsolved = blockers.filter( (blocker) => {
                    return blocker.solved === false;
                });


                res.send( { success: true, solved: solved, unsolved: unsolved } );
            })
            .catch( next );
    }



    public solveBlocker(req: Request, res: Response, next: NextFunction) {

        const _id: string = req.params.id;
        const owner = req.app.get( "user" )._id;

        Blocker.findOne( { _id, owner } )
            .then( (blocker) => {

                if ( ! blocker ) res.send( { success: false, message: "Blocker with id " + _id + " was not found in the system!" } );


                if ( ! blocker.record ) {

                    blocker.solved = true;
                    blocker.save()
                        .then( () => res.send( { success: true, blockerId: blocker._id, message: "Blocker successfully solved!" } ) );

                } else {

                    Log.findById( blocker.log )
                        .then( (log) => {
                            if ( ! log ) res.send( { success: false, message: "Log associated with blocker " + blocker._id + " not found." });

                            log.notes.filter( (note) => {
                                if ( note._id === blocker.note ) note.blocker = null;
                            });

                            blocker.solved = true;

                            Promise.all([
                                blocker.save(),
                                log.save()
                            ])
                                .then( () => res.send( { success: true, blockerId: blocker._id, message: "Blocker successfully solved!" } ) )
                        });
                }
            })
            .catch( next );
    }



    public unsolveBlocker(req: Request, res: Response, next: NextFunction) {
        const _id: string = req.params.id;
        const owner = req.app.get( "user" )._id;


        Blocker.findOne( { _id,  owner } )
            .then( (blocker) => {

                if ( ! blocker ) res.send( { success: false, message: "Blocker with id " + _id + " was not found in the system!" } );

                blocker.solved = false;

                blocker.save()
                    .then( () => res.send( { success: true, blockerId: blocker._id, message: "Blocker successfully unsolved!" } ) );

            })
            .catch( next );
    }


}



export default new BlockerController().router;