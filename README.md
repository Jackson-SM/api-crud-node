# Objetivo do Projeto
> O objetivo deste projeto é criar uma API em JavaScript para executar operações básicas de CRUD (Create, Read, Update e Delete) em uma tabela de dados. A API será desenvolvida com os conceitos e técnicas mais atualizadas do JavaScript e seguirá as melhores práticas de desenvolvimento para garantir a qualidade e manutenibilidade do código. Será documentada adequadamente para facilitar o uso por outros desenvolvedores.

# Detalhes Tecnicos

## Como instalar e Iniciar o projeto.
Utilizando Npm:
```
npm install
npm run dev
```

Utilizando Yarn:
```
yarn
yarn dev
```

## Principais Dependências:
- **Express**: framework para Node.js que ajuda a criar aplicativos web e APIs;
- **Sequelize**: ORM para Node.js que permite interagir com bancos de dados relacionais usando objetos ao invés de SQL;
- **Json Web Token**: padrão aberto para autenticação baseada em tokens JSON usada para autenticar usuários em aplicativos web e APIs;
- **BCrypt**: biblioteca para Node.js que fornece funções de hash seguras para criptografar senhas e outras informações confidenciais.


## Arquivos de Configurações
- **eslintrc.js**: arquivo de configuração do ESLint, que ajuda a garantir a consistência e a legibilidade do código JavaScript, definindo regras personalizadas e prevenindo erros de codificação.

- **prettierrc.js**: arquivo de configuração do Prettier, que ajuda a manter a consistência da aparência do código JavaScript, definindo regras personalizadas de formatação.

- **.sequelizerc**: arquivo de configuração do Sequelize, que permite definir caminhos personalizados para diretórios de modelos, migrações e configurações do banco de dados.

- **.env.example**: arquivo de exemplo de variáveis de ambiente, que é usado para armazenar informações confidenciais ou de configuração, como senhas, chaves de API ou URLs do banco de dados, fornecendo um modelo de como as variáveis de ambiente devem ser configuradas.

# Considerações finais:
- Aprendi a manipular o banco de dados utilizando o ORM sequelize com PostgreSQL;
- Configurei o projeto e padronizei o código utilizando Eslint + Prettier;
- Aprendi mais sobre requisições e chamadas HTTP utilizando Express;
- Fiz autenticação de usuário e middlewares utilizando Json Web Token;
