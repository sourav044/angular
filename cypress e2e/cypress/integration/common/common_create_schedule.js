import {When, Then, And } from "cypress-cucumber-preprocessor/steps";
 
// Scenario 1
When('I click on Create new Schedule Button', () => {
    cy.get('.create').click();
   });
  
   When('I fill {string} in Name', (name_value) => {
      cy.get('#diga-amazon audio-schedule-form-name').clear().type(name_value);
     });
  
  When('I fill {string} in Description', (description_value) => {
      cy.get('textarea[name="description"]').clear().type(description_value);
   });
  
  When('I select {string} in Worker Host', (host_value) => {    
      cy.get('.flex-container-v > :nth-child(2) > .ember-basic-dropdown-trigger').click();    
      cy.get('.ember-power-select-options').contains(host_value).click(); 
     }); 
  
  When('I select {string} as Job Setting', (job_value) => {
        var index = (job_value == "From template" ? 2: 1)
       cy.get('.definition-types > :nth-child('+index+') > label').click();
     });

  When('I select {string} in From Template', (name) => {
    cy.get('.template-selection > .field-cell > .ember-basic-dropdown-trigger > .ember-power-select-placeholder' ).click();
    cy.get('.ember-power-select-option').contains(name).click(); 

  });   
  
  When('I select {string} in Source', (source_value) => {
      cy.get('.source > :nth-child(1) > .ember-basic-dropdown-trigger > .ember-power-select-placeholder').click();
      cy.get('.ember-power-select-options').contains(source_value).click(); 
       
     });
  
  When('I select {string} in Channels', (Channel_values) => {
      cy.get('.diga-channel-selector > .ember-basic-dropdown-trigger').click();
      cy.get('.ember-power-select-options').contains(Channel_values).click(); 
      cy.get('.diga-channel-selector > .ember-basic-dropdown-trigger').click();
     });
  
  When('I select {string} in Output table', (table_value) => {
      cy.get(':nth-child(4) > :nth-child(1) > .ember-basic-dropdown-trigger > .ember-power-select-placeholder').click();
      cy.get('.ember-power-select-options').contains(table_value).click(); 
     });
  
  When('I fill {string} in Output title', (title_value) => {
      cy.get('#diga-amazon audio-schedule-form-job-output-title').clear().type(title_value);   
     });
  
  When('I select {string} in Format', (format_value) => {    
      cy.get('.flex-2 > .ember-basic-dropdown-trigger').click();
      cy.get('.ember-power-select-options').contains(format_value).click(); 
     });
  
  When('I select {string} in Start date', (date_value) => {
      cy.get('#diga-amazon audio-schedule-form-first-occurrence-start-date').clear().type(date_value);
     });
  
  When('I click on Create button', () => {
      cy.get('.primary').click();
  })

  When('I click on Create button', () => {
      cy.get('.primary').click();
    })

  Then('I am in dashboard',() => {
    cy.url().should('eq', 'http://10.1.4.157:6584/#/schedules')
  })   

  And('I have one selected item with name {string} and date {string}', (name, date) => {
    cy.get('.each-virtual-content > li').each(($el, index, $list)=>{
        cy.wrap($el)
        .invoke('text')
        .then(text => {
                if (text.includes(name))
                {
                    var row_no = index + 1
                    // check for selected 
                    cy.get('li:nth-child('+ row_no +') .ember-checkbox').should('be.checked')
                    // check for name and date
                    cy.get('li:nth-child('+ row_no +') .cell-content').should(($lis) => {                        
                        expect($lis.eq(0)).to.contain(name)
                        expect($lis.eq(2)).to.contain(date)          
                                    
                      })
                    return false               
                }        
            })
            return false;
        });
    }) 

