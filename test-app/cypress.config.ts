import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        chromeWebSecurity: false,
        fixturesFolder: false,
        specPattern: 'specs/*.cy.ts',
        screenshotsFolder: 'screenshots',
        supportFile: 'support/e2e.ts',
        video: false,
        viewportHeight: 1200,
        viewportWidth: 1900,
    },
});
