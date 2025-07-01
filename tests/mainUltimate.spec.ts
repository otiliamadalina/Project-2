import routes from "../resources/routes.json";
import strings from "../resources/strings.json";
import test from "./test";

test.beforeEach(async ({ app }) => {
  await test.step("Access Main Ultimate Page", async () => {
    await app.base.navigateTo(routes.mainUltimateLinks.mainUltimateLink);
    await app.navigation.pageUrlAsExpected(
      routes.mainUltimateLinks.mainUltimateLink
    );
    await app.common.browserTabTitleAsExpected(
      strings.mainUltimatePage.mainUltimateTitle
    );
  });

  await test.step("Ultimate URL", async () => {
    await app.navigation.pageUrlAsExpected(
      routes.mainUltimateLinks.mainUltimateLink
    );
  });
});

test("Main Menu", async ({ app }) => {
  await test.step("Logo", async () => {
    await app.mainUltimate.verifyLogo();
  });

  await test.step("Menu Links", async () => {
    await app.mainUltimate.verifyMenuLinks();
  });

  await test.step("Search bar", async () => {
    await app.mainUltimate.verifySearchButton();
  });

  await test.step("Education Dropdown", async () => {
    await app.mainUltimate.verifyDropdown();
  });
});

test("Verify Headings", async ({ app }) => {
  await app.mainUltimate.verifyHeadings()
});

test("Verify inner Texts", async ({ app }) => {
  await app.mainUltimate.verifyInnerTexts();
});

test("Verify Module Headers", async ({ app }) => {
  await app.mainUltimate.verifyModuleHeaders();
});

test("Verify Images", async ({ app }) => {
  await app.mainUltimate.verifyAllImages();
});

test("Verify Buttons", async ({ app }) => {
  await app.mainUltimate.verifyButtons();
});

test("Footer Links", async ({ app }) => {
  await app.mainUltimate.verifyFooterLinks();
});

