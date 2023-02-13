class RegisterePage {
    get registerLink() {
        return cy.get("a[href='/register']");
    }
    get firtsNameInput() {
        return cy.get("#first-name");
    }
    get lastNameInput() {
        return cy.get("#last-name");
    }

    get emailInput() {
         return cy.get("#email");   
}
    get passwordlInput() {
        return cy.get("#password");   
    }
    get passwordConfirmationInput() {
        return cy.get("#password-confirmation");
    }
    get tosChecbox() {
            return cy.get("checkbox");

        }
    get submitButton() {
      return cy.get("button");
        }
        registerWithValidData(firstName, lastName, email,password) {
            this.firtsNameInput.type(firstName);
            this.lastNameInput.type(lastName);
            this.emailInput.type(email);
            this.passwordInput.type(password);
            this.passwordConfirmationInput(password);
            this.tosChecbox.check();
            this.submitButton.click();   
        }

    }
    
    export const registerPage = new registerPage();