// pages/casinoPage.ts
import { Page, expect } from "@playwright/test";

export async function subNavigationGoToPopular(page: Page) {
  if (await page.getByRole("link", { name: "Popular" }).isVisible()) {
    await page.getByRole("link", { name: "Popular" }).click();
  }

  await page
    .getByRole("button", { name: "Load more games from Popular" })
    .isVisible();

  await expect(
    page.locator("//h2[@data-cy='GamesCategoryPage_Title']")
  ).toHaveText("Popular");

  await expect(page).toHaveURL(/.*\/casino\/popular/);
}

export async function subNavigationGoToSlots(page: Page) {
  if (await page.getByRole("link", { name: "Slots" }).isVisible()) {
    await page.getByRole("link", { name: "Slots" }).click();
  }

  await expect(
    page.locator("//h2[@data-cy='GamesCategoryPage_Title']")
  ).toHaveText("Slots");

  await expect(page).toHaveURL(/.*\/casino\/slots/);
}

export async function subNavigationGoToNew(page: Page) {
  if (await page.getByRole("link", { name: "Drops & Wins" }).isVisible()) {
    await page.getByRole("link", { name: "Drops & Wins" }).click();
  }

  await expect(
    page.locator("//h2[@data-cy='GamesCategoryPage_Title']")
  ).toHaveText("Drops & Wins");

  await expect(page).toHaveURL(/.*\/casino\/drops-and-wins/);
}

export async function subNavigationGoToDropsAndWins(page: Page) {
  if (await page.getByRole("link", { name: "Drops & Wins" }).isVisible()) {
    await page.getByRole("link", { name: "Drops & Wins" }).click();
  }

  await expect(
    page.locator("//h2[@data-cy='GamesCategoryPage_Title']")
  ).toHaveText("Drops & Wins");

  await expect(page).toHaveURL(/.*\/casino\/drops-and-wins/);
}

export async function subNavigationGoToJackpots(page: Page) {
  if (
    await page.getByRole("link", { name: "Jackpots", exact: true }).isVisible()
  ) {
    await page.getByRole("link", { name: "Jackpots", exact: true }).click();
  }

  await expect(
    page.locator("//h2[@data-cy='GamesCategoryPage_Title']")
  ).toHaveText("Jackpots");

  await expect(page).toHaveURL(/.*\/casino\/jackpots/);
}

export async function subNavigationGoToTableGames(page: Page) {
  if (await page.getByRole("link", { name: "Table Games" }).isVisible()) {
    await page.getByRole("link", { name: "Table Games" }).click();
  }

  await expect(
    page.locator("//h2[@data-cy='GamesCategoryPage_Title']")
  ).toHaveText("Table Games");

  await expect(page).toHaveURL(/.*\/casino\/table-games/);
}

export async function subNavigationGoToLetsGoFishing(page: Page) {
  if (await page.getByRole("link", { name: "Let's Go Fishing" }).isVisible()) {
    await page.getByRole("link", { name: "Let's Go Fishing" }).click();
  }

  await expect(
    page.locator("//h2[@data-cy='GamesCategoryPage_Title']")
  ).toHaveText("Let's Go Fishing");

  await expect(page).toHaveURL(/.*\/casino\/lets-go-fishing/);
}

export async function subNavigationGoToInstantWins(page: Page) {
  if (await page.getByRole("link", { name: "Instant Wins" }).isVisible()) {
    await page.getByRole("link", { name: "Instant Wins" }).click();
  }

  await expect(
    page.locator("//h2[@data-cy='GamesCategoryPage_Title']")
  ).toHaveText("All games");

  await expect(page).toHaveURL(/.*\/casino\/instant-wins/);
}

export async function subNavigationGoToLobby(page: Page) {
  if (await page.getByRole("link", { name: "Lobby" }).isVisible()) {
    await page.getByRole("link", { name: "Lobby" }).click();
  }

  await expect(page.locator("//h2[normalize-space()='Popular']")).toHaveText(
    "Popular"
  );
  await expect(page.locator("//h2[normalize-space()='Slots']")).toHaveText(
    "Slots"
  );
  await expect(page.locator("//h2[normalize-space()='Slots']")).toHaveText(
    "Slots"
  );
  await expect(
    page.locator("//h2[normalize-space()='Drops & Wins']")
  ).toHaveText("Drops & Wins");

  await expect(page).toHaveURL(/.*\/casino/);
}
