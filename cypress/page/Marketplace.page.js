const generalPage = require("./Page")

const menuLocator = 'span'
const menuText = 'Company'
const integrationsLocator = 'li span'
const integrationsLink = 'Integrations'
const marketplaceLocator = '[href="https://marketplace.telnyx.com"]'
const marketplaceLink = 'Explore Our Marketplace'
const validatMessage = 'h1'

class MarketplacePage {
    selectMarketplaceMenu (){
        generalPage.selectContainsPopapMenu(menuLocator, menuText)
        generalPage.clickElementContains(integrationsLocator, integrationsLink)
        generalPage.deactivateContainsPopapMenu(marketplaceLocator, marketplaceLink)
    }
    clickMarketplaceMenu(){
        generalPage.clickElementContains(marketplaceLocator, marketplaceLink)
    }
    validatMessageExpect(){
        return generalPage.getElement(validatMessage)
    }
}
module.exports = new MarketplacePage()