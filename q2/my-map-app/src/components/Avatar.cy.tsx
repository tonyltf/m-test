/// <reference types="cypress" />
import Avatar from "./Avatar";

describe("Avatar", () => {
  it("uses name on the Avatar component", () => {
    cy.mount(<Avatar firstName="Tony" lastName="Li" />);
    cy.get("[data-cy=avatar]").should("contains.text", "TL");
  });
  it("uses picture on the Avatar component", () => {
    cy.mount(<Avatar firstName="Tony" lastName="Li" picture="https://placebear.com/225/210" />);
    cy.get("[data-cy=avatar]").children("img").should("have.length", 1);
  });
});
