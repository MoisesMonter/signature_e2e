describe('Acessando a Home', () => {
  it('Visita a página inicial', () => {
    cy.visit(process.env.CYPRESS_BASE_URL);
    cy.getCookie("auth_jrf").should("be.null");
    cy.get('#logout').click();
    cy.contains("Google").click();
    cy.visit(process.env.CYPRESS_BASE_URL);
    // cy.contains('/assets/?unstable_path=.%2Fassets%2Fheader/Exit.png').click()
  });
});