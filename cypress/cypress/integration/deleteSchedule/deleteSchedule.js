import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// Scenario multiple delete 
Then('I delete the Schedules name with {string} and {string}', (first_name, second_name) => {    
    cy.wait(2000)
    var found = false
    cy.get('input[name="name"]').type("delete").type('{enter}')
    cy.wait(1000)
        cy.get('.each-virtual-content > li').each(($el, index, $list)=>{
            cy.wrap($el)
            .invoke('text')
            .then(text => {
                if (found) return false;                
                var row_no = index + 1;
                cy.log(row_no);
                cy.get('li:nth-child('+ row_no +') .cell-content').then(($row) => {   
                    
                    var div_elem_text = $row.eq(0).text().trim();
                    cy.log(div_elem_text);

                    if (div_elem_text == first_name || div_elem_text == second_name)
                    {
                        cy.get('li:nth-child('+ row_no +') .ember-checkbox').click()
                    }
                    else{
                        found = true;
                        throw new Error("All requested schedule has not been deleted");                     
                       }             
                });                  
            })   
        });
    
        cy.get('.delete').click()
        cy.get('.primary').click()
        return false 
})


Then('I verify all the schedules not having names {string} and {string}', (first_name, second_name) => {
    cy.wait(2000)
    cy.get('.each-virtual-content > li').each(($el, index, $list)=>{        
        var row_no = index + 1
        cy.get('li:nth-child('+ row_no +') .cell-content').then(($row) => {                        
            var div_elem_text = $row.eq(0).text().toLowerCase().trim() 
            cy.log(div_elem_text, first_name.toLowerCase().trim())       
            if (div_elem_text == first_name.toLowerCase().trim()  ||  div_elem_text == second_name.toLowerCase().trim())
            {   
                throw new Error("All requested schedule has not been deleted")  
                
            }                                   
        }) 
        
    }); 
    return false           
})
