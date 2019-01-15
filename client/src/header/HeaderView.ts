

import {RecordNotifications} from "../records/RecordNotifications";
import {HeaderNotifications} from "./HeaderNotifications";
import {SystemConstants} from "../core/SystemConstants";
import {INotification} from "../core/INotification";
import {View} from "../core/View";

import TweenLite = gsap.TweenLite;
import Power0 = gsap.Power0;
import Back = gsap.Back;

//CSS
import "../_style/style-sheets/header.scss";
import {AuthenticationNotifications} from "../authentication/AuthenticationNotifications";

//HTML template
const template = require("../_view-templates/header.html");





export class HeaderView extends View {

    private screenWidth: number;
    private screenHeight: number;
    private headingOffset: string;

    private readonly headingContainer: HTMLElement;
    private profileImage: HTMLElement;
    private profileMenuToggle: HTMLElement;
    private readonly addRecordBtn: HTMLButtonElement;
    private scrumBtn: HTMLButtonElement;
    private blockersBtn: HTMLButtonElement;
    private headerButtonsContainer: HTMLElement;
    private dropdown: HTMLElement;
    private about: HTMLElement;
    private settings: HTMLElement;
    private signOut: HTMLElement;


    constructor() {
        super( "HeaderView" );

        console.info( "Header view initiated!" );

        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.headingOffset = this.screenWidth > 480 ? "-50px" : "-130px";

        this.container = document.getElementById( SystemConstants.HEADING_CONTAINER );

        this.headingContainer = document.getElementById( "heading-container" );
        this.headingContainer.style.top = this.headingOffset;

        this.container.innerHTML = template;

        this.profileImage               = document.getElementById( "profile-image" );
        this.profileMenuToggle          = document.getElementById( "profile-dropdown-icon" );
        this.addRecordBtn               = document.getElementById( "header-button-add-record" ) as HTMLButtonElement;
        this.headerButtonsContainer     = document.getElementById( "header-buttons-container");
        this.scrumBtn                   = document.getElementById( "records-button" ) as HTMLButtonElement;
        this.blockersBtn                = document.getElementById( "blockers-button" ) as HTMLButtonElement;
        this.dropdown                   = document.getElementById( "header-dropdown" );
        this.about                      = document.getElementById( "header-dropdown-about" );
        this.settings                   = document.getElementById( "header-dropdown-settings" );
        this.signOut                    = document.getElementById( "header-dropdown-sign-out" );

        this.profileMenuToggleClickHandler      = this.profileMenuToggleClickHandler.bind( this );
        this.setActiveMenuBtnClickHandler       = this.setActiveMenuBtnClickHandler.bind( this );
        this.addRecordBtnMouseOverHandler       = this.addRecordBtnMouseOverHandler.bind( this );
        this.addRecordBtnMouseOutHandler        = this.addRecordBtnMouseOutHandler.bind( this );
        this.documentClickHandler               = this.documentClickHandler.bind( this );
        this.blockersBtnHandler                 = this.blockersBtnHandler.bind( this );
        this.addRecordHandler                   = this.addRecordHandler.bind( this );
        this.scrumBtnHandler                    = this.scrumBtnHandler.bind( this );
        this.keyPressHandler                    = this.keyPressHandler.bind( this );
        this.signOutHandler                     = this.signOutHandler.bind( this );
    }




    private registerEventListeners(): void {

        this.addRecordBtn.addEventListener( "click", this.addRecordHandler );

        this.addRecordBtn.addEventListener( "mouseover", this.addRecordBtnMouseOverHandler );

        this.addRecordBtn.addEventListener( "mouseout", this.addRecordBtnMouseOutHandler );

        this.profileMenuToggle.addEventListener( "click", this.profileMenuToggleClickHandler );

        this.scrumBtn.addEventListener( "click", this.setActiveMenuBtnClickHandler );

        this.scrumBtn.addEventListener( "click", this.scrumBtnHandler );

        this.blockersBtn.addEventListener( "click", this.setActiveMenuBtnClickHandler );

        this.blockersBtn.addEventListener( "click", this.blockersBtnHandler );

        this.signOut.addEventListener( "click", this.signOutHandler );

        document.addEventListener( "keypress", this.keyPressHandler );

        document.addEventListener( "click", this.documentClickHandler );

    }



