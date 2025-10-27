/* eslint-disable no-undef */
/// <reference types="cypress" />

const URL = 'http://localhost:5173/';
const DELAY = 2000;
let busca = 'Test';
let regexBusca = /test/i


context('Actions', () => {
  // it("Aguarda 2s para iniciar os testes: ", ()=> cy.wait(2000)); 
  beforeEach(() => {
    cy.wait(DELAY)
    cy.visit(URL)
  })

  afterEach(() => {
    cy.wait(DELAY); // waits 2 seconds after each test
  });


  it('Digitando no campo de busca "Test" e verificando o resultado', () => {
    // https://on.cypress.io/type
    busca = 'Test';
    regexBusca = /test/i

    cy.get('input[type=search]').type(busca)
    cy.get('input[type=search]').should('have.value', busca)
    cy.wait(1000)
    cy.get('form button').click()
    cy.get('main>div>div>div>div>a')
      .find('div>h3')
      .invoke('text')
      .should('match', regexBusca)
  });

  it('Testar se a logo volta para a página inicial', () => {
    cy.get('nav')
      .find('div>a>img')
      .click()
    cy.get('main>div>div>div>div>a')
  });



  it('Digitando no campos de busca "Est" e verificando o resultado após limpa campos de busca', () => {
    // https://on.cypress.io/type
    busca = 'Est';
    regexBusca = /est/i

    cy.get('input[type=search]').type(busca)
    cy.get('input[type=search]').should('have.value', busca)
    cy.get('form button').click()
    cy.get('main>div>div>div>div>a')
      .find('div>h3')
      .invoke('text')
      .should($texts => {
        const include = $texts.toLocaleLowerCase().includes(busca.toLocaleLowerCase())
        expect(include).to.be.true
      })

    cy.wait(2000);
    cy.get('input[type=search]').clear()
    cy.get('input[type=search]').should('have.value', '')
    cy.get('input[type=search]').blur()
    cy.get('main>div>div>div>div')
      .find('a')
      .should($a => {
        const links = $a.map((i, el) => Cypress.$(el).attr('href'))
        expect(
          links.get()?.length > 1,
          "Espera o retorno de vários links").to.be.true

      });
  });

  describe('Navegação em resultado do filtro!', () => {
    busca = 'alias'
    regexBusca = /alias/i
    it(`Filtra pelo produto ${busca}, acessao link e volta`, () => {

      busca = 'alias'
      regexBusca = /alias/i
      cy.get('input[type=search]').type(busca)
      cy.get('input[type=search]').should('have.value', busca)
      cy.wait(1000);
      cy.get('form button').click()
      cy.get('main>div>div>div>div>a')
        .find('div>h3')
        .invoke('text')
        .should('match', regexBusca)
      cy.wait(2000);
      cy.get('main>div>div>div>div>a')
        .first().click()
      cy.wait(2000);
      cy.get('main>div>div>div>a')
        .find('div>h3')
        .invoke('text')
        .should('match', regexBusca)
      cy.wait(1000);
      cy.get('main>div>a')
        .should('have.text', 'Voltar')
        .click()
    });
  });
});