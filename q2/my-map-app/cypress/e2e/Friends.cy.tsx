
describe("Friends", () => {

  beforeEach(() => {
    cy.intercept("GET", "/templates/-xdNcNKYtTFG/data", {
      fixture: "friend.json",
    });
    cy.visit("http://localhost:5173/");
  });


  it("display list friends with mock data", () => {
    cy.get("[data-cy=avatar]").children().should("have.length", 1);
    cy.get("[data-cy=card]").should("contain.text", "Tony Li");
  });

  it("show detail friend info with mock data with clicked", () => {
    cy.get("[data-cy=card]").click();
    cy.url().should('include', '/friend/ae736d8f-5a08-4bab-8e30-1eb2079e5dc2');
    cy.get("[data-cy=card]").should("contain.text", "Tony Li");;
  });


  it("show keeps in the detail page info after reload", () => {
    cy.get("[data-cy=card]").click();
    cy.url().should('include', '/friend/ae736d8f-5a08-4bab-8e30-1eb2079e5dc2');
    cy.reload();
    cy.url().should('include', '/friend/ae736d8f-5a08-4bab-8e30-1eb2079e5dc2');
    cy.get("[data-cy=card]").should("contain.text", "Tony Li");
  });

});
