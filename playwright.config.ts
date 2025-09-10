import { defineConfig, devices } from "@playwright/test";
import { resolveBasicAuth } from "./utils/constants";

// Minimal IPv4 enforcement for VPNs blocking ::1

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
  testMatch: ["**/*.spec.ts"],
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
    httpCredentials: resolveBasicAuth(),
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
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },

   
  ],

});
