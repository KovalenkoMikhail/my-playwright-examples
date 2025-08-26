import { test } from "@playwright/test";
import * as homepage from "../modals/homepage";
import * as cookies from "../modals/components/cookies";
import * as auth from "../modals/auth";
import { getStorageStatePath } from "../utils/getCredentials";
import { TARGET_ENV, TARGET_BRAND, TARGET_JURISDICTION } from "../utils/constants";

test.describe("logged-in context (saved storageState)", () => {
    test.use({ storageState: getStorageStatePath() });

    test("header", async ({ page }) => {
        await homepage.openHomePage(page);

        
        // await page.context().storageState({ path: 'auth.json' });
    });
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