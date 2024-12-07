import 'cypress-plugin-xhr-toggle'
describe('assertion and XHR', () => {
    it.skip('assertion', () => {
        cy.visit('/text-box')
        cy.get('#userName').should('have.attr','autocomplete','off')

    });

    it.skip('chain', () => {
        cy.visit('/text-box')
        cy.get('#userName').should('have.attr','autocomplete','off')
        .and('be.enabled')
        cy.get('#userName-label').should('be.visible').and('contain','Full').and('have.text','Full Name')
        cy.get("div[class='col-md-3 col-sm-12']").should('have.length',4)
        cy.scrollTo('bottom')
        cy.get('#submit').should('not.have.class','disabled');

        cy.get('#currentAddress').type('hakan')
        cy.get('#currentAddress').should('have.value','hakan')
        cy.get('#currentAddress').should('have.css','color','rgb(73, 80, 87)')
    });

    it.only('XHR', () => {
        cy.visit('/checkbox')
        cy.scrollTo('bottom')
        cy.get('label').should('not.be.checked')
        cy.get('label').click()
    });
});