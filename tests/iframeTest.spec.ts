import { test } from "./fixtures/gameFixture";
import { getStorageStatePath } from "utils/getCredentials";
import * as cookies from "../modals/components/cookies";
// import * as hyperStarMultichasePage from "../pages/games/hyperStarMultichasePage";

test.describe("iFrame first test", () => {
    test.use({
        storageState: getStorageStatePath(undefined, undefined, undefined, "auth"),
      });

      test.beforeEach(async ({page}) => {
        await page.goto("/play/hyper-star-multichase");
        await cookies.acceptCookiesIfVisible(page);


      })
    test("iFrame1stTest", async ({hyperStarMultichasePage, page}) => {
       await hyperStarMultichasePage.clickToContinue();
    })
})