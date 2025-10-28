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
├── service       # Regras de negócio e validações da aplicação.
├── exception     # Tratamento global de erros de validação

📌 Funcionalidades
👤**Cadastro de Clientes
- Nome, telefone, endereço
- Validação de campos obrigatórios
🧰**Cadastro de Serviços**
- Tipo, descrição, valor, data
- Relacionamento com cliente existente
- Validação de campos obrigatórios
📋**Listagem**
- Listagem de clientes
- Listagem de serviços com dados do cliente
⚙️**Camada Service**
- Centralizar todas as regras de negócio
- Controladores agora apenas delegam chamadas à camada Service
- Código ficou mais limpo e coerente aos princípios de separação de responsabilidades (SoC)
- Facilidade em relação aos testes unitários e possivéis manutenções
❗**Validações e Erros**
- Mensagens personalizadas para campos obrigatórios
- Tratamento global de erros de validação
**Documentação**
- API documentada automaticamente com Swagger / OpenAPI

📅 21/10/2025 - Versão 1.1.0

**Obs.: Projeto estava em standby por causa que estava estudando um pouco mais os fundamentos de Java, Spring Boot, Docker. Participando de cursos e dando continuidade a minha Pós em Engenharia de Software.**

🔧 Refatoração Estrutural
- Foi criado a camada de Service para isolar e gerenciar as regras de negócio
- ServicoController foi atualizado para poder atualizar ServicoService, deixando o controller responsável apenas por requisiçoes HTTP.

💡 Próximos Passos
- Implementar autenticação e autorização com Spring Security + JWT
- Criar a camada de testes unitários para Service e Controller
- Adicionar endpoint de busca filtrada de serviços por cliente ou data
