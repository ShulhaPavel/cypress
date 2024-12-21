import HomePage from "../../page-objects/pages/homePage";
import LoginModal from "../../page-objects/modals/LoginModal";
import GaragePage from "../../page-objects/pages/GaragePage";

describe('Verify all buttons on "Garage" page', () => {
    beforeEach(() => {
        HomePage.open();
        HomePage.clickSignInButton();
        LoginModal.enterEmail('shulga.pavlo98+1@gmail.com');
        LoginModal.enterPassword('ywS8lTViLl6aWFL');
        LoginModal.clickLoginButton();
    });

    describe('Verify buttons on "Garage" page', () => {
        it('Buttons visible and active', () => {
            GaragePage.verifyAllButtonsActive();
        });
    });
});
