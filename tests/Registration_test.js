Feature("Registration");

//Экспортируем переменные
const Obj = require("../variables");

Scenario("Successful slow", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.click("Sign up");
  I.click("Person");
  I.fillField("input[type=text]", "dfdsfsdfgsdfgs@mail.ru");
  I.fillField("input[type=password]", "fgshfbsdhfbs");
  I.fillField(locate("input[type=password]").at(2), "fgshfbsdhfbs");
  I.fillField("input[type=tel]", "fgshfbsdhfbs");
  I.fillField(locate("input[type=text]").at(2), "fgshfbsdhfbs");
  I.checkOption("input[id=TOS]");
  I.checkOption("input[id=GDPR]");
  I.checkOption("input[id=IRS]");
  I.click("Sign up");
});
