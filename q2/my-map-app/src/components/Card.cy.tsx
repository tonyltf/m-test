/// <reference types="cypress" />
import Card from "./Card";

describe('Card', () => {
  it('display a user card', () => {
    cy.mount(<Card firstName="Tony" lastName="Li"/>);
  })
})