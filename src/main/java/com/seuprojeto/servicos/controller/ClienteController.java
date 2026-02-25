package com.seuprojeto.servicos.controller;

import com.seuprojeto.servicos.dto.ClienteRequestDto;
import com.seuprojeto.servicos.dto.ClienteResponseDto;
import com.seuprojeto.servicos.servico.ClienteService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/clientes")

public class ClienteController {
    private final ClienteService clienteService;

    public ClienteController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }

    @GetMapping
    public List<ClienteResponseDto> listar() {
        return clienteService.listar();
    }

    @PostMapping
    public ResponseEntity<ClienteResponseDto> criar(
            @RequestBody @Valid ClienteRequestDto dto){
        return ResponseEntity.ok(clienteService.criar(dto));
    }
}