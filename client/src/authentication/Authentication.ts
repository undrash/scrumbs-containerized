

import {AuthenticationNotifications} from "./AuthenticationNotifications";
import {ValidationHelper} from "../helpers/ValidationHelper";
import {SignUpModel} from "../connection/models/SignUpModel";
import {LoginModel} from "../connection/models/LoginModel";
import {StringPointers} from "../languages/StringPointers";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {ViewComponent} from "../core/ViewComponent";
import {HTMLHelper} from "../helpers/HTMLHelper";
import {Language} from "../languages/Language";
import {View} from "../core/View";


import TweenLite = gsap.TweenLite;
import Power1 = gsap.Power1;
import Power0 = gsap.Power0;
import Back = gsap.Back;


//CSS
import "../_style/style-sheets/authentication.scss";


//HTML template
const template = require("../_view-templates/authentication.html");





export class Authentication extends ViewComponent {

    private screenWidth: number;
    private screenHeight: number;
    private contentContainerOffset: string;

    private authenticationContainer: HTMLElement;
    private contentContainer: HTMLElement;
    private authLoginHeader: HTMLElement;
    private authSignUpHeader: HTMLElement;
    private authenticationBody: HTMLElement;
    private nameInputWrapper: HTMLElement;
    private firstNameInput: HTMLInputElement;
    private lastNameInput: HTMLInputElement;
    private emailInput: HTMLInputElement;
    private passwordInput: HTMLInputElement;
    private checkboxSection: HTMLElement;
    private rememberMeCheckbox: HTMLElement;
    private rememberMeInput: HTMLInputElement;
    private forgotPassword: HTMLElement;
    private authFooter: HTMLElement;
    private actionBtn: HTMLElement;
    private actionBtnContent: HTMLElement;
    private switchBtn: HTMLElement;
    private switchBtnContent: HTMLElement;
    private authStateLogin: boolean;

    private loadingState: boolean;



    constructor(view: View, container: HTMLElement) {
        super( view, container );

        console.info( "Authentication view component initiated!" );

        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.contentContainerOffset = this.screenWidth > 480 ? "75px" : "110px";

        this.authStateLogin = true;

        this.container.innerHTML = template;

        this.authenticationContainer    = document.getElementById( "authentication-container" );
        this.contentContainer           = document.getElementById( "content-container" );
        this.authLoginHeader            = document.getElementById( "authentication-header-login" );
        this.authSignUpHeader           = document.getElementById( "authentication-header-signup" );
        this.authenticationBody         = document.getElementById( "authentication-body" );
        this.nameInputWrapper           = document.getElementById( "input-name-wrapper" );
        this.firstNameInput             = document.getElementById( "authentication-first-name" ) as HTMLInputElement;
        this.lastNameInput              = document.getElementById( "authentication-last-name" ) as HTMLInputElement;
        this.emailInput                 = document.getElementById( "authentication-email" ) as HTMLInputElement;
        this.passwordInput              = document.getElementById( "authentication-password" ) as HTMLInputElement;
        this.checkboxSection            = document.getElementById( "checkbox-wrapper" );
        this.rememberMeCheckbox         = document.getElementById( "remember-me-checkbox" );
        this.rememberMeInput            = document.getElementById( "remember-me-input" ) as HTMLInputElement;
        this.forgotPassword             = document.getElementById( "authentication-forgot-password" );
        this.authFooter                 = document.getElementById( "authentication-footer" );
        this.actionBtn                  = document.getElementById( "authentication-button-action" );
        this.actionBtnContent           = document.getElementById( "action-span" );
        this.switchBtn                  = document.getElementById( "authentication-button-switch" );
        this.switchBtnContent           = document.getElementById( "switch-span" );

        this.translateComponent();

        this.authSignUpHeader.style.opacity = "0";
        this.nameInputWrapper.style.opacity = "0";


        this.container.style.display = "block";

        /** Bind "this" to handlers */
        this.actionBtnHandler           = this.actionBtnHandler.bind( this );
        this.switchBtnHandler           = this.switchBtnHandler.bind( this );
        this.firstNameInputHandler      = this.firstNameInputHandler.bind( this );
        this.lastNameInputHandler       = this.lastNameInputHandler.bind( this );
        this.emailInputHandler          = this.emailInputHandler.bind( this );
        this.passwordInputHandler       = this.passwordInputHandler.bind( this );
        this.submitFormHandler          = this.submitFormHandler.bind( this );
        this.mobileInputFocusHandler    = this.mobileInputFocusHandler.bind( this );
        this.mobileInputBlurHandler     = this.mobileInputBlurHandler.bind( this );
        this.forgotPasswordHandler      = this.forgotPasswordHandler.bind( this );
        this.rememberMeClickHandler     = this.rememberMeClickHandler.bind( this );


        this.enterScene();

    }



