describe('Analytics Page Tests', () => {
  it('Should Navigate to Analytics Page using the navigation menu on the Home Page', () => {
    cy.visit('http://localhost:4000');
    cy.get('header').contains('Analytics Page').click();
    cy.url().should('include', '/analytics');
  });
});
