/// <reference types= "cypress" />

class AddCarModal {

    get brand() {
        return cy.get('#addCarBrand');
    };

    get model() {
        return cy.get('#addCarModel');
    };

    get mileage() {
        return cy.get('#addCarMileage');
    };

    get addButton(){
        return cy.get('.modal-footer .btn-primary');
    }

    get cancelButton(){
        return cy.get('.btn-secondary');
    }

    triggerFirtsCarModelOfTheBrand(text){
        this.model.find('option:selected').should('have.text', text);
    };

    enterMileage(mileage) {
        this.mileage.type(mileage)
        this.mileage.blur();
    };

    triggerEmptyErrorsByField() {
        this.mileage.focus();
        this.mileage.blur();
    };

    verifyErrorMessage(text){
        cy.contains('.invalid-feedback p', text).should('be.visible');
    };

    clickAddButton(){
        this.addButton.should('have.text', 'Add').click();
    };

    clickCancelButton(){
        this.cancelButton.eq(0).should('have.text', 'Cancel').and('be.enabled').click();
    }
}

export default new AddCarModal;