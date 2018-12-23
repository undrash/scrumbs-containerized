

import {EditRecordModel} from "./models/EditRecordModel";
import {AddNoteModel} from "./models/AddNoteModel";
import {SignUpModel} from "./models/SignUpModel";
import {HTTPMethods} from "../core/HTTPMethods";
import {LoginModel} from "./models/LoginModel";
import {Proxy} from "../core/Proxy";
import {UserVO} from "./UserVO";


declare const SERVICE_URL: string;



export class ConnectionProxy extends Proxy {

    constructor(proxyName: string) {
        super( proxyName, SERVICE_URL );
    }



    public login(data: LoginModel, success: Function, failure: Function): void {

        console.info("Proxy login executed" );


        this.httpRequest(
            HTTPMethods.POST,
            "/authentication/login",
            data,
            (response: any) => {

                console.log( "login data" );
                console.log( response );


                Proxy.token = response.tokenData.token;
                Proxy.tokenExpires = new Date( response.tokenData.expires );

                const { user, email, firstName, lastName } = response.userData;

                const userVO = new UserVO( user, email, firstName, lastName );

                this.setVO( userVO );

                success( response );
            },
            failure
        );

    }



    public signUp(data: SignUpModel, success: Function, failure: Function): void {
        console.info("Proxy sign up executed");

        this.httpRequest(
            HTTPMethods.POST,
            "/authentication/sign-up",
            data,
            (response: any) => {

                Proxy.token = response.tokenData.token;
                Proxy.tokenExpires = new Date( response.tokenData.expires );

                const { user, email, firstName, lastName } = response.userData;

                const userVO = new UserVO( user, email, firstName, lastName );

                this.setVO( userVO );

                success( response );
            },
            failure
        );

    }



    public createRecord(name: string, success: Function, failure: Function): void {
        console.info("Proxy create record executed");

        this.httpRequest(
            HTTPMethods.POST,
            "/records/create",
            { name },
            success,
            failure
        );

    }



    public getRecords(success: Function, failure: Function): void {
        console.info("Proxy get records executed");

        this.httpRequest(
            HTTPMethods.GET,
            "/records",
            null,
            success,
            failure
        );

    }



    public deleteRecord( recordId: string, success: Function, failure: Function): void {
        console.info("Proxy delete record executed");

        this.httpRequest(
            HTTPMethods.DELETE,
            "/records/" + recordId,
            null,
            success,
            failure
        );
    }



    public addNote(data: AddNoteModel, success: Function, failure: Function) {
        console.info("Proxy create note executed" );

        this.httpRequest(
            HTTPMethods.POST,
            "/notes/create",
            data,
            success,
            failure
        );
    }



    public createBlocker(content: string, success: Function, failure: Function) {
        console.info("Proxy create blocker executed" );

        this.httpRequest(
            HTTPMethods.POST,
            "/blockers/create",
            { content },
            success,
            failure
        );


    }



    public getBlockers(success: Function, failure: Function): void {
        console.info("Proxy get blockers executed");

        this.httpRequest(
            HTTPMethods.GET,
            "/blockers",
            null,
            success,
            failure
        );

    }



    public solveBlocker(blockerId: string, success: Function, failure: Function): void {
        console.info( "Proxy solve blocker executed" );

        this.httpRequest(
            HTTPMethods.PUT,
            "/blockers/solve/" + blockerId,
            null,
            success,
            failure
        );

    }



    public unsolveBlocker(blockerId: string, success: Function, failure: Function): void {
        console.info( "Proxy unsolve blocker executed" );

        this.httpRequest(
            HTTPMethods.PUT,
            "/blockers/unsolve/" + blockerId,
            null,
            success,
            failure
        );
    }



    public editRecord(data: EditRecordModel, success: Function, failure: Function): void {
        console.info("Proxy edit record executed");

        this.httpRequest(
            HTTPMethods.PUT,
            "/records/edit",
            data,
            success,
            failure
        );

    }



    public forgotPassword(email: string, success: Function, failure: Function): void {
        console.info( "Proxy forgot password executed" );

        this.httpRequest(
            HTTPMethods.POST,
            "/authentication/forgot",
        { email },
            success,
            failure
        );

    }

}