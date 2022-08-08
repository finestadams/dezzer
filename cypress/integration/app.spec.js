
/// <reference types="cypress">

context('Artist Page', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/artists")
    })
    it("should find text in artist page", () => {
        cy.get("h1").contains("Artists")
    })
})
