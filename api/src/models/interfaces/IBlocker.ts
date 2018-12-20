

import { Document, Schema } from "mongoose";





export interface IBlocker extends Document {
    content: string,
    log: Schema.Types.ObjectId,
    note: Schema.Types.ObjectId,
    owner: Schema.Types.ObjectId,
    record: Schema.Types.ObjectId,
    label: string,
    solved: boolean
}