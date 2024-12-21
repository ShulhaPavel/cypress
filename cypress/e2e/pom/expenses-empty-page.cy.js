import HomePage from "../../page-objects/pages/homePage";
import LoginModal from "../../page-objects/modals/LoginModal";
import GaragePage from "../../page-objects/pages/GaragePage";
import EmptyFuelExpensesPage from "../../page-objects/pages/EmptyFuelExpensesPage";

describe('Verify all buttons on "Expenses" page', () => {
    beforeEach(() => {
        HomePage.open();
        HomePage.clickSignInButton();
        LoginModal.enterEmail('shulga.pavlo98+1@gmail.com');
        LoginModal.enterPassword('ywS8lTViLl6aWFL');
        LoginModal.clickLoginButton();
        GaragePage.clickFuelExpensesButton();
    });

    describe('Verify all buttons on "Expenses" empty page', () => {
        it('Buttons visible and active', () => {
            EmptyFuelExpensesPage.verifyAllButtonsActiveOnEmptyPage();
        });
    });
});
