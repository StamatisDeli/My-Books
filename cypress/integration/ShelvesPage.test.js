//import React from 'react';
//import ShelvesPage from '../../src/ShelvesPage';

describe('Shelves Page', function() {
  it('displays 3 Book Shelves', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  });

  it('navigates to Book Finder when (+) is clicked', () => {
    cy.contains('Add a book').click();
    cy.url().should('include', '/BookFinder');
  });
});
