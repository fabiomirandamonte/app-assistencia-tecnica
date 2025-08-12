package com.seuprojeto.servicos.dto;

import jakarta.validation.constraints.*;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;

public record ServicoRequestDto(
        @NotBlank(message = "Tipo do serviço é obrigatório")
        String descricao,

        @NotNull(message = "Valor é obrigatório")
        @Positive(message = "Valor deve ser positivo")
        Double valor,

        @NotNull(message = "Data é obrigatória")
        LocalDate data,

        @NotNull(message = "ID do cliente é obrigatório")
        Long clienteId
) { }
