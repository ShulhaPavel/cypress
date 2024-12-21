/// <reference types= "cypress" />

class BasePage {

    open(url) {
        cy.visit(url);
    }

}

export default BasePage;