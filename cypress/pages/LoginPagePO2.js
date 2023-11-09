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

    getLoginButton(){
        return cy.get('#login_btn')
    }

    getLogoutButton(){
        return cy.get('#logout')
    }

    getSuccessMessage(){
        return cy.get('#success_lgn')
    }

    clickLoginButton(){
        this.getLoginButton.click()
    }

    clickLogoutButton(){
        this.getLogoutButton.click()
    }


    userLogin(username, password){
       this.getUsernameField().type(username)
       this.getPasswordField().type(password)
       this.clickLoginButton()
    }
}


export default LoginPage
