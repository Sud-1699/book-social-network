package com.bsn.backend.email;

/*
 *
 *@author Sudhanshu Chaubey on 5/19/2024
 *
 */

import lombok.Getter;

@Getter
public enum EmailTemplateName {

    ACTIVATE_ACCOUNT("activate_account");

    private final String name;

    EmailTemplateName(String name) {
        this.name = name;
    }
}
