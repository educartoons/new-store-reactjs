describe("In Login Page", () => {
  it("should log in with valid credentials", () => {
    cy.visit("/");

    cy.get('input[name="email"]').type("educartoons@gmail.com");

    cy.get('input[name="password"]').type("eduarapaza");

    cy.get('button[type="submit"]').click();

    cy.contains("h2", "Products");
  });

  it("should not log in with invalid credentials, instead of it should display an alert", () => {
    cy.visit("/");

    cy.get('input[name="email"]').type("educartoons@gmail.com");

    cy.get('input[name="password"]').type("eduarapaza2ff");

    cy.get('button[type="submit"]').click();

    cy.get('[role="alert"]').should("exist");
  });
});
