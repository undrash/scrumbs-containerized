

import { AuthenticationNotifications } from "./AuthenticationNotifications";
import { ValidationHelper } from "../helpers/ValidationHelper";
import { StringPointers } from "../languages/StringPointers";
import { ViewExitTypes } from "../core/ViewExitTypes";
import { ViewComponent } from "../core/ViewComponent";
import { Language } from "../languages/Language";
import { View } from "../core/View";

import TweenLite = gsap.TweenLite;
import Power1 = gsap.Power1;

//CSS
import "../_style/style-sheets/forgot-password.scss";

//HTML template
const template = require("../_view-templates/forgot-password.html");






export class ForgotPassword extends ViewComponent {

    private forgotPasswordContainer: HTMLElement;
    private scrumbsLogo: HTMLElement;
    private titleElement: HTMLElement;
    private emailInputContainer: HTMLElement;
    private emailInput: HTMLInputElement;
    private tryLoggingInBtn: HTMLElement;
    private sendInstructionsBtn: HTMLElement;
    private backToLoginBtn: HTMLElement;
    private errorText: HTMLElement;
    private footerText: HTMLElement;





    constructor(view: View, container: HTMLElement) {
        super( view, container );

        console.info( "ForgotPassword view component initiated!" );


        this.container.innerHTML = template;

        this.forgotPasswordContainer    = document.getElementById( "authentication-forgot-password-container" );
        this.scrumbsLogo                = document.getElementById( "authentication-forgot-password-logo" );
        this.emailInput                 = document.getElementById( "authentication-forgot-password-email-input" ) as HTMLInputElement;
        this.emailInputContainer        = document.getElementById( "authentication-forgot-password-email-input-container" );
        this.titleElement               = document.getElementById( "authentication-forgot-password-title" );
        this.tryLoggingInBtn            = document.getElementById( "authentication-forgot-password-try-logging-in" );
        this.sendInstructionsBtn        = document.getElementById( "authentication-forgot-password-button-send-instructions" );
        this.backToLoginBtn             = document.getElementById( "authentication-forgot-password-button-back-to-login" );
        this.errorText                  = document.getElementById( "authentication-forgot-password-error" );
        this.footerText                 = document.getElementById( "authentication-forgot-password-footer-text" );


        this.translateComponent();



        this.tryLoggingInHandler        = this.tryLoggingInHandler.bind( this );
        this.sendInstructionsHandler    = this.sendInstructionsHandler.bind( this );
        this.emailInputHandler          = this.emailInputHandler.bind( this );
        this.backToLoginBtnHandler      = this.backToLoginBtnHandler.bind( this );


        this.registerEventListeners();

    }



    private registerEventListeners(): void {

        this.emailInput.addEventListener( "focus", this.emailInputHandler );
        this.tryLoggingInBtn.addEventListener( "click", this.tryLoggingInHandler );
        this.backToLoginBtn.addEventListener( "click", this.backToLoginBtnHandler );
        this.sendInstructionsBtn.addEventListener( "click", this.sendInstructionsHandler );

    }



    private unregisterEventListeners(): void {

        this.emailInput.removeEventListener( "focus", this.emailInputHandler );
        this.tryLoggingInBtn.removeEventListener( "click", this.tryLoggingInHandler );
        this.backToLoginBtn.removeEventListener( "click", this.backToLoginBtnHandler );
        this.sendInstructionsBtn.removeEventListener( "click", this.sendInstructionsHandler );
    }



    private tryLoggingInHandler(e: any): void {

        this.exitScene( ViewExitTypes.SWITCH );

    }



    private sendInstructionsHandler(e: any): void {

        const email = this.emailInput.value;

        if ( ! email ) {

            this.errorText.innerHTML = "Please enter an email address.";

            TweenLite.to( this.errorText, 0.3, { opacity: 1 } );
            TweenLite.to( this.emailInput, 0.3, { css:{ className: "+=invalid" }, ease: Power1.easeOut } );

        } else if ( ! ValidationHelper.validateEmail( email ) ) {
            this.errorText.innerHTML = "Invalid email address.";

            TweenLite.to( this.errorText, 0.3, { opacity: 1 } );
            TweenLite.to( this.emailInput, 0.3, { css:{ className: "+=invalid" }, ease: Power1.easeOut } );

        } else {


            this.enterLoadingState();

            this.connection.forgotPassword(
                email,
                (response: any) => {
                    console.log( response );

                    this.enterSuccessState( response.message );

                },
                (message: string) => {

                    console.error( message );

                    this.errorText.innerHTML = message;
                    TweenLite.to( this.errorText, 0.3, { opacity: 1 } );
                    TweenLite.to( this.emailInput, 0.3, { css:{ className: "+=invalid" }, ease: Power1.easeOut } );

                    this.exitLoadingState();
                }
            )
        }

    }



    private emailInputHandler(e: any): void {
        TweenLite.to( this.errorText, 0.3, { opacity: 0 } );
        TweenLite.to( this.emailInput, 0.3, { css:{ className: "-=invalid" }, ease: Power1.easeOut } );
    }



