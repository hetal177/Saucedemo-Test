$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Saucedemo.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "As a user I want to purchase cheapest and costliest product from the saucedemo after sorting the products by Hight to Low filter.",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4198667600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User navigates saucedemo page and complete the item purchas",
  "description": "",
  "id": "search-functionality;user-navigates-saucedemo-page-and-complete-the-item-purchas",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on saucedemo page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with credential username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I filter the products by Price \"Price (high to low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select cheapest \u0026 costliest products and add to basket",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I open shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I go to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter details firstname \"firstName\", lastName \"lastName\" and zipPostalCode \"Zip/PostalCode\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on finish button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should be able to see message \"THANK YOU FOR YOUR ORDER\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceStepDef.iAmOnSaucedemoPage()"
});
formatter.result({
  "duration": 110873400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 34
    },
    {
      "val": "secret_sauce",
      "offset": 63
    }
  ],
  "location": "SauceStepDef.iLoginWithCredentialUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 170048600,
  "status": "passed"
});
formatter.match({
  "location": "SauceStepDef.iClickOnLoginButton()"
});
formatter.result({
  "duration": 109518300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (high to low)",
      "offset": 32
    }
  ],
  "location": "SauceStepDef.iFilterTheProductsByPrice(String)"
});
formatter.result({
  "duration": 378196900,
  "status": "passed"
});
formatter.match({
  "location": "SauceStepDef.iSelectCheapestCostliestProductsAndAddToBasket()"
});
formatter.result({
  "duration": 62051500,
  "status": "passed"
});
formatter.match({
  "location": "SauceStepDef.iOpenShoppingCart()"
});
formatter.result({
  "duration": 71901300,
  "status": "passed"
});
formatter.match({
  "location": "SauceStepDef.iGoToCheckout()"
});
formatter.result({
  "duration": 57586900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstName",
      "offset": 27
    },
    {
      "val": "lastName",
      "offset": 49
    },
    {
      "val": "Zip/PostalCode",
      "offset": 78
    }
  ],
  "location": "SauceStepDef.iEnterDetailsFirstnameLastNameAndZipPostalCode(String,String,String)"
});
formatter.result({
  "duration": 243543300,
  "status": "passed"
});
formatter.match({
  "location": "SauceStepDef.iClickOnContinueButton()"
});
formatter.result({
  "duration": 66853800,
  "status": "passed"
});
formatter.match({
  "location": "SauceStepDef.iClickOnFinishButton()"
});
formatter.result({
  "duration": 58769600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "THANK YOU FOR YOUR ORDER",
      "offset": 33
    }
  ],
  "location": "SauceStepDef.iShouldBeAbleToSeeMessage(String)"
});
formatter.result({
  "duration": 36778600,
  "status": "passed"
});
formatter.after({
  "duration": 768446700,
  "status": "passed"
});
});