    private registerEventListeners(): void {

        this.actionBtn.addEventListener( "click", this.actionBtnHandler, true );

        this.switchBtn.addEventListener( "click", this.switchBtnHandler, true );

        this.firstNameInput.addEventListener( "click", this.firstNameInputHandler, true );

        this.lastNameInput.addEventListener( "click", this.lastNameInputHandler, true );

        this.emailInput.addEventListener( "click", this.emailInputHandler, true );

        this.passwordInput.addEventListener( "click", this.passwordInputHandler, true );

        this.forgotPassword.addEventListener( "click", this.forgotPasswordHandler );

        this.rememberMeCheckbox.addEventListener( "click", this.rememberMeClickHandler );

        document.addEventListener( "keypress", this.submitFormHandler, true );

    }



    private unregisterEventListeners(): void {

        console.log( "Trying to remove event listeners" );

        this.actionBtn.removeEventListener( "click", this.actionBtnHandler, true );

        this.switchBtn.removeEventListener( "click", this.switchBtnHandler, true );

        this.firstNameInput.removeEventListener( "click", this.firstNameInputHandler, true );

        this.lastNameInput.removeEventListener( "click", this.lastNameInputHandler, true );

        this.emailInput.removeEventListener( "click", this.emailInputHandler, true );

        this.passwordInput.removeEventListener( "click", this.passwordInputHandler, true );

        this.forgotPassword.removeEventListener( "click", this.forgotPasswordHandler );

        this.rememberMeCheckbox.removeEventListener( "click", this.rememberMeClickHandler );

        document.removeEventListener( "keypress", this.submitFormHandler, true );

    }



    private actionBtnHandler(): void {

        this.animateButtonClick();

        if ( this.loadingState ) return;

        if ( this.authStateLogin && this.validateForLogin() ) {

            this.setButtonsLoadingState();

            this.connection.login( new LoginModel(
                this.emailInput.value,
                this.passwordInput.value
            ), (data: any) => {

                this.sendSignal( AuthenticationNotifications.LOGIN_SUCCESS, data );
                this.removeButtonsLoadingState();

            }, (message: string) => {

                this.sendSignal( AuthenticationNotifications.LOGIN_FAILURE, message );
                this.removeButtonsLoadingState();

            });


        } else if ( ! this.authStateLogin && this.validateForSignUp() ) {

            this.setButtonsLoadingState();

            this.connection.signUp( new SignUpModel(
                this.firstNameInput.value,
                this.lastNameInput.value,
                this.emailInput.value,
                this.passwordInput.value
            ), (data: any) => {

                this.sendSignal( AuthenticationNotifications.SIGN_UP_SUCCESS, data );
                this.removeButtonsLoadingState();

            }, (message: string) => {

                this.sendSignal( AuthenticationNotifications.SIGN_UP_FAILURE, message );
                this.removeButtonsLoadingState();

            });

        } else {
            console.warn( "Invalid input configuration for action button." );
        }
    }



    private switchBtnHandler(): void {

        if ( this.loadingState ) return;

        if ( this.authStateLogin ) {
            this.switchToSignUpState();
        } else {
            this.switchToLoginState();
        }

    }



    private firstNameInputHandler(): void {
        TweenLite.to( this.firstNameInput, 0.3, { css:{ className: "-=invalid" }, ease: Power1.easeOut }  );
    }



    private lastNameInputHandler(): void {
        TweenLite.to( this.lastNameInput, 0.3, { css:{ className: "-=invalid" }, ease: Power1.easeOut } );
    }



    private emailInputHandler(): void {
        TweenLite.to( this.emailInput, 0.3, { css:{ className: "-=invalid" }, ease: Power1.easeOut } );
    }



    private passwordInputHandler(): void {
        TweenLite.to( this.passwordInput, 0.3, { css:{ className: "-=invalid" }, ease: Power1.easeOut } );
    }



    private submitFormHandler(e: any): void {
        const key = e.which || e.keyCode;

        if ( key === 13 ) this.actionBtnHandler();
    }



    private mobileInputFocusHandler(e: any): void {
        const corrector = 200;

        const elementDistance = HTMLHelper.getPosition( e.target );

        const inputDistanceTop = elementDistance.y - corrector;

        const windowHeight = document.body.scrollHeight;
        const halfScreen = windowHeight / 2;
        const elementHeight = e.target.offsetHeight;

        const distance = inputDistanceTop + elementHeight;

        console.log( "total distance: " + distance );
        console.log( "is over the top? : " + ( distance > halfScreen ) );

        if ( distance > halfScreen ) {
            TweenLite.to( this.contentContainer, 0.2, { top: "-=" + ( distance - halfScreen), ease: Power1.easeOut } );
        }
    }



