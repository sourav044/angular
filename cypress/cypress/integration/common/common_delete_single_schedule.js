import {And } from "cypress-cucumber-preprocessor/steps";

And('I delete the schedule with name {string} and date {string}', (name, date) => {
    cy.wait(2000)
    var found = false;
    cy.get('.each-virtual-content > li').each(($el, index, $list)=>{
        cy.wrap($el)
        .invoke('text')
        .then(text => {
                if (text.includes(name))
                {
                    if (found) return false;
                    var row_no = index + 1                   
                    // check for name and date
                    cy.get('li:nth-child('+ row_no +') .cell-content').should(($row) => {                        
                        expect($row.eq(0)).to.contain(name)
                        expect($row.eq(2)).to.contain(date)                                   
                    })  
                    
                    cy.get(".menu-bar").then($body => {

                        cy.log($body.find(".delete").length)

                        if ($body.find(".delete").length == 0) {   
                            //evaluates as true                         
                            cy.get('li:nth-child('+ row_no +') .ember-checkbox').click()                              
                        }
                        found = true;
                        cy.get('.delete').click()
                        cy.get('.primary').click()                            
                    });             
                              
                }        
            })
            
        });   
})