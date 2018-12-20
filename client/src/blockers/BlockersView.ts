

import {HeaderNotifications} from "../header/HeaderNotifications";
import {SystemConstants} from "../core/SystemConstants";
import {ViewComponent} from "../core/ViewComponent";
import {INotification} from "../core/INotification";
import {ISignal} from "../core/ISignal";
import {Blockers} from "./Blockers";
import {View} from "../core/View";





export class BlockersView extends View {
    private blockers: ViewComponent;
    private blockersContainer: HTMLElement;


    constructor() {
        super( "BlockersView" );

        this.container              = document.createElement( "div" );
        this.container.id           = "blockers-view-container";

        document.getElementById( SystemConstants.MAIN_CONTAINER ).appendChild( this.container );

        this.blockersContainer      = document.createElement( "div" );
        this.blockersContainer.id   = "blockers-container";

        this.container.appendChild( this.blockersContainer );

        this.blockers = new Blockers( this, this.blockersContainer );
    }



    public enterScene(): void {

    }



    public exitScene(exitType: string, callback: Function): void {

        this.exitCallback = callback;

        this.blockers.exitScene( exitType );

    }



    public listNotificationInterests(): any[] {

        let notifications = super.listNotificationInterests();

        notifications.push( HeaderNotifications.ADD_ITEM );

        return notifications;
    }



    public handleNotification(notification: INotification) {

        switch ( notification.name ) {


            case HeaderNotifications.ADD_ITEM :

                ( this.blockers as Blockers ).initializeBlockerInput();

                break;

            default :
                break;
        }

    }



    public handleSignal(signal: ISignal) {

        switch ( signal.name ) {

            default :
                break;
        }

    }

}