
describe('Testes de Gerenciamento', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.login()
  })

  
  it('Encontrnado a rota Usuario', () => {
    cy.wait(1000)
    cy.get("#User").click()
  })


  it('Testando Campos nova assinatura', () => {
      cy.wait(1000)
      cy.get("#User").click()
      cy.wait(1000)
      cy.contains("Assinar").click()
      cy.wait(1000)
      cy.contains("Fechar").click()
      cy.contains("Assinar").click()
      cy.wait(4000)
      cy.contains("Limpar").click()
      cy.wait(4000)
      cy.contains("Salvar").click()
      cy.contains("Sucesso").should('exist')
  })


})