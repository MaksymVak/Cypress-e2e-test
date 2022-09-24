const generalPage = require("./Page")

const menuLocator = 'span'
const menuText = 'Pricing'
const voiceLink = 'header [href="/pricing/call-control"] span'
const disableHover = '#Logo-Dark_svg__Layer_1'
const dropMenuValue = 'United States'
const dropMenuIndex = '[href="/pricing/call-control/ua"]'
const validatMessage = 'h1 span'

class VoiceapiPage {
    selectVoiceMenu (){
        generalPage.selectContainsPopapMenu(menuLocator, menuText)
        generalPage.clickElement(voiceLink)
        generalPage.deactivatePopapMenu(disableHover)
    }
    selectDropMenu (){
        generalPage.selectContainsDropmenu(menuLocator, dropMenuValue, dropMenuIndex)
    }
    validatMessageExpect(){
        return generalPage.getElement(validatMessage)
    }
}
module.exports = new VoiceapiPage()