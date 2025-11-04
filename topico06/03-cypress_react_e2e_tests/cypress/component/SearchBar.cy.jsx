/* eslint-disable no-undef */
import React from 'react'
import {SearchBar} from '../../src/components/SearchBar/SearchBar'

describe('<SearchBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SearchBar filterFunction={()=>{}}/>)
    cy.get('button').contains('Pesquisar')
  })
})