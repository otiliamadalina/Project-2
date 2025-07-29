import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import BaseActions from "./base.actions";
import strings from "../resources/strings.json";
import routes from "../resources/routes.json";
import MainUltimatePage from "../pages/mainUltimate.page";

export default class MainUltimateActions extends BaseActions {
  mainUltimate: MainUltimatePage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.mainUltimate = new MainUltimatePage(page, context);
  }

  async verifyLogo() {
    await expect(this.mainUltimate.ultimateLogo).toBeVisible();
    const logoLink = this.mainUltimate.ultimateLogo.locator("a");
    await expect(logoLink).toHaveAttribute(
      "href",
      routes.mainUltimateLinks.logoLink
    );
  }

  async checkLinksbyId(id: string, expectedHref: string) {
    const linkLocator = this.mainUltimate.linkLocator(id);
    await expect(linkLocator).toBeVisible();
    await expect(linkLocator).toHaveAttribute("href", expectedHref);
  }

  async verifyMenuLinks() {
    await this.checkLinksbyId(
      strings.mainUltimatePage.serviceId,
      routes.mainUltimateLinks.servicePage
    );
    await this.checkLinksbyId(
      strings.mainUltimatePage.aboutId,
      routes.mainUltimateLinks.aboutPage
    );
    await this.checkLinksbyId(
      strings.mainUltimatePage.blogId,
      routes.mainUltimateLinks.blogPage
    );
    await this.checkLinksbyId(
      strings.mainUltimatePage.newsletterId,
      routes.mainUltimateLinks.newsletterPage
    );
    await this.checkLinksbyId(
      strings.mainUltimatePage.freeSessionId,
      routes.mainUltimateLinks.schedulPage
    );
  }

  async verifySearchButton() {
    await this.mainUltimate.searchButton.waitFor({
      state: "visible",
      timeout: 10000,
    });

    await expect(this.mainUltimate.searchButton).toBeVisible();

    await this.mainUltimate.searchButton.click();
  }

  async verifyHeadings() {
    const headings = this.mainUltimate.allHeadingsClass;
    const count = await headings.count();

    for (let i = 0; i < count; i++) {
      const heading = headings.nth(i);
      await expect(heading).toBeVisible();
      const text = await heading.textContent();
      console.log(`Heading ${i + 1}: ${text}`);
    }
  }

  async verifyInnerTexts() {
    const innerTexts = this.mainUltimate.allInnerTextsClass;
    const count = await innerTexts.count();

    for (let i = 0; i < count; i++) {
      const innerText = innerTexts.nth(i);
      await expect(innerText).toBeVisible();
      const text = await innerText.textContent();
      console.log(`Text ${i + 1}: ${text}`);
    }
  }

  async verifyModuleHeaders() {
    const moduleHeaders = this.mainUltimate.allModuleTextsClass;
    const count = await moduleHeaders.count();

    for (let i = 0; i < count; i++) {
      const moduleHeader = moduleHeaders.nth(i);
      await expect(moduleHeader).toBeVisible();
      const text = await moduleHeader.textContent();
      console.log(`Module ${i + 1}: ${text}`);
    }
  }

  async verifyModuleDescription() {
    const modulesDescription = this.mainUltimate.allModuleDescriptionClass;
    const count = await modulesDescription.count();
    for (let i = 0; i < count; i++) {
      const moduleDescription = modulesDescription.nth(i);
      await expect(moduleDescription).toBeVisible();
      const text = await moduleDescription.textContent();
      console.log(`Module ${i + 1}: ${text}`);
    }
  }

  async verifyAllImages() {
    await this.mainUltimate.allImages;
    await this.verifyImages();
  }

  async verifyImages() {
    const images = this.mainUltimate.allImages;
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const image = images.nth(i);
      await expect(image).toBeVisible();

      const src = await image.getAttribute("src");
      console.log(`Image ${i + 1} src: ${src}`);
    }
  }

  // async verifyButtons() {
  //   const buttons = this.mainUltimate.allButtons;
  //   const count = await buttons.count();

  //   for (let i = 0; i < count; i++) {
  //     const button = buttons.nth(i);
  //     await expect(button).toBeVisible();

  //     const href = await button.getAttribute("href");
  //     console.log(`Button ${i + 1} href: ${href}`);
  //   }
  // }

  async verifyButtonsByLocator(locator: Locator, expectedHref: string) {
    const count = await locator.count();

    for (let i = 0; i < count; i++) {
      const button = locator.nth(i);
      await expect(button).toBeVisible();

      const href = await button.getAttribute("href");
      console.log(`Button ${i + 1} href: ${href}`);

      expect(href).toContain(expectedHref);
    }
  }

  async verifyButtons() {
    await this.verifyButtonsByLocator(
      this.mainUltimate.fullStoryButton1,
      routes.mainUltimateLinks.fullStory1
    );
    await this.verifyButtonsByLocator(
      this.mainUltimate.fullStoryButton2,
      routes.mainUltimateLinks.fullStory2
    );
    await this.verifyButtonsByLocator(
      this.mainUltimate.fullStoryButton3,
      routes.mainUltimateLinks.fullStory3
    );
    await this.verifyButtonsByLocator(
      this.mainUltimate.fullStoryButton4,
      routes.mainUltimateLinks.fullStory4
    );
    await this.verifyButtonsByLocator(
      this.mainUltimate.fullStoryButton5,
      routes.mainUltimateLinks.fullStory5
    );

    await this.verifyButtonsByLocator(
      this.mainUltimate.healthButton,
      routes.mainUltimateLinks.healthButton
    );
    await this.verifyButtonsByLocator(
      this.mainUltimate.financeButton,
      routes.mainUltimateLinks.financeButton
    );
    await this.verifyButtonsByLocator(
      this.mainUltimate.hospitalityButton,
      routes.mainUltimateLinks.hospitalityButton
    );
    await this.verifyButtonsByLocator(
      this.mainUltimate.healthcareButton,
      routes.mainUltimateLinks.healthcareButton
    );
    await this.verifyButtonsByLocator(
      this.mainUltimate.educationButton,
      routes.mainUltimateLinks.educationButton
    );

    await this.verifyButtonsByLocator(
      this.mainUltimate.readmoreButton,
      routes.mainUltimateLinks.readmoreButton
    );
  }

  async verifyFooterLinks() {
    const linksToCheck = [
      {
        locator: this.mainUltimate.linkedinButton,
        expectedHref: routes.mainUltimateLinks.linkedinLink,
      },
      {
        locator: this.mainUltimate.twitterButton,
        expectedHref: routes.mainUltimateLinks.xLink,
      },
      {
        locator: this.mainUltimate.facebookButton,
        expectedHref: routes.mainUltimateLinks.facebookLink,
      },
      {
        locator: this.mainUltimate.instagramButton,
        expectedHref: routes.mainUltimateLinks.instagramLink,
      },
      {
        locator: this.mainUltimate.youtubeButton,
        expectedHref: routes.mainUltimateLinks.youtubeLink,
      },

      {
        locator: this.mainUltimate.aboutLink,
        expectedHref: routes.mainUltimateLinks.aboutLink,
      },
      {
        locator: this.mainUltimate.blogLink,
        expectedHref: routes.mainUltimateLinks.blogLink,
      },
      {
        locator: this.mainUltimate.javaLink,
        expectedHref: routes.mainUltimateLinks.javaLink,
      },
      {
        locator: this.mainUltimate.contactLink,
        expectedHref: routes.mainUltimateLinks.contactLink,
      },
      {
        locator: this.mainUltimate.freeCoursesLink,
        expectedHref: routes.mainUltimateLinks.freeCoursesLink,
      },
      {
        locator: this.mainUltimate.seleniumJavaLink,
        expectedHref: routes.mainUltimateLinks.seleniumLink,
      },
      {
        locator: this.mainUltimate.seleniumCLink,
        expectedHref: routes.mainUltimateLinks.seleniumCLink,
      },
      {
        locator: this.mainUltimate.seleniumResourcesLink,
        expectedHref: routes.mainUltimateLinks.seleniumResourcesLink,
      },
      {
        locator: this.mainUltimate.automationExercisesLink,
        expectedHref: routes.mainUltimateLinks.automationLink,
      },
    ];

    for (const link of linksToCheck) {
      await expect(link.locator).toBeVisible();
      const href = await link.locator.getAttribute("href");
      console.log(`${link.locator}, href: ${href}`);
      expect(href).not.toBeNull();
      expect(href).toContain(link.expectedHref);

      await Promise.all([
        this.page.waitForNavigation({ waitUntil: "domcontentloaded" }),
        link.locator.click(),
      ]);
      await this.page.goBack();
      await this.page.waitForLoadState("domcontentloaded");
    }
  }

  async verifyDropdown() {
    const dropdown = this.mainUltimate.educationDropdown;
    await expect(dropdown).toBeVisible();
    await expect(dropdown).toBeEnabled();

    await dropdown.hover();

    const submenu = await dropdown.locator(this.mainUltimate.subMenuDropdown);
    await expect(submenu).toBeVisible();
  }

}
