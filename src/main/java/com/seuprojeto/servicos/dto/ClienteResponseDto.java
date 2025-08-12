package com.seuprojeto.servicos.dto;

public record ClienteResponseDto(
        Long id,
        String nome,
        String telefone,
        String endereco
) { }
