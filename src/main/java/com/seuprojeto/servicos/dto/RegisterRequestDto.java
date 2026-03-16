package com.seuprojeto.servicos.dto;

public record RegisterRequestDto(
        String username,
        String email,
        String senha,
        String Role
) {}