    private mobileInputBlurHandler(e: any): void {
        TweenLite.to( this.contentContainer, 0.2, { top: "-105%", ease: Power1.easeOut } );
    }




    private forgotPasswordHandler(e: any): void {

        this.exitScene( ViewExitTypes.SWITCH );

    }



    private rememberMeClickHandler(e: any): void {
        this.rememberMeInput.checked = ! this.rememberMeInput.checked;
    }



    private translateComponent(): void {

        document.getElementById( "authentication-login-title" ).innerHTML                                   = Language.getTranslation( StringPointers.AUTH_TITLE_LOGIN );
        document.getElementById( "authentication-login-subtitle" ).innerHTML                                = Language.getTranslation( StringPointers.AUTH_SUBTITLE_LOGIN );

        document.getElementById( "authentication-signup-title" ).innerHTML                                  = Language.getTranslation( StringPointers.AUTH_TITLE_SIGN_UP );
        document.getElementById( "authentication-signup-subtitle" ).innerHTML                               = Language.getTranslation( StringPointers.AUTH_SUBTITLE_SIGN_UP );

        document.getElementById( "authentication-first-name-label" ).innerHTML                              = Language.getTranslation( StringPointers.AUTH_FIRST_NAME_LABEL );
        ( document.getElementById( "authentication-first-name" ) as HTMLInputElement ).placeholder          = Language.getTranslation( StringPointers.AUTH_FIRST_NAME_PLACEHOLDER );

        document.getElementById( "authentication-last-name-label" ).innerHTML                               = Language.getTranslation( StringPointers.AUTH_LAST_NAME_LABEL );
        ( document.getElementById( "authentication-last-name" ) as HTMLInputElement ).placeholder           = Language.getTranslation( StringPointers.AUTH_LAST_NAME_PLACEHOLDER );

        document.getElementById( "authentication-email-label" ).innerHTML                                   = Language.getTranslation( StringPointers.AUTH_EMAIL_LABEL );
        ( document.getElementById( "authentication-email" ) as HTMLInputElement ).placeholder               = Language.getTranslation( StringPointers.AUTH_EMAIL_PLACEHOLDER );

        document.getElementById( "authentication-password-label" ).innerHTML                                = Language.getTranslation( StringPointers.AUTH_PASSWORD_LABEL );
        ( document.getElementById( "authentication-password" ) as HTMLInputElement ).placeholder            = Language.getTranslation( StringPointers.AUTH_PASSWORD_PLACEHOLDER );

        document.getElementById( "authentication-remember-me-label" ).innerHTML                             = Language.getTranslation( StringPointers.AUTH_REMEMBER_ME );

        document.getElementById( "authentication-forgot-password" ).innerHTML                               = Language.getTranslation( StringPointers.AUTH_FORGOT_PASSWORD );

        document.getElementById( "action-span" ).innerHTML                                                  = Language.getTranslation( StringPointers.AUTH_LOGIN );

        document.getElementById( "switch-span" ).innerHTML                                                  = Language.getTranslation( StringPointers.AUTH_SIGN_UP );

    }



    public enterScene(enterType?:string): void {

        TweenLite.to( this.authenticationContainer, 0.4, { css: { opacity: 1, top: "calc(50% + 50px)" } } );


        if ( enterType !== ViewExitTypes.SWITCH ) {
            this.registerEventListeners();
            this.switchToLoginState();
            this.container.style.display = "block";

        }

    }



    public exitScene(exitType?:string): void {


        if ( exitType === ViewExitTypes.SWITCH ) {

            const self = this;


            TweenLite.to( this.authenticationContainer, 0.25, { opacity: 0 } );


            TweenLite.to( this.authenticationContainer, 0.5, { css: { top: "calc(50% + 60px)"}, onComplete: function () {
                self.sendSignal( AuthenticationNotifications.FORGOT_PASSWORD );
            }});

        } else {

            super.exitScene( exitType );
            this.unregisterEventListeners();

            const self = this;

            TweenLite.to( this.contentContainer, 0.4, { css:{ top: this.contentContainerOffset }, ease: Back.easeOut.config( 0.25 ), onComplete: function () {
                self.container.style.display = "none";
                self.view.componentExited( self.name );
            }});

        }


    }



    private switchToSignUpState(): void {

        this.authStateLogin = false;

        TweenLite.to( this.actionBtnContent, 0.15, { opacity: 0, onComplete: () => {
            this.actionBtnContent.innerText = Language.getTranslation( StringPointers.AUTH_SIGN_UP );
        }});


        TweenLite.to( this.actionBtnContent, 0.3, { opacity: 1, delay: 0.2 } );


        TweenLite.to( this.switchBtnContent, 0.15, { opacity: 0, onComplete: () => {
            this.switchBtnContent.innerText = Language.getTranslation( StringPointers.AUTH_LOGIN );
        }});


        TweenLite.to( this.switchBtnContent, 0.3, { opacity: 1, delay: 0.2 } );


        TweenLite.to( this.authenticationBody, 0.5, { y: 100 } );
        TweenLite.to( this.authFooter, 0.5, { y: 50 } );
        TweenLite.to( this.checkboxSection, 0.5, { opacity: 0 } );
        TweenLite.to( this.nameInputWrapper, 0.5, { opacity: 1 } );
        TweenLite.to( this.authLoginHeader, 0.15, { opacity: 0, y: -15 } );
        TweenLite.to( this.authSignUpHeader, 0.5, { opacity: 1, y: 0 } );

    }



