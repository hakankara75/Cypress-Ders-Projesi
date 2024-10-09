describe('cy.visit addOnly saveOnly watchForFileChanges', () => {
    it('cy.visit full', () => {
        cy.visit('https://demoqa.com')
    });

    it('cy.visit url', () => {
        cy.visit({
            url:"https://demoqa.com"
        })
    });

    it('cy.visit shortcut', () => {
        cy.visit('/')
    });

    it.only('cy.visit shortcut plus', () => {
        cy.visit('/elements')
    
    });
});