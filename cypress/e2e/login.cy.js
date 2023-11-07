describe("Login Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  it("will log in", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get(".btn-close:visible").click();
    cy.wait(500);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(2000);
    cy.get("input[type='email']:visible").type("fake@stud.noroff.no", {
      delay: 500,
    });
    cy.get("input[type='password']:visible").type("fakefake", { delay: 500 });
    cy.get(".btn-success:visible").click();
    cy.wait(500);
  });
});
