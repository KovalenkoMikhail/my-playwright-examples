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
import { beforeEach } from "node:test";

//TODO await page.getByRole('button', { name: 'I ACCEPT ADDITIONAL COOKIES' }).click();

// let casinoPage: CasinoPage;

// test.beforeEach(async ({ page }) => {});

test.describe("guest context (root storageState)", () => {
  test.use({
    storageState: getStorageStatePath(undefined, undefined, undefined, "root"),
  });

  test("sub-navigation go to Popular", async ({ page }) => {
    const casinoPage = new CasinoPage(page);
    await page.goto("/casino");
    await casinoPage.subNavigationGoToPopular();
  });
});
