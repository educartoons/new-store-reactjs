## Installing Cypress

Install cypress

```
npm install cypress --save-dev
```

Run the following command to initilize Cypress

```
npx cypress open
```

In cypress.config.js write the next code

```js
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});
```

and finally create in the root of your project the next folder

```
mkdir cypress
cd cypress
mkdir e2e
```
