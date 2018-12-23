

import {ConnectionProxy} from "../connection/ConnectionProxy";
import {HTMLHelper} from "../helpers/HTMLHelper";
import {Records} from "./Records";

import TweenLite = gsap.TweenLite;
import Power1 = gsap.Power1;
import {AddNoteModel} from "../connection/models/AddNoteModel";
import {EditRecordModel} from "../connection/models/EditRecordModel";




export class Record {

    private readonly parent: Records;

    private readonly contentContainer: HTMLElement;
    private mainContainer: HTMLElement;
    public container: HTMLDivElement;

    public name: string;
    public id: string;
    private created: string;
    private moderators: string[];
    private ownerId: string;

    private logs: any[];

    private recordHeader: HTMLElement;
    private recordName: HTMLParagraphElement;
    private recordArrowIcon: HTMLSpanElement;

    private recordBody: HTMLElement;
    private logWrapper: HTMLElement;
    private logScrollCover: HTMLElement;
    private recordFooter: HTMLElement;
    private noteInput: HTMLTextAreaElement;

    private recordOpen: boolean;

    private isActiveRecord: boolean;

    private colorData: any;
    private recordIndex: number;


    private editRecordInput: HTMLInputElement;
    private isEditModeActive: boolean;


    constructor(parent: Records, data: any, mainContainer: HTMLElement, colorData: any, recordIndex?: number) {

        this.parent = parent;

        this.name           = data.record.name;
        this.id             = data.record._id;
        this.created        = data.record.created;
        this.moderators     = data.record.moderators;
        this.ownerId        = data.record.owner;
        this.logs           = data.logs;


        this.colorData      = colorData;
        this.recordIndex    = recordIndex;


        this.recordOpen     = false;

        this.contentContainer               = document.getElementById( "content-container" );

        this.mainContainer                  = mainContainer;
        this.container                      = document.createElement(  "div" );

        this.container.id                   = "record_" + this.id;
        this.container.className            = "record-container";

        this.recordBody                     = document.createElement( "div" );
        this.recordBody.className           = "record-body";
        this.recordBody.style.opacity       = "0";
        this.recordBody.style.height        = "0px";

        this.logWrapper                     = document.createElement( "div" );
        this.logWrapper.id                  = this.id + "-wrapper";
        this.logWrapper.className           = "log-wrapper";
        this.logWrapper.style.opacity       = "0";

        this.logScrollCover                 = document.createElement( "div" );
        this.logScrollCover.className       = "log-scroll-cover";
        this.logScrollCover.id              = this.id + "scroll-cover";

        this.logWrapper.appendChild( this.logScrollCover );

        this.recordFooter                   = document.createElement( "div" );
        this.recordFooter.className         = "record-footer";

        this.noteInput                      = document.createElement( "textarea" );
        this.noteInput.className            = "note-input";
        this.noteInput.placeholder          = "Enter your notes";

        this.recordFooter.appendChild( this.noteInput );

        this.generateRecordHeader();

        this.generateRecordContent();

        if ( ! this.mainContainer.firstChild ) {
            this.mainContainer.appendChild( this.container );
        }


        if ( this.mainContainer.firstChild && this.mainContainer.firstChild.nodeName !== "INPUT" ) {
            this.mainContainer.insertBefore( this.container, this.mainContainer.firstChild );
        } else {
            this.mainContainer.insertBefore( this.container, this.mainContainer.children[1] );
        }


        this.editRecordInput                = document.createElement( "input" );
        this.editRecordInput.className      = "edit-record-input";
        this.editRecordInput.value          = this.name;


        this.editRecordKeydownHandler   = this.editRecordKeydownHandler.bind( this );
        this.editRecordBlurHandler      = this.editRecordBlurHandler.bind( this );
        this.recordBodyClickHandler     = this.recordBodyClickHandler.bind( this );


        this.registerEventListeners();

    }



