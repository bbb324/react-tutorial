beforeEach(() => {
    cy.visit('http://localhost:3001')
})
describe('react-master-toast', () => {
    it('成功加载，同时包含4个按钮', () => {
        cy.get('.success-button').should('be.visible')
        cy.get('.warning-button').should('be.visible')
        cy.get('.error-button').should('be.visible')
        cy.get('.info-button').should('be.visible')
    })
})