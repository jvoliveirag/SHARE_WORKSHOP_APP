# Workshops de desenvolvimento de software - SHARE

- <a href="#objetivo">Objetivo</a>
- <a href="#req">Requisitos</a>
- <a href="#desenv">Desenvolvimento</a>
- <a href="#feat">Features</a>
- <a href="#exec">Como executar</a>
- <a href="#melhorias">Melhorias</a>

## 🎯 <a id="objetivo">Objetivo</a>
O objetivo destes workshops é construir uma aplicação completa para aplicar os conceitos e tecnologias do mundo do desenvolvimento de software. A 

Trata-se do dsenvolvimento de uma sistema que permite o gerenciamento dos professores de uma empresa. 
Os requisitos serão detalhados a seguir.

- <b><u>Contextualização:</u></b> imagine que a você foi contratado para desenvolver um sistema para uma empresa que precisa realizar o controle de seu pessoal (neste caso, professores). Para tal a empresa precisa registrar e monitorar os professores cadastrados. O desafio consiste em criar uma aplicação para cadastro, atualização, deleção e consulta de professores.

## 📋 <a id="req">Requisitos</a>
  - VSCode;
  - Node.js;
  - npm;
  - Express;
  - Jest;
  - React;
  - Docker.

## 🔨 <a id="desenv">Desenvolvimento</a>

### Tecnologias:
  - <b><u>Front End:</u></b> React JS (Vite, tailwindCSS, Shadcn/ui, radix-ui);
  - <b><u>API:</u></b> NodeJS (express);
  - <b><u>Linguagem:</u></b> TypeScript;
  - <b><u>Banco de Dados:</u></b> Prisma ORM* (abstração do banco).

  \* Pode ser facilmente alterado por conta dos padrões aplicados (<a href="#repo">SOLID - LSP</a>) apenas alterando a implementação do banco.

### Boas práticas:
- Package by feature:
  - Padrão onde estrutura-se as pastas da app por funcionalidade
  - Ex.: Tudo relacionado à funcionalidade de criação do professor vai no mesmo diretório (CreateTechnician)

- Single Responsibility Principle: 
  - Ex.: classe CreateTechnicianUseCase
  - Tem a <b>única</b> responsabilidade de crar um professor
  - Não se preocupa/responsabiliza em saber onde vai ser salvo, por exemplo, <b>apenas salva</b>.
  - Um único arquvio que detém toda a regra de negócio para salvar/criar um professor, ou seja, sempre que algum componente quiser salvar um professor, basta usar essa classe.

- Liskov Substitution Principle: 
  - Ex.: <a id="repo">Repository</a>
  - Quando recebemos techniciansRepository no constructor da classe CreateTechnicianUseCase e falamos que o tipo dele é ITechniciansRepository, ou seja, uma <b>interface</b> que diz os métodos que haverão no repository, não importa o repository (banco de dados), se tiver os métodos declarados vai funcionar.

- Dependency Inversion Principle
  - Não dependo diretamentente da implementação, mas apenas da abstração, do repository (interface) - ITechniciansRepository. Uso do <i>DTO</i> (CreateTechnicianDTO) como interface/abstração

## ⚡ <a id="feat">Features</a>
- Validações dos campos;
- Testes unitários e de integração;
- Qualidade do código:
  - SOLID;
  - Clean Code;
  - Padrões de desenvolvimento;
  - Commits semânticos; 
  - Variáveis de ambiente.
- Envio de email quando o tecnico é cadastrado (nodemailer e mailtrap).
- Filtrar professor por email;
- 100% Responsivo.

## ⚙️ <a id="exec">Como executar</a>

Clone este repositório em sua máquina e siga as instruções a seguir.

### Aplicação:

- Na pasta /API, inicie o servidor com o seguinte comando:
```
npm start
```

- Inicie também o banco de dados (abstração - prisma ORM):
```
npx prisma studio
```

- Em seguida, na pasta /frontend, inicie a aplicação:
```
npm run dev
```

### Testes:
No diretório /API, execute o comando a seguir:
```
npm run test
```


## 📈 <a id="melhorias">Sugestões de melhorias</a>
  - Refatorar para melhorar ainda mais a escrita e manutenção do código;
  - Escrever mais casos de teste e gerar relatórios;
  - Implementar uma pipeline de CI/CD;
  - Aplicar um banco de dados (MySQL, MongoDB, PostgreSQL);
  - Hospedar;
  - Foto do professor (url da imagem no banco ou alguma API)
  - Linter (padronizar formatação, espaçamento/identação, pontuação, etc)
