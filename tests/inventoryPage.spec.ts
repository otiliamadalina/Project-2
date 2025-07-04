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

test.describe(
  "Inventory tests",
  { tag: ["@inventory", "@regression"] },
  async () => {
    test("Menu", async ({ app }) => {
      await test.step("Verify menu", async () => {
        await app.inventory.checkMenuButton();
      });

      await test.step("Verify Menu Links", async () => {
        await app.inventory.verifyMenuLinks();
      });

      await test.step("Close Menu", async () => {
        await app.inventory.closeMenu();
      });
    });

    test("SauceDemo verify Products", async ({ app }) => {
      await test.step("Products Title", async () => {
        await app.inventory.checkProductHeader(
          strings.inventoryPage.productHeader
        );
      });

      await test.step("Verify products", async () => {
        await app.inventory.verifyProducts();
      });
    });

    test("SauceDemo verify Add to Cart", async ({ app }) => {
      await test.step("Products Title", async () => {
        await app.inventory.checkProductHeader(
          strings.inventoryPage.productHeader
        );
      });

      await test.step("Verify products", async () => {
        await app.inventory.verifyProducts();
      });

      await test.step("Add to Cart", async () => {
        await app.inventory.addProductsToCart();
      });
    });
  }
);
