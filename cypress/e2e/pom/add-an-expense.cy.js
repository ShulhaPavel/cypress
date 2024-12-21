import HomePage from "../../page-objects/pages/homePage";
import LoginModal from "../../page-objects/modals/LoginModal";
import GaragePage from "../../page-objects/pages/GaragePage";
import AddCarModal from "../../page-objects/modals/AddCarModal";
import FuelExpensesPageWithValues from "../../page-objects/pages/FuelExpensesPageWithValues";
import AddAnExpenseModal from "../../page-objects/modals/AddAnExpenseModal";


describe('Verify fields on "Add an expense" page', () => {
    beforeEach(() => {
        HomePage.open();
        HomePage.clickSignInButton();
        LoginModal.enterEmail('shulga.pavlo98+1@gmail.com');
        LoginModal.enterPassword('ywS8lTViLl6aWFL');
        LoginModal.clickLoginButton();
        GaragePage.clickAddCarButton();
        AddCarModal.brand.select('Ford');
        AddCarModal.model.select('Focus');
        AddCarModal.enterMileage('10');
        AddCarModal.clickAddButton();
        GaragePage.clickFuelExpensesButton();
        FuelExpensesPageWithValues.clickFuelExpensesButton();
    });

    describe('Verify validation for "Number of liters" field', () => {
        beforeEach(() => {
            AddAnExpenseModal.triggerEmptyErrorsByField('litters');
        });
        it('Verify "Liters required" error message', () => {
            AddAnExpenseModal.verifyErrorMessages('Liters required');
            AddAnExpenseModal.verifyBorderColorWithErrorForNumberOfLitersField();
        });

        it('Verify "Liters has to be from 0.01 to 9999" error message', () => {
            AddAnExpenseModal.enterNumberOfLiters('123123123123');
            AddAnExpenseModal.verifyErrorMessages('Liters has to be from 0.01 to 9999');
            AddAnExpenseModal.verifyBorderColorWithErrorForNumberOfLitersField();
        });

        it.only('Verify "First expense mileage must not be less or equal to car initial mileage. Car initial mileage is 10" error message popUp', () => {
            AddAnExpenseModal.enterNumberOfLiters('1231');
            AddAnExpenseModal.enterTotalCost('123');
            AddAnExpenseModal.clickAddButton();
            AddAnExpenseModal.verifyErrorPopUp('First expense mileage must not be less or equal to car initial mileage. Car initial mileage is 10');
        });
    });

    describe('Verify all buttons on "Expenses" page with already added car', () => {
        beforeEach(() => {
            AddAnExpenseModal.triggerEmptyErrorsByField('cost');
        });
        it('Verify "Total cost required" error message', () => {
            AddAnExpenseModal.verifyErrorMessages('Total cost require');
            AddAnExpenseModal.verifyBorderColorWithErrorForTotalCostField();
        });

        it('Verify "Total cost has to be from 0.01 to 1000000" error message', () => {
            AddAnExpenseModal.enterTotalCost('123123123123');
            AddAnExpenseModal.verifyErrorMessages('Total cost has to be from 0.01 to 1000000');
            AddAnExpenseModal.verifyBorderColorWithErrorForNumberOfLitersField();
        });
    });

    describe('Verify adding new Fuel expenses', () => {
        it.only('Successful added Fuel expenses', () => {
            AddAnExpenseModal.mileage.clear();
            AddAnExpenseModal.enterMileage('100');
            AddAnExpenseModal.enterNumberOfLiters('1231');
            AddAnExpenseModal.enterTotalCost('1231');
            AddAnExpenseModal.clickAddButton();
            AddAnExpenseModal.findFirtsAddedExpenses();
            AddAnExpenseModal.verifyAmountInTheRow('1231.00 USD');
        });
    });
});
