Feature("Home page");

Scenario("EstChange service description home", (I) => {
  I.amOnPage("http://dev.estchange.io/");
  I.click("EstChange");
  I.amOnPage("/#about");
});

Scenario("Get started now home", (I) => {
  I.amOnPage("http://dev.estchange.io/");
  I.click("Get started now");
  I.amOnPage("/signup");
});

Scenario("Start onboarding now home", (I) => {
  I.amOnPage("http://dev.estchange.io/");
  I.click("Start onboarding now");
  I.amOnPage("/signup");
});

Scenario("Privacy Policy home", (I) => {
  I.amOnPage("http://dev.estchange.io/");
  I.click(".full-service__item-text a");
  I.amOnPage("/TOS/2");
});

Scenario("3rd party KYC system home", (I) => {
  I.amOnPage("http://dev.estchange.io/");
  I.click("3rd party KYC system");
  I.amOnPage("https://knowyourcustomer.com/");
});

Scenario("Blockchain analytics tools home", (I) => {
  I.amOnPage("http://dev.estchange.io/");
  I.click("blockchain analytics tools");
  I.amOnPage("https://www.elliptic.co/");
});

Scenario("Sign in home", (I) => {
  I.amOnPage("http://dev.estchange.io/");
  I.click("Accept");
  I.click("Sign in");
  I.amOnPage("/login/");
});

Scenario("Sign up home", (I) => {
  I.amOnPage("http://dev.estchange.io/");
  I.click("Accept");
  I.click("Sign up");
  I.amOnPage("/signup");
});
