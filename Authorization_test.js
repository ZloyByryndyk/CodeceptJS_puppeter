Feature("Authorization");

const Login = "damitra@yandex.ru";
const Password = "Parabellum0793";
const SMScode = "123456";
const InvalidEmail = "damfsfdsfs";
const InvalidLogin = "damfsdfsdfsra@yandex.ru";
const InvalidPassword = "fhbdshfbdsfshb";

Scenario("Successful", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.fillField((id = "person-email"), Login);
  I.fillField((id = "person-password"), Password);
  I.click("LOGIN");
  I.fillField("#code", "123456");
  I.click("CONFIRM");
  I.seeCurrentUrlEquals("/dashboard/balances");
});

Scenario("Successful with GA CODE", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.fillField((id = "person-email"), Login);
  I.fillField((id = "person-password"), Password);
  I.click("LOGIN");
  I.click("individual");
  I.click("Next");
  I.fillField("#code", SMScode);
  I.click("CONFIRM");
  I.fillField("#code", SMScode);
  I.click("CONFIRM");
  I.seeCurrentUrlEquals("/dashboard/balances");
});

Scenario("Invalid Validation Email", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.fillField((id = "person-email"), InvalidEmail);
  I.see("Please, enter a valid email address.");
});

Scenario("Invalid login/pass slow", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.fillField((id = "person-email"), InvalidLogin);
  I.fillField((id = "person-password"), InvalidPassword);
  I.click("LOGIN");
  I.see(
    "The email address or password you entered is incorrect. Please try again."
  );
});