    private switchToLoginState(): void {

        this.authStateLogin = true;

        TweenLite.to( this.actionBtnContent, 0.15, { opacity: 0, onComplete: () => {
            this.actionBtnContent.innerText = Language.getTranslation( StringPointers.AUTH_LOGIN );
        }});


        TweenLite.to( this.actionBtnContent, 0.3, { opacity: 1, delay: 0.2 } );


        TweenLite.to( this.switchBtnContent, 0.15, { opacity: 0, onComplete: () => {
            this.switchBtnContent.innerText = Language.getTranslation( StringPointers.AUTH_SIGN_UP );
        }});


        TweenLite.to( this.switchBtnContent, 0.3, { opacity: 1, delay: 0.2 } );


        TweenLite.to( this.authenticationBody, 0.5, { y: 0 } );
        TweenLite.to( this.authFooter, 0.5, { y: 0 } );
        TweenLite.to( this.checkboxSection, 0.5, { opacity: 1 } );
        TweenLite.to( this.nameInputWrapper, 0.3, { opacity: 0 } );
        TweenLite.to( this.authLoginHeader, 0.5, { opacity: 1, y: 0 } );
        TweenLite.to( this.authSignUpHeader, 0.15, { opacity: 0,  y: -15 } );

    }



    private validateForLogin(): boolean {

        const email: string = this.emailInput.value;
        const isEmailValid: boolean = ValidationHelper.validateEmail( email );
        const password: string = this.passwordInput.value;

        if ( ! isEmailValid ) TweenLite.to( this.emailInput, 0.3, { css:{ className: "+=invalid" }, ease: Power1.easeOut } );
        if ( ! password ) TweenLite.to( this.passwordInput, 0.3, { css:{ className: "+=invalid" }, ease: Power1.easeOut } );

        return isEmailValid && password !== "";
    }



    private validateForSignUp(): boolean {

        const firstName: string = this.firstNameInput.value;
        const lastName: string = this.lastNameInput.value;
        const email: string = this.emailInput.value;
        const isEmailValid: boolean = ValidationHelper.validateEmail( email );
        const password: string = this.passwordInput.value;

        if ( ! firstName ) TweenLite.to( this.firstNameInput, 0.3, { css:{ className: "+=invalid" }, ease: Power1.easeOut } );

        if ( ! lastName ) TweenLite.to( this.lastNameInput, 0.3, { css:{ className: "+=invalid" }, ease: Power1.easeOut } );

        if ( ! isEmailValid ) TweenLite.to( this.emailInput, 0.3, { css:{ className: "+=invalid" }, ease: Power1.easeOut } );

        if ( ! password ) TweenLite.to( this.passwordInput, 0.3, { css:{ className: "+=invalid" }, ease: Power1.easeOut } );

        return firstName !== "" && lastName !== "" && isEmailValid && password !== "";
    }



    private animateButtonClick(): void {
        TweenLite.to( this.actionBtn, 0.05, { scale: 0.98, ease: Power0.easeIn } );
        TweenLite.to( this.actionBtn, 0.1, { scale: 1, delay: 0.05, ease: Back.easeIn } );
    }



    private setButtonsLoadingState(): void {
        TweenLite.to( this.actionBtn, 0.5, { delay: 0.7, color: "transparent", ease: Power1.easeOut } );
        TweenLite.to( this.actionBtn, 0.9, { delay: 1, css:{ className: "+=primary-btn-loading" }, ease: Power1.easeOut } );
        TweenLite.to( this.actionBtn, 0, { delay: 2.5, css:{ className: "+=primary-btn-loading-animation" }, ease: Power1.easeOut } );
        TweenLite.to( this.switchBtn, 0.5, { delay: 0.7, css:{ className: "+=secondary-btn-loading" }, ease: Power1.easeOut } );
    }



    private removeButtonsLoadingState(): void {
        this.actionBtn.style.removeProperty( "color" );
        this.actionBtn.classList.remove( "primary-btn-loading" );
        this.actionBtn.classList.remove( "primary-btn-loading-animation" );
        this.switchBtn.classList.remove( "secondary-btn-loading" );
    }



    public setLoadingState(value: boolean): void {
        this.loadingState = value;
    }


}