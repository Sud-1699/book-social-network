package com.bsn.backend.handler;

/*
 *
 *@author Sudhanshu Chaubey on 5/26/2024
 *
 */

import com.fasterxml.jackson.annotation.*;
import lombok.*;

import java.util.*;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_EMPTY;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(NON_EMPTY)
public class ExceptionResponse {

    private Integer businessErrorCode;
    private String businessErrorDescription;
    private String error;
    private Set<String> validationErrors;
    private Map<String, String> errors;

}
