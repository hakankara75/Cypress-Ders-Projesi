describe('beforeEach afterEach', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.log('web sitesine gidildi')
    });
    it('test1', () => {
        cy.get('header > a > img').should('be.visible')
        cy.log('web sitesi logosu görünür durumda')
    });

    it('test2', () => {
        cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').as('element')
        cy.get('@element').should('have.text', 'Elements')
        cy.get('@element').then(($element)=>{
            const elementText=$element.text()
            cy.log('Sorgulanan elementin text değerinin '+ elementText +' olduğu doğrulandı')
        })
    });

    afterEach(() => {
        cy.visit('/automation-practice-form')
        cy.url().should('equal','https://demoqa.com/automation-practice-form')
        cy.should('include','automation-practice-form')
        cy.log('Form linkine gidildi')
    });
});