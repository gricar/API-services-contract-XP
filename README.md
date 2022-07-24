# Bem-vindo a API de contratos de serviços financeiros da XP !

### Descrição
> É uma aplicação que representa operações de investimento de ações do mercado financeiro e com algumas funcionalidades de uma conta digital.

<details>
  <summary><strong>Principais funcionalidades ✨</strong></summary>

  > As principais responsabilidade desta API estão relacionadas a integração com o banco de dados, seguindo os princípios do REST, com as requisições feitas baseados nos *endpoints*:
  
  | Caminho | Responsabilidade |
  |---|---|
  | `/investments/assets` | Listar todos ativos relacionados as corretoras e quantidade disponíveis para negociação |
  | `/investments/assets/:ticker` | Lista o ativo e as respectivas corretoras que tenham disponíveis para negociação |
  | `/investments/assets/client/:code` | Lista todos ativos da carteira do cliente nas respectivas corretoras |
  | `/investments/buy` | Enviar ordem de compra do ativo |
  | `/investments/sell` | Enviar ordem de venda do ativo |
  | `/banking/conta` | Listar de todos clientes os saldos e suas correspondentes corretoras |
  | `/banking/conta/:clientCode` | Lista o cliente e os respectivos saldos em suas corretoras |
  | `/banking/conta/deposito` | Realizar depósito na conta corrente |
  | `/banking/conta/saque` | Realizar saque da conta corrente |
  | `/login` | Realizar *login* na aplicação para gerar o token de autenticação |
  
</details>

<details>
  <summary><strong>Tecnologias utilizadas 👨‍💻</strong></summary>

  - [`TypeScript`](https://www.typescriptlang.org)
  - [`Node.js`](https://nodejs.org/)
  - [`Express`](https://expressjs.com/)
  - [`Docker`](https://www.docker.com/)
  - [`Sequelize`](https://sequelize.org/)
  - [`MySQL`](https://www.mysql.com/)
  - [`ESLint`](https://eslint.org/)
</details>

<details>
  <summary><strong>Executando o projeto 🌐</strong></summary>

  - É necessário ter o `Docker` e o [`Docker Compose`](https://docs.docker.com/compose) instalado em sua máquina.

  - Clone o projeto: `git clone git@github.com:gricar/API-services-contract-XP.git`.

  - Entre na pasta do projeto: `cd API-services-contract-XP`.

  - Instale as dependências: `npm install`.

  - Execute o **script** para iniciar o Docker Compose: `npm run compose:up`.

  - Esses serviços inicializarão dois containeres: `api-services-contract` e `services-contract-db`.

  - Execute o **script** `npm run prestart` para acessar o terminal do container.

  - Execute o **script** `npm run db:reset` para restaurar o banco de dados.

  - Execute o **script** `npm run dev` para executar a aplicação.

  - Após um tempo, os contêineres estarão prontos e você poderá acessar o projeto em: http://localhost:3002

  - Para desligar os containers, utilize o script: `npm run compose:down`
  
  ***Obs**: A aplicação contém dados fictícios de usuários, ativos financeiros e saldos bancários*.
</details>

<details>
  <summary><strong>Tomadas de decisão 💡</strong></summary>

  1. Definir a linguagem de programação para desenvolvimento da aplicação (`TypeScript`).
  2. Optado por utilizar contêineres (`Docker`) para criar ambientes isolados dentro de um servidor.
  3. Utilizado o `ESLint` para padronização do código e redução de erros. É feito uma validação no código sempre que tem-se um novo _pull request_ ou _push_ na branch.
  4. Estruturar o DER (Diagrama de Entidade e Relacionamento) da aplicação baseado nas variáveis que cada tabela poderia ter.
  6. Desenvolver a aplicação utilizando POO (Programação Orientada a Objeto) e ORM (Mapeamento de Objeto-Relacional). 
  7. Arquitura MSC (_Models_ - _Services_ - _Controllers_).
  8. Biblioteca para tratamento de erros (`express-async-errors`).
  9. Rotas para serviços de **Investimentos** e **Bancos**.
  10. Rotas que exigem autenticação com JWT (_JSON Web Token_).

</details>
