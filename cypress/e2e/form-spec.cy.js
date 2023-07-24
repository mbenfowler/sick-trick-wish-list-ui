describe('User on the home page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
        .intercept('GET', 'http://localhost:3001/api/v1/tricks', {
          code: 201,
          fixture: 'tricks.json'
        }).as('getTricks')
    })
    it('should be able to fill out form', () => {
        cy.get('[name="stance"]').select('Regular').should('have.value', 'regular')
        .get('[name="name"]').type('Boogaloo').should('have.value', 'Boogaloo')
        .get('[name="obstacle"]').select('Rail').should('have.value', 'rail')
        .get('[name="tutorial"]').type('https://www.youtube.com/watch?v=dQw4w9WgXcQ').should('have.value', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .get('button').click()
        .get('.tricksContainer').children().should('have.length', 4)
          .and('contain', 'Boogaloo')
          .and('contain', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    })
})