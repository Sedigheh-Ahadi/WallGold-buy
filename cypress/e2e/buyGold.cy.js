import { HomePage } from "./pages/homePage"
import { LoginPage } from "./pages/loginPage"
import { RealTimeGoldPrice } from "./pages/realTimeGoldPrice"

let homePage = new HomePage();
let loginPage = new LoginPage();
let realTimePage = new RealTimeGoldPrice();


describe('Buy Gold scenario', function () {
    this.beforeEach(function () {

        cy.fixture('Credentials').as('credentialInfo');

    })
    it('Negative Scenario_ wrong captcha', function () {
        homePage.openHomePage()
        homePage.clickOnLogin()
        loginPage.pageShouldBeLoaded();

        loginPage.enterMobileNumber(this.credentialInfo.mobilenumber);
        loginPage.enterPassword(this.credentialInfo.password);
        loginPage.enterCaptch(this.credentialInfo.captcha);
        loginPage.clickOnSubmit();
        loginPage.captchError();
    })
    it('Positive Scenario_ user can view real time gold price page', function () {

        homePage.openHomePage();
        homePage.clickOnRealTimeGold();
        realTimePage.pageShouldBeLoaded();
        realTimePage.chartShouldExist();
    })




})