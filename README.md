# Soter Mobile App – Diagnostics Screen

## Overview

This repository contains the **Soter** mobile application built with React Native.  A new **Diagnostics Screen** has been added to provide developers and support staff with quick, non‑sensitive information about the app’s runtime environment.

> **Key purpose** – expose app version, backend API reachability, network state, and contract ID without leaking secrets, and allow copying this information to the clipboard for debugging.

---

## Features

- **App version** – displayed using `expo-constants`.
- **Environment badge** – shows the current environment (e.g., `dev`, `staging`, `production`).
- **API Reachability** – green/red indicator based on a health‑check request.
- **Network status** – shows connectivity, type (Wi‑Fi, cellular) and internet reachability using `@react-native-community/netinfo`.
- **Blockchain diagnostics** – displays the configured network and Soroban contract ID.
- **Configuration validation** – warns when the app configuration is invalid.
- **Copy Diagnostics** – a button that assembles the above data into a safe, non‑secret string and copies it to the clipboard.
- **Responsive UI** – styled with the app’s design system, accessible via proper accessibility labels.

---

## Installation

```bash
# Clone the repo
git clone https://github.com/your-org/soter.git
cd soter/app/mobile

# Install dependencies (pnpm wrapper is used)
npx -y pnpm install
```

> **Note** – The project uses `pnpm`.  If you do not have it installed globally, the wrapper `npx -y pnpm` will download it automatically.

---

## Running the App

```bash
# Start the Metro bundler
npx -y pnpm start

# For iOS (requires Xcode) or Android (requires Android Studio)
npx -y pnpm run ios   # or
npx -y pnpm run android
```

---

## Testing

The diagnostics screen is fully covered by unit tests located in `src/__tests__/HealthScreen.test.tsx`.

```bash
# Run the test suite (all tests)
npx -y pnpm test -- --no-coverage
```

All **12 tests pass**:
```
Test Suites: 1 passed, 1 total
Tests:       12 passed, 12 total
```

If you need to debug open handles after the suite finishes, you can run:
```bash
npx -y pnpm test -- --detectOpenHandles
```

---

## Branch & Commit

The diagnostics feature lives on the branch:
```
feature/issue-452-diagnostics
```
Commit: `bf40ff6` – implements UI, logic, accessibility, and tests.

---

## Contributing

1. **Create a feature branch** from `main`.
2. **Run the test suite** locally before pushing.
3. **Submit a Pull Request** targeting `main`.
4. Ensure no secrets (API keys, project IDs) are included in the diagnostics string.

---

## License

MIT License – see the `LICENSE` file in the repository.
