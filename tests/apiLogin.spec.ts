import { test, expect } from "@playwright/test";
import { apiLoginAndSaveStorage } from "../api/services/user.service";

test.describe("API Auth", () => {
  test("API Login and save storageState", async ({ request }) => {
    const loginData = await apiLoginAndSaveStorage(request);
    
    expect(loginData.sessionid).toBeTruthy();
    expect(loginData.userid).toBeTruthy();
    expect(loginData.username).toBeTruthy();
  });
});
