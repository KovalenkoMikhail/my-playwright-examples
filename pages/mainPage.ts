// pages/casinoPage.ts
import { Page, expect } from "@playwright/test";

class MainPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async headerOpenCasino() {
    await this.page.locator('//*[@id="search-drawer-root"]/div[3]').isVisible();

    await this.page
      .getByRole("menuitem", { name: "Casino", exact: true })
      .click();

    await expect(
      this.page.locator('//*[@id="search-drawer-root"]//nav//li')
    ).toHaveCount(9);
    await expect(
      this.page.locator('//*[@id="search-drawer-root"]/div[3]//li[1]/a')
    ).toHaveText("Lobby");
    await expect(this.page).toHaveURL(/.*\/casino/);
  }
}

export default MainPage;
