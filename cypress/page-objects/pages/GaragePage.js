/// <reference types= "cypress" />

class GaragePage {

    get myProfile(){
        return cy.get('.user-nav_toggle');
    };

    get addCar(){
        return cy.get('.btn-primary');
    };

    get garage(){
        return cy.get('.flex-column a:nth-child(1)');
    };

    get fuelExpenses(){
        return cy.get('[routerlink="expenses"]');
    };

    get instructions(){
        return cy.get('.flex-column a:nth-child(3)');
    };

    get profile(){
        return cy.get('.sidebar_btn-group a:nth-child(1)');
    }

    get settings(){
        return cy.get('.sidebar_btn-group a:nth-child(2)');
    }

    get logOut(){
        return cy.get('.flex-column a:nth-child(5)');
    }

    verifyAllButtonsActive() {
        const buttons = [
            this.myProfile,
            this.addCar,
            this.garage,
            this.fuelExpenses,
            this.instructions,
            this.profile,
            this.settings,
            this.logOut
        ];
        
        buttons.forEach(button => {
            button.should('be.visible').and('not.be.disabled');
        });
    }

    clickAddCarButton(){
        this.addCar.should('have.text', 'Add car').click();
    }

    clickFuelExpensesButton() {
        this.fuelExpenses.click();
    }
}

export default new GaragePage;