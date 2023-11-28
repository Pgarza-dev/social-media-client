describe("Logout Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  it("will login and then logout", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(2000);
    cy.get("input[type='email']:visible").type("fake@stud.noroff.no", {
      delay: 500,
    });
    cy.get("input[type='password']:visible").type("fakefake", { delay: 500 });
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(1000);
    cy.get("button[data-auth='logout']:visible").should("exist").click();
    cy.window().then((win) => {
      expect(win.localStorage.getItem("token")).to.be.null;
      expect(win.localStorage.length).to.eq(0);
    });
    cy.then(() => {
      expect(localStorage.getItem("token")).to.be.null;
    });
  });
});
