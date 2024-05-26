package com.bsn.backend.auth;

/*
 *
 *@author Sudhanshu Chaubey on 5/26/2024
 *
 */

import lombok.*;

@Getter
@Setter
@Builder
public class AuthenticationResponse {

    private String token;

}
