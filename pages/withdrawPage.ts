import { Page, Locator, expect } from "@playwright/test";

export class WithdrawPage {
  readonly page: Page;

  // Main buttons
  readonly personalDetailsButton: Locator;
  readonly profileMenuButton: Locator;
  readonly withdrawButton: Locator;
  readonly depositButton: Locator;
  readonly emptyButton: Locator;

  // Change password
  readonly changeButton: Locator;
  readonly currentPasswordInput: Locator;
  readonly newPasswordInput: Locator;
  readonly changePasswordButton: Locator;
  readonly successLabel: Locator;
  readonly confirmButton: Locator;

  // Password show/hide
  readonly oldPasswordShowButton: Locator;
  readonly newPasswordShowButton: Locator;

  // Change password modal
  readonly closePopupButton: Locator;

  // Deposit modal
  readonly secureDepositHeading: Locator;
  readonly cashierIframe: import('@playwright/test').FrameLocator;

  // Payment methods (inside iframe)
  readonly interacPaymentButton: Locator;
  readonly visaPaymentButton: Locator;
  readonly paysafecardPaymentButton: Locator;
  readonly cashToCodeEVoucherPaymentButton: Locator;
  readonly jetonCashPaymentButton: Locator;
  readonly luxonPayPaymentButton: Locator;
  readonly mastercardPaymentButton: Locator;
  readonly miFinityPaymentButton: Locator;
  readonly muchBetterPaymentButton: Locator;
  readonly neosurfPaymentButton: Locator;

  // Deposit form (inside iframe)
  readonly depositAmountHeading: Locator;
  readonly amountLabel: Locator;
  readonly amountTextbox: Locator;
  readonly depositAmountText: Locator;
  readonly paymentMethodText: (method: string) => Locator;

  // Personal details
  readonly personalDetailsHeading: Locator;

  // Personal details elements
  readonly passwordText: Locator;
  readonly emailText: Locator;
  readonly usernameText: Locator;
  readonly firstNameText: Locator;
  readonly lastNameText: Locator;
  readonly genderText: Locator;
  readonly countryText: Locator;
  readonly addressText: Locator;
  readonly cityText: Locator;
  readonly zipCodeText: Locator;
  readonly birthDateText: Locator;
  readonly mobilePhoneText: Locator;
  readonly emailVerificationStatusText: Locator;
  readonly lastLoginText: Locator;

  constructor(page: Page) {
    this.page = page;

    // Main buttons
    this.personalDetailsButton = page.getByRole("button", { name: "Personal Details" });
    this.profileMenuButton = page.getByRole("button", { name: "Profile menu" });
    this.withdrawButton = page.getByRole("button", { name: "Withdraw" });
    this.depositButton = page.getByRole("button", { name: "Deposit", exact: true });
    this.emptyButton = page.getByRole("button").filter({ hasText: /^$/ }).first();

    // Change password
    this.changeButton = page.getByRole("button", { name: "Change" });
    this.currentPasswordInput = page.getByPlaceholder("Your current password");
    this.newPasswordInput = page.getByPlaceholder("Your new password");
    this.changePasswordButton = page.getByRole("button", { name: "Change password" });
    this.successLabel = page.getByLabel("Success").getByText("Success", { exact: true });
    this.confirmButton = page.getByRole("button", { name: "Confirm" });

    // Password show/hide
    this.oldPasswordShowButton = page.locator('[data-cy="ChangePasswordDialog_OldPasswordInputShowButton"]');
    this.newPasswordShowButton = page.locator('[data-cy="ChangePasswordDialog_NewPasswordInputShowButton"]');

    // Change password modal
    this.closePopupButton = page.getByRole("button", { name: "Close the popup" });

    // Deposit modal
    this.secureDepositHeading = page.getByRole('heading', { name: 'Secure deposit' });
    this.cashierIframe = page.frameLocator('iframe[title="Cashier deposit interface"]');

    // Payment methods (inside iframe)
    this.interacPaymentButton = this.cashierIframe.getByText('Interac ®');
    this.visaPaymentButton = this.cashierIframe.getByText('Visa').first();
    this.paysafecardPaymentButton = this.cashierIframe.getByText('Paysafecard');
    this.cashToCodeEVoucherPaymentButton = this.cashierIframe.getByText('CashToCode EVoucher');
    this.jetonCashPaymentButton = this.cashierIframe.getByText('JetonCash');
    this.luxonPayPaymentButton = this.cashierIframe.getByText('LuxonPay');
    this.mastercardPaymentButton = this.cashierIframe.getByText('Mastercard').first();
    this.miFinityPaymentButton = this.cashierIframe.getByText('MiFinity');
    this.muchBetterPaymentButton = this.cashierIframe.getByText('MuchBetter');
    this.neosurfPaymentButton = this.cashierIframe.getByText('Neosurf');

    // Deposit form (inside iframe)
    this.depositAmountHeading = this.cashierIframe.getByRole('heading', { name: 'Deposit Amount' });
    this.amountLabel = this.cashierIframe.getByText('Amount', { exact: true });
    this.amountTextbox = this.cashierIframe.getByRole('textbox', { name: 'Amount' });
    this.depositAmountText = this.cashierIframe.getByText('Deposit Amount Deposit Amount');
    this.paymentMethodText = (method: string) => this.cashierIframe.getByText(`Payment Method ${method}`);

    // Personal details
    this.personalDetailsHeading = page.locator('div').filter({ hasText: /^Personal Details$/ });

    // Personal details elements
    this.passwordText = page.getByText('Password:');
    this.emailText = page.getByText('E-mail:');
    this.usernameText = page.getByText('Username:');
    this.firstNameText = page.getByText('First Name:');
    this.lastNameText = page.getByText('Last Name:');
    this.genderText = page.getByText('Gender:');
    this.countryText = page.getByText('Country:');
    this.addressText = page.getByText('Address:');
    this.cityText = page.getByText('City:');
    this.zipCodeText = page.getByText('Zip Code:');
    this.birthDateText = page.getByText('Birth Date:');
    this.mobilePhoneText = page.getByText('Mobile Phone:');
    this.emailVerificationStatusText = page.getByText('Email Verification Status:');
    this.lastLoginText = page.getByText('Last Login:');
  }

