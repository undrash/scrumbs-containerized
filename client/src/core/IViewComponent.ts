

import {View} from "./View";





export interface IViewComponent {
    container: HTMLElement;
    view: View;
    enterScene(): void;
    exitScene( exitType:string ): void;
}