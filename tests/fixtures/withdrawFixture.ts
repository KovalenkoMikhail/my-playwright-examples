import { test as base } from "@playwright/test";
import { WithdrawPage } from "../../pages/withdrawPage";
import { getStorageStatePath } from "../../utils/getCredentials";

type MyFixtures = {
    withdrawPage: WithdrawPage;
}

export const test = base.extend<MyFixtures>({
    withdrawPage: async ({ page }, use) => {
        await page.goto("/casino");
        await use(new WithdrawPage(page));
    },
    storageState: async ({}, use) => {
      await use(getStorageStatePath(undefined, undefined, undefined, "root"));
    } 
    
})