package com.bsn.backend.user;

/*
 *
 *@author Sudhanshu Chaubey on 5/18/2024
 *
 */

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token, Integer> {

    Optional<Token> findByToken(String token);

}
