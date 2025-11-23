package com.seuprojeto.servicos.controller;

import com.seuprojeto.servicos.dto.ServicoRequestDto;
import com.seuprojeto.servicos.dto.ServicoResponseDto;
import com.seuprojeto.servicos.servico.ServicoService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/servicos")
public class ServicoController {
    private final ServicoService servicoService;

    public ServicoController(ServicoService servicoService){
        this.servicoService = servicoService;
    }

    @GetMapping
    public List<ServicoResponseDto> listar() {
        return servicoService.listarServicos();
    }

    @PostMapping
    public ResponseEntity<?> criar(@RequestBody @Valid ServicoRequestDto dto) {
        try {
            return ResponseEntity.ok(servicoService.criarServico(dto));
        } catch(IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}