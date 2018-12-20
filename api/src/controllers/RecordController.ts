

import { Router, Request, Response, NextFunction } from "express";

import Blocker from "../models/Blocker";
import Record from "../models/Record";
import Log from "../models/Log";


class RecordController {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }



    public routes() {
        this.router.delete( "/:id", this.deleteRecord );
        this.router.post( "/create", this.createRecord );
        this.router.put( "/edit", this.editRecord );
        this.router.get( "/", this.getRecords );
    }



    public createRecord(req: Request, res: Response, next: NextFunction) {
        const { name } = req.body;
        const owner = req.app.get( "user" )._id;


        const record = new Record({
            name: name,
            owner: owner
        });

        record.save()
            .then( () => res.send( { success: true, record: record, message: "Record " + name + " successfully created."   } ) )
            .catch( next );
    }



    public editRecord(req: Request, res: Response, next: NextFunction) {
        const { recordId, name } = req.body;
        const userId = req.app.get( "user" )._id;

        Record.findOneAndUpdate( { _id: recordId, owner: userId }, { name } )
            .then( () => {
                return Blocker.update( { record: recordId }, { label: name }, { multi: true } );
            })
            .then( () => res.send( { success: true, message: "Record successfully updated." } ) )
            .catch( next );
    }



    public deleteRecord(req: Request, res: Response, next: NextFunction) {
        const recordId: string = req.params.id;
        const userId = req.app.get( "user" )._id;


        Record.findOneAndRemove( { _id: recordId, owner: userId } )
            .then( () => res.send( { success: true, message: "Record successfully deleted." } ) )
            .catch( next );
    }



    public getRecords(req: Request, res: Response, next: NextFunction) {
        const owner = req.app.get( "user" )._id;

        Record.find( { owner } )
            .then( (records) => {

                let promises = [];

                let userRecords = [];

                for ( let i = 0; i < records.length; i++ ) {
                    userRecords.push( { record: records[i] } );

                    let p = Log.find({ record: records[i]._id })
                        .populate( "Notes" )
                        .then( (logs) => {
                            userRecords[i].logs = logs;
                        });

                    promises.push( p );
                }


                Promise.all( promises )
                    .then( () => {

                        res.send( {
                            success: true,
                            records: userRecords
                        } );
                    });

            });
    }



}



export default new RecordController().router;