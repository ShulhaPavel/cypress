describe('auto', () => {
    beforeEach(() => {
      cy.visit('https://qauto.forstudy.space', {
        auth:{
            username: 'guest',
            password: 'welcome2qauto',
        },
      });
    });

    it('Find-all buttons in header', () => {
        cy.get('.header_logo')
        cy.get('nav').find('.header-link');
        cy.get('.header_right').find('button');
    })

    it.only('Buttons contain text/images', () => {
        cy.get('.header_logo svg').should('have.attr', 'xmlns');
        cy.get('nav a').contains('Home');
        cy.get('nav .header-link').contains('About');
        cy.get('nav button').last().should('have.text', 'Contacts');
        cy.get('.header_right button').first().should('have.text', 'Guest log in');
        cy.get('.header_right button').last().invoke('text').should('include', 'Sign In');
    })

    it("Contacts", () => {
      cy.get('.icon-facebook').parent().siblings();
      cy.get('.contacts_socials a').eq(2).should('have.attr', 'href', 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1');
      cy.get('.contacts_link').parent().not('.hidden').should('exist');
      cy.get('.contacts_link').eq(0).invoke('text').should('eq', 'ithillel.ua');
      const support = '.contacts_link';
      cy.get(support).eq(1).should('exist').and('have.text', 'support@ithillel.ua')
    })
})