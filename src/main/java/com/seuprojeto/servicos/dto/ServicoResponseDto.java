package com.seuprojeto.servicos.dto;

import java.time.LocalDate;

public record ServicoResponseDto(
        Long id,
        String tipo,
        String descricao,
        Double valor,
        LocalDate data,
        ClienteResponseDto cliente
) { }
