/// <reference types= "cypress" />
import HomePage from "../../page-objects/pages/homePage";

describe('Verify Home Page', () => {
    beforeEach(() => {
        HomePage.open();
    });

    describe('Verify header', () => {
        it('Find-all buttons in header', () => {
            HomePage.isHeaderLogoVisible();
            HomePage.FindHeaderLeftSideNav();
            HomePage.FindHeaderRightSideNav();
        });

        it('Buttons contain text/images', () => {
            HomePage.HeaderLogoAttr();
            HomePage.HeaderLeftNavNames();
            HomePage.HeaderRightNavNames();
        })
    });

    describe('Verify SignUp button', () => {
        it('Find SignUp button', () => {
            HomePage.SignUpButtonExist();
        })
    })

    describe('Verify footer', () => {
        it('Find-all buttons', () => {
            HomePage.FooterButtonsExist();
        })

        it('Verify correct link for eact button in footer', () => {
            HomePage.FooterButtonLinks();
        })
    });
})