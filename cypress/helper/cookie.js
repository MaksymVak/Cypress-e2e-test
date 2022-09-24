class CookieReset {

    cookieWindowReset(){
    cy.get("body").then($body => {
        if ($body.find('[aria-label="close and deny"]').length > 0) {cy.get('[aria-label="close and deny"]').click()}
    })
    }
}
module.exports = new CookieReset