import {When, Then, And } from "cypress-cucumber-preprocessor/steps";


When('I put Current date as Start date', () => {
    const date_now = new Date()
    const dd = String(date_now.getDate()).padStart(2, '0');
    const mm = String(date_now.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = date_now.getFullYear();
    const today = yyyy + '-' + mm + '-' +dd ; 
    cy.get('#diga-amazon audio-schedule-form-first-occurrence-start-date').clear().type(today);
});

When('I put Current time as Start time', () => {
    const date_now = new Date();
    date_now.setSeconds(date_now.getSeconds() + 30);
    const current_time =  String(date_now.getHours()).padStart(2, '0') + ":" + String(date_now.getMinutes()).padStart(2, '0') + ":" + String(date_now.getSeconds()).padStart(2, '0');
    cy.get('#diga-amazon audio-schedule-form-first-occurrence-start-time').clear().type(current_time);
});

When('I put {string} min as Duration time', (duration) =>{
    cy.get('#diga-amazon audio-schedule-form-first-occurrence-duration').clear().type(duration);
})

When('I wait {string} ms', (duration) => {
    cy.wait(parseInt(duration));
})

Then ('I have one item name with {string} and next occurrence {string}', (schedule_name, status) =>{
    cy.get('.each-virtual-content > li:nth-child(1) .cell-content').should(($lis) => {                        
        expect($lis.eq(0)).to.contain(schedule_name);
        expect($lis.eq(2)).to.contain(status);                           
      })
})

When ('I click on Refresh button', () => {
    cy.get('.menu-bar-right > .btn').click(); 
})

When ('I fill {string} in Job name', (job_name) => {
    cy.get('#undefined-search-name').clear().type(job_name);
})

When ('I click on Inactive button', () => {
    cy.get('#inactiveButton').click(); 
})
 
When ('I click on Apply button', () => {
    cy.get('.diga-filter-form-submit').click(); 
})

Then ('I check the time', () => {
    cy.get('.each-virtual-content > li:nth-child(1) .list-item-cell-checkbox').click();
    cy.wait(1000);
    cy.get('.audio-meter-in-menu .time').invoke('text').should('match', /^[0-9]+:[0-9]+:[0-9]+/);
})

Then ('I have one item name with {string} and status {string}', (schedule_name, status) =>{ 
    cy.get('.btn').click();
    cy.get('.each-virtual-content > li:nth-child(1) .cell-content').should(($lis) => {                        
        expect($lis.eq(0)).to.contain(schedule_name);
        expect($lis.eq(1)).to.contain(status);                            
      })
})


Then ('I delete the schedule with name {string} and next occurrence {string}', (schedule_name, status) => {
    cy.wait(2000);

    cy.get('.each-virtual-content > li:nth-child(1) .cell-content').should(($lis) => {                        
        expect($lis.eq(0)).to.contain(schedule_name);
                                    
    })

    cy.get('.each-virtual-content > li:nth-child(1) .ember-checkbox').click()
    cy.get('.delete').click();
    cy.get('.primary').click();

}) 