describe("url", () => {
    it("what the test does must be accurate", () => {
      cy.visit("/");
      cy.get("#loginEmail").type("enter email", { delay: 500 });
      cy.get("#loginPassword").type("enter password", { delay: 500 });
      cy.get('h1').contains("Noroff")
    })
  })