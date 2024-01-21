import {When, Then, And } from "cypress-cucumber-preprocessor/steps";

When('I change the Search Schedule Name to {string}', (sch_value) => {
    cy.get('#undefined-search-name').type(sch_value).type('{enter}')
})

Then('I see Schedule Name with {string}', (sch_value) => {
    cy.wait(1000)
    cy.get('.each-virtual-content > li:nth-child(1) .cell-content').contains(sch_value)
})