# Jest-Vitest Test Suite

A minimal test suite setup using [Vitest](https://vitest.dev/) for running unit and integration tests.

---

## 🔧 Setup

```bash
yarn install // installs all dependencies listed in package.json
yarn test // runs all tests using Vitest
vitest // alternative to run tests in watch mode directly via CLI

"scripts": {
  "test": "vitest"
// alias to run vitest via `yarn test`
}"

"scripts": {
    "test": "vitest --reporter verbose"  
    //show details =>  should return the correct sum if an array of number is provided 
  },

vitest --ui // opens the Vitest UI in browser (if installed and configured)

vitest run // runs all tests once (good for CI/CD pipelines)

vitest watch // watches files for changes and reruns affected tests


```

