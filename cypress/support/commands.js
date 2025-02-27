// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
let url_base = "https://8426-191-37-210-25.ngrok-free.app"
Cypress.Commands.add('login', () => {
  cy.viewport(1600, 900);
  cy.visit(url_base); 
  cy.wait(1500)
  cy.get('body').then(($body) => {
    if ($body.find('button:contains("Visit Site")').length > 0) {
      cy.get('button:contains("Visit Site")').click();
    }
  });
  cy.wait(1500)
  cy.getCookie('auth_jrf').should('be.null');
  cy.get('#logout').click();
  cy.contains('Google').click(); 
  cy.visit(url_base); 
});


Cypress.Commands.add('dragAndDrop', (sourceSelector, targetSelector) => {
  cy.get(sourceSelector).then(($source) => {
    const sourceRect = $source[0].getBoundingClientRect();
    const sourceX = sourceRect.left + (sourceRect.width / 2);
    const sourceY = sourceRect.top + (sourceRect.height / 2);
    cy.get(sourceSelector).trigger('mousedown', { which: 1, pageX: sourceX, pageY: sourceY });

    cy.get(targetSelector).then(($target) => {
      const targetRect = $target[0].getBoundingClientRect();
      const targetX = targetRect.left + (targetRect.width / 2);
      const targetY = targetRect.top + (targetRect.height / 2);
      cy.get('body').trigger('mousemove', { pageX: targetX, pageY: targetY });
    });

    cy.get(targetSelector).trigger('mouseup');
  });
});