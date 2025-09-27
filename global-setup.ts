import { chromium, FullConfig } from "@playwright/test";
import { getStorageStatePath, getLoginData } from "./utils/getCredentials";
import { TARGET_ENV, TARGET_BRAND, TARGET_JURISDICTION, resolveBasicAuth } from "./utils/constants";

// Create storage state by navigating with httpCredentials and landing on the closed site
export default async function globalSetup(config: FullConfig) {
	const storagePath = getStorageStatePath(TARGET_ENV, TARGET_BRAND, TARGET_JURISDICTION);
	const baseURL = process.env.BASE_URL || "https://www.hopa.com/en-ca";

	const context = await chromium.launchPersistentContext("", {
		headless: true,
		// Ensure IPv4 path to avoid ::1 issues
		args: ["--host-resolver-rules=MAP localhost 127.0.0.1"],
		httpCredentials: resolveBasicAuth(),
	});
	const page = await context.newPage();
	await page.goto(baseURL, { waitUntil: "domcontentloaded" });
	await page.context().storageState({ path: storagePath });
	await context.close();
}

