package com.seuprojeto.servicos.controller;

import com.seuprojeto.servicos.dto.ClienteResponseDto;
import com.seuprojeto.servicos.dto.ServicoRequestDto;
import com.seuprojeto.servicos.dto.ServicoResponseDto;
import com.seuprojeto.servicos.entity.Cliente;
import com.seuprojeto.servicos.entity.Servico;
import com.seuprojeto.servicos.repository.ClienteRepository;
import com.seuprojeto.servicos.repository.ServicoRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/servicos")
public class ServicoController {
    private final ServicoRepository servicoRepository;
    private final ClienteRepository clienteRepository;

    public ServicoController(ServicoRepository servicoRepository, ClienteRepository clienteRepository) {
        this.servicoRepository = servicoRepository;
        this.clienteRepository = clienteRepository;
    }

    @GetMapping
    public List<ServicoResponseDto> listar() {
        return servicoRepository.findAll().stream()
                .map(servico -> {
                    Cliente cliente = servico.getCliente();
                    ClienteResponseDto clienteDto = null;

                    if (cliente != null) {
                        clienteDto = new ClienteResponseDto(
                                cliente.getId(),
                                cliente.getNome(),
                                cliente.getTelefone(),
                                cliente.getEndereco()
                        );
                    }

                    return new ServicoResponseDto(
                            servico.getId(),
                            servico.getTipo(),
                            servico.getDescricao(),
                            servico.getValor(),
                            servico.getData(),
                            clienteDto
                    );
                }).collect(Collectors.toList());
    }

    @PostMapping
    public ResponseEntity<?> criar(@RequestBody @Valid ServicoRequestDto dto) {
        Cliente cliente = clienteRepository.findById(dto.clienteId())
                .orElse(null);

        if (cliente == null) {
            return ResponseEntity.badRequest().body("Cliente não encontrado com ID " + dto.clienteId());
        }
        Servico servico = new Servico();
        servico.setTipo(dto.tipo());
        servico.setDescricao(dto.descricao());
        servico.setValor(dto.valor());
        servico.setData(dto.data());
        servico.setCliente(cliente);

        Servico salvo = servicoRepository.save(servico);
        return ResponseEntity.ok(new ServicoResponseDto(
                salvo.getId(),
                salvo.getTipo(),
                salvo.getDescricao(),
                salvo.getValor(),
                salvo.getData(),
                new ClienteResponseDto(
                        cliente.getId(),
                        cliente.getNome(),
                        cliente.getTelefone(),
                        cliente.getEndereco()
                )
        ));
    }
}