/// <reference types="cypress" />
import Card from "./Card";

describe("Card", () => {
  it("display a user card", () => {
    cy.mount(<Card id="" firstName="Tony" lastName="Li" isLink={false} />);
    cy.get("[data-cy=card]").should("contains.text", "TL");
    cy.get("[data-cy=card]").should("contains.text", "Tony Li");
  });
  it("display a user card with image", () => {
    cy.mount(
      <Card
        id=""
        firstName="Tony"
        lastName="Li"
        picture="https://placebear.com/225/210"
        isLink={false}
      />
    );
    cy.get("[data-cy=card] img").should("have.length", 1);
  });
});
