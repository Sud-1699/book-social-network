package com.bsn.backend.role;

/*
 *
 *@author Sudhanshu Chaubey on 5/11/2024
 *
 */

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Integer> {

    Optional<Role> findByName(String role);
}
