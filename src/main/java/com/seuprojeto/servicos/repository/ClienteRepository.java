package com.seuprojeto.servicos.repository;

import com.seuprojeto.servicos.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {

}