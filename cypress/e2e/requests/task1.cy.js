/// <reference types= "cypress" />
import data from '../../fixtures/userAuto.json'

describe('Tests with auth in before hook', () => {

    let sidValueGlobal;
    let carIdGlobal;
    let userIdGlobal;

    before(() => {

        const userBody = {
            "email": data.email,
            "password": data.password,
            "remember": data.remember
        };
        cy.request('POST', '/api/auth/signin', userBody).then((response) => {
            expect(response.body.data.currency).to.eq('usd');

            const sidCookie = response.headers['set-cookie'][0];
            const sidValue = sidCookie.split(';')[0].split('=')[1];
            sidValueGlobal = sidValue;

            const userId = response.body.data.userId;
            userIdGlobal = userId;
        })
    })

    it('Checks car brands', () => {
        cy.api("GET", "/api/cars/brands").should((response) => {
            expect(response.body.data.length).to.eq(5);
        })
    });

    it('Add Car: Audi A8', () => {
        const carBody = {

            "carBrandId": 1,
            "carModelId": 5,
            "mileage": 122

        }
        cy.api({
            method: 'POST',
            url: '/api/cars',
            body: carBody,
            headers: {
                'Cookie': `sid=${sidValueGlobal}`
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.data.logo).to.eq('audi.png');
            const carId = response.body.data.id;
            carIdGlobal = carId;

        });
    });

    it('Update Car: Audi A8 to Porsche 911', () => {
        const carUpdatedBody = {

            "carBrandId": 4,
            "carModelId": 16,
            "mileage": 122

        }
        cy.api({
            method: 'PUT',
            url: `/api/cars/${carIdGlobal}`,
            body: carUpdatedBody,
            headers: {
                'Cookie': `sid=${sidValueGlobal}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.logo).to.eq('porsche.png');
        });
    });

    it('Add an Expenses', () => {
        const expensesBody = {
            "carId": `${carIdGlobal}`,
            "reportedAt": "2024-12-25",
            "mileage": 1444,
            "liters": 199,
            "totalCost": 2000,
            "forceMileage": false
        }
        cy.api({
            method: 'POST',
            url: '/api/expenses/',
            body: expensesBody,
            headers: {
                'Cookie': `sid=${sidValueGlobal}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.carId.toString()).to.eq(`${carIdGlobal}`);
            expect(response.body.data.totalCost).to.eq(expensesBody.totalCost)
        });
    });

    it('Delete Car', () => {
        cy.api({
            method: 'DELETE',
            url: `/api/cars/${carIdGlobal}`,
            headers: {
                'Cookie': `sid=${sidValueGlobal}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.carId.toString()).to.eq(`${carIdGlobal}`);
        });
    });

    it('User Log out', () => {
        cy.api({
            method: 'GET',
            url: '/auth/logout',
        }).then((response) => {
            expect(response.status.toString()).to.eq('200');
        });
    });
});

