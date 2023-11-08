describe("Project 01 - Form Elements", () => {
    it("Test Case 01 - Validate the Contact Us Information", () => {
  
      /**
       * Navigate to https://techglobal-training.com/frontend/project-1
       * Validate the heading is “Contact Us”
       * Validate the address is “2860 S River Rd Suite 480, Des Plaines, IL 60018”
       * Validate the email is “info@techglobalschool.com"
       * Validate the phone number is “(773) 257-3010”
       */
  
      cy.visit('https://techglobal-training.com/frontend');
      cy.clickCard('Project - Form Elements');
  
      cy.get('.mb-5 > h1.is-size-3').should('have.text', 'Contact Us')
  
      const contactUsInfo = [
      '2860 S River Rd Suite 480, Des Plaines, IL 60018', 
      'info@techglobalschool.com', 
      '(773) 257-3010']
  
      cy.get('.mb-5 > p').each(($el, i) => {
          cy.log(i + ' MY TEXT AMOUNT')
          cy.wrap($el).should('have.text', contactUsInfo[i])
      })
    });
  
    it('Test Case 02 - Validate the Full Name Input Box', () => {
  
      /**
       * Navigate to https://techglobal-training.com/frontend/project-1
       * Validate that the Full name input box is displayed
       * Validate that the Full name input box is required
       * Validate that the label of the Full name input box is “Full name *”
       * Validate that the placeholder of the Full name input box is “Enter your full name”
       */
  
      cy.visit('https://techglobal-training.com/frontend');
      cy.clickCard('Project - Form Elements');
  
      cy.get('.input[placeholder="Enter your full name"]').should('be.visible').and('have.attr', 'placeholder', 'Enter your full name').and('have.attr', 'required')
      cy.get('.label[for="name"]').should('have.text', 'Full name *')
  
    })
  
    it.only('Test Case 03 - Validate the Gender Radio Button', () => {
  
      cy.visit('https://techglobal-training.com/frontend/project-1');
  
      /**
       * Navigate to https://techglobal-training.com/frontend/project-1
      Validate the label is “Gender *”
      Validate that the Gender is required // BUG 
      Validate the options are “Female”, “Male” and “Prefer not to disclose”
      Validate the options are clickable and not selected
      Click on the “Male” option and validate it is selected while the others are not selected
      Click on the “Female” option and validate it is selected while the others are not selected
       */
  
  
      cy.get('.control > .label').should('have.text', 'Gender *') // .and('have.attr', 'required')
  
      const expectedTexts = ['Male', 'Female', 'Prefer not to disclose']
  
      cy.get('.control > [class*="radio"]').each(($el, index) => {
        cy.wrap($el).should('have.text', expectedTexts[index])
      })
  
      cy.get('.mr-1').should('be.visible').and('be.enabled')

      cy.checkOptionAndValidateOthers('Male', expectedTexts)
      cy.checkOptionAndValidateOthers('Female', expectedTexts)


  
    })
  
  
    it('Test Case 04 - Validate the Address input box', () => {
  
      cy.visit('https://techglobal-training.com/frontend');
      cy.clickCard('Project - Form Elements');
  
      /**
       * Navigate to https://techglobal-training.com/frontend/project-1
         Validate that the Address input box is displayed
         Validate that the Address input box is not required
         Validate that the label of the Address input box is “Address”
        Validate that the placeholder of the Address input box is “Enter your address*” // BUG
       */
  
        cy.get(':nth-child(3) > .control > input')
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Enter your address')
        .and('not.have.attr', 'required')
  
        cy.get(':nth-child(3) > .label').should('have.text', 'Address')
  
    })
  
  
    it('Test Case 05 - Validate the Email input box', () => {
  
      cy.visit('https://techglobal-training.com/frontend');
      cy.clickCard('Project - Form Elements');
  
      /**
       *Navigate to https://techglobal-training.com/frontend/project-1
      Validate that the Email input box is displayed
      Validate that the Email input box is required
      Validate that the label of the Email input box is “Email *”
      Validate that the placeholder of the Email input box is “Enter your email”
       */
  
      cy.get(':nth-child(4) > .control > input')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Enter your email')
      .and('have.attr', 'required')
  
      cy.get(':nth-child(4) > .label').should('have.text', 'Email *')
  
    })
  
  
    it('Test Case 06 - Validate the Phone input box', () => {
  
      cy.visit('https://techglobal-training.com/frontend');
      cy.clickCard('Project - Form Elements');
  
      /**
       * Navigate to https://techglobal-training.com/frontend/project-1
       * Validate that the Phone input box is displayed
       * Validate that the Phone input box is not required
       * Validate that the label of the Phone input box is “Phone”
       * Validate that the placeholder of the Address input box is “Enter your phone number” // BUG 
       */
  
      cy.get(':nth-child(5) > .control > input')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Enter your phone number')
      .and('not.have.attr', 'required')
  
      cy.get(':nth-child(5) > .label').should('have.text', 'Phone')
  
    })
  
  
    it('Test Case 07 - Validate the Message text area', () => {
  
      cy.visit('https://techglobal-training.com/frontend');
      cy.clickCard('Project - Form Elements');
  
      /** 
       * Navigate to https://techglobal-training.com/frontend/project-1
       * Validate that the Message text area is displayed
       * Validate that the Message text area is not required
       * Validate that the label of the Message text area is “Message”
       * Validate that the placeholder of the Message text area is “Type your message here…”
       */
  
      cy.get(':nth-child(6) > .control > textarea')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Type your message here...')
      .and('not.have.attr', 'required')
  
      cy.get(':nth-child(6) > .label').should('have.text', 'Message')
  
    })
  
    it('Test Case 08 - Validate the Consent checkbox', () => {
  
      cy.visit('https://techglobal-training.com/frontend');
      cy.clickCard('Project - Form Elements');
  
      /**
       * Navigate to https://techglobal-training.com/frontend/project-1
       * Validate the label is “I give my consent to be contacted.” // BUG
       * Validate that the Consent checkbox is required
       * Validate that the Consent checkbox is clickable
       * Click on the “I give my consent to be contacted.” checkbox and validate it is selected
       * Click on the “I give my consent to be contacted.” checkbox again and validate it is not selected
       */
  
      
      cy.get(':nth-child(7) > .control > label').should('have.text', ' I give my consent to be contacted.')
  
      cy.get(':nth-child(7) > .control > label > input')
      .should('be.enabled')
      .click()
      .and('be.checked')
      .click()
      .and('not.be.checked')
      .and('have.attr', 'required')
  
    })
  
    it('Test Case 09 - Validate the SUBMIT button', () => {
  
      cy.visit('https://techglobal-training.com/frontend');
      cy.clickCard('Project - Form Elements');
  
      /**
       *  Case 09 - Validate the SUBMIT button
       *  Navigate to https://techglobal-training.com/frontend/project-1
       *  Validate the “SUBMIT” button is displayed
       *  Validate the “SUBMIT” button is clickable
       *  Validate that the button text is “SUBMIT”
       */
  
      cy.get(':nth-child(8).field > div > button')
      .should('be.visible')
      .and('be.enabled')
      .and('have.text', 'SUBMIT')
  
    })
  
    it('Test Case 10 - Validate the form submission', () => {
  
      cy.visit('https://techglobal-training.com/frontend');
      cy.clickCard('Project - Form Elements');
  
      /** Navigate to https://techglobal-training.com/frontend/project-1
      * Enter a first name
      * Select a gender
      * Enter an address
      * Enter an email
      * Enter a phone number
      * Enter a message
      * Select the “I give my consent to be contacted.” checkbox
      * Click on the “SUBMIT” button
      * Validate the form message “Thanks for submitting!” is displayed under the “SUBMIT” button */
  
      const info = ['Yazan', '12345 S River Road, 60458', 'techglobal1@gmail.com', '708-123-2333']
  
      cy.get(':nth-child(1) .field > div > input').each(($el, i) => {
        cy.wrap($el).type(info[i])
      })
  
      cy.get('.control > .label + label :first-child').click()
  
      cy.get(':nth-child(6) > .control > textarea').type('I love Software Testing')
  
      cy.get(':nth-child(7) > .control > label > input').click()
  
      cy.get(':nth-child(8).field > div > button').click()
  
      Cypress.on('uncaught:exception', () => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
  
      cy.get('.mt-5').should('have.text', 'Thanks for submitting!')
  
    })
  });
3  