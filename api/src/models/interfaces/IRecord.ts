

import { Document, Schema } from "mongoose";





export interface IRecord extends Document {
    name: string,
    owner: Schema.Types.ObjectId,
    moderators: Schema.Types.ObjectId[],
    created: Date
}