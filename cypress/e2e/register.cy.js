git 
  it("register without first name", () => {
    cy.get(locators.register.lastNameInput).type("userData.lastName");
    cy.get(locators.commonFormElements.emailInput).type("userData.email");
    cy.get(locators.commonFormElements.passwordInput).type("userData.password");
    cy.get(locators.register.passwordConfirmationInput).type("userData.password");
    cy.get(locators.register.tosCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("contain", "/register");
  });

  it("register without email address", () => {
    cy.get(locators.register.firstNameInput).type("Katarina");
    cy.get(locators.register.lastNameInput).type("Skoric");
    cy.get(locators.commonFormElements.passwordInput).type("katarina27");
    cy.get(locators.register.passwordConfirmationInput).type("katarina27");
    cy.get(locators.register.tosCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("contain", "/register");
  });

  it("register with valid data", () => {
   cy.get(locators.register.firstNameInput).type("Katarina");
    cy.get(locators.register.lastNameInput).type("Skoric");
    cy.get(locators.commonFormElements.emailInput).type("rina.ns@hotmail.com");
    cy.get(locators.commonFormElements.passwordInput).type("katarina27");
    cy.get(locators.register.passwordConfirmationInput).type("katarina27");
    cy.get(locators.register.tosCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("contain", "/register");
  });
