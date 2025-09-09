import { Page, expect } from "@playwright/test";

export async function changePassword(page: Page) {
  const profileButton = page.getByRole("button", { name: "Profile menu" });

  if (await profileButton.isVisible()) {
    await profileButton.click();
  } else {
    await page.locator(".sc-377eb44-0 > div:nth-child(3)").click();
  }

  await page.getByRole("button", { name: "Withdraw" }).click();

  const personalDetailsButton = page.getByRole("button", {
    name: "Personal Details",
  });

  const emptyButton = page
    .getByRole("button")
    .filter({ hasText: /^$/ })
    .first();

  if (await emptyButton.isVisible()) {
    await emptyButton.click();
    await personalDetailsButton.click();
  } else {
    await personalDetailsButton.click();
  }

  await page.getByRole("button", { name: "Change" }).click();

  await page.getByPlaceholder("Your current password").fill("tiliTILI123$");

  await page.getByPlaceholder("Your new password").fill("tiliTILI123$Test");

  await page.getByRole("button", { name: "Change password" }).click();

  await expect(
    await page.getByLabel("Success").getByText("Success", { exact: true })
  ).toBeVisible();

  await page.getByRole("button", { name: "Confirm" }).click();

  await expect(
    await page.getByLabel("Success").getByText("Success", { exact: true })
  ).toBeHidden();

  await page.getByRole("button", { name: "Change" }).click();

  await page.getByPlaceholder("Your current password").fill("tiliTILI123$Test");

  await page.getByPlaceholder("Your new password").fill("tiliTILI123$");

  await page.getByRole("button", { name: "Change password" }).click();

  await expect(
    await page.getByLabel("Success").getByText("Success", { exact: true })
  ).toBeVisible();
}

export async function checkHideButton(page: Page) {
  const profileButton = page.getByRole("button", { name: "Profile menu" });

  if (await profileButton.isVisible()) {
    await profileButton.click();
  } else {
    await page.locator(".sc-377eb44-0 > div:nth-child(3)").click();
  }

  await page.getByRole("button", { name: "Withdraw" }).click();

  const personalDetailsButton = page.getByRole("button", {
    name: "Personal Details",
  });

  const emptyButton = page
    .getByRole("button")
    .filter({ hasText: /^$/ })
    .first();

  if (await emptyButton.isVisible()) {
    await emptyButton.click();
    await personalDetailsButton.click();
  } else {
    await personalDetailsButton.click();
  }

  await page.getByRole("button", { name: "Change" }).click();

  await page
    .locator('[data-cy="ChangePasswordDialog_OldPasswordInputShowButton"]')
    .click();

  await expect(
    await page.locator(
      '[data-cy="ChangePasswordDialog_OldPasswordInputShowButton"]'
    )
  ).toHaveAttribute("aria-pressed", "true");

  await page
    .locator('[data-cy="ChangePasswordDialog_NewPasswordInputShowButton"]')
    .click();

  await expect(
    await page.locator(
      '[data-cy="ChangePasswordDialog_NewPasswordInputShowButton"]'
    )
  ).toHaveAttribute("aria-pressed", "true");
}
export async function openModalChangePassword(page: Page) {
  

  await page.getByRole("button", { name: "Change" }).click();

  await expect(
    await page.getByRole("button", { name: "Change password" })
  ).toBeVisible();
}

export async function closeModalChangePassword(page: Page) {
  await page.getByRole("button", { name: "Close the popup" }).click();
  await expect(
    await page.getByRole("button", { name: "Change password" })
  ).toBeHidden();
}

export async function goToDeposit(page:Page) {
    const profileButton = page.getByRole("button", { name: "Profile menu" });

  if (await profileButton.isVisible()) {
    await profileButton.click();
  } else {
    await page.locator(".sc-377eb44-0 > div:nth-child(3)").click();
  }

  await page.getByRole("button", { name: "Withdraw" }).click();
 

     const emptyButton = page
    .getByRole("button")
    .filter({ hasText: /^$/ })
    .first();

    const depositButton = await page.getByRole('button', { name: 'Deposit', exact: true });

 if (await emptyButton.isVisible()) {
    await emptyButton.click();
    await depositButton.click();
  } else {
    await depositButton.click();
  }
  await expect( await page.getByRole('heading', { name: 'Secure deposit' })).toBeVisible();
}

export async function interacPayment(page:Page) {
  await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Interac ®').click();

  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByRole('heading', { name: 'Deposit Amount' }))
  .toBeVisible();
  
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Amount', { exact: true }))
  .toBeVisible();
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByRole('textbox', { name: 'Amount' }))
  .toBeVisible();
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Deposit Amount Deposit Amount'))
  .toBeVisible();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Payment Method Interac ®'))
  .toBeVisible();
}

export async function changePaymentMethod(page:Page) {
  await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Change Payment Method').click();
  await expect( await page.getByRole('heading', { name: 'Secure deposit' })).toBeVisible();
}

