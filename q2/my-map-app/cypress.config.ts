import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  env: {
    VITE_API_PATH: process.env.VITE_API_PATH,
    VITE_API_KEY: process.env.VITE_API_KEY,
    VITE_MAP_KEY: process.env.VITE_MAP_KEY,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
