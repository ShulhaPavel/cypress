/// <reference types= "cypress" />
// import data from '../../fixtures/userAuto.json'
import HomePage from '../../page-objects/pages/homePage';
import LoginModal from '../../page-objects/modals/LoginModal';

describe('Intercept', () => {
    beforeEach(() => {
        HomePage.open();
        HomePage.clickSignInButton();
        LoginModal.enterEmail('shulga.pavlo98+1@gmail.com');
        LoginModal.enterPassword('ywS8lTViLl6aWFL');
        LoginModal.clickLoginButton();
        cy.url().should('include', '/panel/garage');
        cy.get('.panel-empty_message').should('have.text', 'You don’t have any cars in your garage').and('be.visible');
    });

    describe('Intercept request for updating profile', () => {
        const profile = {
            "status": "ok",
            "data": {
                "userId": 165177,
                "photoFilename": "default-user.png",
                "name": "Polar",
                "lastName": "Bear"
            }
        }
        it('Update user name in Profile page', () => {
            cy.intercept('GET', '/api/users/profile', profile).as('getProfile');
            cy.get('.sidebar_btn-group a:nth-child(1)').should('be.visible').and('not.be.disabled').click();
            cy.url().should('include', '/panel/profile');
            cy.wait('@getProfile').its('response.statusCode').should('eq', 200);
            cy.contains('.profile_name', 'Polar Bear');
        })
    });
});
