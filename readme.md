# Desafio QA - Nexdom
## Teste Automatizado de FrontEnd com Cypress

Este projeto contém testes automatizados para o frontend da Nexdom e para a API do GitHub.

## Pré-requisitos
Instalação de:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Cypress](https://www.cypress.io/)
- Uma conta no [GitHub](https://github.com/)

## Tecnologias Utilizadas
- **Cypress** - Framework de testes
- **Node.js** - Ambiente de execução
- **Cucumber** - Para escrita dos cenários em Gherkin

##Instalação

### Clone o Repositório
```bash
git clone https://github.com/juliana-rnh/Nexdom
cd desafio_qa
```

### Instale as dependências em uma pasta
```bash
npm init -y
npm install cypress --save-dev
npm install --save-dev @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor

```



## Executando os testes

### Testes Frontend (Cypress)

Para executar os testes do Cypress no terminal:

```bash
npx cypress run
```




