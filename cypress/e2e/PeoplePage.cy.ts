describe('People Page Tests', () => {
  it('Should Navigate to People Page', () => {
    cy.visit('http://localhost:4000/people');
  });

  it('Should include People Page link and Analytics Page link in the navigation menu', () => {
    cy.visit('http://localhost:4000/people');

    cy.get('header').contains('People Page');
    cy.get('header').contains('Analytics Page');
  });

  it('Should contain the People heading', () => {
    cy.visit('http://localhost:4000/people');

    cy.get('h1').contains('People');
  });

  it('Should contain cards components with Name and Email', () => {
    cy.visit('http://localhost:4000/people');

    cy.get("[data-testid='person-card']").contains('Loutitia Steaning');
    cy.get("[data-testid='person-card']").contains('lsteaning0@usnews.com');

    cy.get("[data-testid='person-card']").contains('Ewen McLewd');
    cy.get("[data-testid='person-card']").contains('emclewd1@bbb.org');

    cy.get("[data-testid='person-card']").contains('Benson Possek');
    cy.get("[data-testid='person-card']").contains('bpossek3@devhub.com');

    cy.get("[data-testid='person-card']").contains('Derril Santorini');
    cy.get("[data-testid='person-card']").contains('dsantorini4@wp.com');

    cy.get("[data-testid='person-card']").contains('Lisa Cobb');
    cy.get("[data-testid='person-card']").contains('lcobb5@trellian.com');
  });

  it('Should go to individual Person Page when clicking on the Person card', () => {
    cy.visit('http://localhost:4000/people');

    cy.get("[data-testid='person-card']").contains('Loutitia Steaning').click();
    cy.url().should('include', '/people/1');

    cy.visit('http://localhost:4000/people');

    cy.get("[data-testid='person-card']").contains('Ewen McLewd').click();
    cy.url().should('include', '/people/2');

    cy.visit('http://localhost:4000/people');

    cy.get("[data-testid='person-card']").contains('Benson Possek').click();
    cy.url().should('include', '/people/4');

    cy.visit('http://localhost:4000/people');

    cy.get("[data-testid='person-card']").contains('Derril Santorini').click();
    cy.url().should('include', '/people/5');

    cy.visit('http://localhost:4000/people');

    cy.get("[data-testid='person-card']").contains('Lisa Cobb').click();
    cy.url().should('include', '/people/6');
  });
});
