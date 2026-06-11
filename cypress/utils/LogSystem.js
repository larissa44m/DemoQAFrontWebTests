class LogSystem {
  constructor() {
    this.logs = [];
    this.testPassed = true;
    this.startTime = null;
  }

  start() {
    this.startTime = new Date();
  }

  log(text) {
    this.logs.push(text);
  }

  markFailed() {
    this.testPassed = false;
  }

  getDurationMs() {
    if (!this.startTime) return 0;
    return new Date() - this.startTime;
  }

  generateHtml(screenshotBase64, testName) {
    const durationMs = this.getDurationMs();
    const testTime = this.formatDuration(durationMs);

    const header = '<html><head><meta charset="utf-8"><title>Relatório de Teste</title></head><body style="font-family: Verdana; font-size: 12px;">';
    const footer = '</body></html>';

    const statusHtml = this.testPassed
      ? `<p style="color:green;"><b>FIM DO TESTE – OK!</b></p>`
      : `<p style="color:red;"><b>FIM DO TESTE – NOK!</b></p>`;

    const logsHtml = this.logs.map(line => `<p>${line}</p>`).join('\n');

    const screenshotHtml = screenshotBase64
      ? `<img src="data:image/png;base64,${screenshotBase64}" style="max-width: 100%; height: auto;" />`
      : '';

    return `${header}
      <h1>Relatório do Teste: ${testName}</h1>
      ${logsHtml}
      <hr/>
      <p>Tempo de execução: ${testTime}</p>
      ${statusHtml}
      ${screenshotHtml}
      ${footer}`;
  }

  formatDuration(ms) {
    const seconds = Math.floor(ms / 1000);
    if (seconds < 60) return `${seconds} segundos`;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} min ${remainingSeconds} s`;
  }
}

module.exports = LogSystem;