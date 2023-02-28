import Friends from "../../src/pages/Friends";

describe("Friends", () => {
  it("display list frieneds with mock data", () => {
    cy.intercept("GET", "/templates/-xdNcNKYtTFG/data", {
      fixture: "friend.json",
    });
    cy.visit("http://localhost:5173/");
    cy.get("[data-cy=avatar]").children().should("have.length", 1);
    cy.get("[data-cy=card]").should("contain.text", "Tony Li");
  });
});
