describe('custom command positive', () => {
    it('positive', () => {
        cy.fillTheForm_Positive('hakan','kara','hakan@gmail.com', 555, 'subject','ankara')
    });
});

describe.only('custom command negative', () => {
    it('negative', () => {
        cy.fillTheForm_Negative('hakan','kara','hakan@gmail.com',  'subject','ankara')
    });
});