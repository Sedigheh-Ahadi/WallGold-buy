export class LoginPage {



    LOGINPAGE_MOBILENUMBER_INPUT = "input[name='mobileNumber']";
    LOGINPAGE_PASSWORD_INPUT = "input[name='password']";
    LOGINPAGE_CAPTCH_INPUT = "input[inputmode='numeric'][type='text'][placeholder='کد امنیتی']";
    LOGINPAGE_LOGIN_BUTTON = "button[type='submit']";

    pageShouldBeLoaded() {
        cy.url({timeout:10000}).should('eq', 'https://wallgold.ir/app/login')
        cy.document({ timeout: 10000 }).its('readyState').should('eq', 'complete');

    }

    enterMobileNumber(mobileNumber) {
        return cy.get(this.LOGINPAGE_MOBILENUMBER_INPUT).type(mobileNumber);
    }
    enterPassword(password) {
        return cy.get(this.LOGINPAGE_PASSWORD_INPUT).type(password);
    }

    enterCaptch(captcha) {
        return cy.get(this.LOGINPAGE_CAPTCH_INPUT).type(captcha);
    }
    clickOnSubmit() {
        return cy.get(this.LOGINPAGE_LOGIN_BUTTON).click();
    }

    captchError() {
        cy.contains('span', 'کد امنیتی را صحیح وارد کنید',{timeout:10000});
    }


}