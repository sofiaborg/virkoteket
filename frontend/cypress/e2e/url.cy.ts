declare namespace Cypress {
  interface Chainable {
    login(): void;
  }
}

//login command and set sessionStorage
Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    url: "http://localhost:8000/auth/login",
    body: {
      username: "StickJanne",
      password: "password",
    },
  }).then((resp) => {
    cy.window().then((win) =>
      win.sessionStorage.setItem("user", JSON.stringify(resp.body))
    );
  });
});

//Should render register-page if button is clicked
describe("If user need to register", () => {
  it("Button on start-page should render register-page when clicked", () => {
    cy.visit("http://localhost:3000/");

    cy.get('*[class^="register-button"]').click();

    cy.url().should("include", "/register");
  });
});

//Should render info-page if button is clicked
describe("If user need to register", () => {
  it("Button on start-page should render register-page when clicked", () => {
    cy.visit("http://localhost:3000/mypages/myaccount");

    cy.get('*[class^="faq-button"]').click();

    cy.url().should("include", "/faq");
  });
});

// My Account-page if login is success
describe("Login success", () => {
  beforeEach(() => {
    cy.login();
  });

  it("should display logged in users name", () => {
    cy.visit("http://localhost:3000/mypages/myaccount");
  });
});

//Should

//MAKE THIS WORK
describe("Logout user", () => {
  it("should logout logged in user", () => {
    cy.visit("http://localhost:3000/mypages/myaccount");
    cy.get('*[class^="logout-button"]').click();
    cy.url().should("be", "http://localhost:3000/");
  });
});
