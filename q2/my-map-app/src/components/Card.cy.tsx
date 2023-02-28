/// <reference types="cypress" />
import Card from "./Card";

describe("Card", () => {
  it("display a user card", () => {
    cy.mount(<Card firstName="Tony" lastName="Li" />);
    cy.get("[data-cy=card]").should("contains.text", "TL");
    cy.get("[data-cy=card]").should("contains.text", "Tony Li");
  });
});