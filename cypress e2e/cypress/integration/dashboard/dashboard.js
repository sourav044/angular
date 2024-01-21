import {
    When,
    Then
} from "cypress-cucumber-preprocessor/steps";

// Scenario 1
Then('I see {string} in the user', (title) => {
    cy.get('.david-topbar-right-entry-text').should('contain.text', title)
})

// Scenario 2
When('I put {string} in Name field', (name_value) => {
    cy.get('input[id$="search-name"]').type(name_value)
})

Then('I see {string} in Name field', (name_value) => {
    cy.get('input[id$="search-name"]').should('have.value', name_value)
})

// Scenario 3
When('I change the Host Name to {string}', (host_value) => {
    cy.get('[name=workerHost]').select(host_value)
})

Then('I see Host Name with {string}', (host_value) => {
    cy.get('[name=workerHost]').select(host_value)
})

// Scenario 4
When('I change the Search Schedule Name to {string}', (sch_value) => {
    cy.get('#undefined-search-name').type(sch_value).type('{enter}')
})

Then('I see Schedule Name with {string}', (sch_value) => {
    cy.wait(1000)
    cy.get('.each-virtual-content > li:nth-child(1) .cell-content').contains(sch_value)
})