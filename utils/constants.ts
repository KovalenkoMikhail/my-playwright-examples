export const TARGET_BRAND = (process.env.TARGET_BRAND || "hopa").toLowerCase();
export const TARGET_JURISDICTION = (process.env.TARGET_JURISDICTION || "mga").toLowerCase();

export const IS_PRODUCTION = (process.env.ENV || "production");

export function resolveBasicAuth() {
	const username = process.env.BASIC_USER || process.env.BASIC_AUTH_USERNAME;
	const password = process.env.BASIC_PASS || process.env.BASIC_AUTH_PASSWORD;
	if (username && password) return { username, password };
	if (!IS_PRODUCTION) {
		return { username: "test@test", password: "ThisTestPassword1!" };
	}
	return undefined;
}

