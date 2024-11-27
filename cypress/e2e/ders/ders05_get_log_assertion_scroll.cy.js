describe('cy.get, cy.log, assertion and scroll', () => {
    it.skip('cy.get, id locate ans AS', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.get("#userName") //fullname kutusu
        cy.get('#userEmail-label').as('emailLabel') //email texti 
        cy.log('Email kutusunun text değerinin Email olduğunu doğrula')
        cy.get('@emailLabel').should('have.text', 'Email')
    });

    it.skip('cy.get, class locate and Then, assertion', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.get('.text-center').as('textBoxTitle')
        cy.get('@textBoxTitle').then(($textBox) => {
            cy.log($textBox.text)
            cy.get($textBox).should('have.text', 'Text Box')
    })
            
            cy.get('@textBoxTitle').should('be.visible' )
    });
    
    it.skip('cy.get attribute locate, assertion', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.get('textarea[id="currentAddress"]').as('currentAddress')
        cy.get('@currentAddress').should('be.enabled')
    });

    it('cy.get, tagname locate, assertio, scroll', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.get('footer').as('foot')
        cy.scrollTo('bottom')
        cy.get('@foot').should('not.be.visible')

    });
});