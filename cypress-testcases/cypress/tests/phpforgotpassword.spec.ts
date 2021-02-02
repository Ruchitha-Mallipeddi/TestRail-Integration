describe ('Forgot Password',function(){

    //forgot password  
   
    it("Forgot Password C7", function(){
     cy.visit('/')
     cy.get('.zoomInDown > :nth-child(3) > .btn').click()
     cy.get('#resetemail')
     .type('user@phptravels.com')
     cy.get('.input-group-btn > .btn').click()
     cy.get('.alert')
     .should("have.text","New Password sent to user@phptravels.com, Kindly check email")
    })
});

// Invalid email id 
it("Valid email id C8", function(){
    cy.visit('/')
    cy.get('.zoomInDown > :nth-child(3) > .btn') .click()
    cy.get('#resetemail')
    .type('user@phptrav.com')
    cy.get('.input-group-btn > .btn').click()
    cy.get('.alert')
    .should("have.text","Email Not Found")
   })

     
   // Blank reset email
it("Blank reset email C9", function(){
    cy.visit('/')
    cy.get('.zoomInDown > :nth-child(3) > .btn').click()
    cy.get('#resetemail')
    .focus()
    .blur()
    .click()
    cy.get('.input-group-btn > .btn').click()
    cy.get('.alert')
    .should("have.text","Email Not Found")
})

// likely want to do this in a support file
// so it's applied to all spec files
// cypress/support/index.js

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

