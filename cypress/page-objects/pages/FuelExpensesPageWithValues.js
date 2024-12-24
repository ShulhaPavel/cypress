/// <reference types= "cypress" />

class FuelExpensesPageWithValues {

    get addAnExpenses() {
        return cy.get('.btn-primary');
    };

    get brandDrop() {
        return cy.get('#carSelectDropdown');
    }


    verifyAllButtonsActiveOnPageWithValue() {
        const buttons = [
            this.addAnExpenses,
            this.brandDrop,
        ];

        buttons.forEach(button => {
            button.should('be.visible').and('not.be.disabled');
        });
    };

    // clickAddAnExpensesButton(){
    //     this.addAnExpenses.click();
    // }

    clickFuelExpensesButton() {
        cy.contains('.btn-primary', 'Add an expense').click();
    }

};

export default new FuelExpensesPageWithValues;
