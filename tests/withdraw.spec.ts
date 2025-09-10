import { test } from "@playwright/test";
import * as homepage from "../modals/homepage";
import * as cookies from "../modals/components/cookies";
import { getStorageStatePath } from "../utils/getCredentials";
import * as withdrawPage from "../pages/withdrawPage";

import { beforeEach } from "node:test";

test.describe("Withdraw Personal Details", () => {
  test.use({
    storageState: getStorageStatePath(undefined, undefined, undefined, "auth"),
  });

  test.beforeEach(async ({ page }) => {
    await homepage.openHomePage(page);
    await cookies.acceptCookiesIfVisible(page);
    await withdrawPage.goToPersonalDetails(page);
  });

  test("Change Password", async ({ page }) => {
    await withdrawPage.changePassword(page);
  });

  test("Check Hide Button", async ({ page }) => {
    await withdrawPage.checkHideButton(page);
  });
  test("Close modal CHANGE PASSWORD", async ({ page }) => {
    await withdrawPage.openModalChangePassword(page);
    await withdrawPage.closeModalChangePassword(page);
  });
  test("12 Personal Details check elements", async ({ page }) => {
    await withdrawPage.elementsPersonalDetails(page);
  })

});

test.describe("Withdraw Deposit", () => {
  test.use({
    storageState: getStorageStatePath(undefined, undefined, undefined, "auth"),
  });
  test.beforeEach(async ({ page }) => {
    await homepage.openHomePage(page);
    await cookies.acceptCookiesIfVisible(page);
    await withdrawPage.goToDeposit(page);

  });
    test("1 Payment method Interac", async ({ page }) => {
    
    await withdrawPage.interacPayment(page);
  });
    test("2 Payment method Visa", async ({ page }) => {
    await withdrawPage.visaPayment(page);
  });
     test("3 Payment method Paysafecard", async ({ page }) => {
      await withdrawPage.paysafecardPayment(page);
  });
     test("4 Payment method CashToCode EVoucher", async ({ page }) => {
    await withdrawPage.cashToCodeEVoucherPayment(page);
  });
     test("5 Payment method JetonCash", async ({ page }) => {
      await withdrawPage.jetonCashPayment(page);
  });
     test("6 Payment method LuxonPay", async ({ page }) => {
      await withdrawPage.luxonPayPayment(page);
  });
     test("7 Payment method Mastercard", async ({ page }) => {
      await withdrawPage.mastercardPayment(page);
  });
     test("8 Payment method MiFinity", async ({ page }) => {
      await withdrawPage.miFinityPayment(page);
  });
     test("9 Payment method MuchBetter", async ({ page }) => {
      await withdrawPage.muchBetterPayment(page);
  });
     test("10 Payment method Neosurf", async ({ page }) => {
      await withdrawPage.neosurfPayment(page);
  });
     test("11 Change payment method", async ({ page }) => {
      await withdrawPage.interacPayment(page);
      await withdrawPage.changePaymentMethod(page);
  });

});