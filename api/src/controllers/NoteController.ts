

import { Router, Request, Response, NextFunction } from "express";

import Blocker from "../models/Blocker";
import Record from "../models/Record";
import Log from "../models/Log";





class NoteController {

    router: Router;


    constructor() {
        this.router = Router();
        this.routes();
    }



    public routes() {
        this.router.post( "/create", this.createNote );
    }



    public createNote(req: Request, res: Response, next: NextFunction) {
        console.info( "Add note request arrived." );

        const { recordId, content, isBlocker } = req.body;
        const userId = req.app.get( "user" )._id;

        const now       = new Date( Date.now( ));
        const year      = now.getUTCFullYear();
        const month     = now.getUTCMonth();
        const day       = now.getUTCDate();

        Log.findOne( { record: recordId, created: { "$gte" : new Date(year, month, day - 1), "$lt": new Date(year, month, day + 1) } } )
            .then( (log) => {
                Record.findById( recordId )
                    .then( (record) => {

                        if ( log ) {

                            console.log( log );
                            log.notes.push( { content: content } );

                            if ( isBlocker ) {
                                const note = log.notes[ log.notes.length - 1 ];

                                const blocker = new Blocker({
                                    content: content,
                                    log: log._id,
                                    note: note._id,
                                    owner: userId,
                                    record: record._id,
                                    label: record.name
                                });

                                note.blocker = blocker._id;

                                Promise.all([
                                    log.save(),
                                    blocker.save()
                                ])
                                    .then( () => res.send( { success: true, message: "Note successfully saved!", log: log } ) );

                            } else {
                                log.save()
                                    .then( () => res.send( { success: true, message: "Note successfully saved!", log: log } ));
                            }


                        } else {

                            const l = new Log({
                                record: recordId,
                                notes: [
                                    { content: content }
                                ]
                            });

                            if ( isBlocker ) {
                                const note = l.notes[ l.notes.length - 1 ];

                                const blocker = new Blocker({
                                    content: content,
                                    log: l._id,
                                    note: note._id,
                                    owner: userId,
                                    record: record._id,
                                    label: record.name
                                });

                                note.blocker = blocker._id;

                                Promise.all([
                                    l.save(),
                                    blocker.save()
                                ])
                                    .then( () => res.send( { success: true, message: "Note successfully saved!", log: l } ) );

                            } else {
                                l.save()
                                    .then( () => res.send( { success: true, message: "New log created. Note successfully saved!", log: l } ) );
                            }

                        }
                    })
            })
            .catch( next );
    }

}



export default new NoteController().router;