import {test, expect} from "@playwright/test";
import { getStorageStatePath } from "utils/getCredentials";

test.describe("iFrame first test", () => {
    test.use({
        storageState: getStorageStatePath(undefined, undefined, undefined, "auth"),
      });
    test("iFrame1stTest", async ({page}) => {
        await page.goto("https://ppd01-www.hopa.com/en-gb/play/miami-mayhem");
        await page.waitForLoadState("networkidle");
        const base_frame = page.frameLocator("game-iframe");
        console.log("base_frame: ", base_frame);
    })
})