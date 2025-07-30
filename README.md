# 🍽️ Restaurant API

<div align="center">

![Restaurant Banner](https://res.cloudinary.com/delo0gvyb/image/upload/v1753911197/Made_with_insMind-Flux_Dev_Create_an_image_that_presents_a_Backend_application_o_2_kk4kbb.jpg)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=plastic&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=plastic&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=plastic&logo=express&logoColor=white)](https://expressjs.com/)
[![SQLite](https://img.shields.io/badge/SQLite-07405E?style=plastic&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![Knex.js](https://img.shields.io/badge/Knex.js-FF6B6B?style=plastic&logo=knex&logoColor=white)](https://knexjs.org/)
[![Zod](https://img.shields.io/badge/Zod-3B82F6?style=plastic&logo=zod&logoColor=white)](https://zod.dev/)

</div>

## 📋 Menu de Navegação

- [🍽️ Restaurant API](#-restaurant-api)
- [📋 Menu de Navegação](#-menu-de-navegação)
- [📖 Sobre o Projeto](#-sobre-o-projeto)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🏗️ Arquitetura e Padrões](#️-arquitetura-e-padrões)
- [⚙️ Configuração e Setup](#️-configuração-e-setup)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🔧 Scripts Disponíveis](#-scripts-disponíveis)
- [🌐 Endpoints da API](#-endpoints-da-api)
- [📝 Licença](#-licença)

## 📖 Sobre o Projeto

API RESTful desenvolvida para gestão completa de pedidos de restaurante, incluindo controle de mesas, sessões, produtos e pedidos. O projeto utiliza TypeScript para maior segurança de tipos e Express.js como framework web.

**Desenvolvido por:** Emmanuel Oliveira  
**Fonte de Aprendizado:** Rocketseat

## 🚀 Tecnologias Utilizadas

### Backend

- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem de programação tipada
- **Express.js** - Framework web para Node.js
- **SQLite** - Banco de dados relacional
- **Knex.js** - Query builder e migrations
- **Zod** - Validação de schemas

### Desenvolvimento

- **TSX** - Executor TypeScript para desenvolvimento
- **Docker** - Containerização da aplicação

## 🏗️ Arquitetura e Padrões

### Padrões de Projeto

- **MVC (Model-View-Controller)** - Separação de responsabilidades
- **Repository Pattern** - Abstração da camada de dados
- **Middleware Pattern** - Interceptação de requisições
- **Route Pattern** - Organização de endpoints

### Estrutura de Pastas

```
src/
├── controller/     # Controladores da aplicação
├── database/       # Configuração e migrations do banco
├── middlewares/    # Middlewares customizados
├── routes/         # Definição das rotas
├── utils/          # Utilitários e helpers
└── server.ts       # Arquivo principal da aplicação
```

## ⚙️ Configuração e Setup

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/emmanuelmarcosdeoliveira/restaurant-api

cd restaurant-api
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure o banco de dados**

```bash
# Execute as migrations
npm run knex migrate:latest

# Execute os seeds (opcional)
npm run knex seed:run
```

4. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

### Variáveis de Ambiente

O projeto utiliza configurações padrão, mas você pode configurar:

- `PORT` - Porta do servidor (padrão: 3334)

## 📁 Estrutura do Projeto

```
restaurant-api/
├── src/
│   ├── controller/           # Controladores
│   │   ├── orders-controller.ts
│   │   ├── products-controller.ts
│   │   ├── tables-controller.ts
│   │   └── tables-sessions-controller.ts
│   ├── database/            # Banco de dados
│   │   ├── migrations/      # Migrations do Knex
│   │   ├── seeds/          # Seeds do banco
│   │   └── knex.ts         # Configuração do Knex
│   ├── middlewares/        # Middlewares
│   │   └── error-handling.ts
│   ├── routes/             # Rotas da API
│   │   ├── index.ts
│   │   ├── orders-routes.ts
│   │   ├── products-routes.ts
│   │   ├── tables-routes.ts
│   │   └── tables-sessions-routes.ts
│   ├── utils/              # Utilitários
│   └── server.ts           # Servidor principal
├── migrations/             # Migrations (legado)
├── package.json
├── tsconfig.json
├── knexfile.ts
└── Dockerfile
```

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor com hot reload
npm run build        # Compila TypeScript para JavaScript
npm run start        # Inicia servidor em produção

# Banco de dados
npm run knex         # Executa comandos do Knex
npm run knex migrate:latest    # Executa migrations
npm run knex seed:run          # Executa seeds
```

## 🌐 Endpoints da API

### Mesas (Tables)

- `GET /tables` - Lista todas as mesas
- `POST /tables` - Cria uma nova mesa
- `DELETE /tables/:id` - Remove uma mesa

### Produtos (Products)

- `GET /products` - Lista todos os produtos
- `POST /products` - Cria um novo produto
- `PUT /products/:id` - Atualiza um produto
- `DELETE /products/:id` - Remove um produto

### Sessões de Mesa (Table Sessions)

- `GET /table-sessions` - Lista todas as sessões
- `POST /table-sessions` - Cria uma nova sessão
- `PUT /table-sessions/:id` - Atualiza uma sessão

### Pedidos (Orders)

- `GET /orders` - Lista todos os pedidos
- `POST /orders` - Cria um novo pedido
- `PUT /orders/:id` - Atualiza um pedido
- `DELETE /orders/:id` - Remove um pedido

---

## Contributors or owners

<img height="64px" src="https://res.cloudinary.com/delo0gvyb/image/upload/v1752287431/profile_mjvmdb.png"><br>

<small>Emmanuel Oliveira</small>

developed by 💖 [Emmanuel Oliveira](https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit)<br>

&copy; Todos os Direitos Reservados

### Contribute to the projects

> Clique na seta abaixo e veja como você pode contribuir para o projeto

<details close>
<summary>Como fazer uma contribuição ao Projeto ?</summary>
 Familiarize-se com a documentação do projeto, que geralmente inclui guias de instalação.<br>
Explore o código do projeto para entender sua estrutura e funcionamento.
<br>

**Faça um Fork**

Crie uma cópia (fork) do repositório original em sua conta do GitHub.<br>

<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">
<a href="https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo"></a>

**Clone o Repositório**

Isso criará uma cópia local do projeto, onde você poderá fazer suas modificações.

<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">
<a href="https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository"></a>

**Crie uma Nova Branch:**

Crie uma nova branch para isolar suas alterações.<br>
Isso facilita a organização do seu trabalho e a criação de pull requests.<br>

**Faça as Alterações:**

Crie funcionalidades, mude estilos ou resolva `bugs` que iram contribuir para a melhoria do Projeto.<br>

**Crie um Pull Request:**

Inclua uma descrição clara das suas alterações e explique como elas resolvem o problema ou melhoram o projeto.<br>
Solicitação: Envie um pull request para o repositório original, solicitando que suas alterações sejam incorporadas ao projeto.
<br>

**Revise e Responda a Feedback:**

Colabore: Os mantenedores do projeto podem solicitar alterações ou fornecer feedback sobre o seu código.

</details>

## Contact

[![Lindekin](https://img.shields.io/badge/--path?style=social&logo=Linkedin&logoColor=%230664C1&logoSize=auto&label=Linkedin&labelColor=%23fff&cacheSeconds=https%3A%2F%2Fwww.linkedin.com%2Fin%2Femmanuel-marcos-oliveira%2F)](https://www.linkedin.com/in/emmanuel-marcos-oliveira/)
[![WhatsApp](https://img.shields.io/badge/--path?style=social&logo=WhatsApp&logoColor=%231F3833&logoSize=auto&label=WhatsApp&color=%23fff&cacheSeconds=https%3A%2F%2Fwa.me%2F5511968336094)](https://wa.me/5511968336094)
<a href="mailto:ofs.dev.br@gmail.com"><img alt="Static Badge" src="https://img.shields.io/badge/--path?style=social&logo=Gmail&logoSize=auto&label=Gmail&cacheSeconds=--query&link=mailto%3Adev-oliveira%40outlook.com.br%22"> </a>

<sub>😁Obrigado por chegar até aqui!<sub>

## 📝 Licença

![Static Badge](https://img.shields.io/badge/--path?style=plastic&logo=mit&logoSize=auto&label=license%20MIT&labelColor=%23555555&color=%2397CA00)<br>
Released in 2025 This project is under the **MIT license**<br>
<br>

<div align="center">
**⭐ Se este projeto foi útil para você, considere dar uma estrela!**

</div>
