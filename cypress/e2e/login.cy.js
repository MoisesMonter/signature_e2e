describe('Acessando a Home', () => {
  it('Visita a página inicial', () => {
    cy.visit('http://localhost:8081');
    cy.getCookie("auth_jrf").should("be.null");
    cy.get('#logout').click();
    cy.contains("Google").click();
    cy.visit('http://localhost:8081');
    // cy.contains('/assets/?unstable_path=.%2Fassets%2Fheader/Exit.png').click()
  });
});