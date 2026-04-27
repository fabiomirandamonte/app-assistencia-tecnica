package com.seuprojeto.servicos.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.*;

import java.time.LocalDate;

public record ServicoRequestDto(
        @NotBlank(message = "Tipo do serviço é obrigatório")
        String tipo,

        @NotBlank(message = "Descrição é obrigatória")
        @Size(min = 10, max = 500)
        String descricao,

        @NotNull(message = "Valor é obrigatório")
        @Positive(message = "Valor deve ser positivo")
        Double valor,

        @NotNull(message = "Data é obrigatória")
        @FutureOrPresent(message = "Data não pode ser no passado.")
        LocalDate data,

        @NotNull(message = "ID do cliente é obrigatório")
        @Schema(description = "ID do cliente cadastrado", example = "1")
        Long clienteId
) { }

