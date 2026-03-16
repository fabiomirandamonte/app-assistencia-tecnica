package com.seuprojeto.servicos.entity;

import com.seuprojeto.servicos.security.Role;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "usuarios")
@Data

public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String email;
    private String senha;

    @Enumerated(EnumType.STRING)
    private Role role;

}
