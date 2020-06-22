Feature("Authorization");

//Экспортируем переменные
const dataHelper = require("../variables");

Scenario("Successful", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.fillField("person-email", dataHelper.Login);
  I.fillField("person-password", dataHelper.defaultPass);
  I.click("LOGIN");
  I.wait(1);
  I.fillField("#code", "123456");
  I.click("CONFIRM");
  I.seeCurrentUrlEquals("/dashboard/balances");
});

Scenario("Successful with GA CODE autho", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.fillField("person-email", dataHelper.Login);
  I.fillField("person-password", dataHelper.Password);
  I.click("LOGIN");
  I.click("individual");
  I.click("Next");
  I.wait(1);
  I.fillField("#code", dataHelper.SMScode);
  I.click("CONFIRM");
  I.wait(1);
  I.fillField("#code", dataHelper.SMScode);
  I.click("CONFIRM");
  I.seeCurrentUrlEquals("/dashboard/balances");
});

Scenario("Invalid Validation Email autho", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.fillField("person-email", dataHelper.InvalidEmail);
  I.see("Please, enter a valid email address.");
});

Scenario("Invalid login/pass autho", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.fillField("person-email", dataHelper.InvalidLogin);
  I.fillField("person-password", dataHelper.InvalidPassword);
  I.click("LOGIN");
  I.see(
    "The email address or password you entered is incorrect. Please try again."
  );
});

Scenario("Invalid pass autho", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.fillField("person-email", dataHelper.InvalidPassword);
  I.click("LOGIN");
  I.see(
    "The email address or password you entered is incorrect. Please try again."
  );
});

Scenario("Password reset autho", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.click("Forgot your password");
  I.fillField("Your e-mail", dataHelper.Login);
  I.click("Start reset password");
  I.seeElement("#code");
});

Scenario("Password reset invalid code autho", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.click("Forgot your password");
  I.fillField("Your e-mail", dataHelper.Login);
  I.click("Start reset password");
  I.fillField("#code", dataHelper.invalidCode);
  I.see("Validation code expired.");
});

Scenario("Password reset successful", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.click("Forgot your password");
  I.fillField("Your e-mail", dataHelper.Login);
  I.click("Start reset password");
  I.wait(1);
  I.fillField("#code", dataHelper.SMScode);
  I.click("CONFIRM");
  I.wait(1);
  I.fillField("#code", dataHelper.SMScode);
  I.click("CONFIRM");
  I.wait(1);
  I.fillField("#code", dataHelper.SMScode);
  I.click("CONFIRM");
  I.fillField("#password", "Parabellum0793");
  I.fillField("#confirmPassword", "Parabellum0793");
  I.click("");
  I.see("Reset password.");
  I.click("SIGN IN");
  I.see("Login");
});

Scenario("Password reset invalid email autho", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.click("Forgot your password");
  I.fillField("Your e-mail", dataHelper.InvalidEmail);
  I.click("Start reset password");
  I.see("User not found.");
});
