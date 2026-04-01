package com.bsn.backend.book;

/*
 *
 *@author Sudhanshu Chaubey on 6/22/2024
 *
 */

import org.springframework.data.jpa.domain.Specification;

//Create a Specification to get owner all books and in order to make this spec class to work with JPA need to extend to JPA Spec
public class BookSpecification {

    public static Specification<Book> withOwnerId(String ownerId) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(
                root.get("createdBy"),
                ownerId
        );
    }
}
