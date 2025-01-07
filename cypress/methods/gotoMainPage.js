export class GoToMainPage {

    goToMainPage(){

        const mainPageUrl='https://demoqa.com/'
        cy.visit('/');
        cy.url().should('equal', mainPageUrl)
    }

    clickAndAssertFormLink(){
        cy.get(':nth-child(2) > :nth-child(1) > .card-body > h5').click();
        cy.title().should('include', 'DEMO')

    }

    goToMainPageWithReturn(){
        
        const mainPage='https://demoqa.com/'
        cy.visit('/');
        cy.url().should('equal', mainPage)
        return this;
    }

    clickAndAssertAllert(){
        cy.get(':nth-child(3) > :nth-child(1) > .card-body > h5').click();
        cy.title().should('equal', 'DEMOQA')
        return this;

    }








}