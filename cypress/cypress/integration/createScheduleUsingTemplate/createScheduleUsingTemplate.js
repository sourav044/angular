import { When } from "cypress-cucumber-preprocessor/steps";


When('I select {string} in Type', (type_value) => {
    cy.get('.template-selection > .field-cell > .ember-basic-dropdown-trigger').click();
    cy.get('.ember-power-select-options').contains(type_value).click(); 
});

When('I select {string} in Template', (value) => {
    cy.get('.template-selection > :nth-child(2) > .ember-basic-dropdown-trigger').click();
    cy.get('.ember-power-select-options').contains(value).click(); 
     
});

    