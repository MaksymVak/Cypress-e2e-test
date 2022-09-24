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

    it('TC-01 Registration on the website with invalid email', () => {
        registrPage.clickSignup()
        registrPage.registrUser(randomdata.makeEmail(), randomdata.randomstring(10), "^"+randomdata.randomstring(25))
        registrPage.errorMessageVisible().should('be.visible')
    })
    it('TC-02 Registration on the website with valid email', () => {
        registrPage.clickSignup()
        registrPage.registrUser("ivan."+randomdata.randomstring(5)+"@gmail.com", randomdata.randomstring(10), "^"+randomdata.randomstring(25))
        registrPage.validatMessageExpect().should('have.text', "We've sent you an email to activate your account")
    })
    it('TC-03 Authorization on the website', () => {
        loginPage.clickLogin()
        loginPage.loginUser(randomdata.makeEmail(), randomdata.randomstring(10))
        loginPage.errorMessageVisible().should('be.visible')
    })
    it('TC-04 Password reset', () => {
        loginPage.clickLogin()
        loginPage.clickResetPass()
        loginPage.userResetPass(randomdata.makeEmail())
        loginPage.resPassMessageVisible().should('be.visible')
    })
    it('TC-05 Voice Api section check', () => {
        voiceapiPage.selectVoiceMenu()
        voiceapiPage.selectDropMenu()
        voiceapiPage.validatMessageExpect().should('have.text', "Voice API Pricing for Ukraine")
    })
    it('TC-06 Careers section check', () => {
        careersPage.selectCareersMenu()
        careersPage.validatMessageExpect().should('have.text', "We're building the future of communications.")
        generalPage.getUrl().should('include', '/careers')
    })
    it('TC-07 Checking the Savings Calculator', () => {
        calculatorPage.selectCalculatorMenu()
        calculatorPage.selectMessagingApi()
        calculatorPage.inputValueField(calculatorValue)
        calculatorPage.validatMessageExpect().should('include.text', "17,658")
    })
    it('TC-08 Checking the Marketplace', () => {
        marketplacePage.selectMarketplaceMenu()
        marketplacePage.clickMarketplaceMenu()
        marketplacePage.validatMessageExpect().should('have.text', "Welcome to the Telnyx Integration Marketplace")
        generalPage.getUrl().should('include', 'marketplace')
    })
    it('TC-09 Sending a message using a function Talk to an expert', () => {
        talkexpertPage.clickTalkexpert()
        talkexpertPage.fillUserForm(randomdata.randomstring(10), randomdata.randomstring(10), randomdata.makeEmail(), phon, website, randomdata.randomstring(100))
        talkexpertPage.validatMessageExpect().should('have.text', "Thanks for Reaching Out!")
    })
    it('TC-10 Products section check', () => {
        productsPage.selectProductsMenu()
        productsPage.validatMessageExpect().should('have.text', "Products")
    })
})