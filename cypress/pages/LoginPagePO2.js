class LoginPage {

    getLoginForm(){
        return cy.get(':nth-child(1) > form')
    }

    getUsernameField(){
        return cy.get('#username')
    }

    getPasswordField(){
        return cy.get('#password')
    }

    getUsernamePasswordInputLabel(){
        return cy.get('form > div:nth-child(2),form > div:nth-child(3)')
    }

    getLoginBtnForgotPassword(){
        return cy.get('form > div:nth-child(4)')
    }

    getLoginButton(){
        return cy.get('#login_btn')
    }

    getLogoutButton(){
        return cy.get('#logout')
    }

    getSuccessMessage(){
        return cy.get('#success_lgn')
    }

    getForgotPassword(){
        return cy.get('.Button_c_button__TmkRS + a')
    }

    getModal(){
        return cy.get('.modal')
    }

    getModalHeading(){
        return cy.get('#modal_title')
    }

    getModalSubHeading(){
        return cy.get('#sub_heading')
    }

    getCloseBtn(){
        return cy.get('.delete')
    }

    getEmailInputLabelBox(){
        return cy.get('form:nth-child(3) > div')
    }

    getModalSubmitBtn(){
        return cy.get('#submit')
    }

    getModalConfirmationMsg(){
        return cy.get('#confirmation_message')
    }

    clickCloseButton(){
        this.getCloseBtn().click()
    }

    clickForgotPassword(){
        this.getForgotPassword().click()
    }
    clickLoginButton(){
        this.getLoginButton().click()
    }

    clickLogoutButton(){
        this.getLogoutButton().click()
    }

    clickModalSubmitBtn(){
        this.getModalSubmitBtn().click()
    }
    getErrorMessage(){
        return cy.get('#error_message')
    }

    userLogin(username, password){
       this.getUsernameField().type(username)
       this.getPasswordField().type(password)
       this.clickLoginButton()
    }

    getErrorMessageValidationUsername(){
        this.getErrorMessage().should('be.visible').and('have.text', 'Invalid Username entered!')
    }

    getErrorMessageValidationPassword(){
        this.getErrorMessage().should('be.visible').and('have.text', 'Invalid Password entered!')
    }
    
}


export default LoginPage