    private backToLoginBtnHandler(e: any): void {
        this.exitScene( ViewExitTypes.SWITCH );
    }



    private translateComponent(): void {

        document.getElementById( "authentication-forgot-password-title" ).innerHTML                                     = Language.getTranslation( StringPointers.FORGOT_PW_TITLE );

        document.getElementById( "authentication-forgot-password-email-label" ).innerHTML                               = Language.getTranslation( StringPointers.FORGOT_PW_EMAIL_LABEL );

        ( document.getElementById( "authentication-forgot-password-email-input" ) as HTMLInputElement ).placeholder     = Language.getTranslation( StringPointers.FORGOT_PW_EMAIL_PLACEHOLDER );

        document.getElementById( "authentication-forgot-password-send-instructions-span" ).innerHTML                    = Language.getTranslation( StringPointers.FORGOT_PW_SEND_INSTRUCTIONS );

        document.getElementById( "authentication-forgot-password-remember" ).innerHTML                                  = Language.getTranslation( StringPointers.FORGOT_PW_REMEMBERED_PASSWORD );

        document.getElementById( "authentication-forgot-password-try-logging-in" ).innerHTML                            = Language.getTranslation( StringPointers.FORGOT_PW_TRY_LOGGING_IN );

    }



    public enterScene(enterType?:string): void {

        if ( enterType === ViewExitTypes.SWITCH ) {

            TweenLite.to( this.forgotPasswordContainer, 0.4, { css: { opacity: 1, top: "calc(50% + 50px)" } } );

        }
    }



    public exitScene(exitType?:string): void {


        if ( exitType === ViewExitTypes.SWITCH ) {

            const self = this;

            TweenLite.to( this.forgotPasswordContainer, 0.25, { opacity: 0 } );


            TweenLite.to( this.forgotPasswordContainer, 0.5, { css: { top: "calc(50% + 60px)"}, onComplete: function () {
                self.sendSignal( AuthenticationNotifications.TRY_LOGGING_IN );

                self.resetComponent();
            }});


        } else {
            super.exitScene( exitType );
            this.unregisterEventListeners();

            this.view.componentExited( this.name );
        }

    }



    private enterLoadingState(): void {

        this.emailInput.disabled = true;

        TweenLite.to( this.sendInstructionsBtn, 0.2, { color: "transparent", ease: Power1.easeOut } );
        TweenLite.to( this.sendInstructionsBtn, 0.3, { delay: 0.1, css:{ className: "+=loading" }, ease: Power1.easeOut } );
        TweenLite.to( this.sendInstructionsBtn, 0, { delay: 0.3, css:{ className: "+=loading-animation" }, ease: Power1.easeOut } );

    }



    private exitLoadingState(): void {

        TweenLite.killTweensOf( this.sendInstructionsBtn );

        this.emailInput.disabled = false;
        this.sendInstructionsBtn.style.removeProperty( "color" );
        this.sendInstructionsBtn.classList.remove( "loading" );
        this.sendInstructionsBtn.classList.remove( "loading-animation" );

    }



    private enterSuccessState(message: string): void {

        const self = this;


        TweenLite.to( this.scrumbsLogo, 0.25, {  opacity: 0, ease: Power1.easeOut } );
        TweenLite.to( this.titleElement, 0.25, {  opacity: 0, ease: Power1.easeOut } );
        TweenLite.to( this.footerText, 0.3, {  opacity: 0, ease: Power1.easeOut } );
        TweenLite.to( this.sendInstructionsBtn, 0.3, {  opacity: 0, ease: Power1.easeOut } );
        TweenLite.to( this.emailInputContainer, 0.35, {  opacity: 0, ease: Power1.easeOut, onComplete: function () {

            self.titleElement.innerHTML             = message;
            self.emailInputContainer.style.display  = "none";
            self.sendInstructionsBtn.style.display  = "none";
            self.footerText.style.display           = "none";
            self.backToLoginBtn.style.opacity       = "0";
            self.backToLoginBtn.style.display       = "block";

            TweenLite.to( self.scrumbsLogo, 0.25, {  opacity: 1, ease: Power1.easeOut } );
            TweenLite.to( self.titleElement, 0.3, { delay: 0.1, opacity: 1, ease: Power1.easeOut } );
            TweenLite.to( self.backToLoginBtn, 0.35, { delay: 0.2, opacity: 1, ease: Power1.easeOut } );

        }});

    }



    private resetComponent(): void {

        this.exitLoadingState();

        this.scrumbsLogo.style.opacity              = "1";
        this.titleElement.innerHTML                 = Language.getTranslation( StringPointers.FORGOT_PW_TITLE );
        this.titleElement.style.opacity             = "1";
        this.sendInstructionsBtn.style.display      = "block";
        this.sendInstructionsBtn.style.opacity      = "1";
        this.backToLoginBtn.style.display           = "none";
        this.emailInputContainer.style.display      = "block";
        this.emailInputContainer.style.opacity      = "1";
        this.errorText.style.opacity                = "0";
        this.footerText.style.display               = "block";
        this.footerText.style.opacity               = "1";

        this.emailInput.classList.remove( "invalid" );
    }


}