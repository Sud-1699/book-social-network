package com.bsn.backend.auth;

/*
 *
 *@author Sudhanshu Chaubey on 5/26/2024
 *
 */

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AuthenticationRequest {

    @NotBlank(message = "Email is mandatory")
    @NotEmpty(message = "Email is mandatory")
    @Email(message = "Email is not valid")
    private String email;
    @NotEmpty(message = "Password is mandatory")
    @NotBlank(message = "Password is mandatory")
    @Size(min = 8, message = "Password should be 8 character long")
    private String password;

}
