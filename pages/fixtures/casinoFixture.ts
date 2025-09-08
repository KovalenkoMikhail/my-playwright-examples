import { test as base } from "@playwright/test";
import { CasinoPage } from "../casinoPage";
import { getStorageStatePath } from "../../utils/getCredentials";

type MyFixtures = {
    casinoPage: CasinoPage;
}

export const test = base.extend<MyFixtures>({
    casinoPage: async ({ page }, use) => {
        await page.goto("/casino");
        await use(new CasinoPage(page));
    },
    storageState: async ({}, use) => {
      await use(getStorageStatePath(undefined, undefined, undefined, "root"));
    } 
    
})