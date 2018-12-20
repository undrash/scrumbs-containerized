


import {SystemConstants} from "../core/SystemConstants";
import {ViewComponent} from "../core/ViewComponent";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {View} from "../core/View";
import {Blocker} from "./Blocker";

import TweenLite = gsap.TweenLite;
import Power1 = gsap.Power1;
import Back = gsap.Back;

//CSS
import "../_style/style-sheets/blockers.scss";





export class Blockers extends ViewComponent {
    private readonly contentContainer: HTMLElement;

    public unsolvedBlockersContainer: HTMLElement;
    public solvedBlockersContainer: HTMLElement;
    public toggleSolvedBlockersVisibility: HTMLButtonElement;

    public isSolvedBlockerVisible: boolean;

    private createBlockerInput: HTMLInputElement;
    private isBlockerCreationInProgress: boolean;



    constructor(view: View, container: HTMLElement) {
        super( view, container );

        console.info( "Blockers view component initiated!" );

        this.contentContainer                           = document.getElementById( SystemConstants.MAIN_CONTAINER );

        this.unsolvedBlockersContainer                  = document.createElement( "div" );
        this.unsolvedBlockersContainer.id               = "unsolved-blockers-container";
        this.unsolvedBlockersContainer.className        = "list-clear";

        this.solvedBlockersContainer                    = document.createElement( "div" );
        this.solvedBlockersContainer.id                 = "solved-blockers-container";
        this.solvedBlockersContainer.className          = "list-clear solved-blockers-container";

        this.isSolvedBlockerVisible = false;

        this.toggleSolvedBlockersVisibility             = document.createElement( "button" );
        this.toggleSolvedBlockersVisibility.innerText   = "Show solved blockers";
        this.toggleSolvedBlockersVisibility.className   = "toggle-solved-blockers-visibility-btn";


        this.container.appendChild( this.unsolvedBlockersContainer );
        this.container.appendChild( this.toggleSolvedBlockersVisibility );
        this.container.appendChild( this.solvedBlockersContainer );


        this.connection.getBlockers( this.populate.bind( this ), (message: string) => console.log( message ) );


        this.createBlockerInput = document.createElement( "input" );
        this.createBlockerInput.setAttribute( "style", "border: 0; padding-left: 0; font-weight: bold;" );


        this.solvedBlockersVisibilityBtnClickHandler    = this.solvedBlockersVisibilityBtnClickHandler.bind( this );
        this.createBlockerKeyPressHandler               = this.createBlockerKeyPressHandler.bind( this );
        this.createBlockerBlurHandler                   = this.createBlockerBlurHandler.bind( this );
        this.documentKeyPressHandler                    = this.documentKeyPressHandler.bind( this );

    }



    private registerEventListeners(): void {

        this.toggleSolvedBlockersVisibility.addEventListener( "click", this.solvedBlockersVisibilityBtnClickHandler );
        this.createBlockerInput.addEventListener( "keypress", this.createBlockerKeyPressHandler );
        this.createBlockerInput.addEventListener( "blur", this.createBlockerBlurHandler );
        document.addEventListener( "keypress", this.documentKeyPressHandler );
    }



    private unregisterEventListeners(): void {
        this.toggleSolvedBlockersVisibility.removeEventListener( "click", this.solvedBlockersVisibilityBtnClickHandler );
        this.createBlockerInput.removeEventListener( "keypress", this.createBlockerKeyPressHandler );
        this.createBlockerInput.removeEventListener( "blur", this.createBlockerBlurHandler );
        document.removeEventListener( "keypress", this.documentKeyPressHandler );

    }



    private solvedBlockersVisibilityBtnClickHandler(e: any): void {

        if ( this.isSolvedBlockerVisible ) {

            this.toggleSolvedBlockersVisibility.innerText = "Show solved blockers";
            TweenLite.to( this.solvedBlockersContainer, 0.3, { opacity: 0, ease: Power1.easeOut } );
            this.isSolvedBlockerVisible = false;

        } else {

            this.toggleSolvedBlockersVisibility.innerText = "Hide solved blockers";
            TweenLite.to( this.solvedBlockersContainer, 0.3, { opacity: 1, ease: Power1.easeOut } );
            this.isSolvedBlockerVisible = true;

        }
    }



    private documentKeyPressHandler(e: any) {

        if ( e.ctrlKey && e.keyCode  === 14 ) { // N

            this.initializeBlockerInput();
            e.preventDefault();
        }
    }



    private createBlockerKeyPressHandler(e: any) {
        const key = e.which || e.keyCode;

        console.log( "key: " + key );

        if ( key === 13 || ( e as any ).ctrlKey && ( e as any ).keyCode  === 14 ) {

            this.createBlocker();
        }
    }



    private createBlockerBlurHandler(e: any) {
        this.createBlocker();
    }



    public enterScene(): void {

        this.registerEventListeners();

        TweenLite.to( this.unsolvedBlockersContainer, 0.2, { opacity: 1, ease: Power1.easeOut } );

        this.toggleSolvedBlockersVisibilityButton();

    }



    public exitScene(exitType: string): void {
        super.exitScene( exitType );
        this.unregisterEventListeners();


        switch ( exitType ) {

            case ViewExitTypes.SWITCH :

                this.view.componentExited( this.name );

                break;

            case ViewExitTypes.DEFAULT :

                TweenLite.to( this.container, 0.15, { opacity: 0, ease: Power1.easeOut } );

                TweenLite.to( this.contentContainer, 0.4, { css:{ top: "-105%" }, onComplete: () => {

                    this.view.componentExited( this.name );

                },  ease: Back.easeOut.config( 0.25 )  } );

                break;

            default :

                console.warn( "Invalid exit type provided in blockers view component." );

                break;


        }

    }



    public populate(data: any): void {

        let solved = data.solved;
        let unsolved = data.unsolved;


        for ( let i = 0; i < unsolved.length; i++ ) {
            new Blocker( this, unsolved[i], this.unsolvedBlockersContainer, false );
        }


        for ( let i = 0; i < solved.length; i++ ) {
            new Blocker( this, solved[i], this.solvedBlockersContainer, true );
        }


        this.enterScene();

    }



    public initializeBlockerInput(): void {

        this.container.insertBefore( this.createBlockerInput, this.container.firstChild );

        this.createBlockerInput.focus();

        this.isBlockerCreationInProgress = true;
    }



    private createBlocker(): void {

        if ( ! this.isBlockerCreationInProgress ) return;

        this.isBlockerCreationInProgress = false;

        const content = this.createBlockerInput.value;
        this.createBlockerInput.value = "";

        this.createBlockerInput.parentNode.removeChild( this.createBlockerInput );

        if ( ! content ) return;

        const self = this;

        this.connection.createBlocker( content, function (blocker: any) {
            new Blocker( self, blocker, self.unsolvedBlockersContainer, false );
        }, function (message: string) {
            console.warn( message );
        } );
    }



    public toggleSolvedBlockersVisibilityButton(): void {

        if ( this.solvedBlockersContainer.hasChildNodes() ) {
            TweenLite.to( this.toggleSolvedBlockersVisibility, 0.15, { opacity: 1, delay: 0.2, ease: Power1.easeOut } );
        } else {
            TweenLite.to( this.toggleSolvedBlockersVisibility, 0.15, { opacity: 0, delay: 0.25, ease: Power1.easeOut } );
        }

    }


}