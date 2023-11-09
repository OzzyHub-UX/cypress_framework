describe('Project - Login Function', ()=> {

    it('Test Case 01 - Validate the login form', () => {

        /**
         * Navigate to https://techglobal-training.com/frontend/project-2
        * Validate that the username input box is displayed
        * Validate that the username input box is not required
        * Validate that the label of the username input box is “Please enter your username”
        * Validate that the password input box is displayed
        * Validate that the password input box is not required
        * Validate that the label of the password input box is “Please enter your password”
        * Validate the “LOGIN” button is displayed
        * Validate the “LOGIN” button is clickable
        * Validate that the button text is “LOGIN”
        * Validate the “Forgot Password?” link is displayed
        * Validate that the “Forgot Password?” link is clickable
        * Validate that the link text is “Forgot Password?”
         */

        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Project - Login Function');

        const labelInfoUsernamePassword = ['Please enter your username', 'Please enter your password']

        // Input 
        cy.get('form > div:nth-child(2),form > div:nth-child(3)').each(($el,index) => {
            cy.wrap($el).find('input').should('be.visible').and('not.have.attr', 'required')
            cy.wrap($el).find('label').should('have.text', labelInfoUsernamePassword[index])
        })

    

       const btnText = ['LOGIN', 'Forgot Password?']

       cy.get('#login_btn, #login_btn + a').each(($el, index) => {
            cy.wrap($el).should('be.')
       })


  
    })
})