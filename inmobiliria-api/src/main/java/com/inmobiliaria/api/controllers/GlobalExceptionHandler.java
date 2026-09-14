package com.inmobiliaria.api.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalExceptionHandler {

    // Errores de validación (@NotBlank, @Positive, etc.)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidationErrors(MethodArgumentNotValidException ex) {
        List<String> errores = ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(e -> e.getField() + ": " + e.getDefaultMessage())
                .collect(Collectors.toList());

        return buildError(HttpStatus.BAD_REQUEST, "Error de validación", errores);
    }

    // Recurso no encontrado
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, Object>> handleNotFound(IllegalArgumentException ex) {
        return buildError(HttpStatus.NOT_FOUND, ex.getMessage(), null);
    }

    // Cualquier otro error no manejado
    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleGeneric(Exception ex) {
        return buildError(HttpStatus.INTERNAL_SERVER_ERROR, "Error interno del servidor", null);
    }

    private ResponseEntity<Map<String, Object>> buildError(HttpStatus status, String mensaje, List<String> detalles) {
        Map<String, Object> body = new HashMap<>();
        body.put("timestamp", LocalDateTime.now().toString());
        body.put("status", status.value());
        body.put("error", mensaje);
        if (detalles != null) body.put("detalles", detalles);
        return ResponseEntity.status(status).body(body);
    }
}