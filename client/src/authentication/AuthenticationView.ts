

import {AuthenticationNotifications} from "./AuthenticationNotifications";
import {SystemConstants} from "../core/SystemConstants";
import {INotification} from "../core/INotification";
import {ViewComponent} from "../core/ViewComponent";
import {Authentication} from "./Authentication";
import {ISignal} from "../core/ISignal";
import {View} from "../core/View";
import {ForgotPassword} from "./ForgotPassword";
import {ViewExitTypes} from "../core/ViewExitTypes";





export class AuthenticationView extends View {
    private authentication: ViewComponent;
    private authenticationContainer: HTMLElement;

    private forgotPassword: ViewComponent;
    private forgotPasswordContainer: HTMLElement;


    constructor() {
        super( "AuthenticationView" );

        this.container = document.createElement( "div" );
        this.container.id = "authentication-view-container";

        document.getElementById( SystemConstants.MAIN_CONTAINER ).appendChild( this.container );

        this.authenticationContainer = document.createElement( "div" );
        this.forgotPasswordContainer = document.createElement( "div" );
        this.forgotPasswordContainer.style.display = "none";

        this.container.appendChild( this.authenticationContainer );
        this.container.appendChild( this.forgotPasswordContainer );

        this.authentication = new Authentication( this, this.authenticationContainer );
        this.forgotPassword = new ForgotPassword( this, this.forgotPasswordContainer );

    }



    public enterScene(): void {


    }



    public exitScene(exitType: string, callback: Function): void {

        this.exitCallback = callback;

        this.authentication.exitScene( exitType );
        this.forgotPassword.exitScene( exitType );

    }



    public listNotificationInterests(): any[] {

        let notifications = super.listNotificationInterests();

        // notifications.push( NOTIFICATION_NAME );

        return notifications;
    }



    public handleNotification(notification: INotification) {

        switch ( notification.name ) {

            default :
                break;
        }

    }



    public handleSignal(signal: ISignal) {
        console.log( "signal received in " + this.NAME + ": " + signal.name );

        switch ( signal.name ) {

            case AuthenticationNotifications.LOGIN_SUCCESS :


                this.sendNotification( AuthenticationNotifications.USER_AUTHENTICATED, signal.data );
                break;

            case AuthenticationNotifications.SIGN_UP_SUCCESS :

                this.sendNotification( AuthenticationNotifications.USER_SIGNED_UP, signal.data );
                break;


            case AuthenticationNotifications.FORGOT_PASSWORD :

                this.authenticationContainer.style.display = "none";
                this.forgotPasswordContainer.style.display = "block";
                ( this.forgotPassword as ForgotPassword ).enterScene( ViewExitTypes.SWITCH );





                break;

            case AuthenticationNotifications.TRY_LOGGING_IN :

                this.authenticationContainer.style.display = "block";
                this.forgotPasswordContainer.style.display = "none";
                ( this.authentication as Authentication ).enterScene( ViewExitTypes.SWITCH );


                break;

            default :
                break;
        }
    }

}