export async function visaPayment(page:Page) {
 await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Visa').first().click();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Amount', { exact: true }))
  .toBeVisible();
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByRole('textbox', { name: 'Amount' }))
  .toBeVisible();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Payment Method Visa'))
  .toBeVisible();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Deposit Amount Deposit Amount'))
  .toBeVisible();
}
export async function paysafecardPayment(page:Page) {
 await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Paysafecard').click();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Amount', { exact: true }))
  .toBeVisible();
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByRole('textbox', { name: 'Amount' }))
  .toBeVisible();
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Payment Method Paysafecard'))
  .toBeVisible();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Deposit Amount Deposit Amount'))
  .toBeVisible();
}
export async function cashToCodeEVoucherPayment(page:Page) {
 await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('CashToCode EVoucher').click();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Amount', { exact: true }))
  .toBeVisible();
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByRole('textbox', { name: 'Amount' }))
  .toBeVisible();
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Payment Method CashToCode EVoucher'))
  .toBeVisible();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Deposit Amount Deposit Amount'))
  .toBeVisible();
}
export async function jetonCashPayment(page:Page) {
 await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('JetonCash').click();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Amount', { exact: true }))
  .toBeVisible();
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByRole('textbox', { name: 'Amount' }))
  .toBeVisible();
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Payment Method JetonCash'))
  .toBeVisible();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Deposit Amount Deposit Amount'))
  .toBeVisible();
}
export async function luxonPayPayment(page:Page) {
 await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('LuxonPay').click();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Amount', { exact: true }))
  .toBeVisible();
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByRole('textbox', { name: 'Amount' }))
  .toBeVisible();
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Payment Method LuxonPay'))
  .toBeVisible();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Deposit Amount Deposit Amount'))
  .toBeVisible();
}
export async function mastercardPayment(page:Page) {
 await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Mastercard').first().click();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Amount', { exact: true }))
  .toBeVisible();
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByRole('textbox', { name: 'Amount' }))
  .toBeVisible();
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Payment Method Mastercard'))
  .toBeVisible();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Deposit Amount Deposit Amount'))
  .toBeVisible();
}
export async function miFinityPayment(page:Page) {
 await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('MiFinity').click();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Amount', { exact: true }))
  .toBeVisible();
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByRole('textbox', { name: 'Amount' }))
  .toBeVisible();
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Payment Method MiFinity'))
  .toBeVisible();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Deposit Amount Deposit Amount'))
  .toBeVisible();
}
export async function muchBetterPayment(page:Page) {
 await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('MuchBetter').click();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Amount', { exact: true }))
  .toBeVisible();
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByRole('textbox', { name: 'Amount' }))
  .toBeVisible();
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Payment Method MuchBetter'))
  .toBeVisible();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Deposit Amount Deposit Amount'))
  .toBeVisible();
}
export async function neosurfPayment(page:Page) {
 await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Neosurf').click();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Amount', { exact: true }))
  .toBeVisible();
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByRole('textbox', { name: 'Amount' }))
  .toBeVisible();
  await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Payment Method Neosurf'))
  .toBeVisible();
    await expect (await page.locator('iframe[title="Cashier deposit interface"]').contentFrame().getByText('Deposit Amount Deposit Amount'))
  .toBeVisible();
}
export async function goToPersonalDetails(page:Page) {
   const profileButton = page.getByRole("button", { name: "Profile menu" });

  if (await profileButton.isVisible()) {
    await profileButton.click();
  } else {
    await page.locator(".sc-377eb44-0 > div:nth-child(3)").click();
  }

  await page.getByRole("button", { name: "Withdraw" }).click();
 

     const emptyButton = page
    .getByRole("button")
    .filter({ hasText: /^$/ })
    .first();

    const depositButton = await page.getByRole('button', { name: 'Personal Details', exact: true });

 if (await emptyButton.isVisible()) {
    await emptyButton.click();
    await depositButton.click();
  } else {
    await depositButton.click();
  }
  await expect( await page.locator('div').filter({ hasText: /^Personal Details$/ })).toBeVisible();
}
export async function elementsPersonalDetails(page:Page) {

  await expect(await page.getByText('Password:')).toBeVisible();
  // TODO await expect(await page.getByText('button', { name: 'Close the popup' })).toBeVisible();
  await expect(await page.getByText('E-mail:')).toBeVisible();

  await expect(await page.getByText('Username:')).toBeVisible();
  await expect(await page.getByText('First Name:')).toBeVisible();
  await expect(await page.getByText('Last Name:')).toBeVisible();
  await expect(await page.getByText('Gender:')).toBeVisible();
  await expect(await page.getByText('Country:')).toBeVisible();
  await expect(await page.getByText('Address:')).toBeVisible();
  await expect(await page.getByText('City:')).toBeVisible();
  await expect(await page.getByText('Zip Code:')).toBeVisible();
  await expect(await page.getByText('Birth Date:')).toBeVisible();
  await expect(await page.getByText('Mobile Phone:')).toBeVisible();
  await expect(await page.getByText('Email Verification Status:')).toBeVisible();
  await expect(await page.getByText('Last Login:')).toBeVisible();
  await expect(await page.getByRole('button', { name: 'Close the popup' })).toBeVisible();
}