    private registerEventListeners(): void {

        this.recordHeader.addEventListener( "click", (e: any) => {


            console.log( e.target.id );

            if ( e.target.classList.contains( this.editRecordInput.className ) ) return;

            this.toggleRecord();
        });

        this.noteInput.addEventListener( "keydown", (e) => {
            const key = e.which || e.keyCode;

            const self = this;

            if ( key === 13 ) {
                e.preventDefault();
                let p = new ConnectionProxy( "RecordProxy" );

                let content = this.noteInput.value;
                let isBlocker = false;

                if ( content.toLowerCase().substring( 0, 3 ) === "b**" ) {
                    isBlocker = true;
                    content = content.substring( 3, content.length );
                }

                console.info( "is blocker: " + isBlocker );
                console.info( "content: " + content );

                const addNoteModel = new AddNoteModel( this.id, content, isBlocker );

                p.addNote(
                    addNoteModel,
                    (response: any) => {

                    const log = response.log;

                    console.log( "Log id received from server" );
                    console.log( log );


                    const logElement = document.getElementById( log._id );

                    let p = document.createElement( "p" );
                    p.className = "note";

                    p.innerHTML = content;

                    self.noteInput.value = "";

                    console.log( logElement );


                    if ( ! logElement ) {

                        let logContainer = document.createElement( "div" );
                        logContainer.id = log._id + "-container";
                        logContainer.className = "log-container";

                        let logHeader = document.createElement( "p" );
                        logHeader.className = "log-header";
                        logHeader.classList.add( self.colorData.main );
                        logHeader.innerHTML = self.parseDateFormat( log.created );


                        logContainer.appendChild( logHeader );

                        let logBody = document.createElement( "div" );
                        logBody.id = log._id;
                        logBody.className = "log-body";

                        logContainer.appendChild( logBody );

                        logBody.appendChild( p );

                        self.logWrapper.appendChild( logContainer );

                        self.logWrapper.scrollTop = self.logWrapper.scrollHeight;

                    } else {

                        logElement.appendChild( p );

                        self.logWrapper.appendChild( logElement );

                        self.logWrapper.scrollTop = self.logWrapper.scrollHeight;
                    }

                    self.adjustForHiddenScrollbar();

                },
                (message: string) => {
                    console.error( message );
                });

            }
        });

        this.recordBody.addEventListener( "click", this.recordBodyClickHandler );

        this.logWrapper.addEventListener( "scroll", () => {
            if ( this.logWrapper.scrollTop == 0 ) {
                this.recordBody.classList.remove( "scrolled" );
            } else {
                this.recordBody.classList.add( "scrolled" );
            }
        });

        this.logWrapper.addEventListener( "mouseover", (e) => {
            TweenLite.to( this.logScrollCover, 0.3, { opacity: 0 } );
        });

        this.logWrapper.addEventListener( "mouseout", (e) => {
            TweenLite.to( this.logScrollCover, 0.3, { opacity: 1 } );
        });

        this.editRecordInput.addEventListener( "keydown", this.editRecordKeydownHandler );

        this.editRecordInput.addEventListener( "blur", this.editRecordBlurHandler );

    }



    private recordBodyClickHandler(e: any) {

        this.focusRecord();
    }



    public toggleRecord(): void {
        const self = this;

        const calculatedMinHeight = HTMLHelper.getAbsoluteHeight( this.logWrapper ) + HTMLHelper.getAbsoluteHeight( this.recordFooter );


        this.mainContainer.style.right = "0";
        this.mainContainer.style.overflow = "hidden";

        if ( ! this.recordOpen ) {


            this.container.classList.add( "open-record" );

            this.recordBody.style.display = "block";

            this.focusRecord();

            this.recordHeader.classList.add( "active" );

            this.logWrapper.scrollTop = this.logWrapper.scrollHeight;

            TweenLite.to( this.recordArrowIcon, 0.3, { rotation:"180_cw" } );

            TweenLite.to( this.recordBody, 0.5, { css: {  "min-height": calculatedMinHeight + "px", height: "100%"  }, onComplete: function () {

                self.adjustForHiddenScrollbar();
                self.mainContainer.style.overflow = "auto";

            } } );

            TweenLite.to( this.recordBody, 1.5, { css: { opacity: 1 } } );

            TweenLite.to( this.logWrapper, 1, { opacity: 1, delay: 0.5, onComplete: function () {
                if ( self.logWrapper.scrollTop != 0 ) self.recordBody.classList.add( "scrolled" );
            } } );


            this.recordOpen = true;

            this.noteInput.focus();
        } else {

            this.parent.hideRecordOptions();

            this.container.classList.remove( "open-record" );

            if ( ! this.isActiveRecord  ) {
                this.recordHeader.classList.remove( "active" );
            }

            TweenLite.to( this.recordArrowIcon, 0.3, { rotation:"-=180_cw" } );

            this.recordBody.style.display = "none";
            this.logWrapper.style.opacity = "0";

            this.recordOpen = false;
            this.noteInput.value = "";


            this.adjustForHiddenScrollbar();
            this.mainContainer.style.overflow = "auto";


        }

    }



