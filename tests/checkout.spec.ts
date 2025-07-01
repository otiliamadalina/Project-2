import routes from "../resources/routes.json";
import strings from "../resources/strings.json";
import test from "./test";

test.beforeEach(async ({ app }) => {
  await test.step("Access Login Page", async () => {
    await app.base.navigateTo(routes.loginPage);
    await app.navigation.pageUrlAsExpected(routes.loginPage);
    await app.common.browserTabTitleAsExpected(strings.loginPage.pageTitle);
    await app.login.logoIsVisible();
  });

  await test.step("Login", async () => {
    await app.login.checkLoginFields();
    await app.login.completeLoginForm(
      strings.loginPage.acceptedUsernames.standardUser,
      strings.loginPage.passwordForAllUsers
    );
    await app.login.checkLoginButton();
  });

  await test.step("Inventory URL", async () => {
    await app.navigation.pageUrlAsExpected(routes.inventoryPage);
  });
});

test.describe("Checkout tests", { tag: ["@checkout", "@regression"] }, async () => {

test("SauceDemo Verify Checkout Page", async ({ app }) => {
  await test.step("Products Title", async () => {
    await app.inventory.checkProductHeader(strings.inventoryPage.productHeader);
  });

  await test.step("Verify products", async () => {
    await app.inventory.verifyProducts();
  });

  await test.step("Add to Cart", async () => {
    await app.inventory.addProductsToCart();
  });

  await test.step("Go to Cart", async () => {
    await app.inventory.goToCart();
  });

  await test.step("Cart URL", async () => {
    await app.navigation.pageUrlAsExpected(routes.cartPage);
  });

  await test.step("Verify Cart Products", async () => {
    await app.cart.verifyCartProducts();
  });

  await test.step("Go to Checkout", async () => {
    await app.cart.goToCheckout();
  });

  await test.step("Checkout URL Step One", async () => {
    await app.navigation.pageUrlAsExpected(routes.checkoutPageOne);
  });

  await test.step("Input credential for Checkout and Continue", async () => {
    await app.checkout.inputCheckoutCredentials();
    await app.cart.continueCheckoutButton();
  });

  await test.step("Checkout Step Two", async () => {
    await app.navigation.pageUrlAsExpected(routes.checkoutPageTwo);
  });

  await test.step("Finish operation", async () => {
    await app.cart.finishButtonfromCart();
  });

  await test.step("Checkout Complete Page", async () => {
    await app.navigation.pageUrlAsExpected(routes.checkoutComplete);
  });

  await test.step("Back to Products", async () => {
    await app.checkout.backToProductsButton();
  });
});

test("SauceDemo Checkout Blank Fields", async ({ app }) => {
  await test.step("Products Title", async () => {
    await app.inventory.checkProductHeader(strings.inventoryPage.productHeader);
  });

  await test.step("Verify products", async () => {
    await app.inventory.verifyProducts();
  });

  await test.step("Add to Cart", async () => {
    await app.inventory.addProductsToCart();
  });

  await test.step("Go to Cart", async () => {
    await app.inventory.goToCart();
  });

  await test.step("Cart URL", async () => {
    await app.navigation.pageUrlAsExpected(routes.cartPage);
  });

  await test.step("Verify Cart Products", async () => {
    await app.cart.verifyCartProducts();
  });

  await test.step("Go to Checkout", async () => {
    await app.cart.goToCheckout();
  });

  await test.step("Checkout URL Step One", async () => {
    await app.navigation.pageUrlAsExpected(routes.checkoutPageOne);
  });

  await test.step("Blank Credentials for Checkout and Continue", async () => {
    await app.cart.continueCheckoutButton();
  });

  await test.step("Verify Error Message", async () => {
    await app.checkout.errorBlankFields();
  });

  await test.step("Cancel - Back to Cart Page", async () => {
    await app.checkout.cancelButton();
  });

  await test.step("Cart URL", async () => {
    await app.navigation.pageUrlAsExpected(routes.cartPage);
  });

  await test.step("Continue shopping", async () => {
    await app.cart.continueShoppingButton();
  });

  await test.step("Inventory URL", async () => {
    await app.navigation.pageUrlAsExpected(routes.inventoryPage);
  });
});
});