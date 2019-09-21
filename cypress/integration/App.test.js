import React from 'react';
import ShelvesPage from '../../src/ShelvesPage';

describe('Team App', function() {
  it('successfully loads', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  });

  it('renders Shelves Page on load', () => {
    cy.get('h1').should('have.text', 'MyReads');
  });
});
