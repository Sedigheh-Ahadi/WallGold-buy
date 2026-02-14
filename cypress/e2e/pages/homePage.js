export class HomePage {

    HOMEPAGE_LOGIN_BUTTON = "a[href='/app/login']";
    HOMEPAGE_SIGNUP_BUTTON = "a[href='/app/signup']";
    HOMEPAGE_USERACCOUNT_BUTTON = "button[aria-label='profile']"
    HOMEPAGE_REALTIMEGOLD_DIV = "div[class='MuiBox-root mui-rtl-2sdz5w']"
    HOMEPAGE_LOANS_DIV = "div[id='loan-widget']"
    HOMEPAGE_INSTANTLOANS_DIV = "div[id='instant-loan-widget']"
    HOMEPAGE_STAKING_DIV = "div[id='staking-widget']"



    openHomePage() {

        cy.visit(Cypress.config('baseUrl'));
        cy.document({ timeout: 10000 }).its('readyState').should('eq', 'complete');
        cy.get(this.HOMEPAGE_SIGNUP_BUTTON).should('have.class', 'MuiButton-containedSizeMedium')
    }

    clickOnLogin() {
        return cy.get(this.HOMEPAGE_LOGIN_BUTTON).click()
    }

    clickOnLoans() {
       
      return  cy.get(this.HOMEPAGE_LOANS_DIV).click();
        
    }

    clickOnRealTimeGold()
    {
      return  cy.contains('span','قیمت طلا',{timeout:10000}).click();
         
    }



}