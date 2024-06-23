package com.bsn.backend.feedback;

/*
 *
 *@author Sudhanshu Chaubey on 6/23/2024
 *
 */

import com.bsn.backend.book.*;

import java.util.*;

public class FeedbackMapper {

    public Feedback toFeedback(FeedbackRequest request) {
        return Feedback.builder()
                .rating(request.rate())
                .comment(request.comment())
                .book(
                        Book.builder()
                                .id(request.bookId())
                                .build()
                )
                .build();
    }

    public FeedbackResponse toFeedbackResponse(Feedback feedback, Integer userId) {
        return FeedbackResponse.builder()
                .rate(feedback.getRating())
                .comment(feedback.getComment())
                .ownFeedback(Objects.equals(feedback.getCreatedBy(), userId))
                .build();
    }
}