    private unregisterEventListeners(): void {

        this.addRecordBtn.removeEventListener( "click", this.addRecordHandler );

        this.addRecordBtn.removeEventListener( "mouseover", this.addRecordBtnMouseOverHandler );

        this.addRecordBtn.removeEventListener( "mouseout", this.addRecordBtnMouseOutHandler );

        this.profileMenuToggle.removeEventListener( "click", this.profileMenuToggleClickHandler );

        this.blockersBtn.removeEventListener( "click", this.setActiveMenuBtnClickHandler );

        this.scrumBtn.removeEventListener( "click", this.scrumBtnHandler );

        this.blockersBtn.removeEventListener( "click", this.setActiveMenuBtnClickHandler );

        this.blockersBtn.removeEventListener( "click", this.blockersBtnHandler );

        this.signOut.removeEventListener( "click", this.signOutHandler );

        document.removeEventListener( "keypress", this.keyPressHandler );

        document.removeEventListener( "click", this.documentClickHandler );
    }



    public addRecordBtnAnimation(): void {
        TweenLite.to( this.addRecordBtn, 0.15, { scale: 0.5, ease: Power0.easeOut } );
        TweenLite.to( this.addRecordBtn, 0.10, { delay: 0.15, scale: 1, ease: Back.easeOut.config( 0.25 ) } );
    }



    public listNotificationInterests(): string[] {
        let notifications = super.listNotificationInterests();


        notifications.push( HeaderNotifications.SIGN_OUT );

        notifications.push( RecordNotifications.RECORD_ADDED );

        notifications.push( AuthenticationNotifications.USER_AUTHENTICATED );

        notifications.push( AuthenticationNotifications.USER_SIGNED_UP );



        return notifications;
    }



    private addRecordHandler(): void {


        this.addRecordBtnAnimation();

        this.sendNotification( HeaderNotifications.ADD_ITEM );
    }



    private addRecordBtnMouseOverHandler(): void {
        TweenLite.to( this.addRecordBtn, 0.15, { scale: 1.05, ease: Power0.easeOut } );
    }



    private addRecordBtnMouseOutHandler(): void {
        TweenLite.to( this.addRecordBtn, 0.2, { scale: 1, ease: Power0.easeOut } );
    }



    private profileMenuToggleClickHandler(): void {
        this.dropdown.style.display = this.dropdown.style.display === "none" ? "block" : "none";
    }



    private scrumBtnHandler(): void {
        this.sendNotification( HeaderNotifications.SCRUM_BTN_PRESSED );
    }



    private blockersBtnHandler(): void {
        this.sendNotification( HeaderNotifications.BLOCKERS_BTN_PRESSED );
    }



    private keyPressHandler(e: any): void {
        if ( e.ctrlKey && e.keyCode  === 17 ) {
            this.sendNotification( HeaderNotifications.SIGN_OUT );
        }
    }



    private setActiveMenuBtnClickHandler(e: any): void {
        this.setActiveMenuBtn( e.target )
    }



    private signOutHandler(e: any): void {
        this.dropdown.style.display = "none";

        this.sendNotification( HeaderNotifications.SIGN_OUT );
    }



    private documentClickHandler(e: any): void {
        if ( e.target !== this.dropdown && e.target !== this.profileMenuToggle ) {

            if ( this.dropdown.style.display === "block" ) this.dropdown.style.display = "none";

        }
    }



    private setActiveMenuBtn(btn: HTMLElement) {
        const buttons = this.headerButtonsContainer.getElementsByTagName("button" );

        for ( let i = 0; i < buttons.length; i++ ) {
            buttons[i].classList.remove( "active" );
        }

        btn.classList.add( "active" );
    }



    private generateAcronymFromName(firstName: string, lastName: string): void {
        this.profileImage.innerHTML = firstName[ 0 ] + " " + lastName[ 0 ];
    }



    public enterScene(): void {
        this.registerEventListeners();

        TweenLite.to( this.headingContainer, 0.2, { css: { top: 0 }, ease: Back.easeOut.config( 0.2 ) } );
    }



    public exitScene(exitType: string): void {
        this.unregisterEventListeners();

        TweenLite.to( this.headingContainer, 0.2, {
            css: { top: this.headingOffset },
            onComplete: () => this.setActiveMenuBtn( this.scrumBtn ),
            ease: Back.easeOut.config( 0.2 ) } );
    }



    public handleNotification(notification: INotification): void {

        switch ( notification.name ) {

            case RecordNotifications.RECORD_ADDED :

                this.addRecordBtnAnimation();

                break;

            case AuthenticationNotifications.USER_AUTHENTICATED :

            case AuthenticationNotifications.USER_SIGNED_UP :

                const { firstName, lastName } = notification.data.userData;

                this.generateAcronymFromName( firstName, lastName );

                break;

            default :
                break;
        }

    }


}