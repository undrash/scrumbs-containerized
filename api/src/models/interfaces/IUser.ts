import { Document } from "mongoose";


export interface IUser extends Document {
    firstName: string,
    lastName: string,
    profileImage: string,
    email: string,
    password: string,
    resetPasswordToken: string,
    resetPasswordExpires: Date,
    confirmed: boolean,
    comparePassword(password): Promise<boolean>
}