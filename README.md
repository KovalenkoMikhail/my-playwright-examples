

# my-playwright-examples

End-to-end and API test automation for Casino using [Playwright](https://playwright.dev/) and [TypeScript](https://www.typescriptlang.org/).

**Tech stack:** Playwright v1.55.1 · TypeScript v5.2+ (TS 22+) 

## 🚀 Quick Start

```powershell
git clone https://github.com/KovalenkoMikhail/my-playwright-examples.git
cd my-playwright-examples
npm install
npx playwright install
npx playwright test
```

## 📁 Structure

```
api/            # API services & login helpers
config/         # Config & environment files
e2e/            # Example E2E specs
modals/         # UI modals/components
pages/          # Page Object Models (POM)
proxy/          # Proxy server scripts
tests/          # Main test suite (UI, API, connectivity)
tests-examples/ # Demo/example specs
utils/          # Utility functions
```

## 🧩 Key Concepts

- **Page Object Model (POM):** Encapsulates page logic for maintainable tests (`pages/`).
- **Fixtures:** Shared setup/teardown for reusable test contexts (`tests/fixtures/`).
- **API Login:** Fast authentication via API (`modals/components/apiLogin.ts`, `tests/apiLogin.spec.ts`).

## ⚙️ Environment

Create a `.env` file (see `.env.example`):

```
TEST_EMAIL=your_test_email
TEST_PASSWORD=your_test_password
BASE_URL=your_base_url
```

## 🏃 Running Tests

Run all tests:
```powershell
npx playwright test
```
Run a specific test:
```powershell
npx playwright test tests/login.spec.ts
```
Run in UI mode:
```powershell
npx playwright test --ui
```

## 🛠️ Configuration

- `playwright.config.ts`: Playwright settings
- `tsconfig.json`: TypeScript config
- `config/environment.ts`: Environment variables

## 📄 License

MIT License
