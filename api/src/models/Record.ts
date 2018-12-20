import { Schema, model } from "mongoose";
import {IRecord} from "./interfaces/IRecord";
import Log from "./Log";


const RecordSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    moderators: {
        type: [ Schema.Types.ObjectId ],
        ref: "User",
        default: []
    },

    created: {
        type: Date,
        default: new Date()
    }

});


RecordSchema.virtual( "logCount" ).get( function () {
    return Log.find({ record: this._id } ).count;
});


export default model<IRecord>( "Record", RecordSchema );