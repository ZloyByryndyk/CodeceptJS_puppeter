Feature("Home page");

Scenario("EstChange service description", (I) => {
  I.amOnPage("http://dev.estchange.io/");
  I.click("EstChange");
  I.amOnPage("/#about");
});

Scenario("Get started now", (I) => {
  I.amOnPage("http://dev.estchange.io/");
  I.click("Get started now");
  I.amOnPage("/signup");
});

Scenario("Start onboarding now", (I) => {
  I.amOnPage("http://dev.estchange.io/");
  I.click("Start onboarding now");
  I.amOnPage("/signup");
});

Scenario("Privacy Policy", (I) => {
  I.amOnPage("http://dev.estchange.io/");
  I.click("Privacy Policy");
  I.amOnPage("/TOS/2");
});

Scenario("3rd party KYC system", (I) => {
  I.amOnPage("http://dev.estchange.io/");
  I.click("3rd party KYC system");
  I.amOnPage("https://knowyourcustomer.com/");
});

Scenario("Blockchain analytics tools", (I) => {
  I.amOnPage("http://dev.estchange.io/");
  I.click("blockchain analytics tools");
  I.amOnPage("https://www.elliptic.co/");
});

Scenario("Sign in", (I) => {
  I.amOnPage("http://dev.estchange.io/");
  I.click("Accept");
  I.click("Sign in");
  I.amOnPage("/login/");
});

Scenario("Sign up", (I) => {
  I.amOnPage("http://dev.estchange.io/");
  I.click("Accept");
  I.click("Sign up");
  I.amOnPage("/signup");
});
