


import {IProxyVO} from "../core/IProxyVO";

export class UserVO implements IProxyVO {
    public user: string;
    public email: string;
    public firstName: string;
    public lastName: string;

    constructor(user: string, email: string, firstName: string, lastName: string) {
        this.user       = user;
        this.email      = email;
        this.firstName  = firstName;
        this.lastName   = lastName;
    }

}