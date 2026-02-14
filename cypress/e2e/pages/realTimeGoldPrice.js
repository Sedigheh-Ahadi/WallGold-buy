export class RealTimeGoldPrice {

    REALTIMEPAGE_GOLDPRICECHART_DIV="div[class='recharts-wrapper']";

    pageShouldBeLoaded() {
        cy.url({timeout:10000}).should('eq', 'https://wallgold.ir/app/chart')
        cy.document({ timeout: 10000 }).its('readyState').should('eq', 'complete');

    }

    chartShouldExist()
    {
        cy.get(this.REALTIMEPAGE_GOLDPRICECHART_DIV).should('be.visible');
    }
}