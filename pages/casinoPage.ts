// pages/casinoPage.ts
import { Page, expect } from "@playwright/test";

class CasinoPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async subNavigationGoToPopular() {
    await this.page.getByRole("link", { name: "Popular" }).click();

    await this.page
      .getByRole("button", { name: "Load more games from Popular" })
      .isVisible();

    await expect(
      this.page.locator("//h2[@data-cy='GamesCategoryPage_Title']")
    ).toHaveText("Popular");

    await expect(this.page).toHaveURL(/.*\/casino\/popular/);
  }

  async goToLobby() {
    await this.page.getByRole("link", { name: "Lobby" }).click();
  }
}

export default CasinoPage;
