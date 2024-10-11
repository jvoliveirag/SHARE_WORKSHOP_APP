describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

const TEST_PATH = "http://localhost:5173/" // colocar o link do ambiente que deseja testar

describe('Teste dos botões da tela de início', () => {
  beforeEach(() => {
    cy.visit(TEST_PATH)
  })

  it('Testar botão "Listar professores": deve redirecionar para a página com os professores cadastrados.', () => {
    cy.contains('Listar professores').click()
    cy.url().should('include', '/professors') // Verifica se a URL redirecionou para a pagina "professors"
  })

  it('Testar botão "Buscar um professor": deve redirecionar para a página de busca.', () => {
    cy.contains('Buscar um professor').click()
    cy.url().should('include', '/buscarprofessor') // Verifica se a URL redirecionou para a pagina "/buscarprofessor"
  })

  it('Testar botão "Cadastrar professor": deve exibir modal de cadastro.', () => {
    cy.contains('Cadastrar professor').click()
    cy.get('div').should('include', 'Cadastrar professor')
  })
})