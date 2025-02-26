// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
import 'cypress-file-upload';

Cypress.Commands.add('fillTheForm_Positive',(firstName, lastName, Email,mobile, subject,currentAddress )=>{
    
    const filePath= 'manzara.jpg';
    cy.visit('/automation-practice-form')
    cy.get('#firstName').type(firstName)
        cy.get('#lastName').type(lastName)
        cy.get('#userEmail').type(Email)
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#userNumber').type(mobile)
        cy.get('#dateOfBirthInput').click()
        cy.get(':nth-child(2) > .react-datepicker__day--005').click()
        cy.get('.subjects-auto-complete__value-container').type(subject)
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#uploadPicture').click()
        cy.get('#uploadPicture').attachFile(filePath)
        cy.get('#currentAddress').type(currentAddress)
        cy.get('#stateCity-wrapper > :nth-child(2)').click()
        cy.get('#react-select-3-option-0').click()
        cy.get('#stateCity-wrapper > :nth-child(3)').click()
        cy.get('#react-select-4-option-0').type('Delhi')
        cy.get('#submit').click()
        cy.get('.modal-body').should('be.visible')
})

Cypress.Commands.add('fillTheForm_Negative',(firstName, lastName, Email, subject,currentAddress )=>{
    cy.visit('/automation-practice-form')
    cy.get('#firstName').type(firstName)
        cy.get('#lastName').type(lastName)
        cy.get('#userEmail').type(Email)
        
        cy.get('#dateOfBirthInput').click()
        cy.get(':nth-child(2) > .react-datepicker__day--005').click()
        cy.get('.subjects-auto-complete__value-container').type(subject)
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()

        cy.get('#currentAddress').type(currentAddress)
        cy.get('#stateCity-wrapper > :nth-child(2)').click()
        cy.get('#react-select-3-option-0').click()
        cy.get('#stateCity-wrapper > :nth-child(3)').click()
        cy.get('#react-select-4-option-0').type('Delhi')
        cy.get('#submit').click()
        cy.get('.modal-body').should('not.exist')
})

