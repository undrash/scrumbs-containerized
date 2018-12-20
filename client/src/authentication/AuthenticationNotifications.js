"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthenticationNotifications = /** @class */ (function () {
    function AuthenticationNotifications() {
    }
    AuthenticationNotifications.EXIT_FINISHED = "AUTH_EXIT_FINISHED";
    AuthenticationNotifications.LOGIN_SUCCESS = "LOGIN_SUCCESS";
    AuthenticationNotifications.LOGIN_FAILURE = "LOGIN_FAILURE";
    AuthenticationNotifications.SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
    AuthenticationNotifications.SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
    AuthenticationNotifications.USER_AUTHENTICATED = "USER_AUTHENTICATED";
    AuthenticationNotifications.USER_SIGNED_UP = "USER_SIGNED_UP";
    return AuthenticationNotifications;
}());
exports.AuthenticationNotifications = AuthenticationNotifications;