  async changePassword() {
   // TO DO
    const oldPassword = "tiliTILI123$";
    const newPassword = "tiliTILI123$Test";

    if (await this.emptyButton.isVisible()) {
      await this.emptyButton.click();
      await this.personalDetailsButton.click();
    } else {
      await this.personalDetailsButton.click();
    }
    await this.changeButton.click();
    await this.currentPasswordInput.fill(oldPassword);
    await this.newPasswordInput.fill(newPassword);
    await this.changePasswordButton.click();
    await expect(this.successLabel).toBeVisible();
    await this.confirmButton.click();
    await expect(this.successLabel).toBeHidden();

    await this.changeButton.click();
    await this.currentPasswordInput.fill(newPassword);
    await this.newPasswordInput.fill(oldPassword);
    await this.changePasswordButton.click();
    await expect(this.successLabel).toBeVisible();
    await this.confirmButton.click();
    await expect(this.successLabel).toBeHidden();
  }

  async checkHideButton() {
    await this.changeButton.click();
    await this.oldPasswordShowButton.click();
    await expect(this.oldPasswordShowButton).toHaveAttribute("aria-pressed", "true");
    await this.newPasswordShowButton.click();
    await expect(this.newPasswordShowButton).toHaveAttribute("aria-pressed", "true");
  }

  async openModalChangePassword() {
    await this.changeButton.click();
    await expect(this.changePasswordButton).toBeVisible();
  }

  async closeModalChangePassword() {
    await this.closePopupButton.click();
    await expect(this.changePasswordButton).toBeHidden();
  }

  async goToDeposit() {
    if (await this.profileMenuButton.isVisible()) {
      await this.profileMenuButton.click();
    } else {
      await this.page.locator(".sc-377eb44-0 > div:nth-child(3)").click();
    }
    await this.withdrawButton.click();
    if (await this.emptyButton.isVisible()) {
      await this.emptyButton.click();
      await this.depositButton.click();
    } else {
      await this.depositButton.click();
    }
    await expect(this.secureDepositHeading).toBeVisible();
  }

  async interacPayment() {
    await this.interacPaymentButton.click();
    await expect(this.depositAmountHeading).toBeVisible();
    await expect(this.amountLabel).toBeVisible();
    await expect(this.amountTextbox).toBeVisible();
    await expect(this.depositAmountText).toBeVisible();
    await expect(this.paymentMethodText('Interac ®')).toBeVisible();
  }

  async changePaymentMethod() {
    await this.cashierIframe.getByText('Change Payment Method').click();
    await expect(this.secureDepositHeading).toBeVisible();
  }

