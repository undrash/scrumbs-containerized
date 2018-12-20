

import {ConnectionProxy} from "../connection/ConnectionProxy";
import {Blockers} from "./Blockers";

import TweenLite = gsap.TweenLite;

//CSS
import "../_style/style-sheets/blockers.scss";





export class Blocker {

    private readonly parent: Blockers;

    private mainContainer: HTMLElement;
    private container: HTMLElement;

    private content: string;
    private id: string;
    private label: string;

    private checkboxContainer: HTMLElement;
    private checkbox: HTMLInputElement;

    private textContainer: HTMLElement;
    private text: HTMLLabelElement;

    private checkMark: HTMLSpanElement;

    private recordOwner: HTMLSpanElement;


    constructor(parent: Blockers, data: any, mainContainer: HTMLElement, isSolved: boolean) {

        this.parent = parent;

        this.content    = data.content;
        this.id         = data._id;
        this.label      = data.label;

        this.mainContainer          = mainContainer;
        this.container              = document.createElement( "li" );
        this.container.id           = this.id;
        this.container.className    = "blocker-item";


        this.checkboxContainer              = document.createElement( "div" );
        this.checkboxContainer.className    = "blocker-item-input";

        this.checkbox = document.createElement( "input" );
        this.checkbox.setAttribute( "type", "checkbox" );
        this.checkbox.id = "checkbox" + this.id;

        if ( isSolved ) {
            this.checkbox.checked = true;
            this.container.classList.add( "ready" );
        }


        this.checkMark = document.createElement( "span" );
        this.checkMark.className = "blocker-item-checkmark";


        this.checkboxContainer.appendChild( this.checkbox );
        this.checkboxContainer.appendChild( this.checkMark );


        this.textContainer = document.createElement( "div" );
        this.textContainer.className = "blocker-item-text";
        

        this.text = document.createElement( "label" );
        this.text.innerHTML = this.content;
        this.text.className = "inline";

        this.textContainer.appendChild( this.text );


        this.recordOwner = document.createElement( "span" );
        this.recordOwner.innerHTML = this.label;
        this.recordOwner.className = "user";


        this.container.appendChild( this.checkboxContainer );
        this.container.appendChild( this.textContainer );
        this.container.appendChild( this.recordOwner );


        if ( this.mainContainer.firstChild && this.mainContainer.firstChild.nodeName !== "INPUT" ) {
            this.mainContainer.insertBefore( this.container, this.mainContainer.firstChild );
        } else {
            this.mainContainer.insertBefore( this.container, this.mainContainer.children[1] );
        }

        this.registerEventListeners();
    }



    private registerEventListeners(): void {
        this.container.addEventListener( "click", () => {

            if ( this.checkbox.checked ) {

                this.checkbox.checked = false;
                this.container.classList.remove( "ready" );

                TweenLite.to( this.container, 0.5, { opacity: 0, onComplete: () => {
                    let proxy = new ConnectionProxy( "BlockerProxy" );

                    const self = this;

                    proxy.unsolveBlocker( this.id, () => {

                        self.parent.unsolvedBlockersContainer.appendChild( self.container );
                        self.parent.toggleSolvedBlockersVisibilityButton();
                        self.container.style.opacity = "1";

                    }, (message: string) => {
                        console.warn( message );
                    });


                }});

            } else {

                this.checkbox.checked = true;
                this.container.classList.add( "ready" );

                TweenLite.to( this.container, 0.5, { opacity: 0, onComplete: () => {
                    let proxy = new ConnectionProxy( "BlockerProxy" );

                    const self = this;

                    proxy.solveBlocker( this.id, () => {

                        self.parent.solvedBlockersContainer.appendChild( self.container );
                        self.parent.toggleSolvedBlockersVisibilityButton();
                        self.container.style.opacity = "1";

                    }, (message: string) => {
                        console.warn( message );
                    });
                }});

            }
        });

    }



    private unregisterEventListeners(): void {


    }



}