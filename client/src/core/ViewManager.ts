

import {AuthenticationNotifications} from "../authentication/AuthenticationNotifications";
import {AuthenticationView} from "../authentication/AuthenticationView";
import {HeaderNotifications} from "../header/HeaderNotifications";
import {BlockersView} from "../blockers/BlockersView";
import {RecordsView} from "../records/RecordsView";
import {HeaderView} from "../header/HeaderView";
import {PromptView} from "../prompt/PromptView";
import {INotification} from "./INotification";
import {ViewExitTypes} from "./ViewExitTypes";
import {CoreEntity} from "./CoreEntity";
import {View} from "./View";





export class ViewManager extends CoreEntity {
    private headerView: View;
    private currentView: View;


    constructor() {
        super( "ViewManager" );
        this.initView();
    }


    private initView(): void {

        new PromptView();

        this.headerView = new HeaderView();
        this.currentView = new AuthenticationView();
    }


    private switchView(view: any, exitType?: string, callback?: Function): void {

        if ( ! exitType ) exitType = ViewExitTypes.DEFAULT;

        this.currentView.exitScene( exitType, () => {

            this.currentView = new view();

            if ( callback ) callback();

        });
    }



    public listNotificationInterests(): any[] {

        let notifications = [];

        notifications.push( AuthenticationNotifications.USER_AUTHENTICATED );
        notifications.push( AuthenticationNotifications.USER_SIGNED_UP );
        notifications.push( HeaderNotifications.SIGN_OUT );
        notifications.push( HeaderNotifications.BLOCKERS_BTN_PRESSED );
        notifications.push( HeaderNotifications.SCRUM_BTN_PRESSED );


        return notifications;
    }



    public handleNotification(notification: INotification) {

        switch ( notification.name ) {
            case AuthenticationNotifications.USER_AUTHENTICATED :


                this.switchView( RecordsView, null, () => {
                    this.headerView.enterScene();
                } );

                break;

            case AuthenticationNotifications.USER_SIGNED_UP :

                this.switchView( RecordsView, null, () => {
                    this.headerView.enterScene();
                } );

                break;


            case HeaderNotifications.SIGN_OUT :

                this.headerView.exitScene( ViewExitTypes.DEFAULT );

                this.switchView( AuthenticationView );

                break;

                
            case HeaderNotifications.BLOCKERS_BTN_PRESSED :

                this.switchView( BlockersView, ViewExitTypes.SWITCH );

                break;


            case HeaderNotifications.SCRUM_BTN_PRESSED :

                this.switchView( RecordsView, ViewExitTypes.SWITCH );

                break;

            default :
                break;
        }

    }

}