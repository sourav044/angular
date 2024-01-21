import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Background 
Given('I navigate to amazon audio Admin page', () => {
    cy.forceVisit(Cypress.env('amazon audio_admin_url') + "?DpeToken=" + Cypress.env('dpe_token'));
    cy.wait(2000)
})