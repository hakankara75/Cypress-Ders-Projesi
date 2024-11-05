describe('viewport npxOpen npxRun', () => {
    it('widthAndHeight', () => {
        cy.visit("/");
        cy.viewport(550,750)
    });

    it('string', () => {
        cy.visit("/");
        cy.viewport('samsung-s10','landscape')
    });

    it('string', () => {
        cy.visit("/");
        cy.viewport('samsung-s10','portrait')
    });

    it('npx open', () => {
        cy.visit("/");
        //npx cypress open
        
    });
    it.only('npx run', () => {
        cy.visit("/");
        //npx cypress run
        //npx cypress run --spec cypress\e2e\ders\ders04_viewport_npxOpen_npxRun.cy.js
    });
});