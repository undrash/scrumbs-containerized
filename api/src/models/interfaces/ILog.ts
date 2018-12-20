

import { Document, Schema } from "mongoose";





export interface ILog extends Document {
    created: Date,
    record: Schema.Types.ObjectId,
    notes: any[]
}