const generalPage = require("./Page")

const signupButton = 'li div [href="/sign-up"]'
const emailField = '#email'
const fullNameField = '#full_name'
const passwordField = '#password'
const checkbox = '[aria-label="signup-form"] rect'
const submitButton = '[type="submit"]'
const errorMessage = '#signup-form_error span'
const validatMessage = '#__next main h1'

class RegistrPage {

    clickSignup(){ 
        generalPage.clickElement(signupButton)
    }
    registrUser(userEmail, fullName, userPassword) {
        generalPage.typeValue(emailField, userEmail)
        generalPage.typeValue(fullNameField, fullName)
        generalPage.typeValue(passwordField, userPassword)
        generalPage.clickFirstElement(checkbox)
        generalPage.clickLastElement(checkbox)
        generalPage.clickElement(submitButton)
      }
    errorMessageVisible(){
        return generalPage.getElement(errorMessage)
    }
    validatMessageExpect(){
        return generalPage.getElementTimeOut(validatMessage)
    }
    
}
module.exports = new RegistrPage()


