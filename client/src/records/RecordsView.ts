

import {HeaderNotifications} from "../header/HeaderNotifications";
import {PromptNotifications} from "../prompt/PromptNotifications";
import {RecordNotifications} from "./RecordNotifications";
import {SystemConstants} from "../core/SystemConstants";
import {ViewComponent} from "../core/ViewComponent";
import {INotification} from "../core/INotification";
import {ISignal} from "../core/ISignal";
import {Records} from "./Records";
import {View} from "../core/View";





export class RecordsView extends View {
    private records: ViewComponent;
    private contentContainer: HTMLElement;

    constructor() {
        super( "RecordsView" );

        console.info( "Records view initiated." );

        this.container          = document.createElement( "div" );
        this.container.id       = "records-view-container";

        this.contentContainer   = document.getElementById( SystemConstants.MAIN_CONTAINER );

        this.contentContainer.appendChild( this.container );

        this.records            = new Records( this, this.container );

    }



    public enterScene(callback: Function): void {

    }



    public exitScene(exitType: string, callback: Function): void {

        this.exitCallback = callback;

        this.records.exitScene( exitType );

    }



    public listNotificationInterests(): any[] {
        let notifications = super.listNotificationInterests();

        notifications.push( HeaderNotifications.ADD_ITEM );
        notifications.push( PromptNotifications.DELETE_RECORD );

        return notifications;
    }



    public handleNotification(notification: INotification) {

        switch ( notification.name ) {

            case HeaderNotifications.ADD_ITEM :

                ( this.records as Records ).initializeRecordInput();

                break;

            case PromptNotifications.DELETE_RECORD :
                
                ( this.records as Records ).deleteActiveRecord();

                break;

            default :
                break;
        }

    }



    public handleSignal(signal: ISignal) {

        console.info( "signal received: " + signal.name );


        switch ( signal.name ) {

            case RecordNotifications.RECORD_ADDED :

                this.sendNotification( RecordNotifications.RECORD_ADDED );

                break;


            case RecordNotifications.DELETE_RECORD :

                this.sendNotification( RecordNotifications.DELETE_RECORD, signal.data );

                break;


            default :
                break;
        }

    }

}