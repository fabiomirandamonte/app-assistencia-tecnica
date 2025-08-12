package com.seuprojeto.servicos.controller;

import com.seuprojeto.servicos.dto.ClienteRequestDto;
import com.seuprojeto.servicos.dto.ClienteResponseDto;
import com.seuprojeto.servicos.entity.Cliente;
import com.seuprojeto.servicos.repository.ClienteRepository;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/clientes")

public class ClienteController {
    private final ClienteRepository clienteRepository;

    public ClienteController(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    @GetMapping
    public List<ClienteResponseDto> listar() {
        return clienteRepository.findAll().stream()
                .map(cliente -> new ClienteResponseDto(
                        cliente.getId(),
                        cliente.getNome(),
                        cliente.getTelefone(),
                        cliente.getEndereco()
                )).toList();
    }

    @PostMapping
    public ClienteResponseDto criar(@RequestBody @Valid ClienteRequestDto dto) {
        Cliente cliente = new Cliente();
        cliente.setNome(dto.nome());
        cliente.setTelefone(dto.telefone());
        cliente.setEndereco(dto.endereco());

        Cliente salvo = clienteRepository.save(cliente);

        return new ClienteResponseDto(
                salvo.getId(),
                salvo.getNome(),
                salvo.getTelefone(),
                salvo.getEndereco()
        );
    }
}