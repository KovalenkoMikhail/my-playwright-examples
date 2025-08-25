// utils/getCredentials.ts

export type Credentials = { email: string; password: string };

export function getLoginData(): Credentials {
	// Prefer explicit credentials set for envs (e.g., BASIC_USER/BASIC_PASS)
	const basicUser = process.env.BASIC_USER || process.env.BASIC_AUTH_USERNAME;
	const basicPass = process.env.BASIC_PASS || process.env.BASIC_AUTH_PASSWORD;
	if (basicUser && basicPass) {
		return { email: basicUser, password: basicPass };
	}

	// Fallback brand/jurisdiction-based examples
	const brand = (process.env.TARGET_BRAND || "hopa").toLowerCase();
	const jurisdiction = (process.env.TARGET_JURISDICTION || "mga").toLowerCase();
	if (brand === "hopa") {
		switch (jurisdiction) {
			case "ukgc":
				return { email: "preprodtesthopa47@proton.me", password: "tiliTILI123$" };
			case "mga":
				return { email: "preprodtesthopa47@proton.me", password: "tiliTILI123$" };
		}
	}

	// Last resort: dev defaults (non-production only)
	if ((process.env.ENV || "development") !== "production") {
		return { email: "forvana-dev", password: "devFRV2025!" };
	}

	throw new Error("No credentials could be resolved for the current environment");
}

export function getStorageStatePath(env?: string, brand?: string, jurisdiction?: string): string {
	const e = (env || process.env.TARGET_ENV || "ppd01").toLowerCase();
	const b = (brand || process.env.TARGET_BRAND || "hopa").toLowerCase();
	const j = (jurisdiction || process.env.TARGET_JURISDICTION || "mga").toLowerCase();
	return `test-results/storage-state-${e}-${b}-${j}.json`;
}
