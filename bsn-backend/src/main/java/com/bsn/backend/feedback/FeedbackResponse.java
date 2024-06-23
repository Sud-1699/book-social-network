package com.bsn.backend.feedback;

/*
 *
 *@author Sudhanshu Chaubey on 6/23/2024
 *
 */

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FeedbackResponse {

    private Double rate;
    private String comment;
    private boolean ownFeedback;

}
