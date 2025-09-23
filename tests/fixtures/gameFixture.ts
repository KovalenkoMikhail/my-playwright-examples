import {test as base} from "@playwright/test";
import { getStorageStatePath } from "../../utils/getCredentials";
import { HyperStarMultichasePage } from "../../pages/games/hyperStarMultichasePage";

type MyFixtures = {
    hyperStarMultichasePage: HyperStarMultichasePage;
}

export const test = base.extend<MyFixtures>({
    hyperStarMultichasePage: async ({ page }, use) => {
        await page.goto("/play/hyper-star-multichase");
        await use(new HyperStarMultichasePage(page));
    },
    storageState: async ({}, use) => {
        await use(getStorageStatePath(undefined, undefined, undefined, "auth"));
}
});