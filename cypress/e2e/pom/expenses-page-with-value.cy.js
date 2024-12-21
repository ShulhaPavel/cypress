import HomePage from "../../page-objects/pages/homePage";
import LoginModal from "../../page-objects/modals/LoginModal";
import GaragePage from "../../page-objects/pages/GaragePage";
import AddCarModal from "../../page-objects/modals/AddCarModal";
import FuelExpensesPageWithValues from "../../page-objects/pages/FuelExpensesPageWithValues";

describe('Verify all buttons on "Expenses" page', () => {
    beforeEach(() => {
        HomePage.open();
        HomePage.clickSignInButton();
        LoginModal.enterEmail('shulga.pavlo98+1@gmail.com');
        LoginModal.enterPassword('ywS8lTViLl6aWFL');
        LoginModal.clickLoginButton();
        GaragePage.clickAddCarButton();
    });


    describe('Verify all buttons on "Expenses" page with already added car', () => {
        it('Buttons visible and active', () => {
            AddCarModal.brand.select('Ford');
            AddCarModal.model.select('Focus');
            AddCarModal.enterMileage('10');
            AddCarModal.clickAddButton();
            GaragePage.clickFuelExpensesButton();
            FuelExpensesPageWithValues.verifyAllButtonsActiveOnPageWithValue();
        });
    });
});
