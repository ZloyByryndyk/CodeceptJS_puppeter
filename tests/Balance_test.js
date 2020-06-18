Feature("Balance");

const assert = require("assert");

const dataHelper = require("../variables");

Scenario("Filter check", (I) => {
  I.amOnPage("/");
  I.click("Accept");
  I.amOnPage("/login/");
  I.fillField("person-email", dataHelper.Login);
  I.fillField("person-password", dataHelper.Password);
  I.click("LOGIN");
  I.click("individual");
  I.click("Next");
  I.fillField("#code", dataHelper.SMScode);
  I.click("CONFIRM");
  I.fillField("#code", dataHelper.SMScode);
  I.click("CONFIRM");
  I.seeCurrentUrlEquals("/dashboard/balances");
  I.wait(3);
  I.selectOption(".balance-table-header-type", "All");
  I.see("BTC");
  I.see("ETH");
  I.see("USDT_ERC20");
  I.see("EUR");
  I.see("USD");
  I.see("RUB");
  I.wait(3);
  I.selectOption(".balance-table-header-type", "Crypto");
  I.see("BTC");
  I.see("ETH");
  I.see("USDT_ERC20");
  // I.dontSee("EUR");
  // pause();
  I.dontSeeInSource(">USD<");
  // I.dontSee("USD");
  // I.dontSee("RUB");
  I.wait(3);
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
  I.fillField("#code", dataHelper.SMScode);
  I.click("CONFIRM");
  I.fillField("#code", dataHelper.SMScode);
  I.click("CONFIRM");
  I.seeCurrentUrlEquals("/dashboard/balances");
  I.click(locate("button").withText("Buy").at(1));
  I.click(locate(".root__title").withText("AUTOMATED TRADING"));
  I.selectOption(
    locate("input").withAttr({ id: "price_behaviour_type" }).at(1)
  );
  I.click(".el-select-dropdown__item");
  I.fillField(locate("input").withAttr({ id: "amount" }), "0.01");
  I.click("Create");
  I.click("ACCEPT");
  I.see("Success!");
});

Scenario("Purchase order", async (I) => {
  var text = await I.grabTextFrom("");
  assert.equal(text.length > 0, true);
});
