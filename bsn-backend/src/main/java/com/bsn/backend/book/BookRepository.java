package com.bsn.backend.book;

/*
 *
 *@author Sudhanshu Chaubey on 6/8/2024
 *
 */

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;

public interface BookRepository extends JpaRepository<Book, Integer>, JpaSpecificationExecutor<Book> {

    @Query("""
            SELECT book
            FROM Book book
            WHERE book.archived = false
            AND book.shareable = true
            AND book.owner.id != :userId
            """)
    Page<Book> findAllDisplayableBooks(Pageable pageable, Integer userId);
}
