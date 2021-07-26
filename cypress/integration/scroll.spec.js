describe('example to-do app', () => {
  it('should get some more results when scrolling to the bottom of the page', () => {
    cy.visit('http://localhost:3000');

    // wait for splash screen to appear
    cy.get('.splash-screen', { timeout: 20000 }).should('exist');

    // wait for splash screen to disappear
    cy.get('.splash-screen', { timeout: 20000 }).should('not.exist');

    // scroll to the bottom
    cy.scrollTo(0, 20000);

    // should trigger a load
    cy.intercept('**?method=flickr.photos.getRecent**').as('photos.getRecent');
    cy.wait('@photos.getRecent');
  });
});
