/// <reference types= "cypress" />

class SignUpModal {

    get nameField() {
        return cy.get('#signupName');
    };

    get lastNameField() {
        return cy.get('#signupLastName');
    };

    get emailField() {
        return cy.get('#signupEmail');
    };

    get passwordField() {
        return cy.get('#signupPassword');
    };

    get reEnterPasswordField() {
        return cy.get('#signupRepeatPassword');
    };

    get RegisterButton(){
        return cy.get('.btn-primary');
    }

    get SubmitRegisterButton(){
        return cy.get('.modal-footer .btn-primary');
    }

    enterName(name) {
        this.nameField.type(name)
    };

    enterLastName(lastName) {
        this.lastNameField.type(lastName)
    };

    enterEmail(email) {
        this.emailField.type(email)
    };

    enterPassword(password) {
        this.passwordField.type(password)
    };

    enterReEnterPassword(reEnterPassword) {
        this.reEnterPasswordField.type(reEnterPassword)
    };

    cliclRegisterButton(){
        this.SubmitRegisterButton.click();
    }

    verifyBorderColorWithErrorForNameField(){
        this.nameField.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    };

    verifyBorderColorWithErrorForLastNameField(){
        this.lastNameField.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    };

    verifyBorderColorWithErrorForEmailField(){
        this.emailField.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    };

    verifyBorderColorWithErrorForPasswordField(){
        this.passwordField.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    };

    verifyBorderColorWithErrorForReEnterPasswordField(){
        this.reEnterPasswordField.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    };

    verifyErrorMessages(text){
        cy.contains('.invalid-feedback p', text).should('be.visible');
    };

    verifyBothErrorMessagesInOneTime(texts) {
        texts.forEach((text, index) => {
            cy.get('.invalid-feedback p').eq(index).should('be.visible').and('contain.text', text);
        });
    };

    triggerEmptyErrorsByField(fieldName) {
        if (fieldName === 'name') {
            this.nameField.focus();
            this.nameField.blur();
        } else if (fieldName === 'lastName') {
            this.lastNameField.focus();
            this.lastNameField.blur();
        } else if (fieldName === 'email') {
            this.emailField.focus();
            this.emailField.blur();
        } else if (fieldName === 'password') {
            this.passwordField.focus();
            this.passwordField.blur();
        } else{
            this.reEnterPasswordField.focus();
            this.reEnterPasswordField.blur();
        };
    };
}
        
export default new SignUpModal;