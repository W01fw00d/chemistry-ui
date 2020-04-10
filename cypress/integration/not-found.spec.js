describe('Try to navigate to unknown url', function() {
  it('User navigates to root', function() {
    cy.visit('');
    cy.url().should('include', 'list');
  });

  it('User checks that not found message is rendered', function() {
    cy.visit('fake');
    cy.contains('not found');
  });
});
