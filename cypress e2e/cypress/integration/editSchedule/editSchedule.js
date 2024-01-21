import {Then, And } from "cypress-cucumber-preprocessor/steps";

Then('I select the created schedule name as {string}', (name) => {    
    var found = false
    cy.wait(2000)   
    cy.get('.each-virtual-content > li').each(($el, index, $list) => {
        cy.wrap($el)
            .invoke('text')
            .then(text => {
                if (found) return false;
               
                if (text.includes(name)) {             
                    {
                        cy.get(".menu-bar").then($body => {                          

                            // if ($body.find("a[class*= edit]").length == 0) {   
                            //     //evaluates as true
                            //     var row_no = index + 1
                            //     cy.get('li:nth-child('+ row_no +') .ember-checkbox').click()                                 
                            // }
                            found = true ;
                            cy.get('button[value="edit"]').click() 
                                                     
                        });
 
                    }
                     
                }                
            })
             
        })
    })
 

And('I have one selected item with name {string} and description {string}', (name, description) => {
    cy.get('.each-virtual-content > li').each(($el, index, $list) => {
        var row_no = index + 1
        cy.get('li:nth-child(' + row_no + ') .cell-content').should(($row) => {
            var name_val = $row.eq(0).text().toLowerCase().trim()
            var description_val = $row.eq(1).text().toLowerCase().trim()
            if (name_val == name.toLowerCase().trim() && description_val == description.toLowerCase().trim()) {
                expect($row.eq(0)).to.contain(name)
                expect($row.eq(1)).to.contain(description)

            } else {
                throw new Error("Value miss-matched")
            }
        })
        return false
    });

})

