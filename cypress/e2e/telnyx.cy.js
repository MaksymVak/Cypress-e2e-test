/// <reference types="cypress" />
import "cypress-real-events/support"
const randomdata = require("../helper/randomdata")
const cookieReset = require("../helper/cookie")
const generalPage = require("../page/Page")
const registrPage = require("../page/Registr.page")
const loginPage = require("../page/Login.page")
const voiceapiPage = require("../page/Voiceapi.page")
const careersPage = require("../page/Careers.page")
const calculatorPage = require("../page/Calculator.page")
const marketplacePage = require("../page/Marketplace.page")
const productsPage = require("../page/Products.page")
const talkexpertPage = require("../page/Talkexpert.page")

const calculatorValue = '50'
const phon = '1112233'
const website = 'http://www.example.com/'


context('Actions', () => {
    beforeEach(() => {
        generalPage.startPage('https://telnyx.com/')
        cookieReset.cookieWindowReset()
    })

    it('Registration on the website with invalid email', () => {
        registrPage.clickSignup()
        registrPage.registrUser(randomdata.makeEmail(), randomdata.randomstring(10), "^"+randomdata.randomstring(25))
        registrPage.errorMessageVisible().should('be.visible')
    })
    it('Registration on the website with valid email', () => {
        registrPage.clickSignup()
        registrPage.registrUser("testing"+randomdata.randomstring(3)+"@gmail.com", randomdata.randomstring(10), "^"+randomdata.randomstring(25))
        registrPage.validatMessageExpect().should('have.text', "We've sent you an email to activate your account")
    })
    it('Authorization on the website', () => {
        loginPage.clickLogin()
        loginPage.loginUser(randomdata.makeEmail(), randomdata.randomstring(10))
        loginPage.errorMessageVisible().should('be.visible')
    })
    it('Password reset', () => {
        loginPage.clickLogin()
        loginPage.clickResetPass()
        loginPage.userResetPass(randomdata.makeEmail())
        loginPage.resPassMessageVisible().should('be.visible')
    })
    it('Voice Api section check', () => {
        voiceapiPage.selectVoiceMenu()
        voiceapiPage.selectDropMenu()
        voiceapiPage.validatMessageExpect().should('have.text', "Voice API Pricing for Ukraine")
    })
    it('Careers section check', () => {
        careersPage.selectCareersMenu()
        careersPage.validatMessageExpect().should('have.text', "We're building the future of communications.")
        generalPage.getUrl().should('include', '/careers')
    })
    it('Checking the Savings Calculator', () => {
        calculatorPage.selectCalculatorMenu()
        calculatorPage.selectMessagingApi()
        calculatorPage.inputValueField(calculatorValue)
        calculatorPage.validatMessageExpect().should('include.text', "17,658")
    })
    it('Checking the Marketplace', () => {
        marketplacePage.selectMarketplaceMenu()
        marketplacePage.clickMarketplaceMenu()
        marketplacePage.validatMessageExpect().should('have.text', "Welcome to the Telnyx Integration Marketplace")
        generalPage.getUrl().should('include', 'marketplace')
    })
    it('Sending a message using a function Talk to an expert', () => {
        talkexpertPage.clickTalkexpert()
        talkexpertPage.fillUserForm(randomdata.randomstring(10), randomdata.randomstring(10), randomdata.makeEmail(), phon, website, randomdata.randomstring(100))
        talkexpertPage.validatMessageExpect().should('have.text', "Thanks for Reaching Out!")
    })
    it.only('Products section check', () => {
        productsPage.selectProductsMenu()
        productsPage.validatMessageExpect().should('have.text', "Products")
    })
})