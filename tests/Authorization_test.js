Feature("Authorization");

//Экспортируем переменные
const Obj = require("../variables");

Scenario("Successful", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.fillField((id = "person-email"), Obj.Login);
  I.fillField((id = "person-password"), Obj.defaultPass);
  I.click("LOGIN");
  I.fillField("#code", "123456");
  I.click("CONFIRM");
  I.seeCurrentUrlEquals("/dashboard/balances");
});

Scenario("Successful with GA CODE", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.fillField((id = "person-email"), Obj.Login);
  I.fillField((id = "person-password"), Obj.Password);
  I.click("LOGIN");
  I.click("individual");
  I.click("Next");
  I.fillField("#code", Obj.SMScode);
  I.click("CONFIRM");
  I.fillField("#code", Obj.SMScode);
  I.click("CONFIRM");
  I.seeCurrentUrlEquals("/dashboard/balances");
});

Scenario("Invalid Validation Email", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.fillField((id = "person-email"), Obj.InvalidEmail);
  I.see("Please, enter a valid email address.");
});

Scenario("Invalid login/pass", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.fillField((id = "person-email"), Obj.InvalidLogin);
  I.fillField((id = "person-password"), Obj.InvalidPassword);
  I.click("LOGIN");
  I.see(
    "The email address or password you entered is incorrect. Please try again."
  );
});

Scenario("Invalid pass", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.fillField((id = "person-email"), Obj.Login);
  I.click("LOGIN");
  I.see(
    "The email address or password you entered is incorrect. Please try again."
  );
});

Scenario("Password reset", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.click("Forgot your password");
  I.fillField((id = "Your e-mail"), Obj.Login);
  I.click("Start reset password");
  I.seeElement("#code");
});

Scenario("Password reset invalid code", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.click("Forgot your password");
  I.fillField((id = "Your e-mail"), Obj.Login);
  I.click("Start reset password");
  I.fillField("#code", Obj.invalidCode);
  I.see("Validation code expired.");
});

Scenario("Password reset successful", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.click("Forgot your password");
  I.fillField((id = "Your e-mail"), Obj.Login);
  I.click("Start reset password");
  I.fillField("#code", Obj.SMScode);
  I.click("CONFIRM");
  I.fillField("#code", Obj.SMScode);
  I.click("CONFIRM");
  I.fillField("#code", Obj.SMScode);
  I.click("CONFIRM");
  I.fillField("#password", "Parabellum0793");
  I.fillField("#confirmPassword", "Parabellum0793");
  I.click("");
  I.see("Reset password.");
  I.click("SIGN IN");
  I.see("Login");
});

Scenario("Password reset invalid email", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.click("Forgot your password");
  I.fillField((id = "Your e-mail"), Obj.InvalidEmail);
  I.click("Start reset password");
  I.see("User not found.");
});
