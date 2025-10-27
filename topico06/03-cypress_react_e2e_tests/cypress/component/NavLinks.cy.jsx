/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { mount } from 'cypress/react'
import "../../src/styles/main.css"
import RouterStub from './RouterStub';
import { NavLinks } from '../../src/components/NavLinks/NavLinks';

describe("NavLink Teste", () => {
    it("Teste dos links da barra superior de navegação!", () => {
        cy.mount(<RouterStub component={<NavLinks   />} />)
        cy.get('a').contains("Log in")

    });

    it("Teste com usuário!", () => {
        
        const user = {name:"User Test"}
        cy.wait(2000);
        cy.mount(<RouterStub component={<NavLinks user={user}/>} />)
        cy.get('a').contains("Dashboard")
    });
});