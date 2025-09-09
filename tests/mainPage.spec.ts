import { test } from "@playwright/test";
import * as homepage from "../modals/homepage";
import * as cookies from "../modals/components/cookies";
import * as auth from "../modals/auth";
import { getStorageStatePath } from "../utils/getCredentials";

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

    await cookies.acceptCookiesIfVisible(page);

    await homepage.openHomePage(page);
    await mainPage.headerOpenCasino();
  });
});
