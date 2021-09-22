// TODO for show reference of `cy`
/// <reference types="cypress" /> 

describe('User journey 1', () => {

    beforeEach(() => {
        // TODO do something before run each testing
    })

    it('Visits the cypress example', function () {
        cy.visit("/");
        cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(3) > a')
            .contains('Actions')
            .click()

        cy.get('#email1')
            .type("HELLO")

        cy.visit("https://example.cypress.io/commands/actions")
        // cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(3) > a')
        //     .contains('Actions')
        //     .click()
    })
})

describe('api testing', () => {
    it('POST /api/v1', () => {
        cy.request(
            'POST',
            'http://localhost:8080/api/v1',
            {
                "firstName": "PhanupaDDDht",
                "lastName": "Cholatdar"
            }
        ).its('body').as('test_param_header')

        cy.get('@test_param_header')
        .then(ppp => {
            expect(ppp.result).equal('complete testing')
        })
    })

})