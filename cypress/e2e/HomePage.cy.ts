describe('Home Page Tests', () => {
  it('Should Navigate to Home Page', () => {
    cy.visit('http://localhost:4000/');
  });

  it('Should include People Page link and Analytics Page link in the navigation menu', () => {
    cy.visit('http://localhost:4000/');

    cy.get('header').contains('People Page');
    cy.get('header').contains('Analytics Page');
  });

  it('Should go to /people route and page when clicking on People Page', () => {
    cy.visit('http://localhost:4000/');

    cy.get('header').contains('People Page').click();
    cy.url().should('include', '/people');
  });

  it('Should go to /analytics route and page when clicking on Analytics Page', () => {
    cy.visit('http://localhost:4000/');

    cy.get('header').contains('Analytics Page').click();
    cy.url().should('include', '/analytics');
  });
});
