describe('Validation for Sign Up modal', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('.btn-primary').click();
    });

    describe('Validation for "Name" field', () => {
        beforeEach(() => {
            cy.get('#signupName').focus();

            it('Verify "Name required" error message for empty "Name" field', () => {
                cy.get('#signupName').blur();
                cy.get('.invalid-feedback p').should('be.visible').and('have.text', 'Name required');
                cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            });

            it('Verify error "Name is invalid" message for "Name" field with number input', () => {
                cy.get('#signupName').type('2222');
                cy.get('#signupName').blur();
                cy.get('.invalid-feedback p').should('be.visible').and('have.text', 'Name is invalid');
                cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            });

            it('Verify error "Name is invalid" message for "Name" field with cirilic alphabet', () => {
                cy.get('#signupName').type('ффффф');
                cy.get('#signupName').blur();
                cy.get('.invalid-feedback p').should('be.visible').and('have.text', 'Name is invalid');
                cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            });

            it('Verify error "Name is invalid" message for "Name" field with emty spaces', () => {
                cy.get('#signupName').type('    ');
                cy.get('#signupName').blur();
                cy.get('.invalid-feedback p').should('be.visible').and('have.text', 'Name is invalid');
                cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            });

            it('Verify error "Name has to be from 2 to 20 characters long" message for "Name" field with 1 character', () => {
                cy.get('#signupName').type('a');
                cy.get('#signupName').blur();
                cy.get('.invalid-feedback p').eq(0).should('be.visible').and('have.text', 'Name has to be from 2 to 20 characters long');
                cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            });

            it('Verify error "Name has to be from 2 to 20 characters long" message for "Name" field with 21 characters', () => {
                cy.get('#signupName').type('abcdefghijklmnopqrstu');
                cy.get('#signupName').blur();
                cy.get('.invalid-feedback p').eq(0).should('be.visible').and('have.text', 'Name has to be from 2 to 20 characters long');
                cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            });

            it('Verify that both errors displays for "Name" in one time', () => {
                cy.get('#signupName').type('2');
                cy.get('#signupName').blur();
                cy.get('.invalid-feedback p').eq(0).should('be.visible').and('contain.text', 'Name is invalid');
                cy.get('.invalid-feedback p').eq(1).should('be.visible').and('contain.text', 'Name has to be from 2 to 20 characters long')
                cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            });
        });
    })

    describe('Validation for "Last name" field', () => {
        beforeEach(() => {
            cy.get('#signupLastName').focus();
            it('Verify error message for empty "Last name" field', () => {
                cy.get('#signupLastName').blur();
                cy.get('.invalid-feedback p').should('be.visible').and('have.text', 'Last name required');
                cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            })

            it('Verify error "Last name is invalid" message for "Last name" field with number input', () => {
                cy.get('#signupLastName').type('2222');
                cy.get('#signupLastName').blur();
                cy.get('.invalid-feedback p').should('be.visible').and('have.text', 'Last name is invalid');
                cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            })

            it('Verify error "Last name is invalid" message for "Last name" field with cirilic alphabet', () => {
                cy.get('#signupLastName').type('ффффф');
                cy.get('#signupLastName').blur();
                cy.get('.invalid-feedback p').should('be.visible').and('have.text', 'Last name is invalid');
                cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            })

            it('Verify error "Last name is invalid" message for "Last name" field with emty spaces', () => {
                cy.get('#signupLastName').type('    ');
                cy.get('#signupLastName').blur();
                cy.get('.invalid-feedback p').should('be.visible').and('have.text', 'Last name is invalid');
                cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            })

            it('Verify error "Last name has to be from 2 to 20 characters long" message for "Last name" field with 1 character', () => {
                cy.get('#signupLastName').type('a');
                cy.get('#signupLastName').blur();
                cy.get('.invalid-feedback p').eq(0).should('be.visible').and('have.text', 'Last name has to be from 2 to 20 characters long');
                cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            })

            it('Verify error "Last name has to be from 2 to 20 characters long" message for "Last name" field with 21 characters', () => {
                cy.get('#signupLastName').type('abcdefghijklmnopqrstu');
                cy.get('#signupLastName').blur();
                cy.get('.invalid-feedback p').eq(0).should('be.visible').and('have.text', 'Last name has to be from 2 to 20 characters long');
                cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            })

            it('Verify that both errors displays for "Last name" in one time', () => {
                cy.get('#signupLastName').type('2');
                cy.get('#signupLastName').blur();
                cy.get('.invalid-feedback p').eq(0).should('be.visible').and('contain.text', 'Last name is invalid');
                cy.get('.invalid-feedback p').eq(1).should('be.visible').and('contain.text', 'Last name has to be from 2 to 20 characters long')
                cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            });
        });
    });

    describe('Validation for "Email" field', () => {
        beforeEach(() => {
            cy.get('#signupEmail').focus();
            it('Verify "Email required" error message for empty "Email" field', () => {
                cy.get('#signupEmail').blur();
                cy.get('.invalid-feedback p').should('be.visible').and('have.text', 'Email required');
                cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            });

            it('Verify error "Email is incorrect" message for "Name" field with invalid email', () => {
                cy.get('#signupEmail').type('test@');
                cy.get('#signupEmail').blur();
                cy.get('.invalid-feedback p').should('be.visible').and('have.text', 'Email is incorrect');
                cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            });
        });
    });

    describe('Validation for "Password" field', () => {
        beforeEach(() => {
            cy.get('#signupPassword').focus();
            it('Verify "Password required" error message for empty "Password" field', () => {
                cy.get('#signupPassword').blur();
                cy.get('.invalid-feedback p').should('be.visible').and('have.text', 'Password required');
                cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            })

            it('Verify error "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" message for "Password" field with 1 character', () => {
                cy.get('#signupPassword').type('a');
                cy.get('#signupPassword').blur();
                cy.get('.invalid-feedback p').should('be.visible').and('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
                cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            })

            it('Verify error "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" message for "Password" field with 21 characters', () => {
                cy.get('#signupPassword').type('abcdefghijklmnopqrstu');
                cy.get('#signupPassword').blur();
                cy.get('.invalid-feedback p').should('be.visible').and('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
                cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            })

            it('Verify error "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" message for "Password" field without capital letter', () => {
                cy.get('#signupPassword').type('passwo@1');
                cy.get('#signupPassword').blur();
                cy.get('.invalid-feedback p').should('be.visible').and('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
                cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            })

            it('Verify error "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" message for "Password" field without small letters', () => {
                cy.get('#signupPassword').type('PASSWO@1');
                cy.get('#signupPassword').blur();
                cy.get('.invalid-feedback p').should('be.visible').and('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
                cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            })

            it('Verify error "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" message for "Password" field without intenger', () => {
                cy.get('#signupPassword').type('Passwo@q');
                cy.get('#signupPassword').blur();
                cy.get('.invalid-feedback p').should('be.visible').and('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
                cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
                cy.get('.btn-primary').should('be.disabled');
            })
        });
    })

    describe('Validation for "Re-enter password" field', () => {
        it('Verify "Re-enter password required" error message for empty "Re-enter password" field', () => {
            cy.get('#signupRepeatPassword').focus();
            cy.get('#signupRepeatPassword').blur();
            cy.get('.invalid-feedback p').should('be.visible').and('have.text', 'Re-enter password required');
            cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.get('.btn-primary').should('be.disabled');
        });

        it('Verify "Passwords do not match" error message for empty "Re-enter password" field', () => {
            cy.get('#signupPassword').type('Passwo@1');
            cy.get('#signupRepeatPassword').focus();
            cy.get('#signupRepeatPassword').type('Passwo@2');
            cy.get('#signupRepeatPassword').blur();
            cy.get('.invalid-feedback p').should('be.visible').and('have.text', 'Passwords do not match');
            cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            cy.get('.btn-primary').should('be.disabled');
        });
    });

    describe('Successful sign up', () => {
        const randomPrefix = Math.floor(Math.random() * 100000);
        const email = `shulga.pavlo98+${randomPrefix}@gmail.com`;
        it('Verify successful sign up flow', () => {
            cy.get('#signupName').focus();
            cy.get('#signupName').type('Pavel');
            cy.get('#signupLastName').focus();
            cy.get('#signupLastName').type('Shulga');
            cy.get('#signupEmail').focus();
            cy.get('#signupEmail').type(email);
            cy.get('#signupPassword').focus();
            cy.get('#signupPassword').type('Passwo@1');
            cy.get('#signupRepeatPassword').focus();
            cy.get('#signupRepeatPassword').type('Passwo@1');
            cy.get('.btn-primary').should('be.enabled');
            cy.get('.modal-footer .btn-primary').should('contain.text', 'Register').click();
            cy.url().should('include', '/panel/garage');
            cy.contains('You don’t have any cars in your garage').should('be.visible');
        })
    });
})

