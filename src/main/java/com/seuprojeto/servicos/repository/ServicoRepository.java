package com.seuprojeto.servicos.repository;

import com.seuprojeto.servicos.entity.Servico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicoRepository extends JpaRepository<Servico, Long> {

}