    private focusRecord(): void {

        const self = this;

        TweenLite.to( this.mainContainer, 0.3, { scrollTop: this.getScrollTopDistance(), onComplete: function () {

            const distance = HTMLHelper.getPosition( self.container );

            self.parent.displayOptionsForRecord( distance.y, self );

            self.parent.setActiveRecord( self );

            self.recordHeader.classList.add( "active" );
            self.container.classList.add( "active-record" );
            self.container.classList.add( self.colorData.line );

        }} );
    }




    private generateRecordHeader(): void {
        this.recordHeader = document.createElement( "div" );
        this.recordHeader.className = "record-header";

        this.recordName = document.createElement( "p" );
        this.recordName.className = "record-name";
        this.recordName.innerHTML = this.name;

        this.recordArrowIcon = document.createElement( "span" );
        this.recordArrowIcon.className = "record-dropdown-icon";


        this.recordHeader.appendChild( this.recordName );
        this.recordHeader.appendChild( this.recordArrowIcon );

        this.recordHeader.style.opacity = "0";

        this.container.appendChild( this.recordHeader );

        let delay = 0;

        if ( this.recordIndex ) {
            if ( this.recordIndex > 10 ) {
                delay = 2.5;
            } else {
                delay = this.recordIndex * 0.25;
            }
        }

        TweenLite.to( this.recordHeader, 0.2, { opacity: 1, ease: Power1.easeOut, delay: delay } );
    }



    private generateRecordContent(): void {

        for ( let i = 0; i < this.logs.length; i++ ) {
            let logContainer = document.createElement( "div" );
            logContainer.id = this.logs[i]._id + "-container";
            logContainer.className = "log-container";

            let logHeader = document.createElement( "p" );
            logHeader.className = "log-header";
            logHeader.classList.add( this.colorData.main );
            logHeader.innerHTML = this.parseDateFormat( this.logs[i].created );


            logContainer.appendChild( logHeader );


            let logBody = document.createElement( "div" );
            logBody.id = this.logs[i]._id;
            logBody.className = "log-body";


            logContainer.appendChild( logBody );

            for ( let j = 0; j < this.logs[i].notes.length; j++ ) {

                let note = this.logs[i].notes[j];

                let p = document.createElement( "p" );
                p.className = "note";
                p.id = note._id;

                p.innerHTML = note.content;

                if ( note.blocker ) p.style.backgroundColor = "#fff5f5";

                logBody.appendChild( p );
            }


            this.logWrapper.appendChild( logContainer );
        }



        this.recordBody.appendChild( this.logWrapper );
        this.recordBody.appendChild( this.recordFooter );

        this.container.appendChild( this.recordBody );

        this.recordBody.style.display = "none";
    }



    public enterScene(): void {

    }



    public exitScene(): void {

    }



    public activateRecord(): void {
        this.recordHeader.classList.add( "active" );
        this.container.classList.add( "active-record" );


        console.log( "checkInView: " + HTMLHelper.checkInView( this.mainContainer, this.container, false ) );

        let cTop        = this.mainContainer.scrollTop;
        let cBottom     = cTop + this.mainContainer.clientHeight;

        let eTop        = this.container.offsetTop;
        let eBottom     = eTop + this.container.clientHeight;

        if ( ! HTMLHelper.checkInView( this.mainContainer, this.container, false ) ) {

            if ( this.mainContainer.firstElementChild.id === this.container.id ||
                this.mainContainer.lastElementChild.id === this.container.id
            ) {
                TweenLite.to( this.mainContainer, 0.2, { scrollTo: "#" + this.container.id } );
            } else {
                if ( eTop < cTop ) {
                    TweenLite.to( this.mainContainer, 0.2, { scrollTop: "-=" + HTMLHelper.getAbsoluteHeight( this.container ) } );
                } else if (  eBottom > cBottom ) {
                    TweenLite.to( this.mainContainer, 0.2, { scrollTop: "+=" + HTMLHelper.getAbsoluteHeight( this.container ) } );
                }
            }


        }

        this.container.classList.add( this.colorData.line );

        this.isActiveRecord = true;
    }



