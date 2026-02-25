package com.seuprojeto.servicos.servico;

import com.seuprojeto.servicos.dto.ClienteRequestDto;
import com.seuprojeto.servicos.dto.ClienteResponseDto;
import com.seuprojeto.servicos.entity.Cliente;
import com.seuprojeto.servicos.repository.ClienteRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ClienteService {

    private final ClienteRepository clienteRepository;

    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    public List<ClienteResponseDto> listar(){
        return clienteRepository.findAll()
                .stream()
                .map(this::toResponseDto)
                .toList();
    }

    public ClienteResponseDto criar(ClienteRequestDto dto){
        Cliente cliente = new Cliente();
        cliente.setNome(dto.nome());
        cliente.setTelefone(dto.telefone());
        cliente.setEndereco(dto.endereco());

        Cliente salvo = clienteRepository.save(cliente);
        return toResponseDto(salvo);
    }

    private ClienteResponseDto toResponseDto(Cliente cliente){
        return new ClienteResponseDto(
                cliente.getId(),
                cliente.getNome(),
                cliente.getTelefone(),
                cliente.getEndereco()
        );
    }
}
