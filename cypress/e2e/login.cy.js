
let url = "https://8426-191-37-210-25.ngrok-free.app"
describe('Acessando a Home', () => {
  it('Visita a página inicial', () => {
    cy.visit(url);
    cy.wait(2000)
    cy.get('body').then(($body) => {
      if ($body.find('button:contains("Visit Site")').length > 0) {
        cy.get('button:contains("Visit Site")').click();
      }
    });
    cy.getCookie("auth_jrf").should("be.null");
    cy.get('#logout').click();
    cy.contains("Google").click();
    cy.visit(url);
    // cy.contains('/assets/?unstable_path=.%2Fassets%2Fheader/Exit.png').click()
  });
});