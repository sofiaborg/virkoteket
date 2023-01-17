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
describe("User need to register", () => {
  it("Button on start-page should render register-page when clicked", () => {
    cy.visit("http://localhost:3000/");

    cy.get("#register-button").click();

    cy.url().should("include", "/register");
  });
});

//should login and set sessionStorage
describe("login", () => {
  beforeEach(() => {
    cy.login();
  });
  it("logs in and sets sessionStorage", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#username").type("StickJanne");
    cy.get("#password").type("password");
    cy.get("#login-button").click();

    cy.visit("http://localhost:3000/patterns");
  });
});

//Category-buttons should render posts in clicked category - test click is Kids
describe("render posts", () => {
  beforeEach(() => {
    cy.login();
  });
  it("renders posts in clicked category", () => {
    cy.visit("http://localhost:3000/patterns");
    cy.get("#Kids").click();
  });
});

//Click on a post should render single post
describe("render single post", () => {
  beforeEach(() => {
    cy.login();
  });
  it("renders single post page", () => {
    cy.visit("http://localhost:3000/patterns");
    cy.get("#single-pattern").click();
  });
});

//Should render info-page if button is clicked
describe("Info-page", () => {
  beforeEach(() => {
    cy.login();
  });
  it("Button on start-page should render info-page when clicked", () => {
    cy.visit("http://localhost:3000/patterns");

    cy.get("#faq-button").click();
    cy.visit("http://localhost:3000/faq");
  });
});

//should give validation-error when posting
describe("posting pattern", () => {
  beforeEach(() => {
    cy.login();
  });
  it("post a error-pattern and get validations", () => {
    cy.visit("http://localhost:3000/mypages/createpattern");
    cy.get("#title").type("Gosedjur");
    cy.get("#description").type("This is cute");
    cy.get("#category").type("Women");

    cy.get("#create-pattern").click();
  });
});
