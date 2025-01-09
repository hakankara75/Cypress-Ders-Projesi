import 'cypress-plugin-xhr-toggle'
describe('go back, go forward, step', () => {
    const mainPage='https://demoqa.com/'
    const secondPage='https://demoqa.com/interaction'

    it('go back and go forward 1', () => {
        cy.visit('/')
        cy.url().should('eq',mainPage)

        cy.get(':nth-child(5) > :nth-child(1) > .card-body > h5').click()
        cy.url().should('eq',secondPage)

        cy.go('back')
        cy.url().should('eq',mainPage)

        cy.go('forward')
        cy.url().should('eq',secondPage)
    });

    it('go back and go forward 2 and step', () => {
        
        cy.step('demoqa sitesine gidildi')
        cy.visit('/')

        cy.step('demoqa sitesine gidildiği doğrulandı')
        cy.url().should('eq',mainPage)

        cy.step('interactions linkine tıklandı')
        cy.get(':nth-child(5) > :nth-child(1) > .card-body > h5').click()

        cy.step('interactions linkine gidildiği doğrulandı')
        cy.url().should('eq',secondPage)

        cy.step('demoqa sayfasına geri dönüldü')
        cy.go(-1)

        cy.step('demoqa sitesine geri dönüldüğü doğrulandı')
        cy.url().should('eq',mainPage)

        cy.step('interactions sayfasına gidildi')
        cy.go(1)

        cy.step('interactions linkine gidildiği doğrulandı')
        cy.url().should('eq',secondPage)
    });
});