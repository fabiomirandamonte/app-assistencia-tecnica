# 📋 app-assistencia-tecnica
# 📋 Sistema de Gerenciamento de Serviços

Aplicação desenvolvida em **Java com Spring Boot** para auxiliar no gerenciamento de clientes e serviços prestados, como instalação e manutenção elétrica, instalação de ar-condicionado, portões automáticos e outros.

---

## 🚀 Tecnologias Utilizadas

- **Java 17+**
- **Spring Boot**
  - Spring Web (API REST)
  - Spring Data JPA (persistência)
  - Hibernate Validator (validação)
- **PostgreSQL** (banco de dados)
- **Docker** (container do banco)
- **Lombok** (redução de código boilerplate)
- **Springdoc OpenAPI (Swagger)** (documentação da API)

---

## 🗄️ Configuração do Banco de Dados

O banco de dados roda via Docker utilizando `docker-compose.yml`.

### Subir o banco:
```bash
docker-compose up -d

📂 **Estrutura do Projeto**
src/main/java/com/seuprojeto/servicos
├── controller    # Controladores REST
├── dto           # Objetos de transferência de dados (Request/Response)
├── entity        # Entidades do banco
├── repository    # Interfaces do Spring Data JPA
├── exception     # Tratamento global de erros de validação

📌 Funcionalidades
**Cadastro de Clientes
- Nome, telefone, endereço
- Validação de campos obrigatórios
**Cadastro de Serviços**
- Tipo, descrição, valor, data
- Relacionamento com cliente existente
- Validação de campos obrigatórios
**Listagem**
- Listagem de clientes
- Listagem de serviços com dados do cliente
**Validações**
- Mensagens personalizadas para campos obrigatórios
- Tratamento global de erros de validação
**Documentação**
- API documentada automaticamente com Swagger
