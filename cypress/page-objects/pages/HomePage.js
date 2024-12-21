/// <reference types= "cypress" />

import BasePage from "./BasePage";

class HomePage extends BasePage {

    get HeaderLogo() {
        return cy.get('.header_logo svg');
    };

    get HeaderLeftSideNav() {
        return cy.get('nav');
    };

    get HeaderRightSideNav() {
        return cy.get('.header_right');
    };

    get HeaderLeftSideNavNames() {
        return cy.get('nav a, nav .header-link, nav button');
    };

    get HeaderRightSideNavNames() {
        return cy.get('.header_right button');
    };

    get SocialButtons() {
        return cy.get('.socials_link'); // Для иконок
    }

    get FooterButtons() {
        return cy.get('.contacts_link'); // .contacts_link
    }

    get LinksForFooterButtons() {
        return cy.get('.contacts_socials a, .flex-column .contacts_link')
    }

    get SignUpButton() {
        return cy.get('.btn-primary');
    };

    get SignInButton() {
        return cy.get('.header_signin')
    };


    open() {
        super.open('/');
    };

    isHeaderLogoVisible() {
        this.HeaderLogo.should('be.visible');
    };

    FindHeaderLeftSideNav() {
        this.HeaderLeftSideNav.find('.header-link');
    };

    FindHeaderRightSideNav() {
        this.HeaderRightSideNav.find('.header-link');
        this.HeaderRightSideNav.find('.header_signin')
    };

    HeaderLogoAttr() {
        this.HeaderLogo.should('have.attr', 'xmlns')
    }

    HeaderLeftNavNames() {
        this.HeaderLeftSideNavNames.contains('Home');
        this.HeaderLeftSideNavNames.contains('About');
        this.HeaderLeftSideNavNames.last().should('have.text', 'Contacts');
    };

    HeaderRightNavNames() {
        this.HeaderRightSideNavNames.first().should('have.text', 'Guest log in');
        this.HeaderRightSideNavNames.last().invoke('text').should('include', 'Sign In');
    };

    SignUpButtonExist() {
        this.SignUpButton.should('be.visible');
    }

    FooterButtonsExist() {
        this.SocialButtons.siblings();
        this.FooterButtons.eq(0).should('contain.text', 'ithillel.ua');
        this.FooterButtons.eq(1).should('exist').and('contain.text', 'support@ithillel.ua')
    };

    FooterButtonLinks() {
        this.LinksForFooterButtons.eq(0).should('have.attr', 'href', 'https://www.facebook.com/Hillel.IT.School');
        this.LinksForFooterButtons.eq(1).should('have.attr', 'href', 'https://t.me/ithillel_kyiv');
        this.LinksForFooterButtons.eq(2).should('have.attr', 'href', 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1');
        this.LinksForFooterButtons.eq(3).should('have.attr', 'href', 'https://www.instagram.com/hillel_itschool/');
        this.LinksForFooterButtons.eq(4).should('have.attr', 'href', 'https://www.linkedin.com/school/ithillel/');
        this.LinksForFooterButtons.eq(5).should('have.attr', 'href', 'https://ithillel.ua');
        this.LinksForFooterButtons.eq(6).should('have.attr', 'href', 'mailto:developer@ithillel.ua');
    }

    clickSignUpButton() {
        this.SignUpButton.click();
    };

    clickSignInButton() {
        this.SignInButton.click();
    };
}

export default new HomePage();