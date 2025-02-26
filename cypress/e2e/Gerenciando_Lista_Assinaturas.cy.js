
describe('Testes de Gerenciamento', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.login()
  })
  const ambiente_teste='12313'
  const senha = "test"

  it('Encontrnado a rota Management', () => {
    cy.get("#Management").click()
  })

  it('Verificando seus filtros', () => {
    cy.wait(1000)
    cy.get("#Management").click()
    cy.wait(1000)
    cy.contains("Abertas").click()
    cy.wait(1500)
    cy.contains("Finalizados").click()
    cy.wait(1500)
    cy.contains("Descartados").click()
  })


  it('Caminho Lógico da Criação de uma Lista de Assinaturas', () => {
    //Time-life-creation 1-
    cy.wait(1000)
    cy.get("#Management").click()
    cy.wait(1000)
    cy.contains("Criar Nova Lista").click()
    cy.wait(1000)
    cy.get("#input_title").type(ambiente_teste)
    cy.get("#input_description").type('teste1 texto')
    cy.get("#input_date").click().type('2026-11-25')
    cy.contains("Avançar").click()
    //Time-life-creation 2-
    cy.get("#input_password1").type(senha)
    cy.get("#input_password2").type(senha)
    cy.get("#button_Voltar").click()
    cy.wait(1000)
    cy.get("#button_Avançar").click()
    cy.wait(1000)
    cy.get("#button_Criar").click()
    //Time-Life-creation-3
    cy.contains("Fechar").click()
  })
    
  it('Testando Life_time_campos_obrigatórios_vazios', () => {
    cy.wait(1000)
    cy.get("#Management").click()
    cy.wait(1000)
    cy.contains("Criar Nova Lista").click()
    cy.wait(1000)
    cy.get("#input_date").click().type('2026-11-25')
    cy.contains("Avançar").click()
    cy.contains("O título não pode estar vazio.").should('exist')
    cy.contains("Fechar").click()
    cy.get("#input_title").type(ambiente_teste)
    cy.contains("Avançar").click()
    cy.get("#button_Criar").click()
    cy.contains("Erro ao criar ambiente.").should('exist')
    cy.contains("Fechar").click()
    cy.get("#button_Voltar").click()
    cy.get("#input_description").type('teste1 texto')
    cy.contains("Avançar").click()
    cy.get("#button_Criar").click()
    cy.contains("Form-Sucesso!").should('exist')
    cy.contains("Fechar").click()
  })

  it('Testando configuração de uma lista criada', () => {
    cy.wait(1000)
    cy.get("#Management").click()
    cy.wait(1000)
    cy.get('input[placeholder="Digite um Titulo"]').type(ambiente_teste)
    cy.get("#input_editar").click()
  })

  it('Atualizando titulo de uma lista criada', () => {
    cy.wait(1000)
    cy.get("#Management").click()
    cy.wait(1000)
    cy.get('input[placeholder="Digite um Titulo"]').type(ambiente_teste)
    cy.get("#input_editar").click()
    cy.get("#input_title").clear().type(ambiente_teste+'3')
    cy.contains("Atualizar").click("")
    cy.contains("Sucesso").should('exist')
  })

  it('Atualizando Descrição de uma lista criada', () => {
    cy.wait(1000)
    cy.get("#Management").click()
    cy.wait(1000)
    cy.get('input[placeholder="Digite um Titulo"]').type(ambiente_teste)
    cy.get("#input_editar").click()
    cy.get("#input_description").clear().type('123133')
    cy.contains("Atualizar").click("")
    cy.contains("Sucesso").should('exist')
  })

  it('Lista criada -  Assinatura do usuário a Lista.', () => {
    cy.wait(1000)
    cy.get("#Management").click()
    cy.wait(1000)
    cy.get('input[placeholder="Digite um Titulo"]').type(ambiente_teste)
    cy.get("#input_editar").click()
    cy.contains("Acessar Pagina").click()
    cy.contains("Confirme").click()
    cy.contains("Sucesso").should('exist')
  })


  it('Lista criada - Deletar usuário inscrito.', () => {
      cy.wait(1000)
      cy.get("#Management").click()
      cy.wait(1000)
      cy.get('input[placeholder="Digite um Titulo"]').type(ambiente_teste)
      cy.get("#input_editar").click()
      cy.wait(1000)
      cy.get('#Moisés_delete').click()
      cy.wait(1000)
      cy.contains("Sucesso").should('exist')
    })

  it('Atualizando a lista criada - Descartar.', () => {
      cy.wait(1000)
      cy.get("#Management").click()
      cy.wait(1000)
      cy.get('input[placeholder="Digite um Titulo"]').type(ambiente_teste)
      cy.get("#input_editar").click()
      cy.wait(1000)
      cy.contains('Descartar').click()
      cy.wait(1000)
      cy.contains("Cancelar").click()
      cy.wait(1500)
      cy.contains("Descartar").click()
      cy.wait(1000)
      cy.contains("OK").click()
      cy.contains("Sucesso").should('exist')
    })

  it('Atualizando a lista criada - Resgatar.', () => {
      cy.wait(1000)
      cy.get("#Management").click()
      cy.wait(1000)
      cy.get('input[placeholder="Digite um Titulo"]').type(ambiente_teste)
      cy.get("#input_editar").click()
      cy.wait(1000)
      cy.get("div[id='button_Resgatar']").click()
      cy.wait(1000)
      cy.contains("Cancelar").click()
      cy.get("div[id='button_Resgatar']").click()
      cy.wait(1000)
      cy.contains("OK").click()
      cy.contains("Sucesso").should('exist')
    })

  it('Atualizando a lista criada - Concluir.', () => {
    cy.wait(1000)
    cy.get("#Management").click()
    cy.wait(1000)
    cy.get('input[placeholder="Digite um Titulo"]').type(ambiente_teste)
    cy.get("#input_editar").click()
    cy.contains("Concluir").click()
    cy.wait(1000)
    cy.contains("Cancelar").click()
    cy.contains("Concluir").click()
    cy.wait(1000)
    cy.contains("OK").click()
    cy.contains("Sucesso").should('exist')
  })

})


