import { test } from "@playwright/test";
import * as homepage from "../modals/homepage";
import * as cookies from "../modals/components/cookies";
import { getStorageStatePath } from "../utils/getCredentials";
import * as casinoPage from "../pages/casinoPage";

import { beforeEach } from "node:test";

test.describe("Casino // sub-navigation (without login )", () => {
  test.use({
    storageState: getStorageStatePath(undefined, undefined, undefined, "root"),
  });

  test.beforeEach(async ({ page }) => {
    await page.goto("/casino");
  });

  test("GoTo Popular // sub-navigation", async ({ page }) => {
    await cookies.acceptCookiesIfVisible(page);
    await casinoPage.subNavigationGoToPopular(page);
  });

  test("GoTo Slots // sub-navigation", async ({ page }) => {
    await cookies.acceptCookiesIfVisible(page);
    await casinoPage.subNavigationGoToSlots(page);
  });

  test("GoTo New // sub-navigation ", async ({ page }) => {
    await cookies.acceptCookiesIfVisible(page);
    await casinoPage.subNavigationGoToNew(page);
  });

  test("GoTo Drops & Wins // sub-navigation ", async ({ page }) => {
    await cookies.acceptCookiesIfVisible(page);
    await casinoPage.subNavigationGoToDropsAndWins(page);
  });

  test("GoTo Jackpots // sub-navigation ", async ({ page }) => {
    await cookies.acceptCookiesIfVisible(page);
    await casinoPage.subNavigationGoToJackpots(page);
  });

  test("GoTo Table Games // sub-navigation ", async ({ page }) => {
    await cookies.acceptCookiesIfVisible(page);
    await casinoPage.subNavigationGoToTableGames(page);
  });

  test("GoTo Let's Go Fishing // sub-navigation ", async ({ page }) => {
    await cookies.acceptCookiesIfVisible(page);
    await casinoPage.subNavigationGoToLetsGoFishing(page);
  });

  test("GoTo Instant Wins // sub-navigation ", async ({ page }) => {
    await cookies.acceptCookiesIfVisible(page);
    await casinoPage.subNavigationGoToInstantWins(page);
  });

  test("GoTo Lobby // sub-navigation ", async ({ page }) => {
    await cookies.acceptCookiesIfVisible(page);
    await casinoPage.subNavigationGoToInstantWins(page);
    await casinoPage.subNavigationGoToLobby(page);
  });
});
