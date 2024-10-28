describe('cy.url, skip and assertion', () => {
    it.only('cy.ur assertion equal', () => {
        cy.visit('/')
       cy.url().should('equal', 'https://demoqa.com/')
    });

    it.skip('cy.url assertion include', () => {
        cy.visit('https://demoqa.com/alertsWindows');
        cy.url().should('include', '/alertsWindows');

    });

    it.skip('cy.url assertion contain and', () => {
        cy.visit('https://demoqa.com/alertsWindows')
        cy.get('.element-group').should('contain', 'Elements')
        .and('be.visible', true)
        .and('have.length', 6)
    });
});