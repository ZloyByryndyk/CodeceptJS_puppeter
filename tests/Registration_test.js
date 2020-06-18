Feature("Registration");

//Экспортируем переменные
const dataHelper = require("../variables");
const helper = require("../custom_methods");

//объевляет вызов функции в переменную, чтобы пароли были одинаковые при вызове
var getEmail = helper.getRandomEmail("@mail.ru", 6);
var getPass = helper.getRandomPass(8);
var getPhone = helper.getRandomPhone(10);

Scenario("Successful", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.click("Sign up");
  I.click("Person");
  I.fillField("input[type=text]", getEmail);
  I.fillField("input[type=password]", getPass);
  I.fillField(locate("input[type=password]").at(2), getPass);
  I.fillField("input[type=tel]", getPhone);
  I.fillField(locate("input[type=text]").at(2), dataHelper.SMScode);
  I.checkOption("input[id=TOS]");
  I.checkOption("input[id=GDPR]");
  I.checkOption("input[id=IRS]");
  I.click("Sign up");
});
