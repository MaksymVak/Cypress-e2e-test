const generalPage = require("./Page")

const contactButton = 'li [href="/contact-us"]'
const selectContact = 'select#Reason_for_Contact__c'
const contactValue = 'Support'
const firstNameField = '#FirstName'
const lastNameField = '#LastName'
const emailField = '#Email'
const selectCountryPhon = 'select#Phone_Number_Extension__c'
const countryPhonValue = '+380'
const phonNumber = '#Phone_Number_Base__c'
const websiteField = '#Website'
const addInfoForm = '#Form_Additional_Information__c'
const checkbox = '#mktoCheckbox_10173_0'
const submitButton = '[type="submit"]'
const validatMessage = 'h1'


class TalkexpertPage {
 
    clickTalkexpert(){ 
        generalPage.clickElement(contactButton)
    }
    fillUserForm(firstName, lastName, userEmail, phon, website, info) {
        generalPage.selectElement(selectContact, contactValue)
        generalPage.typeValue(firstNameField, firstName)
        generalPage.typeValue(lastNameField, lastName)
        generalPage.typeValue(emailField, userEmail)
        generalPage.selectElement(selectCountryPhon, countryPhonValue)
        generalPage.typeValue(phonNumber, phon)
        generalPage.typeValue(websiteField, website)
        generalPage.typeValue(addInfoForm, info)
        generalPage.checkElement(checkbox)
        generalPage.clickElement(submitButton)
    }
    validatMessageExpect(){
        return generalPage.getElement(validatMessage)
    }

}
module.exports = new TalkexpertPage()