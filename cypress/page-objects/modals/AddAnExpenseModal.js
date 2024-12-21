/// <reference types= "cypress" />

class AddAnExpenseModal {
    get vehicle(){
        return cy.get('#addExpenseCar');
    };

    get reportDate(){
        return cy.get('#addExpenseDate');
    };

    get mileage(){
        return cy.get('#addExpenseMileage');
    };

    get numberOfLiters(){
        return cy.get('#addExpenseLiters');
    };

    get totalCost(){
        return cy.get('#addExpenseTotalCost');
    };

    get addButton(){
        return cy.get('.modal-footer .btn-primary');
    };

    get newAddedExpenses(){
        return cy.get('tbody tr');
    };


    enterMileage(mileage) {
        this.mileage.type(mileage)
        this.mileage.blur();
    };

    enterNumberOfLiters(liters) {
        this.numberOfLiters.type(liters)
        this.numberOfLiters.blur();
    };

    enterTotalCost(cost) {
        this.totalCost.type(cost)
        this.totalCost.blur();
    };

    verifyErrorMessages(text){
        cy.contains('.invalid-feedback p', text).should('be.visible');
    };

    verifyBorderColorWithErrorForNumberOfLitersField(){
        this.numberOfLiters.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    };

    verifyBorderColorWithErrorForTotalCostField(){
        this.totalCost.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    };

    verifyErrorPopUp(text){
        cy.contains('.ng-dirty .alert-danger', text).should('be.visible');
    };

    triggerEmptyErrorsByField(fieldName) {
        if (fieldName === 'litters') {
            this.numberOfLiters.focus();
            this.numberOfLiters.blur();
        } else {
            this.totalCost.focus();
            this.totalCost.blur();
        };
    };

    clickAddButton(){
        this.addButton.should('have.text', 'Add').click();
    };

    findFirtsAddedExpenses(){
        this.newAddedExpenses.eq(0);
    };

    verifyAmountInTheRow(text){
        cy.contains('tr td:nth-child(4)', text).should('be.visible');
    };
};

export default new AddAnExpenseModal;
