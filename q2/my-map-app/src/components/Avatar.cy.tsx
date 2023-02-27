import Avatar from "./Avatar";

describe("Avatar", () => {
  it("uses name on the Avatar component", () => {
    cy.mount(<Avatar firstName="Tony" lastName="Li" />);
    // cy.get('button').should('contains.text', 'Click me!')
    cy.get('div').should('contains.text', 'TL');
  });
});
