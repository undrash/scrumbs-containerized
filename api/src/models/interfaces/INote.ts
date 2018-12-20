

import { Schema } from "mongoose";





export interface INote extends Schema {
    content: string,
    blocker: Schema.Types.ObjectId
}