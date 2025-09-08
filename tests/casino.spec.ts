// import { test } from "@playwright/test";
import { test } from "./fixtures/casinoFixture";
import * as cookies from "../modals/components/cookies";
import { getStorageStatePath } from "../utils/getCredentials";


// let casinoPage: CasinoPage;


test.describe("Casino // sub-navigation (without login )", () => {
  // test.use({
  //   storageState: getStorageStatePath(undefined, undefined, undefined, "root"),
  // });

  // test.beforeEach(async ({ casinoPage,page }) => {
  //   await page.goto("/casino");
  //   casinoPage = new CasinoPage(page);
  // });

  test("GoTo Popular // sub-navigation", async ({ casinoPage, page }) => {
    await cookies.acceptCookiesIfVisible(page);
    await casinoPage.goToPopular();
  });

  test("GoTo Slots // sub-navigation", async ({  casinoPage, page }) => {
    await cookies.acceptCookiesIfVisible(page);
    await casinoPage.goToSlots();
  });

  test("GoTo New // sub-navigation ", async ({  casinoPage, page }) => {
    await cookies.acceptCookiesIfVisible(page);
    await casinoPage.goToNew();
  });

  test("GoTo Drops & Wins // sub-navigation ", async ({  casinoPage, page }) => {
    await cookies.acceptCookiesIfVisible(page);
    await casinoPage.goToDropsAndWins();
  });

  test("GoTo Jackpots // sub-navigation ", async ({  casinoPage, page }) => {
    await cookies.acceptCookiesIfVisible(page);
    await casinoPage.goToJackpots();
  });

  test("GoTo Table Games // sub-navigation ", async ({  casinoPage, page }) => {
    await cookies.acceptCookiesIfVisible(page);
    await casinoPage.goToTableGames();
  });

  test("GoTo Let's Go Fishing // sub-navigation ", async ({  casinoPage, page }) => {
    await cookies.acceptCookiesIfVisible(page);
    await casinoPage.goToLetsGoFishing();
  });

  test("GoTo Instant Wins // sub-navigation ", async ({  casinoPage, page }) => {
    await cookies.acceptCookiesIfVisible(page);
    await casinoPage.goToInstantWins();
  });

  test("GoTo Lobby // sub-navigation ", async ({  casinoPage, page }) => {
    await cookies.acceptCookiesIfVisible(page);
    await casinoPage.goToInstantWins();
    await casinoPage.goToLobby();
  });
});
