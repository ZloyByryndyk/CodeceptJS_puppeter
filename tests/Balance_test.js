Feature("Balance");

const assert = require("assert");

const dataHelper = require("../variables");

Scenario("Filter check slow", (I) => {
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
  I.wait(2);
  I.selectOption(".balance-table-header-type", "All");
  I.see("BTC");
  I.see("ETH");
  I.see("USDT_ERC20");
  I.see("EUR");
  I.see("USD");
  I.see("RUB");
  I.wait(2);
  I.selectOption(".balance-table-header-type", "Crypto");
  I.see("BTC");
  I.see("ETH");
  I.see("USDT_ERC20");
  // I.dontSee("EUR");
  // pause();
  I.dontSeeInSource(">USD<");
  // I.dontSee("USD");
  // I.dontSee("RUB");
  I.wait(2);
  I.selectOption(".balance-table-header-type", "Fiat");
  I.see("EUR");
  I.see("USD");
  I.see("RUB");
  I.dontSee("BTC");
  // I.dontSee("ETH");
  // I.dontSee("USDT_ERC20");
});

Scenario("Purchase order slow", (I) => {
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
  I.click(locate("button").withText("Buy").at(1));
  I.click(locate(".root__title").withText("AUTOMATED TRADING"));
  I.checkOption(locate("input").withAttr({ id: "price_behaviour_type" }).at(1));
  I.click(locate(".el-select-dropdown__item").withText("DIGITAL RFQ"));
  I.fillField(locate("input").withAttr({ id: "amount" }), "0.01");
  I.click("Create");
  I.click("ACCEPT");
  I.see("Success!");
});

Scenario("Field cleaning slow", async (I) => {
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
  I.click(locate("button").withText("Buy").at(1));
  I.click(locate(".root__title").withText("AUTOMATED TRADING"));
  I.fillField(locate("input").withAttr({ id: "amount" }), "0.01");
  I.click("Sell");
  var amount = await I.grabValueFrom(
    locate("input").withAttr({ id: "amount" })
  );
  assert.equal(amount.length > 0, true);
  I.click("ETH");
  var amound2 = await I.grabValueFrom(
    locate("input").withAttr({ id: "amount" })
  );
  assert.equal(amound2.length === 0, true);
});

Scenario("Exit session slow", (I) => {
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
  I.click(locate("button").withText("Buy").at(1));
  I.click(locate(".root__title").withText("AUTOMATED TRADING"));
  I.checkOption(locate("input").withAttr({ id: "price_behaviour_type" }).at(1));
  I.click(locate(".el-select-dropdown__item").withText("DIGITAL RFQ"));
  I.fillField(locate("input").withAttr({ id: "amount" }), "0.01");
  I.click("Create");
  I.click("CANCEL");
  I.see("Canceled by Client");
});

Scenario("Sell ​​order slow", (I) => {
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
  I.click(locate("button").withText("Sell").at(1));
  I.click(locate(".root__title").withText("AUTOMATED TRADING"));
  I.checkOption(locate("input").withAttr({ id: "price_behaviour_type" }).at(1));
  I.click(locate(".el-select-dropdown__item").withText("DIGITAL RFQ"));
  I.fillField(locate("input").withAttr({ id: "amount" }), "0.01");
  I.click("Create");
  I.click("ACCEPT");
  I.see("Success!");
});
