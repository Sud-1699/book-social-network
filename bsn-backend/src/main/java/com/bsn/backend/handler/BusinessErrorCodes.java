package com.bsn.backend.handler;

/*
 *
 *@author Sudhanshu Chaubey on 5/26/2024
 *
 */

import lombok.*;
import org.springframework.http.*;

import static org.springframework.http.HttpStatus.*;

public enum BusinessErrorCodes {
    NO_CODE(0, "No code", NOT_IMPLEMENTED),
    INCORRECT_CURRENT_PASSWORD(300, "Current password is incorrect", BAD_REQUEST),
    NEW_PASSWORD_DOES_NOT_MATCH(301, "New password does not match", BAD_REQUEST),
    ACCOUNT_LOCKED(302, "User account is locker", FORBIDDEN),
    ACCOUNT_DISABLED(303, "User account is disabled", FORBIDDEN),
    BAD_CREDENTIALS(304, "Login and password is incorrect", FORBIDDEN)
    ;

    @Getter
    private final int code;
    @Getter
    private final String description;
    @Getter
    private final HttpStatus httpStatus;

    BusinessErrorCodes(int code, String description, HttpStatus httpStatus) {
        this.code = code;
        this.description = description;
        this.httpStatus = httpStatus;
    }
}
