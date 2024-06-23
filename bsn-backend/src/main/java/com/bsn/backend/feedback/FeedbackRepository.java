package com.bsn.backend.feedback;

/*
 *
 *@author Sudhanshu Chaubey on 6/23/2024
 *
 */

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {

    @Query("""
            SELECT feedback
            FROM Feedback AS feedback
            WHERE feedback.book.id = :bookId
            """)
    Page<Feedback> findAllByBookId(Integer bookId, Pageable pageable);
}
