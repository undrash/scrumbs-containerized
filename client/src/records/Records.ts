

import {RecordNotifications} from "./RecordNotifications";
import {SystemConstants} from "../core/SystemConstants";
import {ViewComponent} from "../core/ViewComponent";
import {ViewExitTypes} from "../core/ViewExitTypes";
import {View} from "../core/View";
import {Record} from "./Record";

import TweenLite = gsap.TweenLite;
import Power1 = gsap.Power1;
import Back = gsap.Back;

// CSS
import "../_style/style-sheets/records.scss";

// HTML template
const optionsTemplate = require( "../_view-templates/record-options.html" );





export class Records extends ViewComponent {
    private readonly contentContainer: HTMLElement;

    private lastRecord: Record;
    private records: Record[];
    private activeRecord: Record;
    private activeRecordIndex: number;

    private readonly colors: any[];

    private resizeTimer: any;

    private recordOptions: HTMLElement;
    private editRecord: HTMLElement;
    private deleteRecord: HTMLElement;

    private optionsActiveRecord: Record;

    private createRecordInput: HTMLInputElement;
    private isRecordCreationInProgress: boolean;


    constructor(view: View, container: HTMLElement) {
        super( view, container );

        console.info( "Records view component initiated!" );

        this.records = [];
        this.activeRecordIndex = -1;

        this.colors = this.generateRecordsPrimaryColors();

        this.contentContainer = document.getElementById( SystemConstants.MAIN_CONTAINER );


        this.keyPressHandler                = this.keyPressHandler.bind( this );
        this.keyUpHandler                   = this.keyUpHandler.bind( this );
        this.keyDownHandler                 = this.keyDownHandler.bind( this );
        this.resizeHandler                  = this.resizeHandler.bind( this );
        this.scrollHandler                  = this.scrollHandler.bind( this );
        this.editRecordHandler              = this.editRecordHandler.bind( this );
        this.deleteRecordHandler            = this.deleteRecordHandler.bind( this );
        this.createRecordKeyPressHandler    = this.createRecordKeyPressHandler.bind( this );
        this.createRecordBlurHandler        = this.createRecordBlurHandler.bind( this );


        this.createRecordInput = document.createElement( "input" );
        this.createRecordInput.setAttribute( "style", "border: 0; padding-left: 0; font-weight: bold;" );

        this.isRecordCreationInProgress = false;


        this.recordOptions              = document.createElement( "div" );
        this.recordOptions.className    = "record-options";
        this.recordOptions.style.left   = this.contentContainer.offsetWidth / 2 + "px";
        this.recordOptions.innerHTML    = optionsTemplate;

        document.body.appendChild( this.recordOptions );

        this.editRecord     = document.getElementById( "edit-record-btn" );
        this.deleteRecord   = document.getElementById( "delete-record-btn" );

        this.enterScene();
    }



    private registerEventListeners(): void {

        document.addEventListener( "keypress", this.keyPressHandler, true );
        document.addEventListener( "keyup", this.keyUpHandler, true );
        document.addEventListener( "keydown", this.keyDownHandler, true );
        window.addEventListener( "resize", this.resizeHandler, true );
        this.container.addEventListener( "scroll", this.scrollHandler, true );
        this.editRecord.addEventListener( "click", this.editRecordHandler, true );
        this.deleteRecord.addEventListener( "click", this.deleteRecordHandler, true );
        this.createRecordInput.addEventListener( "keypress", this.createRecordKeyPressHandler, true );
        this.createRecordInput.addEventListener( "blur", this.createRecordBlurHandler, true );

    }



    private unregisterEventListeners(): void {

        document.removeEventListener( "keypress", this.keyPressHandler, true );
        document.removeEventListener( "keyup", this.keyUpHandler, true );
        document.removeEventListener( "keydown", this.keyDownHandler, true );
        window.removeEventListener( "resize", this.resizeHandler, true );
        this.container.removeEventListener( "scroll", this.scrollHandler, true );
        this.editRecord.removeEventListener( "click", this.editRecordHandler, true );
        this.deleteRecord.removeEventListener( "click", this.deleteRecordHandler, true );
        this.createRecordInput.removeEventListener( "keypress", this.createRecordKeyPressHandler, true );
        this.createRecordInput.removeEventListener( "blur", this.createRecordBlurHandler, true );

    }



    private keyPressHandler(e: any): void {
        console.log( (e as any).ctrlKey  );
        console.log( (e as any).keyCode  );



        if ( e.ctrlKey && e.keyCode  === 14 ) { // N

            this.initializeRecordInput();
            this.sendSignal( RecordNotifications.RECORD_ADDED );
            e.preventDefault();
        }

        if ( e.ctrlKey && e.keyCode  === 15 ) { // O

            if ( this.container.firstChild && this.container.firstChild.nodeName === "INPUT" ) {
                this.container.removeChild( this.container.firstChild );
            }


            if ( this.activeRecord ) this.activeRecord.toggleRecord();

            e.preventDefault();
        }

    }



