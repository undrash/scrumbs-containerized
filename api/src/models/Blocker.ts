

import { IBlocker } from "./interfaces/IBlocker";
import { Schema, model } from "mongoose";





const BlockerSchema = new Schema({

    content: {
        type: String,
        required: [ true, "Blocker content is required." ],
        validate: {
            validator: (text) => text.length <= 2500,
            message: "Blocker content cannot be larger than 2500 characters."
        }
    },

    log: {
        type: Schema.Types.ObjectId,
        ref: "Log"
    },

    note: {
        type: Schema.Types.ObjectId
    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [ true, "User associated is required." ]
    },

    record: {
        type: Schema.Types.ObjectId,
        ref: "Record"
    },

    label: {
        type: String,
        required: [ true, "Label is required." ]
    },

    solved: {
        type: Boolean,
        default: false
    }

});

export default model<IBlocker>( "Blocker", BlockerSchema );