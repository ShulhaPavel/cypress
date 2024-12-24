/// <reference types= "cypress" />

class EmptyFuelExpensesPage {

    get addAnExpenses(){
        return cy.get('.btn-primary');
    };

    get yourGarage(){
        return cy.get('.panel-empty_message a')
    };

    verifyAllButtonsActiveOnEmptyPage() {
        const buttons = [
            this.addAnExpenses,
            this.yourGarage,
        ];
        
        buttons.forEach(button => {
            button.should('be.visible').and('not.be.disabled');
        });
    }


};

export default new EmptyFuelExpensesPage;