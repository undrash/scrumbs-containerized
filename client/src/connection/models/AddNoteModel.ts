

export class AddNoteModel {
    public recordId: string;
    public content: string;
    public isBlocker: boolean;

    constructor(recordId: string, content: string, isBlocker: boolean) {
        this.recordId   = recordId;
        this.content    = content;
        this.isBlocker  = isBlocker;
    }
}