    public passivateRecord(): void {

        this.recordHeader.classList.remove( "active" );
        this.container.classList.remove( "active-record" );

        this.container.classList.remove(
            "active-line-color-01",
            "active-line-color-02",
            "active-line-color-03",
            "active-line-color-04",
            "active-line-color-05",
            "active-line-color-06",
            "active-line-color-07",
            "active-line-color-08",
            "active-line-color-09",
            "active-line-color-10"
        );

        this.isActiveRecord = false;
    }



    public displayEditRecordInput(): void {

        this.hideHeaderContent();

        this.isEditModeActive = true;

        this.recordHeader.insertBefore( this.editRecordInput, this.recordHeader.firstChild );

        this.editRecordInput.focus();

    }



    private editRecordKeydownHandler(e: any): void {

        const key = e.which || e.keyCode;

        if ( key === 13 ) {
            e.stopPropagation();
            e.preventDefault();

            if ( ! this.isEditModeActive ) return;

            this.isEditModeActive = false;

            this.editRecord();

        }
    }



    private editRecordBlurHandler(e: any): void {

        if ( ! this.isEditModeActive ) return;

        this.isEditModeActive = false;

        this.editRecord();
    }



    private editRecord(): void {
        const editedName = this.editRecordInput.value;

        if ( editedName === this.name ) {
            this.showHeaderContent();
            return;
        }

        this.showHeaderContent( editedName );

        let proxy = new ConnectionProxy( "RecordProxy" );


        const editRecordModel = new EditRecordModel( this.id, editedName );


        proxy.editRecord(
            editRecordModel,
            (response: any) => {

        }, (message: string) => {

                console.error( message );
        });
    }



    private hideHeaderContent(): void {
        this.recordName.style.display       = "none";
        this.recordArrowIcon.style.display  = "none";
    }


    private showHeaderContent(name?: string): void {

        if ( this.recordHeader.contains( this.editRecordInput ) ) this.recordHeader.removeChild( this.editRecordInput );

        if ( name ) {
            this.name = name;
            this.recordName.innerHTML = name;
        }


        this.recordName.style.display       = "block";
        this.recordArrowIcon.style.display  = "block";
    }



    private parseDateFormat(date: string): string {
        const d = new Date( date );

        const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.",
            "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
        ];

        const year = d.getFullYear();
        const month = monthNames[d.getMonth()];
        const day = d.getDate();

        return day + " " + month + " " + year;
    }



    private getScrollTopDistance(): number {
        const index = HTMLHelper.getElementIndex( this.container );

        let openRecords = document.getElementsByClassName( "open-record" );

        const recordHeight = 51;
        const substract = 20;

        let openRecordHeights = [];

        for ( let i = 0; i < openRecords.length; i++ ) {
            let openRecordIndex = HTMLHelper.getElementIndex( openRecords[i] );

            if ( openRecordIndex < index ) {
                openRecordHeights.push( HTMLHelper.getAbsoluteHeight( openRecords[i] as HTMLElement ) );
            }
        }

        let totalHeightOpenRecords = 0;

        for ( let i = 0; i < openRecordHeights.length; i++ ) {
            totalHeightOpenRecords += openRecordHeights[i];
        }

        return recordHeight * (index - openRecordHeights.length) + totalHeightOpenRecords + substract;
    }



    private adjustForHiddenScrollbar(): void {
        if ( this.isRecordsContainerScrollable() ) {
            this.mainContainer.style.right = "-20px";
        } else {
            this.mainContainer.style.right = "0";
        }
    }



    private isRecordsContainerScrollable(): boolean {
        return this.mainContainer.scrollHeight > this.mainContainer.clientHeight;
    }


}