    private keyUpHandler(e: any): void {
        if ( e.ctrlKey && e.keyCode === 9 ) {

            this.hideRecordOptions();

            if ( ! e.shiftKey ) {

                this.setNextActiveRecord();

            } else {

                this.setNextActiveRecord( true );
            }


            e.preventDefault();
        }
    }



    private keyDownHandler(e: any): void {

        if ( e.keyCode == 27 ) { // ESC

            if ( this.activeRecord ) {
                this.activeRecord.passivateRecord();
                this.activeRecordIndex = -1;
            }


            this.isRecordCreationInProgress = false;

            if ( this.container.firstChild && this.container.firstChild.nodeName === "INPUT" ) {
                this.container.removeChild( this.container.firstChild );
            }


            e.preventDefault();
        }
    }



    private resizeHandler(e: any): void {

        const now: any = new Date();

        const delay: number = now - this.resizeTimer;

        if ( delay < 50 )  return;

        this.resizeTimer = new Date();

        this.adjustViewHeight();
    }



    private scrollHandler(e: any): void {

        if ( e.target.className !== "log-wrapper" ) this.hideRecordOptions();

    }



    private editRecordHandler(e: any): void {

        console.info( "Edit record btn pressed" );

        this.optionsActiveRecord.displayEditRecordInput();
    }



    private deleteRecordHandler(e: any): void {

        this.sendSignal( RecordNotifications.DELETE_RECORD, { recordName: this.activeRecord.name } );

    }



    public enterScene(): void {

        this.registerEventListeners();


        this.container.setAttribute( "style",
            "display: block; padding: 20px; position: absolute; top: 0px; bottom: 0px; left: 0px; right: -20px; overflow: auto;" );

        this.contentContainer.style.overflow = "hidden";

        this.adjustViewHeight();

        this.populate();
    }



    public exitScene(exitType: string): void {

        super.exitScene( exitType );
        this.unregisterEventListeners();

        this.hideRecordOptions();

        switch ( exitType ) {

            case ViewExitTypes.SWITCH :

                console.log( "records container right: " + this.container.style.right );

                //TODO: Calculate speed based on the number of records?

                /** If there are no records, exit right away */
                if ( ! this.records.length ) {
                    this.view.componentExited( this.name );
                    return;
                }

                this.container.style.overflow = "hidden";

                const start = new Date().getTime();

                let delay = 0;



                for ( let i = this.records.length - 1; i >= 0; i-- ) {

                    delay += 0.02;

                    TweenLite.to( this.records[i].container, 0.2, { delay: delay, "margin-top": "15%", ease: Power1.easeOut } );
                    TweenLite.to( this.records[i].container, 0.15, { delay: delay, opacity: 0.1, ease: Power1.easeOut } );

                    if ( i === 0 ) {
                        setTimeout( () => {
                            console.log( "Record exit finished in " + ( new Date().getTime() - start ) + " ms." );


                            this.recordOptions.parentNode.removeChild( this.recordOptions );
                            this.view.componentExited( this.name );
                        }, ( 150 + delay * 1000 ) );
                    }


                }

                break;

            case ViewExitTypes.DEFAULT :

                this.records = [];

                TweenLite.to( this.container, 0.15, { opacity: 0, ease: Power1.easeOut } );

                TweenLite.to( this.contentContainer, 0.4, { css:{ top: "-105%" }, onComplete: () => {

                    this.recordOptions.parentNode.removeChild( this.recordOptions );
                    this.view.componentExited( this.name );

                },  ease: Back.easeOut.config( 0.25 )  } );

                break;

            default:
                console.warn( "Invalid exit type provided in records view component." );
        }


    }



    public populate(): void {


        this.connection.getRecords(
            (response: any) => {

                const { records } = response;

                for ( let i = 0; i < records.length; i++ ) {

                    this.lastRecord = new Record( this, records[i], this.container, this.colors[ i % this.colors.length ], 0 );

                    this.records.unshift( this.lastRecord )
                }

            },
            (message: string) => {
                console.error( message );
            }
        );

    }



    public initializeRecordInput(): void {

        if ( this.activeRecord ) {
            this.activeRecord.passivateRecord();
            this.activeRecordIndex = -1;
        }

        this.container.insertBefore( this.createRecordInput, this.container.firstChild );

        this.createRecordInput.focus();

        this.isRecordCreationInProgress = true;

    }



    private createRecordKeyPressHandler(e: any) {

            const key = e.which || e.keyCode;

            console.log( "key: " + key );

            if ( key === 13 || (e as any).ctrlKey && (e as any).keyCode  === 14 ) {

                this.createRecord();
            }
    }



    private createRecordBlurHandler(e: any) {

        this.createRecord();
    }



