package com.seuprojeto.servicos.controller;


import com.seuprojeto.servicos.dto.LoginRequestDto;
import com.seuprojeto.servicos.dto.LoginResponseDto;
import com.seuprojeto.servicos.dto.RegisterRequestDto;
import com.seuprojeto.servicos.servico.AuthService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public void register(@RequestBody RegisterRequestDto dto){
        authService.register(dto);
    }

    @PostMapping("/login")
    public LoginResponseDto login(@RequestBody LoginRequestDto dto){
        return authService.login(dto);
    }
}
