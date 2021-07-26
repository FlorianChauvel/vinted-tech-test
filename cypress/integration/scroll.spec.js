describe('scrolling', () => {
  it('should get some more results when scrolling to the bottom of the page', () => {
    cy.visit('http://localhost:3000');

    // checks that splash screen appears
    cy.get('.splash-screen', { timeout: 20000 }).should('exist');

    // checks that splash screen disappears
    cy.get('.splash-screen').should('not.exist');

    // checks that images appear
    cy.get('.photo-display').should('exist');

    // scroll to the bottom
    cy.get('.loader').scrollIntoView();

    // checks that the api has been called
    cy.intercept('**?method=flickr.photos.getRecent**').as('photos.getRecent');
    cy.wait('@photos.getRecent');
  });
});
