describe('Home Page Tests', () => {
  it('Should Navigate to Person Page', () => {
    cy.visit('http://localhost:4000/people');

    cy.get("[data-testid='person-card']").contains('Loutitia Steaning').click();
    cy.url().should('include', '/people/1');
  });

  it('Should Navigate to Person Page and form should be prefilled with data', () => {
    cy.visit('http://localhost:4000/people');

    cy.get("[data-testid='person-card']").contains('Loutitia Steaning').click();
    cy.url().should('include', '/people/1');

    cy.get("input[name='first_name']").should('have.value', 'Loutitia');
    cy.get("input[name='last_name']").should('have.value', 'Steaning');
    cy.get("input[name='date_of_birth']").should('have.value', '13/05/1978');
    cy.get("input[name='email']").should('have.value', 'lsteaning0@usnews.com');
    cy.get("input[name='industry']").should('have.value', 'n/a');
    cy.get("input[name='salary']").should('have.value', '98803.83');
    cy.get("input[name='years_of_experience']").should('have.value', '6.6');
  });
});
