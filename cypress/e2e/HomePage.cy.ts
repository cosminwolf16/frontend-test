describe('Home Page Tests', () => {
  it('Should Navigate to Home Page', () => {
    // Start from the index page
    cy.visit('http://localhost:4000/');

    // // Find a link with an href attribute containing "about" and click it
    // cy.get('a[href*="about"]').click();

    // // The new url should include "/about"
    // cy.url().should('include', '/about');

    // // The new page should contain an h1 with "About page"
    // cy.get('h1').contains('About Page');
  });
});
