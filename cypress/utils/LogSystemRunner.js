class LogSystemRunner {
  constructor(LogSystemClass) {
    this.LogSystemClass = LogSystemClass;
    this.logSystem = null;
  }

  setupHooks() {
    beforeEach(() => {
      this.logSystem = new this.LogSystemClass();
      this.logSystem.start();
    });

    afterEach(function () {
      const testName = this.currentTest.title;
      const testState = this.currentTest.state;

      if (!this.logSystem) {
    
        console.warn(' Nenhum logSystem encontrado no this!');
        return;
      }

      if (testState !== 'passed') {
        this.logSystem.markFailed();

      
        cy.screenshot(testName, { capture: 'runner' }).then(() => {
          const screenshotPath = `cypress/screenshots/${Cypress.spec.name}/${testName}.png`;

          cy.readFile(screenshotPath, 'base64', { failOnNonFound: false }).then((imgBase64) => {
            const html = this.logSystem.generateHtml(imgBase64 || '', testName);
            cy.writeFile(`cypress/logs/${testName}.html`, html);
          });
        });
      } else {
        
        const html = this.logSystem.generateHtml('', testName);
        cy.writeFile(`cypress/logs/${testName}.html`, html);
      }
    });
  }

  getLogSystem() {
    return this.logSystem;
  }
}

export default LogSystemRunner;
