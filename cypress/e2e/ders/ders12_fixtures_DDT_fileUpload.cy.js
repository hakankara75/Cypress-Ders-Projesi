import 'cypress-file-upload';

describe('file-upload', () => {
    
    it('file upload', () => {
        const filePath= 'deneme/mmm.jpg';
        cy.visit('/automation-practice-form')
        cy.fixture('deneme/testPositivi.json').as('positiveForm')
        cy.get('@positiveForm').then((positiveForm) =>{
            cy.get('#firstName').type(positiveForm.firstName)
            cy.get('#lastName').type(positiveForm.lastName)
            cy.get('#userEmail').type(positiveForm.email)
            cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
            cy.get('#userNumber').type(positiveForm.mobile)
            cy.get('#dateOfBirthInput').click()
            cy.get(':nth-child(2) > .react-datepicker__day--005').click()
            cy.get('.subjects-auto-complete__value-container').type(positiveForm.subjects)
            cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
            cy.get('#uploadPicture').click()
            cy.get('#uploadPicture').attachFile(filePath)
            cy.get('#currentAddress').type(positiveForm.currentAddress)
            cy.get('#stateCity-wrapper > :nth-child(2)').click()
            cy.get('#react-select-3-option-0').click()
            cy.get('#stateCity-wrapper > :nth-child(3)').click()
            cy.get('#react-select-4-option-0').type('Delhi')
            cy.get('#submit').click()
            cy.get('.modal-body').should('be.visible')
    });
});
});

import 'cypress-file-upload';

describe.only('file-upload', () => {
  it('file upload', () => {
    const filePath = 'deneme/mmm.jpg'; // Örnek dosya yolu
    cy.visit('/automation-practice-form');
    cy.fixture('deneme/testPositivi.json').as('positiveForm');

    cy.get('@positiveForm').then((positiveForm) => {
      cy.get('#firstName').type(positiveForm.firstName);
      cy.get('#lastName').type(positiveForm.lastName);
      cy.get('#userEmail').type(positiveForm.email);
      cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
      cy.get('#userNumber').type(positiveForm.mobile);
      cy.get('#dateOfBirthInput').click();
      cy.get(':nth-child(2) > .react-datepicker__day--005').click();
      cy.get('.subjects-auto-complete__value-container').type(positiveForm.subjects);
      cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();

      // Dosya yükleme işlemi için cy.fixture ile binary veriyi al
      cy.fixture('deneme/mmm.jpg', 'binary')
        .then(Cypress.Blob.binaryStringToBlob)
        .then((fileContent) => {
          cy.get('#uploadPicture').attachFile({
            fileContent,
            fileName: 'mmm.jpg',
            mimeType: 'image/jpeg',
            encoding: 'utf-8',
            lastModified: new Date().getTime(),
          });
        });

      cy.get('#currentAddress').type(positiveForm.currentAddress);
      cy.get('#stateCity-wrapper > :nth-child(2)').click();
      cy.get('#react-select-3-option-0').click();
      cy.get('#stateCity-wrapper > :nth-child(3)').click();
      cy.get('#react-select-4-option-0').type('Delhi');
      cy.get('#submit').click();
      cy.get('.modal-body').should('be.visible');
    });
  });
});