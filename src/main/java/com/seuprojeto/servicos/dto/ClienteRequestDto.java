package com.seuprojeto.servicos.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;


public record ClienteRequestDto(
        @NotBlank(message = "Nome é obrigatório")
        @Size(min = 3, max = 100)
        String nome,

        @NotBlank(message = "Telefone é obrigatório")
        @Pattern(
                regexp = "^\\d{10,11}$",
                message = "Telefone deve conter 10 ou 11 números"
        )
        String telefone,

        @NotBlank(message = "Endereço é obrigatório")
        @Size(min = 5, max = 150)
        String endereco
) {}
