# 📋 app-assistencia-tecnica
# 📋 Sistema de Gerenciamento de Serviços

API REST desenvolvida em Java com Spring Boot para gerenciamento de clientes e serviços técnicos, como:

- Instalação e manutenção elétrica
- Instalação de ar-condicionado
- Portões automáticos
- Outros serviços técnicos

O projeto tem como objetivo consolidar fundamentos de Spring Boot, JPA, validações, arquitetura em camadas e boas práticas de backend.

---

## 🚀 Tecnologias Utilizadas
```bash
- **Java 21**
- **Spring Boot 3**
  - Spring Web (API REST)
  - Spring Data JPA (persistência)
  - Hibernate Validator (validação)
- **PostgreSQL** (banco de dados)
- **Docker** (container do banco)
- **Lombok** (redução de código boilerplate)
- **Springdoc OpenAPI (Swagger)** (documentação da API)
```
---
🏗️ **Arquitetura do Projeto**

O projeto segue o padrão em camadas:

```bash
Controller → Service → Repository → Database
```
---
## 📁 Estrutura de Pacotes

```bash
src/main/java/com/seuprojeto/servicos
├── controller   # Controladores REST (camada HTTP)
├── dto          # Objetos de transferência de dados (Request/Response)
├── entity       # Entidades JPA
├── repository   # Interfaces do Spring Data JPA
├── service      # Regras de negócio
└── exception    # Tratamento global de erros
```
---
## 🎯 Decisões Arquiteturais

✅ Camada Service

Foi criada a camada ```Service``` para:
- Centralizar as regras de negócio
- Reduzir o acoplamento entre Controller e Repository
- Melhorar a organização do código
- Facilitar testes unitários futuros

Os Controllers agora são responsáveis apenas por:
- Receber requisições HTTP
- Validade entrada com @Valid
- Delegar chamadas para a camada Service

Essa abordagem melhora a aderência ao princípio de **Separação de Responsabilidades (SoC).**

---
✅ Uso de DTOs
A aplicação utilizada DTOs para:
- Controlar dados de entrada (Request)
- Controlar dados de saída (Response)
- Evitar exposição direta das entidade
- Facilitar futuras evoluções do modelo
---
✅ Validações e Tratamento de Erros
- Validação de campos obrigratórios com @NotBlank, @NotNull, @Positive
- Mensagens personalizadas de erro
- Tratamento global de exceções na camada ```exception```
---

## 📌 Funcionalidades

👤 Cadastro de Clientes
- Nome
- Telefone
- Endereço
- Validação de campos obrigatórios


  🧰 Cadastro de Serviços
  
- Tipo
- Descrição
- Valor
- Data
- Relacionamento com cliente existente
- Validação de campos obrigatórios

📋 Listagens

- Listagem de clientes
- Listagem de serviços com dados do cliente associado
---
## 🗄️ Configuração do Banco de Dados

O banco de dados roda via Docker utilizando ```docker-compose.yml```.

subir o banco:

```bash
  dicker-compose up -d
```
A aplicação está configurada para conectar ao PostgresSQL via ```application.properties```

---
## 📖 Documentação da API
Após iniciar a aplicação:

```
http://localhost:8081/swagger-ui.html
```
A documentação é gerada automaticamente via OpenAPI.

---
## 🔧 Refatoração Estrutural

Foi realizada a refatoração para melhorar a consistência arquitetural do projeto:
- Criação da camada ```Service``` para isolar as regras de negócio.
- Atualização do ```ServicoController``` para delegar responsabilidades ao ```ServicoService```
- Padronização do fluxo da aplicação:

```bash
Controller → Service → Repository
```

## 🎯 Motivação da Refatoração

- Garantir consistência entre os módulos
- Reduzir acoplamento
- Melhorar manutenibilidade
- Preparar o projeto para teste unitários e futuras evoluções
- ---

## 📅 Histórico de Versão

📌 Versão 1.2.0 – 25/02/2026

- Padronização completa da camada Service
- Criação do ```ClienteService```
- Refatoração do fluxo Controller → Service → Repository
- Correção da injeção de dependência com ```Service```
- Organização e padronização de pacotes
- Melhoria na separação de responsabilidades (SoC)

📌 Versão 1.1.0 – 21/10/2025

- Implementação inicial de clientes e serviços
- Estruturação do projeto
- Integração com PostgreSQL
- Documentação com Swagger

