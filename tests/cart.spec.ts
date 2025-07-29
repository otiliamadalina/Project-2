import routes from "../resources/routes.json";
import strings from "../resources/strings.json";
import { Given, Then } from "../utils/adnotations";
import test from "./test";

test.describe("Cart tests", { tag: ["@smoke", "@cart"] }, async () => {
test.beforeEach(async ({ app }) => {
  Given("I access Login Page");
  await test.step("Access Login Page", async () => {
    console.log("Access login page.");
    await app.base.navigateTo(routes.loginPage);
    await app.navigation.pageUrlAsExpected(routes.loginPage);
    await app.common.browserTabTitleAsExpected(strings.loginPage.pageTitle);
    await app.login.logoIsVisible();
  });

  await test.step("Login", async () => {
    console.log("Login.");
    Then("I complete login for and move forward")
    await app.login.checkLoginFields();
    await app.login.completeLoginForm(
      strings.loginPage.acceptedUsernames.standardUser,
      strings.loginPage.passwordForAllUsers
    );
    await app.login.checkLoginButton();
  });

  Then("I see correct URL, inventory URL")
  await test.step("Inventory URL", async () => {
    await app.navigation.pageUrlAsExpected(routes.inventoryPage);
  });
});

test("SauceDemo verify Cart Products", async ({ app }) => {
    await test.step("Products Title", async () => {
      await app.inventory.checkProductHeader();
    });

    await test.step("Verify products", async () => {
      console.log("Running verifyProducts.");
      await app.inventory.verifyProducts();
    });

    await test.step("Add to Cart", async () => {
      console.log("Running add to cart.");
      await app.inventory.addProductsToCart();
    });

    await test.step("Go to Cart", async () => {
      console.log("Running go to cart.");
      await app.inventory.goToCart();
    });

    await test.step("Verify Cart Products", async () => {
      console.log("Running cart products.");
      await app.cart.verifyCartProducts();
    });
  });
});
