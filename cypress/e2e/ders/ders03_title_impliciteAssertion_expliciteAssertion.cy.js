describe('cy.title and implicite explicite assertion', () => {
    it('cy.title assertion', () => {
        cy.visit('/');
        cy.title().should('equal',"DEMOQA")

    });

    it('checkbox checked assertion', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get(':nth-child(6) > a').click()
        cy.get('#checkboxes > :nth-child(1)').check().should('be.checked')

    });

    it('cy.title assertion eql', () => {
        cy.visit('/');
        cy.title().should('eql',"DEMOQA")

    });

    it('cy.title assertion contain', () => {
        cy.visit('/');
        cy.title().should('contain',"DEMO")

    });

    it.only('cy.title assertion include', () => {
        cy.visit('/');
        cy.title().should('include',"DEM")

    });

});

describe.only('explicite assertion', () => {

    it('explicite assertion', () => {
        cy.visit("/");
        let expectedTitle = "Alerts, Frame & Windows"
        cy.get(':nth-child(3) > :nth-child(1) > .card-body > h5')
        .then(function(element){
            let actualTitle=element.text();

            //1. yol
            assert.equal(expectedTitle,actualTitle)

            //2.yol
            expect(expectedTitle).to.eq(actualTitle)
        })


    });
    
});