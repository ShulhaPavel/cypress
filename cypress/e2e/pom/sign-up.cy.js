/// <reference types= "cypress" />
import HomePage from "../../page-objects/pages/homePage";
import SignUpModal from "../../page-objects/modals/SignUpModal";

describe('Validation for Sign Up modal', () => {
    beforeEach(() => {
        HomePage.open();
        HomePage.clickSignUpButton();
    });

    describe('Validation for "Name" field', () => {
        beforeEach(() => {
            SignUpModal.triggerEmptyErrorsByField('name');
        });

        it('Verify "Name required" error message for empty "Name" field', () => {
            SignUpModal.verifyErrorMessages('Name required');
            SignUpModal.verifyBorderColorWithErrorForNameField();
            SignUpModal.RegisterButton.should('be.disabled');
        });

        it('Verify error "Name is invalid" message for "Name" field with number input', () => {
            SignUpModal.enterName('2222');
            SignUpModal.verifyErrorMessages('Name is invalid')
            SignUpModal.verifyBorderColorWithErrorForNameField();
            SignUpModal.RegisterButton.should('be.disabled');
        });

        it('Verify error "Name is invalid" message for "Name" field with cirilic alphabet', () => {
            SignUpModal.enterName('ффффф');
            SignUpModal.verifyErrorMessages('Name is invalid')
            SignUpModal.verifyBorderColorWithErrorForNameField();
            SignUpModal.RegisterButton.should('be.disabled');
        });

        it('Verify error "Name is invalid" message for "Name" field with emty spaces', () => {
            SignUpModal.enterName('    ');
            SignUpModal.verifyErrorMessages('Name is invalid')
            SignUpModal.verifyBorderColorWithErrorForNameField();
            SignUpModal.RegisterButton.should('be.disabled');
        });

        it('Verify error "Name has to be from 2 to 20 characters long" message for "Name" field with 1 character', () => {
            SignUpModal.enterName('a');
            SignUpModal.verifyErrorMessages('Name has to be from 2 to 20 characters long')
            SignUpModal.verifyBorderColorWithErrorForNameField();
            SignUpModal.RegisterButton.should('be.disabled');
        });

        it('Verify error "Name has to be from 2 to 20 characters long" message for "Name" field with 21 characters', () => {
            SignUpModal.enterName('abcdefghijklmnopqrstu');
            SignUpModal.verifyErrorMessages('Name has to be from 2 to 20 characters long')
            SignUpModal.verifyBorderColorWithErrorForNameField();
            SignUpModal.RegisterButton.should('be.disabled');
        });

        it('Verify that both errors display for "Name" at the same time', () => {
            SignUpModal.enterName('2');
            SignUpModal.verifyBothErrorMessagesInOneTime([
                'Name is invalid',
                'Name has to be from 2 to 20 characters long'
            ]);
            SignUpModal.verifyBorderColorWithErrorForNameField();
            SignUpModal.RegisterButton.should('be.disabled');
        });
    })

    describe('Validation for "Last name" field', () => {
        beforeEach(() => {
            SignUpModal.triggerEmptyErrorsByField('lastName');
        });
        it('Verify error message for empty "Last name" field', () => {
            SignUpModal.verifyErrorMessages('Last name required');
            SignUpModal.verifyBorderColorWithErrorForLastNameField();
            SignUpModal.RegisterButton.should('be.disabled');
        })

        it('Verify error "Last name is invalid" message for "Last name" field with number input', () => {
            SignUpModal.enterLastName('2222');
            SignUpModal.verifyErrorMessages('Last name is invalid');
            SignUpModal.verifyBorderColorWithErrorForLastNameField();
            SignUpModal.RegisterButton.should('be.disabled');
        })

        it('Verify error "Last name is invalid" message for "Last name" field with cirilic alphabet', () => {
            SignUpModal.enterLastName('ффффф');
            SignUpModal.verifyErrorMessages('Last name is invalid');
            SignUpModal.verifyBorderColorWithErrorForLastNameField();
            SignUpModal.RegisterButton.should('be.disabled');
        })

        it('Verify error "Last name is invalid" message for "Last name" field with emty spaces', () => {
            SignUpModal.enterLastName('    ');
            SignUpModal.verifyErrorMessages('Last name is invalid');
            SignUpModal.verifyBorderColorWithErrorForLastNameField();
            SignUpModal.RegisterButton.should('be.disabled');
        })

        it('Verify error "Last name has to be from 2 to 20 characters long" message for "Last name" field with 1 character', () => {
            SignUpModal.enterLastName('a');
            SignUpModal.verifyErrorMessages('Last name has to be from 2 to 20 characters long');
            SignUpModal.verifyBorderColorWithErrorForLastNameField();
            SignUpModal.RegisterButton.should('be.disabled');
        })

        it('Verify error "Last name has to be from 2 to 20 characters long" message for "Last name" field with 21 characters', () => {
            SignUpModal.enterLastName('abcdefghijklmnopqrstu');
            SignUpModal.verifyErrorMessages('Last name has to be from 2 to 20 characters long');
            SignUpModal.verifyBorderColorWithErrorForLastNameField();
            SignUpModal.RegisterButton.should('be.disabled');
        })

        it('Verify that both errors displays for "Last name" in one time', () => {
            SignUpModal.enterLastName('2');
            SignUpModal.verifyBothErrorMessagesInOneTime([
                'Last name is invalid',
                'Last name has to be from 2 to 20 characters long'
            ])
            SignUpModal.verifyBorderColorWithErrorForLastNameField();
            SignUpModal.RegisterButton.should('be.disabled');
        });
    });

    describe('Validation for "Email" field', () => {
        beforeEach(() => {
            SignUpModal.triggerEmptyErrorsByField('email');
        });
        it('Verify "Email required" error message for empty "Email" field', () => {
            SignUpModal.verifyErrorMessages('Email required');
            SignUpModal.verifyBorderColorWithErrorForEmailField();
            SignUpModal.RegisterButton.should('be.disabled');
        });

        it('Verify error "Email is incorrect" message for "Email" field with invalid email', () => {
            SignUpModal.enterEmail('test@');
            SignUpModal.verifyErrorMessages('Email is incorrect');
            SignUpModal.verifyBorderColorWithErrorForEmailField();
            SignUpModal.RegisterButton.should('be.disabled');
        });
    });

    describe('Validation for "Password" field', () => {
        beforeEach(() => {
            SignUpModal.triggerEmptyErrorsByField('password');
        });
        it('Verify "Password required" error message for empty "Password" field', () => {
            SignUpModal.verifyErrorMessages('Password required');
            SignUpModal.verifyBorderColorWithErrorForPasswordField();
            SignUpModal.RegisterButton.should('be.disabled');
        })

        it('Verify error "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" message for "Password" field with 1 character', () => {
            SignUpModal.enterPassword('a');
            SignUpModal.verifyErrorMessages('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            SignUpModal.verifyBorderColorWithErrorForPasswordField();
            SignUpModal.RegisterButton.should('be.disabled');
        })

        it('Verify error "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" message for "Password" field with 21 characters', () => {
            SignUpModal.enterPassword('abcdefghijklmnopqrstu');
            SignUpModal.verifyErrorMessages('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            SignUpModal.verifyBorderColorWithErrorForPasswordField();
            SignUpModal.RegisterButton.should('be.disabled');
        })

        it('Verify error "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" message for "Password" field without capital letter', () => {
            SignUpModal.enterPassword('passwo@1');
            SignUpModal.verifyErrorMessages('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            SignUpModal.verifyBorderColorWithErrorForPasswordField();
            SignUpModal.RegisterButton.should('be.disabled');
        })

        it('Verify error "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" message for "Password" field without small letters', () => {
            SignUpModal.enterPassword('PASSWO@1');
            SignUpModal.verifyErrorMessages('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            SignUpModal.verifyBorderColorWithErrorForPasswordField();
            SignUpModal.RegisterButton.should('be.disabled');
        })

        it('Verify error "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" message for "Password" field without intenger', () => {
            SignUpModal.enterPassword('Passwo@q');
            SignUpModal.verifyErrorMessages('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
            SignUpModal.verifyBorderColorWithErrorForPasswordField();
            SignUpModal.RegisterButton.should('be.disabled');
        })
    });


    describe('Validation for "Re-enter password" field', () => {
        it('Verify "Re-enter password required" error message for empty "Re-enter password" field', () => {
            SignUpModal.triggerEmptyErrorsByField('reEnterPassword');
            SignUpModal.verifyErrorMessages('Re-enter password required');
            SignUpModal.verifyBorderColorWithErrorForReEnterPasswordField();
            SignUpModal.RegisterButton.should('be.disabled');
        });

        it('Verify "Passwords do not match" error message for empty "Re-enter password" field', () => {
            SignUpModal.enterPassword('Passwo@1');
            SignUpModal.enterReEnterPassword('Passwo@2');
            SignUpModal.triggerEmptyErrorsByField('reEnterPassword');
            SignUpModal.verifyErrorMessages('Passwords do not match');
            SignUpModal.verifyBorderColorWithErrorForReEnterPasswordField();
            SignUpModal.RegisterButton.should('be.disabled');
        });
    });

    describe('Successful sign up', () => {
        const randomPrefix = Math.floor(Math.random() * 100000);
        const email = `shulga.pavlo98+${randomPrefix}@gmail.com`;
        it('Verify successful sign up flow', () => {
            SignUpModal.enterName('Pavel');
            SignUpModal.enterLastName('Shulga');
            SignUpModal.enterEmail(email);
            SignUpModal.enterPassword('Passwo@1');
            SignUpModal.enterReEnterPassword('Passwo@1');
            SignUpModal.cliclRegisterButton();
            cy.url().should('include', '/panel/garage');
            cy.contains('You don’t have any cars in your garage').should('be.visible');
        })
    });

})