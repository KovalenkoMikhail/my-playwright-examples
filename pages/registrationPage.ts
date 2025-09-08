import { Page, Locator, expect } from "@playwright/test";

export class RegistrationPage {
  readonly page: Page;

  // Step 1
  readonly emailInput: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly createAccountBtn: Locator;
  readonly step1CompletedTab: Locator;

  // Step 2
  readonly titleCombobox: Locator;
  readonly titleMrOption: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly dobDiv: Locator;
  readonly dobOpenLabel: Locator;
  readonly dobYearOption: Locator;
  readonly dobMonthCombobox: Locator;
  readonly dobMonthOption: Locator;
  readonly dobDayCombobox: Locator;
  readonly dobDayOption: Locator;
  readonly phoneInput: Locator;
  readonly addressCombobox: Locator;
  readonly apartmentInput: Locator;
  readonly cityInput: Locator;
  readonly zipInput: Locator;
  readonly continueBtn: Locator;
  readonly step2CompletedTab: Locator;

  // Step 3
  readonly marketingText: Locator;
  readonly checkAllCheckbox: Locator;
  readonly termsCheckbox: Locator;
  readonly termsText: Locator;

  // Tabs & Headings
  readonly step1CurrentTab: Locator;
  readonly step2Tab: Locator;
  readonly finalStepTab: Locator;
  readonly signUpHeading: Locator;
  readonly alreadyHaveAccountText: Locator;

  // Login
  readonly loginLink: Locator;
  readonly welcomeBackHeading: Locator;
  readonly loginBtn: Locator;

  // Go Back
  readonly goBackBtn: Locator;
  readonly finalStepCurrentTab: Locator;
  readonly step2CurrentTab: Locator;

  // Cancel Registration
  readonly cancelBtn: Locator;
  readonly arrowBackIcon: Locator;
  readonly waitMomentHeading: Locator;
  readonly continueRegistrationBtn: Locator;
  readonly notNowBtn: Locator;
  readonly chatDialogText: Locator;
  readonly mainNavigation: Locator;

  // Logo
  readonly hopaLogoLink: Locator;

  // Validation
  readonly emailError: Locator;
  readonly usernameError: Locator;
  readonly passError: Locator;
  readonly passUpperError: Locator;
  readonly passSpecialError: Locator;
  readonly passEqualEmailError: Locator;

  // Step 2 validation
  readonly genderError: Locator;
  readonly firstNameError: Locator;
  readonly lastNameError: Locator;
  readonly dobError: Locator;
  readonly phoneError: Locator;
  readonly cityError: Locator;
  readonly addressError: Locator;
  readonly zipError: Locator;

    // Marketing Preferences - Hopa Casino
  readonly hopaCasinoEmailCheckbox: Locator;
  readonly hopaCasinoSmsCheckbox: Locator;
  readonly hopaCasinoPhoneCheckbox: Locator;
  readonly hopaCasinoPostCheckbox: Locator;

  // Marketing Preferences - Partner Casinos
  readonly partnerCasinoEmailCheckbox: Locator;
  readonly partnerCasinoSmsCheckbox: Locator;
  readonly partnerCasinoPhoneCheckbox: Locator;
  readonly partnerCasinoPostCheckbox: Locator;

  // Marketing Preferences - Hopa Sports
  readonly hopaSportsEmailCheckbox: Locator;
  readonly hopaSportsSmsCheckbox: Locator;
  readonly hopaSportsPhoneCheckbox: Locator;
  readonly hopaSportsPostCheckbox: Locator;

  // Marketing Preferences - Partner Sports
  readonly partnerSportsEmailCheckbox: Locator;
  readonly partnerSportsSmsCheckbox: Locator;
  readonly partnerSportsPhoneCheckbox: Locator;
  readonly partnerSportsPostCheckbox: Locator;

  readonly checkBoxIsChecked: Locator;

