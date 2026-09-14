package com.inmobiliaria.api.controllers;

import com.inmobiliaria.api.dto.LoginRequest;
import com.inmobiliaria.api.dto.LoginResponse;
import com.inmobiliaria.api.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
            );

            String token = jwtService.generateToken(auth.getName());
            return ResponseEntity.ok(new LoginResponse(token, auth.getName()));

        } catch (AuthenticationException e) {
            return ResponseEntity.status(401).body("Usuario o contraseña incorrectos");
        }
    }
}
