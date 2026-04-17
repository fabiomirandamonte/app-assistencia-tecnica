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
- **Spring Security** (autenticação e autorização)
- **JWT (JSON Web Token)** (Geração de token)
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
├── security     # Configurações de segurança, JWT e roles
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

## 🔐 Autenticação e Segurança

A aplicação agora conta com um sistema de autenticação baseada em **JWT (JSON Web Token)** utilizando **Spring Security**.

### 📌 Funcionalidades de autenticação

- Registro de usuários (`/auth/register`)
- Login com geração de token (`/auth/login`
- Criptografia de senha com **BCrypt**
- Controle de acesso baseado em **roles (USER, ADMIN, TECNICO)**
- Validação de requisições via **JWT**
- Controle de acesso baseado em **roles (USER, ADMIN, TECNICO)**

### 🔄 Fluxo de autenticação

1. Usuário realiza o cadastro via `/auth/register`
2. A senha é criptografada antes de ser salvo no banco
3. Usuário realiza login via `/auth/login`
4. O sistema valida as credenciais
5. Um token JWT é gerado e retornado
6. O token pode ser utilizado para acessar rotar protegidas
7. Um filtro JWT intercepta as requisições e:
    - Valida o token
    - Extrai o usuário autenticado
    - Libera o acesso aos endpoints protegidos

### 🧩 Estrutura de roles

- `USER`
- `ADMIN`
- `TECNICO`

As roles são definidas utilizan Enum, garantindo maior segurança e padronização. 


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

✏️ Atualização de Serviços

- Atualização de serviços existentes via método HTTP PUT
  - Tipo
  - Descrição
  - Valor
  - Data
- Validação existente do servicço antes da atualização

🗑️ Remoção de Serviços

- Exclusão de serviços via método HTTP DELETE
- Remoção realizada a partir do ID do serviço
- Validação de existência antes da exclusão

🔐 Autenticação

- Registro de usuários
- Login com geração de token JWT
- Criptografia de senha
- Controle de acesso por roles
---
## 🗄️ Configuração do Banco de Dados

O banco de dados roda via Docker utilizando ```docker-compose.yml```.

subir o banco:

```bash
  docker-compose up -d
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

📌 Versão 1.6.0 - 16/04/2026

- Implentação do filtro JWT para validação de tokens nas requisições
- Extração e validação de dados do token via JwtService
- Integração do filtro JWT ao fluxo do Spring Security
- Configuração do Swagger para envio de token Bearer (Authorize)
- Ajuste na autenticação para funcionamento correto do CRUD protegido
- Padronização do uso de Authorization Header nas requisições1


📌 Versão 1.5.0 – 17/03/2026

- Implementação de autenticação com JWT
- Criação dos endpoints `/auth/register` e `/auth/login`
- Criptografia de senha com BCrypt
- Implementação de controle de acesso baseado em roles (Enum)
- Configuração do Spring Security
- Integração da autenticação com Swagger

📌 Versão 1.4.0 – 05/03/2026

- Implementação do endpoint **PUT** para atualização de serviços
- Implementação do endpoint **DELETE** para remoção de serviços
- Criação da lógica de atualização na camada ```ServicoService```
- Padronização da conversão da entidade para DTO utilizando método auxiliar
- Melhoria na organização do fluxo da camada do serviço

📌 Versão 1.3.0 – 25/02/2026

- Padronização completa da camada Service
- Criação do ```ClienteService```
- Refatoração do fluxo Controller → Service → Repository
- Correção da injeção de dependência com ```Service```
- Organização e padronização de pacotes
- Melhoria na separação de responsabilidades (SoC)

📌 Versão 1.2.0 - Evolução Arquitetural e Conclusão do CRUD

- Nesta versão o projeto evoluiu para uma API REST completa, com implementação integral do CRUD da entidade Cliente.
- Também forama aplicadas melhorias estruturais na camada do serviço, padronização do uso de DTOs com Java Record e organização da arquitetura em camadas seguindo boas práticas do Spring Boot.

📌 Versão 1.1.0 – 21/10/2025

- Implementação inicial de clientes e serviços
- Estruturação do projeto
- Integração com PostgreSQL
- Documentação com Swagger

---
