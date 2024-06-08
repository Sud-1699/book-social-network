package com.bsn.backend.book;

/*
 *
 *@author Sudhanshu Chaubey on 6/8/2024
 *
 */

import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Integer> {
}
