/// <reference types= "cypress" />

import HomePage from "../../page-objects/pages/homePage";
import LoginModal from "../../page-objects/modals/LoginModal";

describe('Validation for Login modal', () => {
    beforeEach(() => {
        HomePage.open();
        HomePage.clickSignInButton();
    });

    describe('Validation for "Email" field', () => {
        beforeEach(() => {
            LoginModal.triggerEmptyErrorsByField('email');
        });
        it('Verify "Email required" error message for empty "Email" field', () => {
            LoginModal.verifyErrorMessages('Email required');
            LoginModal.verifyBorderColorWithErrorForEmailField();
            LoginModal.SubmitLoginButton.should('be.disabled');
        });

        it('Verify error "Email is incorrect" message for "Email" field with invalid email', () => {
            LoginModal.enterEmail('test@');
            LoginModal.verifyErrorMessages('Email is incorrect');
            LoginModal.verifyBorderColorWithErrorForEmailField();
            LoginModal.SubmitLoginButton.should('be.disabled');
        });

        it('Verify "Wrong email or password" error message with incorrect email', () => {
            LoginModal.enterEmail('pavel.shulga8+4@gmail.com');
            LoginModal.enterPassword('Passwo@1');
            LoginModal.clickLoginButton();
            LoginModal.verifyErrorPopUp('Wrong email or password');
        });
    });

    describe('Validation for "Password" field', () => {
        beforeEach(() => {
            LoginModal.triggerEmptyErrorsByField('password');
        });
        it('Verify "Password required" error message for empty "Password" field', () => {
            LoginModal.verifyErrorMessages('Password required');
            LoginModal.verifyBorderColorWithErrorForPasswordField();
            LoginModal.SubmitLoginButton.should('be.disabled');
        });

        it('Verify "Wrong email or password" error message with incorrect password', () => {
            LoginModal.enterEmail('pavel.shulga98+1@gmail.com');
            LoginModal.enterPassword('Passwo@2');
            LoginModal.clickLoginButton();
            LoginModal.verifyErrorPopUp('Wrong email or password');
        });
    });

    describe('Successful login', () => {
        it('Verify successful login flow', () => {
            LoginModal.enterEmail('shulga.pavlo98+1@gmail.com');
            LoginModal.enterPassword('ywS8lTViLl6aWFL');
            LoginModal.clickLoginButton();
            cy.url().should('include', '/panel/garage');
            cy.get('.panel-empty_message').should('have.text', 'You don’t have any cars in your garage').and('be.visible');
        });
    });
})