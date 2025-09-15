import * as homepage from "../modals/homepage";
import * as cookies from "../modals/components/cookies";
import { getStorageStatePath } from "../utils/getCredentials";
import { test } from "./fixtures/withdrawFixture";

import { beforeEach } from "node:test";

test.describe("Withdraw Personal Details", () => {
  test.use({
    storageState: getStorageStatePath(undefined, undefined, undefined, "auth"),
  });

  test.beforeEach(async ({ withdrawPage, page }) => {
    await homepage.openHomePage(page);
    await cookies.acceptCookiesIfVisible(page);
    await withdrawPage.goToPersonalDetails();
  });

  test("Change Password", async ({ withdrawPage }) => {
    await withdrawPage.changePassword();
  });

  test("Check Hide Button", async ({ withdrawPage }) => {
    await withdrawPage.checkHideButton();
  });
  test("Close modal CHANGE PASSWORD", async ({ withdrawPage }) => {
    await withdrawPage.openModalChangePassword();
    await withdrawPage.closeModalChangePassword();
  });
  test("12 Personal Details check elements", async ({ withdrawPage }) => {
    await withdrawPage.elementsPersonalDetails();
  })

});

test.describe("Withdraw Deposit", () => {
  test.use({
    storageState: getStorageStatePath(undefined, undefined, undefined, "auth"),
  });
  test.beforeEach(async ({ withdrawPage, page }) => {
    await homepage.openHomePage(page);
    await cookies.acceptCookiesIfVisible(page);
    await withdrawPage.goToDeposit();

  });
    test("1 Payment method Interac", async ({ withdrawPage }) => {
    
    await withdrawPage.interacPayment();
  });
    test("2 Payment method Visa", async ({ withdrawPage }) => {
    await withdrawPage.visaPayment();
  });
     test("3 Payment method Paysafecard", async ({ withdrawPage }) => {
      await withdrawPage.paysafecardPayment();
  });
     test("4 Payment method CashToCode EVoucher", async ({ withdrawPage }) => {
    await withdrawPage.cashToCodeEVoucherPayment();
  });
     test("5 Payment method JetonCash", async ({ withdrawPage }) => {
      await withdrawPage.jetonCashPayment();
  });
     test("6 Payment method LuxonPay", async ({ withdrawPage }) => {
      await withdrawPage.luxonPayPayment();
  });
     test("7 Payment method Mastercard", async ({ withdrawPage }) => {
      await withdrawPage.mastercardPayment();
  });
     test("8 Payment method MiFinity", async ({ withdrawPage }) => {
      await withdrawPage.miFinityPayment();
  });
     test("9 Payment method MuchBetter", async ({ withdrawPage }) => {
      await withdrawPage.muchBetterPayment();
  });
     test("10 Payment method Neosurf", async ({ withdrawPage }) => {
      await withdrawPage.neosurfPayment();
  });
     test("11 Change payment method", async ({ withdrawPage }) => {
      await withdrawPage.neosurfPayment();
      await withdrawPage.changePaymentMethod();
  });

});