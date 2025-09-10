// pages/casinoPage.ts
import { Page, Locator, expect } from "@playwright/test";

export class CasinoPage {
  readonly popularLink: Locator;
  readonly slotsLink: Locator;
  readonly dropsAndWinsLink: Locator;
  readonly jackpotsLink: Locator;
  readonly tableGamesLink: Locator;
  readonly letsGoFishingLink: Locator;
  readonly instantWinsLink: Locator;
  readonly lobbyLink: Locator;
  readonly categoryTitle: Locator;
  readonly loadMorePopularButton: Locator;
  readonly dropdownCatalog: Locator;
  readonly newLink: Locator;

  constructor(private page: Page) {
    this.popularLink = page.getByRole("link", { name: "Popular" });
    this.slotsLink = page.getByRole('link', { name: 'Slots', exact: true });
    this.dropsAndWinsLink = page.getByLabel('Main header').getByRole('link', { name: 'Drops & Wins' });
    this.jackpotsLink = page.getByRole("link", { name: "Jackpots", exact: true });
    this.tableGamesLink = page.getByRole("link", { name: "Table Games" });
    this.letsGoFishingLink = page.getByRole("link", { name: "Let's Go Fishing" });
    this.instantWinsLink = page.getByRole("link", { name: "Instant Wins" });
    this.lobbyLink = page.getByRole("link", { name: "Lobby" });
    this.categoryTitle = page.locator("//h2[@data-cy='GamesCategoryPage_Title']");
    this.loadMorePopularButton = page.getByRole("button", { name: "Load more games from Popular" });
    this.dropdownCatalog = page.locator(".layout-content.d-flex");
    this.newLink = page.getByRole("link", { name: "New" });
  }

  async goToPopular() {
    if (await this.popularLink.isVisible()) {
      await this.popularLink.click();
    }
    await this.loadMorePopularButton.isVisible();
    await expect(this.categoryTitle).toHaveText("Popular");
    await expect(this.page).toHaveURL(/.*\/casino\/popular/);
  }

  async goToSlots() {
    if (await this.slotsLink.isVisible()) {
      await this.slotsLink.click();
    }
    await expect(this.categoryTitle).toHaveText("Slots");
    await expect(this.page).toHaveURL(/.*\/casino\/slots/);
  }

  async goToDropsAndWins() {
    if (await this.dropsAndWinsLink.isVisible()) {
      await this.dropsAndWinsLink.click();
    }
    await expect(this.categoryTitle).toHaveText("Drops & Wins");
    await expect(this.page).toHaveURL(/.*\/casino\/drops-and-wins/);
  }

  async goToJackpots() {
    if (await this.jackpotsLink.isVisible()) {
      await this.jackpotsLink.click();
    }
    await expect(this.categoryTitle).toHaveText("Jackpots");
    await expect(this.page).toHaveURL(/.*\/casino\/jackpots/);
  }

  async goToTableGames() {
    if (await this.tableGamesLink.isVisible()) {
      await this.tableGamesLink.click();
    }
    await expect(this.categoryTitle).toHaveText("Table Games");
    await expect(this.page).toHaveURL(/.*\/casino\/table-games/);
  }

  async goToLetsGoFishing() {
    if (await this.letsGoFishingLink.isVisible()) {
      await this.letsGoFishingLink.click();
    }
    await expect(this.categoryTitle).toHaveText("Let's Go Fishing");
    await expect(this.page).toHaveURL(/.*\/casino\/lets-go-fishing/);
  }

  async goToInstantWins() {
    if (await this.instantWinsLink.isVisible()) {
      await this.instantWinsLink.click();
    }
    await expect(this.categoryTitle).toHaveText("All games");
    await expect(this.page).toHaveURL(/.*\/casino\/instant-wins/);
  }

  async goToLobby() {
    if (await this.lobbyLink.isVisible()) {
      await this.lobbyLink.click();
    }
    await expect(this.page.locator("//h2[normalize-space()='Popular']")).toHaveText("Popular");
    await expect(this.page.locator("//h2[normalize-space()='Slots']")).toHaveText("Slots");
    await expect(this.page.locator("//h2[normalize-space()='Drops & Wins']")).toHaveText("Drops & Wins");
    await expect(this.page).toHaveURL(/.*\/casino/);
  }

  async goToNew() {
    if (await this.newLink.isVisible()) {
      await this.newLink.click();
    }
    await expect(this.categoryTitle).toHaveText("New");
    await expect(this.page).toHaveURL(/.*\/casino\/new/);
  }
}
