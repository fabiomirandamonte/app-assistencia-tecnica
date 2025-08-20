package com.seuprojeto.servicos.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "servicos")
@Data
public class Servico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String tipo;
    private String descricao;
    private Double valor;
    private LocalDate data;

    @ManyToOne
    @JoinColumn(name = "cliente_id", nullable = true)
    private Cliente cliente;
}
