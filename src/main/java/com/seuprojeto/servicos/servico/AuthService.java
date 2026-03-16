package com.seuprojeto.servicos.servico;

import com.seuprojeto.servicos.dto.LoginRequestDto;
import com.seuprojeto.servicos.dto.LoginResponseDto;
import com.seuprojeto.servicos.dto.RegisterRequestDto;
import com.seuprojeto.servicos.entity.Usuario;
import com.seuprojeto.servicos.repository.UsuarioRepository;
import com.seuprojeto.servicos.security.JwtService;
import com.seuprojeto.servicos.security.Role;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;


@Service
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    public AuthService(UsuarioRepository usuarioRepository,
                       JwtService jwtService,
                       PasswordEncoder passwordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
    }

    public void register(RegisterRequestDto dto){
        if(usuarioRepository.findByEmail(dto.email()).isPresent()){
            throw new RuntimeException("Usuario já cadastrado");
        }
        Usuario usuario = new Usuario();
        usuario.setUsername(dto.username());
        usuario.setEmail(dto.email());
        usuario.setSenha(passwordEncoder.encode(dto.senha()));
        usuario.setRole(Role.valueOf(dto.Role()));

        usuarioRepository.save(usuario);
    }

    public LoginResponseDto login(LoginRequestDto dto){

        Usuario usuario = usuarioRepository.findByEmail(dto.email())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        if(!passwordEncoder.matches(dto.senha(), usuario.getSenha())){
            throw new RuntimeException("Senha inválida");
        }

        String token = jwtService.gerarToken(usuario.getEmail());

        return new LoginResponseDto(token);
    }
}

