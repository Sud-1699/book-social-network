package com.bsn.backend.config;

/*
 *
 *@author Sudhanshu Chaubey on 6/2/2024
 *
 */

import com.bsn.backend.user.User;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

public class AuditAware implements AuditorAware<Integer> {
    @Override
    public Optional<Integer> getCurrentAuditor() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(authentication == null || !authentication.isAuthenticated() || authentication instanceof AnonymousAuthenticationToken) {
            return Optional.empty();
        }

        User user  = (User) authentication.getPrincipal();
        return Optional.ofNullable(user.getId());
    }
}