  async visaPayment() {
    await this.visaPaymentButton.click();
    await expect(this.amountLabel).toBeVisible();
    await expect(this.amountTextbox).toBeVisible();
    await expect(this.paymentMethodText('Visa')).toBeVisible();
    await expect(this.depositAmountText).toBeVisible();
  }

  async paysafecardPayment() {
    await this.paysafecardPaymentButton.click();
    await expect(this.amountLabel).toBeVisible();
    await expect(this.amountTextbox).toBeVisible();
    await expect(this.paymentMethodText('Paysafecard')).toBeVisible();
    await expect(this.depositAmountText).toBeVisible();
  }

  async cashToCodeEVoucherPayment() {
    await this.cashToCodeEVoucherPaymentButton.click();
    await expect(this.amountLabel).toBeVisible();
    await expect(this.amountTextbox).toBeVisible();
    await expect(this.paymentMethodText('CashToCode EVoucher')).toBeVisible();
    await expect(this.depositAmountText).toBeVisible();
  }

  async jetonCashPayment() {
    await this.jetonCashPaymentButton.click();
    await expect(this.amountLabel).toBeVisible();
    await expect(this.amountTextbox).toBeVisible();
    await expect(this.paymentMethodText('JetonCash')).toBeVisible();
    await expect(this.depositAmountText).toBeVisible();
  }

  async luxonPayPayment() {
    await this.luxonPayPaymentButton.click();
    await expect(this.amountLabel).toBeVisible();
    await expect(this.amountTextbox).toBeVisible();
    await expect(this.paymentMethodText('LuxonPay')).toBeVisible();
    await expect(this.depositAmountText).toBeVisible();
  }

  async mastercardPayment() {
    await this.mastercardPaymentButton.click();
    await expect(this.amountLabel).toBeVisible();
    await expect(this.amountTextbox).toBeVisible();
    await expect(this.paymentMethodText('Mastercard')).toBeVisible();
    await expect(this.depositAmountText).toBeVisible();
  }

  async miFinityPayment() {
    await this.miFinityPaymentButton.click();
    await expect(this.amountLabel).toBeVisible();
    await expect(this.amountTextbox).toBeVisible();
    await expect(this.paymentMethodText('MiFinity')).toBeVisible();
    await expect(this.depositAmountText).toBeVisible();
  }

  async muchBetterPayment() {
    await this.muchBetterPaymentButton.click();
    await expect(this.amountLabel).toBeVisible();
    await expect(this.amountTextbox).toBeVisible();
    await expect(this.paymentMethodText('MuchBetter')).toBeVisible();
    await expect(this.depositAmountText).toBeVisible();
  }

  async neosurfPayment() {
    await this.neosurfPaymentButton.click();
    await expect(this.amountLabel).toBeVisible();
    await expect(this.amountTextbox).toBeVisible();
    await expect(this.paymentMethodText('Neosurf')).toBeVisible();
    await expect(this.depositAmountText).toBeVisible();
  }

  async goToPersonalDetails() {
    if (await this.profileMenuButton.isVisible()) {
      await this.profileMenuButton.click();
    } else {
      await this.page.locator(".sc-377eb44-0 > div:nth-child(3)").click();
    }
    await this.withdrawButton.click();
    if (await this.emptyButton.isVisible()) {
      await this.emptyButton.click();
      await this.personalDetailsButton.click();
    } else {
      await this.personalDetailsButton.click();
    }
    await expect(this.personalDetailsHeading).toBeVisible();
  }

  async elementsPersonalDetails() {
    await expect(this.passwordText).toBeVisible();
    await expect(this.emailText).toBeVisible();
    await expect(this.usernameText).toBeVisible();
    await expect(this.firstNameText).toBeVisible();
    await expect(this.lastNameText).toBeVisible();
    await expect(this.genderText).toBeVisible();
    await expect(this.countryText).toBeVisible();
    await expect(this.addressText).toBeVisible();
    await expect(this.cityText).toBeVisible();
    await expect(this.zipCodeText).toBeVisible();
    await expect(this.birthDateText).toBeVisible();
    await expect(this.mobilePhoneText).toBeVisible();
    await expect(this.emailVerificationStatusText).toBeVisible();
    await expect(this.lastLoginText).toBeVisible();
    await expect(this.closePopupButton).toBeVisible();
  }
}