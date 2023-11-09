import LoginPage from "../../pages/LoginPagePO2";

const loginPage = new LoginPage()

describe('Project - Login Function', ()=> {

    it('Test Case 01 - Validate the login form', () => {

        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Project - Login Function');

        const labelInfoUsernamePassword = ['Please enter your username', 'Please enter your password']

        cy.get('form > div:nth-child(2),form > div:nth-child(3)').each(($el,index) => {
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

       cy.get('form > div:nth-child(4)').each(($el, index) => {
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
        loginPage.getSuccessMessage.should('be.visible').and('have.text', 'You are logged in')
        loginPage.getLoginButton.should('be.visible')
    })

    it('Test Case 03 - Validate the logout', () => {

        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Project - Login Function');

        loginPage.userLogin('TechGlobal', 'Test1234')
        loginPage.clickLoginButton
        loginPage.clickLogoutButton
        loginPage.getLoginForm.should('be.displayed')


    })

})