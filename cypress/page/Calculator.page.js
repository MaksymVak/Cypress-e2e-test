const generalPage = require("./Page")

const menuLocator = 'span'
const menuText = 'Resources'
const calculatorLink = 'Savings Calculator'
const MessagingAPILink = 'Messaging API'
const MessagingAPILocator = 'div'
const buttonContinueLocator = 'button'
const buttonContinueValue= 'Continue'
const inputValueField1 = '#local-numbers'
const inputValueField2 = '#toll-free-numbers'
const validatMessage = 'p span:nth-child(1)'

class CalculatorPage {
    selectCalculatorMenu (){
        generalPage.selectContainsPopapMenu(menuLocator, menuText)
        generalPage.clickElementContains(menuLocator, calculatorLink)
        generalPage.deactivateContainsPopapMenu(MessagingAPILocator, MessagingAPILink)
    }
    selectMessagingApi (){
        generalPage.clickElementContains(MessagingAPILocator, MessagingAPILink)
        generalPage.clickElementContains(buttonContinueLocator, buttonContinueValue)
    }
    inputValueField (value){
        generalPage.typeWithClearValue(inputValueField1, value)
        generalPage.typeWithClearValue(inputValueField2, value)
        generalPage.clickElementContains(buttonContinueLocator, buttonContinueValue)
    }
    validatMessageExpect(){
        return generalPage.getElement(validatMessage)
    }
}
module.exports = new CalculatorPage()