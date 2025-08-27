import { test } from "@playwright/test";
import * as homepage from "../modals/homepage";
import * as cookies from "../modals/components/cookies";
import * as auth from "../modals/auth";
import { getStorageStatePath } from "../utils/getCredentials";
import {
  TARGET_ENV,
  TARGET_BRAND,
  TARGET_JURISDICTION,
} from "../utils/constants";
import CasinoPage from "../pages/casinoPage";
import MainPage from "../pages/mainPage";
import { beforeEach } from "node:test";

//TODO await page.getByRole('button', { name: 'I ACCEPT ADDITIONAL COOKIES' }).click();

// let casinoPage: CasinoPage;

// test.beforeEach(async ({ page }) => {});

test.describe("guest context (root storageState)", () => {
  test.use({
    storageState: getStorageStatePath(undefined, undefined, undefined, "root"),
  });

  test("header open casino Page", async ({ page }) => {
    const mainPage = new MainPage(page);
    await homepage.openHomePage(page);
    await mainPage.headerOpenCasino();
  });

  // test("header", async ({ page }) => {
  //   const casinoPage = new CasinoPage(page);
  //   await homepage.openHomePage(page);
  //   await casinoPage.checkSubNavigation();
  // });
});

// TODO
// test.describe("logged-in context (auth storageState)", () => {
//   test.use({
//     storageState: getStorageStatePath(undefined, undefined, undefined, "auth"),
//   });

//   test("header22", async ({ page }) => {
//     await homepage.openHomePage(page);

//     // await page.context().storageState({ path: 'auth.json' });
//   });
// });

// test("login user and save storageState", async ({ page }) => {
//     await homepage.openHomePage(page);
//     await cookies.acceptCookiesIfVisible(page);
//     await auth.login(page);

//   });
