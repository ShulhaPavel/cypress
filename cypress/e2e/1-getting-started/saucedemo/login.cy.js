describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('login with correct credentials', () => {
        let userName = 'standard_user';
        let password = 'secret_sauce';
        cy.get('[data-test="username"]').type(userName);
        cy.get('[data-test="password"]').type(password);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="title"]').should('have.text', "Products")
      });

      it('login with incorrect credentials', () => {
        let userName = 'stsssssssds';
        let password = 'secret_sauce';
        cy.get('[data-test="username"]').type(userName);
        cy.get('[data-test="password"]').type(password);
        cy.get('[data-test="login-button"]').click();
      });

      it('login without an username', () => {
        // let userName = 'standard_user';
        let password = 'secret_sauce';
        // cy.get('[data-test="username"]').type(userName);
        cy.get('[data-test="password"]').type(password);
        cy.get('[data-test="login-button"]').click();
    });

      it('login without password', () => {
        let userName = 'standard_user';
        // let password = 'secret_sauce';
        cy.get('[data-test="username"]').type(userName);
        // cy.get('[data-test="password"]').type(password);
        cy.get('[data-test="login-button"]').click();
    });
})