import { defineConfig, devices } from "@playwright/test";
import { getStorageStatePath } from "./utils/getCredentials";

// Ensure Playwright UI mode binds to IPv4 localhost with a stable port when running `npx playwright test --ui`
// Set multiple possible env var names used across Playwright versions if not already defined by user
if (!process.env.PW_TEST_UI_HOST && !process.env.PWTEST_UI_HOST && !process.env.PLAYWRIGHT_UI_HOST && !process.env.PLAYWRIGHT_HOST) {
  process.env.PW_TEST_UI_HOST = "127.0.0.1";
  process.env.PWTEST_UI_HOST = "127.0.0.1";
  process.env.PLAYWRIGHT_UI_HOST = "127.0.0.1";
  process.env.PLAYWRIGHT_HOST = "127.0.0.1";
}
if (!process.env.PW_TEST_UI_PORT && !process.env.PWTEST_UI_PORT && !process.env.PLAYWRIGHT_UI_PORT) {
  process.env.PW_TEST_UI_PORT = "9323";
  process.env.PWTEST_UI_PORT = "9323";
  process.env.PLAYWRIGHT_UI_PORT = "9323";
}

// Default basic auth credentials for non-production unless explicitly provided.
if (
  !process.env.BASIC_USER &&
  !process.env.BASIC_PASS &&
  (process.env.ENV || "development") !== "production"
) {
  process.env.BASIC_USER = "forvana-dev";
  process.env.BASIC_PASS = "devFRV2025!";
}

// Environment variable configuration for basic authentication

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["html", { outputFolder: "playwright-report" }]],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: process.env.BASE_URL || "https://ppd01-www.hopa.com/en-ca",
    ignoreHTTPSErrors: true,
    httpCredentials:
      process.env.BASIC_USER || process.env.BASIC_PASS || process.env.BASIC_AUTH_USERNAME || process.env.BASIC_AUTH_PASSWORD
        ? {
            username:
              process.env.BASIC_USER || process.env.BASIC_AUTH_USERNAME || "forvana-dev",
            password:
              process.env.BASIC_PASS || process.env.BASIC_AUTH_PASSWORD || "devFRV2025!",
          }
        : undefined,
    proxy:
      process.env.HTTPS_PROXY || process.env.HTTP_PROXY
        ? {
            server: (process.env.HTTPS_PROXY ||
              process.env.HTTP_PROXY) as string,
            username: process.env.PROXY_USER,
            password: process.env.PROXY_PASS,
          }
        : undefined,
    launchOptions: {
      args: [
        // Force Chromium to resolve localhost to IPv4 to avoid VPNs blocking IPv6 ::1
        "--host-resolver-rules=MAP localhost 127.0.0.1",
      ],
    },
    trace: "on",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: "chromium",
      dependencies: ["setup"],
      use: {
        ...devices["Desktop Chrome"],
        storageState: getStorageStatePath(
          process.env.TARGET_ENV,
          process.env.TARGET_BRAND,
          process.env.TARGET_JURISDICTION
        ),
      },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
