# Bem-vindo ao projeto API de contratos de serviços financeiros da XP !

### Descrição
É uma aplicação que representa operações de investimento de ações do mercado financeiro e com algumas funcionalidades de uma conta digital.

<details>
  <summary><strong>Principais funcionalidades</strong></summary>

  As principais responsabilidade desta API são de realizar a integração com um banco de dados, seguindo os princípios do REST, com as requisições feitas baseados nos endpoints, podendo:
  1. Enviar ordens de compra/venda de ativos disponíveis nas corretoras;
  2. Listar todos ativos relacionados as corretoras e quantidade disponíveis para negociação;
  3. Listar os ativos da carteira de investimento do cliente; 
  4. Listar as corretoras que tenham disponíveis o ativo procurado;
  5. Consultar o saldo da conta corrente por cliente;
  6. Listar de todos clientes os saldos e suas correspondentes corretoras;
  7. Realizar depósitos/saque da conta corrente.
</details>

<details>
  <summary><strong>👨‍💻 Tecnologias utilizadas</strong></summary>

  - `TypeScript`
  - `Node.js`
  - `Express`
  - `Docker`
  - `sequelize`
  - `MySQL`
  - `Linter`
</details>

<details>
  <summary><strong>Executando o projeto</strong></summary>

  - É necessário ter o `Docker` e o `Docker Compose` instalado em sua máquina.

  - Clone o projeto: `git clone git@github.com:gricar/API-services-contract-XP.git`.

  - Entre na pasta do projeto: `cd API-services-contract-XP`.

  - Instale as dependências: `npm install`.

  - Execute o **script** para iniciar o Docker Compose: `npm run compose:up`.

  - Esses serviços inicializarão dois containeres: `api-services-contract` e `services-contract-db`.

  - Execute o **script** para executar a aplicação: `npm start`

  Após um tempo, os contêineres estarão prontos e você poderá acessar o projeto em: http://localhost:3002

  - Para desligar os containers, utilize o script: `npm run compose:down`
</details>

<details>
  <summary><strong>Tomadas de decisão</strong></summary>
  1. Definir a linguagem de programação para desenvolvimento da aplicação (`TypeScript`).
  2. Optado por utilizar contêineres (`Docker`) para rodar a aplicação pois independe do sistema operacional, além de ser mais veloz e fácil de escalar sua infraestrutura.
  3. Utilizado o `ESLint` para padronização do código e redução de erros. É feito uma validação no código sempre que tem-se um novo pull request ou push na branch.
  4. Estruturar o DER (Diagrama de Entidade e Relacionamento) da aplicação baseado nas variáveis que cada tabela poderia ter.
  6. Desenvolver a aplicação utilizando POO (Programação Orientada a Objeto) e ORM (Mapeamento de Objeto Relacional). 
  7. Arquitura MSC (Model - Service - Controller).
  8. Biblioteca para tratamento de erros (`express-async-errors`).
  9. Rotas para serviços de *Investimentos* e *Bancos*.
  10. Rotas que exigiam autenticação com JWT (Json Web Token).

</details>