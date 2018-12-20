

import {ViewComponent} from "../core/ViewComponent";
import {PromptView} from "./PromptView";
import {View} from "../core/View";

import TweenLite = gsap.TweenLite;
import Power0 = gsap.Power0;
import Back = gsap.Back;

// CSS
import "../_style/style-sheets/dialog.scss";

//HTML template
const template = require("../_view-templates/dialog.html");





export class Dialog extends ViewComponent {

    private title: HTMLParagraphElement;
    private message: HTMLParagraphElement;
    private submitButton: HTMLButtonElement;
    private cancelButton: HTMLButtonElement;
    private closeButton: HTMLSpanElement;
    private confirmSignal: string;


    constructor(view: View, container: HTMLElement, confirmSignal: string, title: string, message?: string, submitBtnText?: string, cancelBtnText?: string) {
        super( view, container );

        console.info( "Dialog view component initialized." );

        this.container.innerHTML = template;

        this.confirmSignal  = confirmSignal;

        this.title          = document.getElementById( "dialog-title" ) as HTMLParagraphElement;
        this.message        = document.getElementById( "dialog-message" ) as HTMLParagraphElement;
        this.submitButton   = document.getElementById( "dialog-submit-button" ) as HTMLButtonElement;
        this.cancelButton   = document.getElementById( "dialog-cancel-button" ) as HTMLButtonElement;
        this.closeButton    = document.getElementById( "close-dialog" ) as HTMLSpanElement;

        if ( title.length > 100 ) title = title.substr( 0, 99 ) + " ...?";

        this.title.innerHTML = title;

        if ( message.length > 100 ) throw new Error( "Dialog message length cannot exceed 100 characters!" );
        if ( message ) this.message.innerHTML = message;

        submitBtnText ? this.submitButton.innerText = submitBtnText : this.submitButton.innerText = "OK";
        cancelBtnText ? this.cancelButton.innerHTML = cancelBtnText : this.cancelButton.innerText = "Cancel";


        this.confirmBtnClickHandler = this.confirmBtnClickHandler.bind( this );
        this.exitScene              = this.exitScene.bind( this );


        this.enterScene();

    }



    private registerEventListeners(): void {
        this.closeButton.addEventListener( "click", this.exitScene );
        this.cancelButton.addEventListener( "click", this.exitScene );
        this.submitButton.addEventListener( "click", this.confirmBtnClickHandler );
    }



    private unregisterEventListeners(): void {
        this.closeButton.removeEventListener( "click", this.exitScene );
        this.cancelButton.removeEventListener( "click", this.exitScene );
        this.submitButton.removeEventListener( "click", this.confirmBtnClickHandler );

    }



    private confirmBtnClickHandler(e: any): void {
        this.sendSignal( this.confirmSignal );
        this.exitScene();
    }



    public enterScene(): void {
        this.registerEventListeners();

        TweenLite.to( this.container, 0.3, { css: { "margin-top": "15%", opacity: 1 }, ease: Back.easeOut.config( 0.7 ) } );
    }



    public exitScene(): void {
        this.unregisterEventListeners();

        TweenLite.to( ( this.view as PromptView ).background, 0.1, { opacity: 0, delay: 0.05 } );

        TweenLite.to( this.container, 0.15, { css: { "margin-top": "30%", opacity: 0,  }, onComplete: () => {

            this.view.componentExited( this.name );
        }, ease: Power0.easeOut } );


    }
}