package com.seuprojeto.servicos.servico;

import com.seuprojeto.servicos.dto.ClienteResponseDto;
import com.seuprojeto.servicos.dto.ServicoRequestDto;
import com.seuprojeto.servicos.dto.ServicoResponseDto;
import com.seuprojeto.servicos.entity.Cliente;
import com.seuprojeto.servicos.entity.Servico;
import com.seuprojeto.servicos.repository.ClienteRepository;
import com.seuprojeto.servicos.repository.ServicoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServicoService {

    private final ServicoRepository servicoRepository;
    private final ClienteRepository clienteRepository;

    public ServicoService(ServicoRepository servicoRepository, ClienteRepository clienteRepository) {
        this.servicoRepository = servicoRepository;
        this.clienteRepository = clienteRepository;
    }

    public List<ServicoResponseDto> listarServicos() {
        return servicoRepository.findAll().stream()
                .map(servico -> {
                    Cliente cliente = servico.getCliente();
                    ClienteResponseDto clienteDto = new ClienteResponseDto(
                            cliente.getId(),
                            cliente.getNome(),
                            cliente.getTelefone(),
                            cliente.getEndereco()
                    );

                    return new ServicoResponseDto(
                            servico.getId(),
                            servico.getTipo(),
                            servico.getDescricao(),
                            servico.getValor(),
                            servico.getData(),
                            clienteDto
                    );
                })
                .collect(Collectors.toList());
    }

    public ServicoResponseDto criarServico(ServicoRequestDto dto) {
        Cliente cliente = clienteRepository.findById(dto.clienteId())
                .orElseThrow(() -> new IllegalArgumentException("Cliente não encontrado com ID " + dto.clienteId()));

        if (dto.valor() <= 0) {
            throw new IllegalArgumentException("Valor do serviço deve ser positivo");
        }

        Servico servico = new Servico();
        servico.setTipo(dto.tipo());
        servico.setDescricao(dto.descricao());
        servico.setValor(dto.valor());
        servico.setData(dto.data());
        servico.setCliente(cliente);

        Servico salvo = servicoRepository.save(servico);

        return new ServicoResponseDto(
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
        );
    }
}
