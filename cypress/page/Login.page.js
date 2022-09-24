const generalPage = require("./Page")

const loginButton = 'header a:nth-child(4)'
const emailField = '[aria-label="loginForm"] [name="email"]'
const passwordField = '[type="password"]'
const rememberCheck = '[role="img"]'
const submitButton = '[aria-label="loginForm"] [type="submit"]'
const errorMessage = '[type="error"]'
const resetPassLink = '[href="/#/login/password-reset"]'
const ressPassEmailField = '[name="email"]'
const resetPassbutton = 'div [type="submit"]'
const resetPassMessage = '[data-testid="login.pwreset.message"]'


class LoginPage {
 
    clickLogin(){ 
        generalPage.clickElement(loginButton)
    }
    clickResetPass(){ 
        generalPage.clickElement(resetPassLink)
    }
    loginUser(userEmail, userPassword) {
        generalPage.typeValue(emailField, userEmail)
        generalPage.typeValue(passwordField, userPassword)
        generalPage.clickElement(rememberCheck)
        generalPage.clickElement(submitButton)
    }
    userResetPass(userEmail) {
        generalPage.typeValue(ressPassEmailField, userEmail)
        generalPage.clickElement(resetPassbutton)
    }
    errorMessageVisible(){
        return generalPage.getElement(errorMessage)
    }
    resPassMessageVisible(){
        return generalPage.getElement(resetPassMessage)
    }

}
module.exports = new LoginPage()