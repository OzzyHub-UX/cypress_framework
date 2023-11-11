import LoginPage from "../../pages/LoginPagePO2";

const loginPage = new LoginPage()

describe('Project - Login Function', ()=> {

    it('Test Case 01 - Validate the login form', () => {

        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Project - Login Function');

        const labelInfoUsernamePassword = ['Please enter your username', 'Please enter your password']

        loginPage.getUsernamePasswordInputLabel().each(($el,index) => {
            cy.wrap($el)
            .find('label')
            .should('be.visible')
            .and('have.text', labelInfoUsernamePassword[index])
            .and('not.have.attr', 'required')

            cy.wrap($el)
            .find('input')
            .and('be.visible')
            .and('not.have.attr', 'required')
        })

        const btnText = ['LOGIN', 'Forgot Password?']

       loginPage.getLoginBtnForgotPassword().each(($el, index) => {
            cy.wrap($el)
            .find('button')
            .should('be.visible')
            .and('be.enabled')
            .and('have.text', btnText[index])
            .parent()
            .find('a')
            .should('have.text', btnText[1])
            .and('have.attr', 'href')
           })
    })


    it('Test Case 02 - Validate the valid login', () => {

        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Project - Login Function');

        loginPage.userLogin('TechGlobal', 'Test1234')
        loginPage.getSuccessMessage().should('be.visible').and('have.text', 'You are logged in')
        loginPage.getLogoutButton().should('be.visible')
    })


    it('Test Case 03 - Validate the logout', () => {

        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Project - Login Function');

        loginPage.userLogin('TechGlobal', 'Test1234')
        loginPage.clickLogoutButton()
        loginPage.getLoginForm().should('be.visible')

    })

    it('Test Case 04 = Validate the logout', () => {

        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Project - Login Function');

        loginPage.clickForgotPassword()
        loginPage.getModalHeading().should('be.visible')
        loginPage.getCloseBtn().should('be.visible')

        loginPage.getEmailInputLabelBox()
        .find('input')
        .should('be.visible')
        .parent()
        .find('label')
        .and('have.text', "Enter your email address and we'll send you a link to reset your password. ")

        loginPage.getModalSubmitBtn()
        .should('be.visible')
        .and('be.enabled')
        .and('have.text', 'SUBMIT')
    })

    it('Test Case 05 - Validate the Reset Password modal close button', () => {

        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Project - Login Function');

        loginPage.clickForgotPassword()
        loginPage.getModalSubHeading().should('be.visible')
        loginPage.clickCloseButton()
        loginPage.getModal().should('not.exist')
    })

    it('Test Case 06 - Validate the Reset Password form Submission', () => {

        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Project - Login Function');

        loginPage.clickForgotPassword()
        loginPage.getEmailInputLabelBox().find('input').type('techglobal@gmail.com')
        loginPage.clickModalSubmitBtn()
        loginPage.getModalConfirmationMsg().should('be.visible').and('have.text', 'A link to reset your password has been sent to your email address.')
    })

    it('Test Case 07 - Validate the invalid login with the empty credentials', () => {

        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Project - Login Function');

        
        loginPage.clickLoginButton()
        loginPage.getErrorMessageValidationUsername()
    })

    it('Test Case 08 - Validate the invalid login with the wrong username', () => {
        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Project - Login Function');

        loginPage.userLogin('John', 'Test1234')
        loginPage.getErrorMessageValidationUsername()

        
    })

    it('Test Case 09 - Validate the invalid login with the wrong password', () => {
        
        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Project - Login Function');

        loginPage.userLogin('TechGlobal', '1234')
        loginPage.getErrorMessageValidationPassword()

    })

    it('Test Case 10 - Validate the invalid login with the wrong username and password', () => {
        
        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Project - Login Function');

        loginPage.userLogin('John', '1234')
        loginPage.getErrorMessageValidationUsername()

    })

})