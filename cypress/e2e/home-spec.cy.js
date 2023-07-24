describe('User visting the home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
      .intercept('GET', 'http://localhost:3001/api/v1/tricks', {
        code: 201,
        fixture: 'tricks.json'
      }).as('getTricks')
  })
  it('should see relevent content', () => {
    cy.get('h1').contains('Sick Trick Wish List')
      .get('[name="stance"]').contains('Choose your Stance')
      .get('[name="trickName"]')
      .get('[name="obstacle"]').contains('Choose your Obstacle')
      .get('[name="link"]')
      .get('.tricksContainer').children().should('have.length', 3)
  })
})