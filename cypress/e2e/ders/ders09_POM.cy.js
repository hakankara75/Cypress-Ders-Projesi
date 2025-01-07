import { GoToMainPage } from "../../methods/gotoMainPage";
const homePage = new GoToMainPage
import HomePageLocates from "../../locates/homePageLocates";


describe('POM', () => {
    it('POM', () => {
        homePage.goToMainPage();
    });

    it('click form link', () => {
        homePage.goToMainPage();
        homePage.clickAndAssertFormLink();
    });


it.only('click alert link with return', () => {
    homePage.goToMainPageWithReturn().clickAndAssertAllert();
});

describe.only('locate POM', () => {
    it('POM2', () => {
         HomePageLocates.goToHomePageLink();
    HomePageLocates.locateFormPage.click();
    });
   
});

});