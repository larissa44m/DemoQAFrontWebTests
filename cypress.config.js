const { defineConfig } = require('cypress');
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        waitForFile(filePath) {
          return new Promise((resolve, reject) => {
            const start = Date.now();
            const check = () => {
              if (fs.existsSync(filePath)) {
                resolve(true);
              } else if (Date.now() - start > 15000) {
                reject(new Error(`Arquivo ${filePath} não apareceu a tempo.`));
              } else {
                setTimeout(check, 200);
              }
            };
            check();
          });
        },
      });
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    //baseUrl: 'http://localhost:3000', // ajuste se quiser
  },
});