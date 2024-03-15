import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run showcase:serve',
        production: 'nx run showcase:preview',
      },
      ciWebServerCommand: 'nx run showcase:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
