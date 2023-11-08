const invalidEmail = "invalid@stud.noroff.no";
const invalidPassword = "invalidPassword";

describe("Login not authenticated", () => {
  it("will deny access with invalid credentials", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(2000);
    cy.get("input[type='email']:visible").type(invalidEmail, {
      delay: 500,
    });
    cy.get("input[type='password']:visible").type(invalidPassword, {
      delay: 500,
    });
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(1000);
  });

  it("will deny access with empty credentials", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(2000);
    cy.get("input[type='email']:visible", { delay: 500 });
    cy.get("input[type='password']:visible", { delay: 500 });
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(1000);
  });

  it("will deny access with empty email", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(2000);
    cy.get("input[type='email']:visible", { delay: 500 });
    cy.get("input[type='password']:visible").type(invalidPassword, {
      delay: 500,
    });
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(1000);
  });

  it("will deny access with empty password", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(2000);
    cy.get("input[type='email']:visible").type(invalidEmail, {
      delay: 500,
    });
    cy.get("input[type='password']:visible", { delay: 500 });
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(1000);
  });
});
