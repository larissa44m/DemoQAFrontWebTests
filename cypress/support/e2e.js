import LogSystem from '../utils/LogSystem';
import './evidence';
import '@4tw/cypress-drag-drop';

beforeEach(function () {
  this.logSystem = new LogSystem();
  this.logSystem.start();
});

afterEach(function () {
  const testName = this.currentTest.title;
  const testState = this.currentTest.state;

  if (testState !== 'passed') {
    this.logSystem.markFailed();

  
    cy.screenshot(testName, { capture: 'runner' });


    const html = this.logSystem.generateHtml('', testName);
    cy.writeFile(`cypress/logs/${testName}.html`, html);

  } else {
    
    const html = this.logSystem.generateHtml('', testName);
    cy.writeFile(`cypress/logs/${testName}.html`, html);
  }
});
