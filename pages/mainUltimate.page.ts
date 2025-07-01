import { Page } from "@playwright/test";
import BasePage from "./base.page";

export default class MainUltimatePage extends BasePage {
  get mainMenuContainer() {
    return this.page.locator("#main-menu");
  }

  get ultimateLogo() {
    return this.page.locator(".et_pb_menu__logo");
  }

  get menuLinks() {
    return this.mainMenuContainer.locator("a");
  }

  get educationDropdown() {
    return this.mainMenuContainer.locator("#menu-item-218225");
  }

  get subMenuDropdown() {
    return this.mainMenuContainer.locator('.sub-menu');
  }

  linkLocator(id: string) {
    return this.page.locator(`#${id} a`);
  }

  get searchButton() {
    return this.mainMenuContainer.locator(
      "button.et_pb_menu__icon.et_pb_menu__search-button"
    );
  }

  // Section 0

  get allHeadingsClass() {
    return this.page.locator(".et_pb_module_heading");
  }

  get allInnerTextsClass() {
    return this.page.locator(".et_pb_text_inner");
  }

  get allModuleTextsClass() {
    return this.page.locator(".et_pb_module_header");
  }

  get allModuleDescriptionClass() {
    return this.page.locator(".et_pb_blurb_description");
  }

  get allImages() {
    return this.page.locator("img");
  }

  get allButtons() {
    return this.page.locator("a[href]");
  }

  // buttons

  get scheduleButton() {
    return this.page.locator(
      "a.et_pb_button.et_pb_button_0.et_pb_bg_layout_light"
    );
  }

  get fullStoryButton1() {
    return this.page.locator(
      "a.et_pb_button.et_pb_button_3.show-full-story.et_pb_bg_layout_light"
    );
  }

  get fullStoryButton2() {
    return this.page.locator(
      "a.et_pb_button.et_pb_button_4.show-full-story.et_pb_bg_layout_light"
    );
  }

  get fullStoryButton3() {
    return this.page.locator(
      "a.et_pb_button.et_pb_button_8.show-full-story.et_pb_bg_layout_light"
    );
  }

  get fullStoryButton4() {
    return this.page.locator(
      "a.et_pb_button.et_pb_button_7.show-full-story.et_pb_bg_layout_light"
    );
  }

  get fullStoryButton5() {
    return this.page.locator(
      "a.et_pb_button.et_pb_button_11.show-full-story.et_pb_bg_layout_light"
    );
  }

  get healthButton() {
    return this.page.locator(
      ".et_pb_button.et_pb_button_2.et_pb_bg_layout_light"
    );
  }

  get financeButton() {
    return this.page.locator(
      ".et_pb_button.et_pb_button_5.et_pb_bg_layout_light"
    );
  }

  get hospitalityButton() {
    return this.page.locator(
      ".et_pb_button.et_pb_button_6.et_pb_bg_layout_light"
    );
  }

  get healthcareButton() {
    return this.page.locator(
      ".et_pb_button.et_pb_button_9.et_pb_bg_layout_light"
    );
  }

  get educationButton() {
    return this.page.locator(
      ".et_pb_button.et_pb_button_10.et_pb_bg_layout_light"
    );
  }

  get readmoreButton() {
    return this.page.locator(
      ".et_pb_button.et_pb_button_13.show-full-story.et_pb_bg_layout_light"
    );
  }

  get linkedinIcon() {
    return this.page.locator(
      ".et_pb_social_media_follow_network_0_tb_footer.et_pb_social_icon.et_pb_social_network_link.et-social-linkedin"
    );
  }

  get twitterIcon() {
    return this.page.locator(
      ".et_pb_social_media_follow_network_1_tb_footer.et_pb_social_icon.et_pb_social_network_link.et-social-twitter"
    );
  }

  get facebookIcon() {
    return this.page.locator(
      ".et_pb_social_media_follow_network_2_tb_footer.et_pb_social_icon.et_pb_social_network_link.et-social-facebook"
    );
  }

  get instagramIcon() {
    return this.page.locator(
      ".et_pb_social_media_follow_network_3_tb_footer.et_pb_social_icon.et_pb_social_network_link.et-social-instagram"
    );
  }

  get youtubeIcon() {
    return this.page.locator(
      ".et_pb_social_media_follow_network_4_tb_footer.et_pb_social_icon.et_pb_social_network_link.et-social-youtube"
    );
  }

  get linkedinButton() {
    return this.page.locator("li.et-social-linkedin a");
  }

  get twitterButton() {
    return this.page.locator("li.et-social-twitter a");
  }

  get facebookButton() {
    return this.page.locator("li.et-social-facebook a");
  }

  get instagramButton() {
    return this.page.locator("li.et-social-instagram a");
  }

  get youtubeButton() {
    return this.page.locator("li.et-social-youtube a");
  }

  get aboutLink() {
    return this.page.locator("#menu-item-218099");
  }

  get blogLink() {
    return this.page.locator("#menu-item-218097");
  }

  get javaLink() {
    return this.page.locator("#menu-item-218093");
  }

  get contactLink() {
    return this.page.locator("#menu-item-218100");
  }

  get freeCoursesLink() {
    return this.page.locator("#menu-item-218104");
  }

  get seleniumJavaLink() {
    return this.page.locator("#menu-item-218105");
  }

  get seleniumCLink() {
    return this.page.locator("#menu-item-218106");
  }

  get seleniumResourcesLink() {
    return this.page.locator("#menu-item-218107");
  }

  get automationExercisesLink() {
    return this.page.locator("#menu-item-218108");
  }

  get pagination() {
    return this.page.locator('.custom-swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets');
  }

  get pageBullets() {
    return this.page.locator('.swiper-pagination-bullet');
  }
}
