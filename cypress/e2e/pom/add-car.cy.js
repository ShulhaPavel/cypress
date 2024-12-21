import HomePage from "../../page-objects/pages/homePage";
import LoginModal from "../../page-objects/modals/LoginModal";
import GaragePage from "../../page-objects/pages/GaragePage";
import AddCarModal from "../../page-objects/modals/AddCarModal";

describe('Validation for "Add car" modal', () => {
    beforeEach(() => {
        HomePage.open();
        HomePage.clickSignInButton();
        LoginModal.enterEmail('shulga.pavlo98+1@gmail.com');
        LoginModal.enterPassword('ywS8lTViLl6aWFL');
        LoginModal.clickLoginButton();
        GaragePage.clickAddCarButton();
    });

    describe('Verify that default values displays for "Models" dropdown', () => {
        it('Verify default "Model" value for "Audi" brand', () => {
            AddCarModal.brand.select('Audi')
            AddCarModal.triggerFirtsCarModelOfTheBrand('TT');
        });

        it('Verify default "Model" value for "BMW" brand', () => {
            AddCarModal.brand.select('BMW')
            AddCarModal.triggerFirtsCarModelOfTheBrand('3');
        });

        it('Verify default "Model" value for "Ford" brand', () => {
            AddCarModal.brand.select('Ford')
            AddCarModal.triggerFirtsCarModelOfTheBrand('Fiesta');
        });

        it('Verify default "Model" value for "Porsche" brand', () => {
            AddCarModal.brand.select('Porsche')
            AddCarModal.triggerFirtsCarModelOfTheBrand('911');
        });

        it('Verify default "Model" value for "Fiat" brand', () => {
            AddCarModal.brand.select('Fiat')
            AddCarModal.triggerFirtsCarModelOfTheBrand('Palio');
        });
    });

    describe('Validation for "Mileage" field', () => {
        it('Verify "Mileage cost required" error message', () => {
            AddCarModal.triggerEmptyErrorsByField();
        });

        it('Verify "Mileage has to be from 0 to 999999" error message', () => {
            AddCarModal.enterMileage('22222222222');
            AddCarModal.verifyErrorMessage('Mileage has to be from 0 to 999999');
        });
    });

    describe('"Cancel" button', () => {
        it.only('Verify "Cancel" button', () => {
            AddCarModal.clickCancelButton();
        });
    });

    describe('Successful Adding several new cars', () => {
        it('Add "Audi" car', () => {
            AddCarModal.brand.select('Audi');
            AddCarModal.model.select('Q7');
            AddCarModal.enterMileage('1488');
            AddCarModal.clickAddButton();
        });

        it('Add "Porsche" car', () => {
            AddCarModal.brand.select('Porsche');
            AddCarModal.model.select('Cayenne');
            AddCarModal.enterMileage('322');
            AddCarModal.clickAddButton();
        });
    });
});