/// <reference types= "cypress" />

class LoginModal {

    get emailField() {
        return cy.get('#signinEmail');
    };

    get passwordField() {
        return cy.get('#signinPassword');
    };

    get SubmitLoginButton() {
        return cy.get('.modal-footer .btn-primary');
    };

    enterEmail(email) {
        this.emailField.type(email)
    };

    enterPassword(password) {
        this.passwordField.type(password)
    };

    clickLoginButton() {
        this.SubmitLoginButton.click();
    };

    verifyErrorMessages(text){
        cy.contains('.invalid-feedback p', text).should('be.visible');
    };

    verifyBorderColorWithErrorForEmailField(){
        this.emailField.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    };

    verifyBorderColorWithErrorForPasswordField(){
        this.passwordField.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    };

    verifyErrorPopUp(text){
        cy.contains('.ng-valid .alert-danger', text).should('be.visible');
    }

    triggerEmptyErrorsByField(fieldName) {
        if (fieldName === 'email') {
            this.emailField.focus();
            this.emailField.blur();
        } else {
            this.passwordField.focus();
            this.passwordField.blur();
        };
    };

}

export default new LoginModal;