    private createRecord(): void {

        if ( ! this.isRecordCreationInProgress ) return;

        this.isRecordCreationInProgress = false;


        const recordName = this.createRecordInput.value;
        this.createRecordInput.value = "";

        if ( ! recordName ) {
            this.createRecordInput.parentNode.removeChild( this.createRecordInput );
        } else {

            this.createRecordInput.parentNode.removeChild( this.createRecordInput );

            this.connection.createRecord(
                recordName,
                (response: any) => {

                    const { record } = response;

                    this.lastRecord =  new Record( this, { record: record, logs: [] }, this.container, this.colors[ Math.floor( Math.random() * ( this.colors.length - 1 ) ) ] );
                    this.records.unshift( this.lastRecord );
                    this.activeRecordIndex = -1;
                    this.setNextActiveRecord();

                },
                (message: string) => {
                    console.error( message );
                }
            );

        }
    }



    private generateRecordsPrimaryColors(): any[] {

        let colorsArray = [
            {
                main: "primary-highlight",
                line: "active-line-color-01"
            },
            {
                main: "secondary-highlight",
                line: "active-line-color-02"
            },
            {
                main: "tertiary-highlight",
                line: "active-line-color-03"
            },
            {
                main: "quaternary-highlight",
                line: "active-line-color-04"
            },
            {
                main: "quinary-highlight",
                line: "active-line-color-05"
            },
            {
                main: "senary-highlight",
                line: "active-line-color-06"
            },
            {
                main: "septenary-highlight",
                line: "active-line-color-07"
            },
            {
                main: "octonary-highlight",
                line: "active-line-color-08"
            },
            {
                main: "nonary-highlight",
                line: "active-line-color-09"
            },
            {
                main: "denary-highlight",
                line: "active-line-color-10"
            }
        ];

        for ( let i = colorsArray.length - 1; i > 0; i-- ) {

            const j = Math.floor( Math.random() * ( i + 1 ) );

            [ colorsArray[i], colorsArray[j] ] = [ colorsArray[j], colorsArray[i] ];

        }

        return colorsArray;
    }



    private setNextActiveRecord(reverse?: boolean): void {

        if ( ! this.records.length ) return;
        if ( this.activeRecordIndex >= this.records.length - 1 && ! reverse ) this.activeRecordIndex = -1;
        if ( this.activeRecordIndex <= 0 && reverse ) this.activeRecordIndex = this.records.length;

        if ( ! reverse ) {
            this.activeRecordIndex++;
        } else {


            if ( this.activeRecordIndex < 1 ) {
                this.activeRecordIndex = 0;
            } else {
                this.activeRecordIndex--;
            }
        }

        if ( this.activeRecord ) this.activeRecord.passivateRecord();

        this.activeRecord = this.records[ this.activeRecordIndex ];

        this.activeRecord.activateRecord();

    }



    public setActiveRecord(record: Record): void {

        if ( this.activeRecord ) this.activeRecord.passivateRecord();

        this.activeRecord = record;
        this.activeRecordIndex = this.records.map( (r) => { return r.id } ).indexOf( record.id );
    }



    public displayOptionsForRecord(distanceTop: number, record: Record) {

        if ( this.optionsActiveRecord && this.optionsActiveRecord.id === record.id ) return;

        const self = this;
        const offset = 10;

        const contentContainerHalf = this.contentContainer.offsetWidth / 2;

        TweenLite.to( this.recordOptions, 0.3, { left: contentContainerHalf + ( contentContainerHalf / 2) } );

        setTimeout( () => {
            self.recordOptions.style.top = ( distanceTop + offset ) + "px";
        }, 300 );


        const moveTo = window.innerWidth / 2 + ( this.contentContainer.offsetWidth / 2 - this.recordOptions.offsetWidth / 2 ) + offset;

        TweenLite.to( this.recordOptions, 0.25, { delay: 0.4, left: moveTo } );

        this.optionsActiveRecord = record;

        console.log( "Options active for record: " + this.optionsActiveRecord.name );

    }



    public hideRecordOptions(): void {

        TweenLite.to( this.recordOptions, 0.5, { left: this.contentContainer.offsetWidth / 2 } );

    }



    public adjustViewHeight(): void {

        console.info( "adjust view height executed" );

        this.container.style.maxHeight = ( window.innerHeight - this.contentContainer.offsetTop ) + "px";

        this.adjustForHiddenScrollbar();

    }



    private adjustForHiddenScrollbar(): void {
        if ( this.isRecordsContainerScrollable() ) {
            this.container.style.right = "-20px";
        } else {
            this.container.style.right = "0";
        }
    }



    private isRecordsContainerScrollable(): boolean {
        return this.container.scrollHeight > this.container.clientHeight;
    }



    public deleteActiveRecord(): void {

        this.hideRecordOptions();
        this.activeRecord.passivateRecord();
        this.records.splice( this.activeRecordIndex, 1 );

        this.activeRecord.container.parentNode.removeChild( this.activeRecord.container );

        this.connection.deleteRecord(
            this.activeRecord.id,
            (response: any) => console.info( response ) ,
            (message: string) => console.warn( message ) );


        this.activeRecord = null;

    }

}