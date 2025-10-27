/* eslint-disable no-undef */
import React from 'react'
import { mount } from 'cypress/react'
import { useContext } from 'react'
import ProdutosProvider, { ProdutosContext } from '../../src/context/ProdutosProvider'
import { SearchBar } from '../../src/components/SearchBar/SearchBar'


const WrappedSearhBar = () => {
  const { filterProdutos } = useContext(ProdutosContext)
  return (<SearchBar filterFunction={filterProdutos} />)
}

Cypress.Commands.add('mount', (component) => {
  return mount(<ProdutosProvider>{component}</ProdutosProvider>)
});

describe('<ProdutosProvider><SearchBar/></ProdutosProvider>', () => {
  it('renders com contexto', () => {
    // see: https://on.cypress.io/mounting-react

    cy.mount(<WrappedSearhBar />)

  })
})