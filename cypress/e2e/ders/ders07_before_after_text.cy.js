describe('before and after', () => {
    before(() => {
        cy.visit('/')
        cy.log('web sitesine gidildi')

    });

    it('test1', () => {
        cy.get('header > a > img').should('be.visible')
        cy.log('web sitesi logosu görünür durumda')
    });

    it.only('test2', () => {
        cy.scrollTo('bottom')
        cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').as('elements')
        cy.get('@elements').should('have.text','Elements')
        cy.get('@elements').then(($element)=>{ 
            const textValue=$element.text()
            cy.log('Sorgulanan elementin text değerinin '+ textValue +' olduğu doğrulandı')
        })
    });

    after(() => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.url().should('equal', 'https://demoqa.com/automation-practice-form')
        cy.url().should('include', 'automation-practice-form')
        cy.log('Form linkine gidildi')
    });
});