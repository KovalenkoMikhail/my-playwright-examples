# Playwright Test Automation Project

## Overview

Test automation project using Playwright for Hopa Casino website.

## Prerequisites

- Node.js 14 or higher
- npm

## Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create `.env` file with required credentials (see `.env.example`)
4. Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test casino.spec.ts

# Run in UI mode
npx playwright test --ui
```

## Project Structure

```
├── tests/          # Test specifications
├── pages/          # Page Object Models
├── api/            # API related tests and services
├── fixtures/       # Test fixtures
├── utils/          # Utility functions
└── config/         # Configuration files
```

## Environment Variables

Create a `.env` file with the following variables:

```
TEST_EMAIL=your_test_email
TEST_PASSWORD=your_test_password
BASE_URL=your_base_url
```
