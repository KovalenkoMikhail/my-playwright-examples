import { test } from "@playwright/test";
import * as homepage from "../modals/homepage";
import * as cookies from "../modals/components/cookies";
import * as auth from "../modals/auth";
import { getStorageStatePath } from "../utils/getCredentials";
import { TARGET_ENV, TARGET_BRAND, TARGET_JURISDICTION } from "../utils/constants";
import CasinoPage from "../pages/casinoPage";
import { beforeEach } from "node:test";

  // let casinoPage: CasinoPage;  

test.beforeEach(async({page}) => {
   

});

test.describe("guest context (root storageState)", () => {
    test.use({ storageState: getStorageStatePath(undefined, undefined, undefined, "root") });

    test("header", async ({ page }) => {
      const casinoPage = new CasinoPage(page);
        await homepage.openHomePage(page);
        await page.getByRole('navigation', { name: 'Vertical Navigation' }).getByLabel('Live Casino').click();
        await page.locator('//*[@id="search-drawer-root"]/div[3]').isVisible();
        await casinoPage.checkSubNavigation();
        // await page.locator('//*[@id="search-drawer-root"]/div[3]').;
        
      });
      // await page.getByRole('link', { name: 'Lobby' }).click();
});

test.describe("logged-in context (auth storageState)", () => {
    test.use({ storageState: getStorageStatePath(undefined, undefined, undefined, "auth") });

    test("header22", async ({ page }) => {
        await homepage.openHomePage(page);

        
        // await page.context().storageState({ path: 'auth.json' });
    });
});

// test("login user and save storageState", async ({ page }) => {
//     await homepage.openHomePage(page);
//     await cookies.acceptCookiesIfVisible(page);
//     await auth.login(page);
  
  
//   });