  constructor(page: Page) {
    this.page = page;

    // Step 1
    this.emailInput = page.getByRole("textbox", { name: "Email" });
    this.usernameInput = page.getByRole("textbox", { name: "Username" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.createAccountBtn = page.getByRole("button", { name: "Create account" });
    this.step1CompletedTab = page.getByRole("tab", { name: "Step 1 completed" });

    // Step 2
    this.titleCombobox = page.getByRole("combobox", { name: "Title" });
    this.titleMrOption = page.getByRole("option", { name: "Mr." });
    this.firstNameInput = page.getByRole("textbox", { name: "First name" });
    this.lastNameInput = page.getByRole("textbox", { name: "Last name" });
    this.dobDiv = page.locator("div").filter({ hasText: /^Date of birth$/ });
    this.dobOpenLabel = this.dobDiv.getByLabel("Open");
    this.dobYearOption = page.getByRole("option", { name: "2007" });
    this.dobMonthCombobox = page.getByRole("combobox", { name: "MM" });
    this.dobMonthOption = page.getByRole("option", { name: "Jan" });
    this.dobDayCombobox = page.getByRole("combobox", { name: "DD", exact: true });
    this.dobDayOption = page.getByRole("option", { name: "1", exact: true });
    this.phoneInput = page.getByRole("textbox", { name: "Phone number" });
    this.addressCombobox = page.getByRole("combobox", { name: "Address" });
    this.apartmentInput = page.getByRole("textbox", { name: "Apartment, suite, etc. (" });
    this.cityInput = page.getByRole("textbox", { name: "City" });
    this.zipInput = page.getByRole("textbox", { name: "ZIP code" });
    this.continueBtn = page.getByRole("button", { name: "Continue" });
    this.step2CompletedTab = page.getByRole("tab", { name: "Step 2 completed" });

    // Step 3
    this.marketingText = page.getByText("Receive exclusive bonuses & promotional offersYou can change your marketing");
    this.checkAllCheckbox = page.getByRole("checkbox", { name: "Check all" });
    this.termsCheckbox = page.getByRole("checkbox", { name: "I accept the terms, funds and" });
    this.termsText = page.getByText("I accept the terms, funds and");

    // Tabs & Headings
    this.step1CurrentTab = page.getByRole("tab", { name: "Step 1 current" });
    this.step2Tab = page.getByRole("tab", { name: "Step 2" });
    this.finalStepTab = page.getByRole("tab", { name: "Final Step" });
    this.signUpHeading = page.getByRole("heading", { name: "SIGN UP" });
    this.alreadyHaveAccountText = page.getByText("Already have an account? Log");

    // Login
    this.loginLink = page.getByRole("link", { name: "Log in" });
    this.welcomeBackHeading = page.getByRole("heading", { name: "Welcome Back!" });
    this.loginBtn = page.getByRole("button", { name: "Login" });

    // Go Back
    this.goBackBtn = page.getByRole("button", { name: "Go back" });
    this.finalStepCurrentTab = page.getByRole("tab", { name: "Final Step, Current" });
    this.step2CurrentTab = page.getByRole("tab", { name: "Step 2 current" });

    // Cancel Registration
    this.cancelBtn = page.getByRole("button", { name: "Cancel" });
    this.arrowBackIcon = page.getByTestId("ArrowBackIcon");
    this.waitMomentHeading = page.getByRole("heading", { name: "WAIT A MOMENT..." });
    this.continueRegistrationBtn = page.getByRole("button", { name: "Continue registration" });
    this.notNowBtn = page.getByRole("button", { name: "Not now" });
    this.chatDialogText = page.getByText("dialog Chat with usJoin");
    this.mainNavigation = page.getByRole("navigation", { name: "Main navigation" });

    // Logo
    this.hopaLogoLink = page.getByRole("link", { name: "Hopa Logo" });

    // Validation
    this.emailError = page.locator("#email").getByText("This field is required.");
    this.usernameError = page.locator("#username").getByText("This field is required.");
    this.passError = page.getByText("At least 8 characters");
    this.passUpperError = page.getByText("At least 1 uppercase letter");
    this.passSpecialError = page.getByText("At least 1 special sign from");
    this.passEqualEmailError = page.getByText("Cannot be the same as email");

    // Step 2 validation
    this.genderError = page.locator("#gender").getByText("This field is required.");
    this.firstNameError = page.locator("#firstName").getByText("This field is required.");
    this.lastNameError = page.locator("#lastName").getByText("This field is required.");
    this.dobError = page.getByText("Please select valid date.");
    this.phoneError = page.getByText("Please enter valid phone");
    this.cityError = page.locator("#city").getByText("This field should have at");
    this.addressError = page.locator("#addressAutocomplete").getByText("This field should have at");
    this.zipError = page.getByText("ZIP code should be 4-9");

     // Marketing Preferences - Hopa Casino
    this.hopaCasinoEmailCheckbox = page.locator("[data-cy=\"RegisterPage_MarketingStep_MarketingPreferencesCheckbox_brandMarketing_email\"]");
    this.hopaCasinoSmsCheckbox = page.locator("[data-cy=\"RegisterPage_MarketingStep_MarketingPreferencesCheckbox_brandMarketing_sms\"]");
    this.hopaCasinoPhoneCheckbox = page.locator("[data-cy=\"RegisterPage_MarketingStep_MarketingPreferencesCheckbox_brandMarketing_phone\"]");
    this.hopaCasinoPostCheckbox = page.locator("[data-cy=\"RegisterPage_MarketingStep_MarketingPreferencesCheckbox_brandMarketing_post\"]");

    // Marketing Preferences - Partner Casinos
    this.partnerCasinoEmailCheckbox = page.locator("[data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_crossMarketing_email']");
    this.partnerCasinoSmsCheckbox = page.locator("[data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_crossMarketing_sms']");
    this.partnerCasinoPhoneCheckbox = page.locator("[data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_crossMarketing_phone']");
    this.partnerCasinoPostCheckbox = page.locator("[data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_crossMarketing_post']");

    // Marketing Preferences - Hopa Sports
    this.hopaSportsEmailCheckbox = page.locator("[data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_sportsBrandMarketing_email']");
    this.hopaSportsSmsCheckbox = page.locator("[data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_sportsBrandMarketing_sms']");
    this.hopaSportsPhoneCheckbox = page.locator("[data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_sportsBrandMarketing_phone']");
    this.hopaSportsPostCheckbox = page.locator("[data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_sportsBrandMarketing_post']");

    // Marketing Preferences - Partner Sports
    this.partnerSportsEmailCheckbox = page.locator("[data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_sportsCrossMarketing_email']");
    this.partnerSportsSmsCheckbox = page.locator("[data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_sportsCrossMarketing_sms']");
    this.partnerSportsPhoneCheckbox = page.locator("[data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_sportsCrossMarketing_phone']");
    this.partnerSportsPostCheckbox = page.locator("[data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_sportsCrossMarketing_post']");
    this.checkBoxIsChecked = page.locator(".Mui-checked");
  }

  async goToRegistration() {
    await this.page.getByRole("button", { name: "Join", exact: true }).click();
    await this.page.getByRole("button", { name: "Skip" }).click();
  }

  async firstRegistrationStep() {
    await this.emailInput.fill("testemail@test.test");
    await this.usernameInput.fill("WHGTestYellow");
    await this.passwordInput.fill("ThisIsPassword@");
    await this.createAccountBtn.click();
    await expect(this.step1CompletedTab).toBeVisible();
  }

  async secondRegistrationStep() {
    await this.titleCombobox.click();
    await this.titleMrOption.click();
    await this.firstNameInput.fill("testAuto");
    await this.lastNameInput.fill("WHGTestLastNane");
    await this.dobOpenLabel.click();
    await this.dobYearOption.click();
    await this.dobMonthCombobox.click();
    await this.dobMonthOption.click();
    await this.dobDayCombobox.click();
    await this.dobDayOption.click();
    await this.phoneInput.fill("70 0090 0123");
    await this.addressCombobox.fill("Sherlock Holmes Museum 221B");
    await this.apartmentInput.fill("221B Baker Street");
    await this.cityInput.fill("London");
    await this.zipInput.fill("123441244");
    await this.continueBtn.click();
    await expect(this.step2CompletedTab).toBeVisible();
  }

  async thirdRegistrationStep() {
 await this.marketingText.isVisible();
    await this.marketingText.click();
    await expect(this.page.getByText("How would you like to receive")).toBeVisible();
    await this.checkAllCheckbox.click();


    // TODO here is problem with checkboxes
    // Hopa Casino checkboxes
    await expect( this.hopaCasinoEmailCheckbox.and(this.checkBoxIsChecked)).toBeVisible();
  
    await expect(this.hopaCasinoSmsCheckbox.and(this.checkBoxIsChecked)).toBeVisible();
    await expect(this.hopaCasinoPhoneCheckbox.and(this.checkBoxIsChecked)).toBeVisible();
    await expect(this.hopaCasinoPostCheckbox.and(this.checkBoxIsChecked)).toBeVisible();

    // Partner Casinos checkboxes
    await expect(this.partnerCasinoEmailCheckbox.and(this.checkBoxIsChecked)).toBeVisible();
    await expect(this.partnerCasinoSmsCheckbox.and(this.checkBoxIsChecked)).toBeVisible();
    await expect(this.partnerCasinoPhoneCheckbox.and(this.checkBoxIsChecked)).toBeVisible();
    await expect(this.partnerCasinoPostCheckbox.and(this.checkBoxIsChecked)).toBeVisible();

    // Hopa Sports checkboxes
    await expect(this.hopaSportsEmailCheckbox.and(this.checkBoxIsChecked)).toBeVisible();
    await expect(this.hopaSportsSmsCheckbox.and(this.checkBoxIsChecked)).toBeVisible();
    await expect(this.hopaSportsPhoneCheckbox.and(this.checkBoxIsChecked)).toBeVisible();
    await expect(this.hopaSportsPostCheckbox.and(this.checkBoxIsChecked)).toBeVisible();

    // Partner Sports checkboxes
    await expect(this.partnerSportsEmailCheckbox.and(this.checkBoxIsChecked)).toBeVisible();
    await expect(this.partnerSportsSmsCheckbox.and(this.checkBoxIsChecked)).toBeVisible();
    await expect(this.partnerSportsPhoneCheckbox.and(this.checkBoxIsChecked)).toBeVisible();
    await expect(this.partnerSportsPostCheckbox.and(this.checkBoxIsChecked)).toBeVisible();


    await this.termsText.isVisible();
    await this.termsCheckbox.check();
    await this.termsCheckbox.check();
    await expect(this.termsText).toHaveValue("true");
  }

  async createAccountWithEmptyInputFirstStep() {
    await this.createAccountBtn.click();
    await expect(this.emailError).toBeVisible();
    await expect(this.usernameError).toBeVisible();
    await expect(this.passError).toBeVisible();
    await expect(this.passUpperError).toBeVisible();
    await expect(this.passSpecialError).toBeVisible();
    await expect(this.passEqualEmailError).toBeVisible();
  }

  async createAccWithoutPass() {
    await this.emailInput.fill("testemail@test.test");
    await this.usernameInput.fill("WHGTestYellow");
    await this.createAccountBtn.click();
    await expect(this.passError.getByTestId("CloseIcon")).toBeVisible();
    await expect(this.passUpperError.getByTestId("CloseIcon")).toBeVisible();
    await expect(this.passSpecialError.getByTestId("CloseIcon")).toBeVisible();
  }

  async createWithPassEqualEmail() {
    await this.emailInput.fill("testemail@test.test");
    await this.usernameInput.fill("WHGTestYellow");
    await this.passwordInput.fill("testemail@test.test");
    await this.createAccountBtn.click();
    await expect(this.passEqualEmailError.getByTestId("CloseIcon")).toBeVisible();
    await expect(this.step1CurrentTab).toBeVisible();
  }

  async showPass() {
    await this.page.getByRole("button", { name: "Show password" }).click();
    await expect(this.page.getByRole("button", { name: "Hide password" })).toBeVisible();
  }

  async elements1StepRegistration() {
    await expect(this.step1CurrentTab).toBeVisible();
    await expect(this.step2Tab).toBeVisible();
    await expect(this.finalStepTab).toBeVisible();
    await expect(this.signUpHeading).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.alreadyHaveAccountText).toBeVisible();
  }

  async goToLoginForm() {
    await this.loginLink.click();
    await expect(this.welcomeBackHeading).toBeVisible();
    await expect(this.loginBtn).toBeVisible();
  }

  async checkElements2StepRegistration() {
    await expect(this.titleCombobox).toBeVisible();
    await expect(this.firstNameInput).toBeVisible();
    await expect(this.lastNameInput).toBeVisible();
    await expect(this.page.getByRole("combobox", { name: "Date of birth" })).toBeVisible();
    await expect(this.dobMonthCombobox).toBeVisible();
    await expect(this.dobDayCombobox).toBeVisible();
    await expect(this.phoneInput).toBeVisible();
    await expect(this.page.locator("div").filter({ hasText: /^Country$/ })).toBeVisible();
    await expect(this.page.locator("div").filter({ hasText: /^Currency$/ })).toBeVisible();
    await expect(this.addressCombobox).toBeVisible();
    await expect(this.apartmentInput).toBeVisible();
    await expect(this.cityInput).toBeVisible();
    await expect(this.zipInput).toBeVisible();
    await expect(this.goBackBtn).toBeVisible();
    await expect(this.step2CurrentTab).toBeVisible();
    await expect(this.finalStepTab).toBeVisible();
    await expect(this.page.getByRole("tab", { name: "Step 1 completed" })).toBeVisible();
  }

  async createAccountWithEmptyInputSecondStep() {
    await this.continueBtn.click();
    await expect(this.genderError).toBeVisible();
    await expect(this.firstNameError).toBeVisible();
    await expect(this.lastNameError).toBeVisible();
    await expect(this.dobError).toBeVisible();
    await expect(this.phoneError).toBeVisible();
    await expect(this.cityError).toBeVisible();
    await expect(this.addressError).toBeVisible();
    await expect(this.zipError).toBeVisible();
  }

  async goBackButton() {
    await expect(this.finalStepCurrentTab).toBeVisible();
    await this.goBackBtn.click();
    await expect(this.step2CurrentTab).toBeVisible();
    await this.goBackBtn.click();
    await expect(this.step1CurrentTab).toBeVisible();
  }

  async cancelRegistrationModal() {
    if (await this.cancelBtn.isVisible()) {
      await this.cancelBtn.click();
    } else {
      await this.arrowBackIcon.click();
    }
    await expect(this.waitMomentHeading).toBeVisible();
    await expect(this.continueRegistrationBtn).toBeVisible();
    await expect(this.notNowBtn).toBeVisible();
  }

  async cancelRegistration() {
    if (await this.cancelBtn.isVisible()) {
      await this.cancelBtn.click();
    } else {
      await this.arrowBackIcon.click();
    }
    await this.chatDialogText.isVisible();
    await this.notNowBtn.click();
    await expect(this.chatDialogText).toBeHidden();
    await expect(this.mainNavigation).toBeVisible();
  }

  async clickToLogo() {
    await this.hopaLogoLink.click();
    await expect(this.mainNavigation).toBeVisible();
  }
}
