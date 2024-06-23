package com.bsn.backend.config;

/*
 *
 *@author Sudhanshu Chaubey on 6/23/2024
 *
 */

import io.swagger.v3.oas.annotations.*;
import io.swagger.v3.oas.annotations.enums.*;
import io.swagger.v3.oas.annotations.info.*;
import io.swagger.v3.oas.annotations.security.*;
import io.swagger.v3.oas.annotations.servers.*;

@OpenAPIDefinition(
        info = @Info(
                contact = @Contact(
                        name = "Sudhanshu Chaubey",
                        email = "abc@gmail.com",
                        url = "https://github.com/Sud-1699"
                ),
                description = "OpenAPI documentation for Book Social Network",
                title = "OpenAPI specification - Sudhanshu Chaubey",
                version = "1.0",
                license = @License(
                        name = "Name",
                        url = "url"
                ),
                termsOfService = "Terms of Service"
        ),
        servers = {
                @Server(
                        description = "Local ENV",
                        url = "http://localhost:8088/api/v1"
                ),
                @Server(
                        description = "Production",
                        url = "prod-url"
                )
        },
        security = {
                @SecurityRequirement(
                        name = "bearerAuth"
                )
        }
)
@SecurityScheme(
        name = "bearerAuth",
        description = "JWT Auth description",
        scheme = "bearer",
        type = SecuritySchemeType.HTTP,
        bearerFormat = "JWT",
        in = SecuritySchemeIn.HEADER
)
public class OpenApiConfig {
}
