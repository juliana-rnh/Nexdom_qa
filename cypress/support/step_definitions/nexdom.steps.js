import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que acesso o site da Nexdom', () => {
  cy.visit('/');
});

Then("devo ver o logo da Nexdom", () => {
  cy.get('img[src="https://nexdom.tec.br/wp-content/uploads/2024/10/logo_navbar.svg"]').should("be.visible");
});

Then("devo ver o menu de navegação", () => {
  cy.get('nav, header').should('be.visible');
});

When("desço até o final da tela", () => {
  cy.scrollTo("bottom");
});

Then('devo ver o botão Trabalhe conosco!', () => {
  cy.contains(".elementor-icon-list-text", "Trabalhe conosco!")
  .should("be.visible");
});

Then('ele deve possuir o link para o site da Gupy', () => {
  cy.contains("a", "Trabalhe conosco!")
  .should("have.attr", "href", "https://vempranexdom.gupy.io/");
});
