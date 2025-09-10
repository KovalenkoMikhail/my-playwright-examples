import { test as base } from "@playwright/test";
import { RegistrationPage } from "../../pages/registrationPage";
import { getStorageStatePath } from "../../utils/getCredentials";

type MyFixtures = {
    registrationPage: RegistrationPage;
}

export const test = base.extend<MyFixtures>({
    registrationPage: async ({ page }, use) => {
        await page.goto("/casino");
        await use(new RegistrationPage(page));
    },
    storageState: async ({}, use) => {
      await use(getStorageStatePath(undefined, undefined, undefined, "root"));
    } 
    
})