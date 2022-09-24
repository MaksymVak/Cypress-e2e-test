const generalPage = require("./Page")

const menuLocator = 'span'
const menuText = 'Products'
const productsLink = 'header [href="/products"]'
const validatMessage = 'h1'

class ProductsPage {
    selectProductsMenu (){
        generalPage.selectContainsPopapMenu(menuLocator, menuText)
        generalPage.clickElement(productsLink)
        generalPage.deactivatePopapMenu(validatMessage)
    }
    validatMessageExpect(){
        return generalPage.getElement(validatMessage)
    }
}
module.exports = new ProductsPage()