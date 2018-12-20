

import { INote } from "./interfaces/INote";
import { Schema } from "mongoose";





const NoteSchema = new Schema({

    content: {
        type: String,
        required: [ true, "Note content is required." ],
        validate: {
            validator: (text) => text.length <= 2500,
            message: "Note content cannot be larger than 2500 characters."
        }
    },

    blocker: {
        type: Schema.Types.ObjectId,
        ref: "Blocker",
        default: null
    }

});


export default NoteSchema as INote;

