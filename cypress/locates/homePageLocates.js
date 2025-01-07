class HomePageLocates {

goToHomePageLink(){

    cy.visit('/');
}

get locateFormPage(){

    return cy.get(':nth-child(2) > :nth-child(1) > .card-body > h5');
}

}

export default new HomePageLocates();