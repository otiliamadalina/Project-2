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
});

test.describe("Login tests", { tag: ["@login", "@regression"] }, async () => {
  test("Verify Login Credentials", async ({ app }) => {
    await test.step("Verify Headings", async () => {
      await app.login.acceptedUsernameIsVisible();
      await app.login.acceptedPasswordIsVisible();
    });
  });

  test("Standard Credentials", async ({ app }) => {
    await test.step("Input Standard Username&Password", async () => {
      await app.login.checkLoginFields();
      await app.login.completeLoginForm(
        strings.loginPage.acceptedUsernames.standardUser,
        strings.loginPage.passwordForAllUsers
      );
    });

    await test.step("Login Button", async () => {
      await app.login.checkLoginButton();
    });
  });

  test("Locked out Credentials", async ({ app }) => {
    await test.step("Input Locked out Username&Password", async () => {
      await app.login.checkLoginFields();
      await app.login.completeLoginForm(
        strings.loginPage.acceptedUsernames.lockedOutUser,
        strings.loginPage.passwordForAllUsers
      );
    });

    await test.step("Login Button", async () => {
      await app.login.checkLoginButton();
    });

    await test.step("Error for Locked out Credentials", async () => {
      await app.login.errorMessageAsExpected(
        strings.loginPage.errorMessages.lockedOutError
      );
    });
  });

  test("Wrong Credentials", async ({ app }) => {
    await test.step("Input Wrong Username&Password", async () => {
      await app.login.checkLoginFields();
      await app.login.completeLoginForm(
        strings.loginPage.acceptedUsernames.wrongUser,
        strings.loginPage.wrongPassword
      );
    });

    await test.step("Login Button", async () => {
      await app.login.checkLoginButton();
    });

    await test.step("Error for Wrong Credentials", async () => {
      await app.login.errorMessageAsExpected(
        strings.loginPage.errorMessages.wrongCredentialsError
      );
    });
  });
});
