package com.bsn.backend.exception;

/*
 *
 *@author Sudhanshu Chaubey on 6/22/2024
 *
 */

public class OperationNotPermittedException extends RuntimeException {

    public OperationNotPermittedException(String msg) {
        super(msg);
    }
}
