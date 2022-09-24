const generalPage = require("./Page")

const menuLocator = 'span'
const menuText = 'Company'
const careersLink = 'header [href="/company/careers"] span'
const validatMessage = 'header h1'

class CareersPage {
    selectCareersMenu (){
        generalPage.selectContainsPopapMenu(menuLocator, menuText)
        generalPage.clickElement(careersLink)
    }
    validatMessageExpect(){
        return generalPage.getElement(validatMessage)
    }
}
module.exports = new CareersPage()