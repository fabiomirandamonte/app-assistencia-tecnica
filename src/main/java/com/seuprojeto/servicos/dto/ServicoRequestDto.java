package com.seuprojeto.servicos.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.*;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;

public record ServicoRequestDto(
        @NotBlank(message = "Tipo do serviço é obrigatório")
        String tipo,

        @NotBlank(message = "Descrição é obrigatória")
        String descricao,

        @NotNull(message = "Valor é obrigatório")
        @Positive(message = "Valor deve ser positivo")
        Double valor,

        @NotNull(message = "Data é obrigatória")
        LocalDate data,

        @NotNull(message = "ID do cliente é obrigatório")
        @Schema(description = "ID do cliente cadastrado", example = "1")
        Long clienteId
) { }

