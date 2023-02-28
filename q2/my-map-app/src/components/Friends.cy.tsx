/// <reference types="cypress" />
import Friends from "../pages/Friends";

describe("Friends", () => {
  it("display list frieneds with mock data", () => {
    cy.intercept("GET", "/templates/-xdNcNKYtTFG/data", {
      fixture: "friend.json",
    });
    cy.mount(<Friends />);
    cy.get("[data-cy=avatar]").children().should("have.length", 1);
    cy.get("[data-cy=card]").should("contain.text", "Tony Li");
  });
});
