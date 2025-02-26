describe('Testes de Gerenciamento', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.login()
  })

  it('Encontrnado a rota Portal transparencia', () => {
    cy.wait(1000)
    cy.get("#Transparence").click()
  })

  const access_title_id = '123133_2'
  it('Efeturando download da Lista Concluída',()=>{
      cy.wait(2000)
      cy.get("#Transparence").click()
      cy.get("#123133_2").click()
      cy.wait(2000)
      cy.get("#button_captura").click()
  })

})