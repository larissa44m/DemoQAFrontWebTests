import LogSystem from '../utils/LogSystem';
import LogSystemRunner from '../utils/LogSystemRunner';

const runner = new LogSystemRunner(LogSystem);

Cypress.Commands.add('setupEvidence', () => {
cy.wrap(null).then(function () {
runner.setupHooks();
this.logSystem = runner.getLogSystem();


if (this.logSystem) {
  this.logSystem.start();
}


});
});

afterEach(function () {

if (!this.logSystem) {
return;
}

const testName = this.currentTest.title;
const testState = this.currentTest.state;

if (testState !== 'passed') {


this.logSystem.markFailed();

cy.screenshot(testName, {
  capture: 'runner'
}).then(() => {

  const html =
    this.logSystem.generateHtml(
      '',
      testName
    );

  cy.writeFile(
    `cypress/logs/${testName}.html`,
    html
  );

});


} else {


const html =
  this.logSystem.generateHtml(
    '',
    testName
  );

cy.writeFile(
  `cypress/logs/${testName}.html`,
  html
);


}

});
