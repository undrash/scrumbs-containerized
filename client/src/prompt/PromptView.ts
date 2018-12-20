

import {RecordNotifications} from "../records/RecordNotifications";
import {PromptNotifications} from "./PromptNotifications";
import {INotification} from "../core/INotification";
import {ISignal} from "../core/ISignal";
import {View} from "../core/View";
import {Dialog} from "./Dialog";

import TweenLite = gsap.TweenLite;
import Power1 = gsap.Power1;

// CSS
import "../_style/style-sheets/prompt.scss";





export class PromptView extends View {

    public background: HTMLElement;
    private dialogContainer: HTMLElement;
    private dialog: Dialog;

    constructor() {
        super( "PromptView" );

        this.container = document.createElement( "div" );
        this.container.id = "prompt-view-container";

        this.background = document.createElement( "div" );
        this.background.id = "prompt-view-background";

        this.container.appendChild( this.background );

        this.dialogContainer = document.createElement( "div" );
        this.dialogContainer.id = "dialog-container";

        this.container.appendChild( this.dialogContainer );


        this.registerEventListeners();
    }



    private registerEventListeners(): void {
        this.background.addEventListener( "click", () => {

            this.exitScene();
        })
    }



    public enterScene(): void {
        document.body.appendChild( this.container );

        TweenLite.to( this.background, 0.2, { opacity: 0.65, ease: Power1.easeOut } );
    }



    public exitScene(): void {

        this.dialog.exitScene();
    }



    public listNotificationInterests(): any[] {

        let notifications = super.listNotificationInterests();

        notifications.push( RecordNotifications.DELETE_RECORD );

        return notifications;
    }



    public handleNotification(notification: INotification) {

        switch ( notification.name ) {
            case RecordNotifications.DELETE_RECORD :

                this.enterScene();

                this.dialog = new Dialog(
                    this,
                    this.dialogContainer,
                    PromptNotifications.DELETE_RECORD,
                    "Do you want to delete " + notification.data.recordName + '?',
                    "Once you delete this record you won't be able to undo this action.",
                    "Yes, delete " + notification.data.recordName + '.',
                    "Cancel, keep the record"
                    );

                break;

            default :
                break;
        }
    }



    public handleSignal(signal: ISignal) {

        switch ( signal.name ) {
            case PromptNotifications.DELETE_RECORD :

                this.sendNotification( PromptNotifications.DELETE_RECORD );

                break;

            default :
                break;
        }
    }
}
