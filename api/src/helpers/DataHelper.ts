

import { Router, Request, Response, NextFunction } from "express";
import * as mongoose from "mongoose";

import { IRecord } from "../models/interfaces/IRecord";
import Record from "../models/Record";
import User from "../models/User";
import Log from "../models/Log";





class DataHelper {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }


    public populate(req: Request, res: Response, next: NextFunction) {
        /** User */

        const andrei: any = new User({
            firstName: "Andrei",
            lastName: "Gaspar",
            email: "andrei@ildiesign.com",
            password: "asd123"

        });

        /** Records */

        let hunorRecord = new Record({
            name: "Hunor record",
            owner: andrei
        });

        let date = new Date();
        date.setDate(date.getDate() - 20);

        let hunorRecordLog1 = new Log({
            created: date,
            record: hunorRecord,
            notes: [
                {
                    content: "asdasdasdsadsadsa"
                },
                {
                    content: "asdsadad asd as da das das "
                },
                {
                    content: "asdsadsad"
                }
            ]
        });

        date.setDate(date.getDate() + 1);

        let hunorRecordLog2 = new Log({
            created: date,
            record: hunorRecord,
            notes: [
                {
                    content: "asdasdasdsadsadsa"
                },
                {
                    content: "asdsadad asd as da das das "
                },
                {
                    content: "asdsadsad"
                },
                {
                    content: "asdsadsad"
                }
            ]
        });

        date.setDate(date.getDate() + 2);

        let hunorRecordLog3 = new Log({
            created: date,
            record: hunorRecord,
            notes: [
                {
                    content: "sdasxczczxz  "
                },
                {
                    content: "zxcxcz zxcxxz as "
                },
                {
                    content: "zxczc "
                }
            ]
        });


        let pavleRecord: IRecord = new Record({
            name: "Pavle record",
            owner: andrei
        });

        date = new Date();
        date.setDate(date.getDate() - 20);

        let paveRecordLog1 = new Log({
            created: date,
            record: pavleRecord,
            notes: [
                {
                    content: "sdad sad asdasdad"
                },
                {
                    content: "asdsadad asd as da das das "
                },
                {
                    content: "asdsadsad"
                }
            ]
        });

        date.setDate(date.getDate() + 1);

        let paveRecordLog2 = new Log({
            created: date,
            record: pavleRecord,
            notes: [
                {
                    content: "sdad sad asdasdad"
                },
                {
                    content: "asdsadad asd as da das das "
                },
                {
                    content: "tyrwr werwerwr wer ewrw 333 dasfadas"
                }
            ]
        });


        let nandorRecord = new Record({
            name: "Nandor record",
            owner: andrei
        });

        date = new Date();
        date.setDate(date.getDate() - 20);

        let nandorRecordLog1 = new Log({
            created: date,
            record: nandorRecord,
            notes: [
                {
                    content: "sdasda asdasd a"
                },
                {
                    content: "trtyryrt rty rdas das "
                },
                {
                    content: "asrty rty rty rd"
                }
            ]
        });

        date.setDate(date.getDate() + 1);

        let nandorRecordLog2 = new Log({
            created: date,
            record: nandorRecord,
            notes: [
                {
                    content: "sd asdadasd asdasd asdsa asdadas dasd a"
                },
                {
                    content: "trtyrasd asdsa ad asd   asdsadas asdasds adsad das das "
                },
                {
                    content: "asasd sada  asdasd  asd a y rty rd"
                }
            ]
        });


        let markoRecord = new Record({
            name: "Marko record",
            owner: andrei
        });

        date = new Date();
        date.setDate(date.getDate() - 20);

        let markoRecordLog2 = new Log({
            created: date,
            record: markoRecord,
            notes: [
                {
                    content: "ssadasdsaasdasd a"
                },
                {
                    content: "trt asdadas asdadsa asdad s das "
                }
            ]
        });

        date.setDate(date.getDate() + 1);

        let markoRecordLog3 = new Log({
            created: date,
            record: markoRecord,
            notes: [
                {
                    content: "ssada sada sadadssad sad sdasd a"
                },
                {
                    content: "trt asdadas asdadsa asdad s das "
                },
                {
                    content: "trt asasdad asda asdsadsad asdsad asdasdsadsadsas ad s das "
                }
            ]
        });


        /** SAVE RECORDS */
        Promise.all([
            andrei.save(),
            hunorRecord.save(),
            hunorRecordLog1.save(),
            hunorRecordLog2.save(),
            hunorRecordLog3.save(),
            pavleRecord.save(),
            paveRecordLog1.save(),
            paveRecordLog2.save(),
            nandorRecord.save(),
            nandorRecordLog1.save(),
            nandorRecordLog2.save(),
            markoRecord.save(),
            markoRecordLog2.save(),
            markoRecordLog3.save()
        ])
            .then(() => res.send("Database has been successfully populated."))
            .catch(next);
    }



    public drop(req: Request, res: Response, next: NextFunction) {
        console.info("Collections drop has been initiated" );

        const { users, records, logs, blockers } = mongoose.connection.collections;

        if ( ! users )        res.send( "Users collection not found" );
        if ( ! records )      res.send( "Records collection not found" );
        if ( ! logs )         res.send( "Logs collection not found" );

        users.drop( () => {
            records.drop( () => {
                logs.drop( () => {

                    if ( ! blockers ) {
                        res.send( "Collections dropped" );
                    } else {
                        blockers.drop( () => {
                            res.send( "Collections dropped" );
                        })
                    }

                });
            });
        });
    }



    public routes() {
        this.router.get( "/populate", this.populate );
        this.router.get( "/drop", this.drop );
    }
}



export default new DataHelper().router;
