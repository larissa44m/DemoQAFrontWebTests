class dSL {

// DSL para gerar massa de testes para os testes de automação, gerando nomes, ceps, cpfs, cnpjs, etc;

  constructor() {
    this.logSystem = null;
  }

  setLogSystem(logSystem) {
    this.logSystem = logSystem;
  }

  elements = {
    loginBtn: () => cy.get("#signin"),
    logOffBtn: () => cy.get("#logout")
  }

  clickOnSignin() {
    this.elements.loginBtn().click()
  }

  runWithLogging(commandDescription, commandFunc) {

    cy.log(`Iniciando: ${commandDescription}`);

    cy.once('fail', (error) => {
      this.logSystem.markFailed();
      this.logSystem.log(`❌ Erro no passo: ${commandDescription}: ${error.message}`);
      cy.screenshot(`Erro_${commandDescription.replace(/\s+/g, '_')}`);
      throw error;
    });

    return commandFunc().then(() => {
      this.logSystem.log(`✅ Sucesso no passo: ${commandDescription}`);
    });
  }

  geraStringPorTamanho(times, value) {
    return value.repeat(times);
  }

  geraStringAlfanumericoAleatorio(tamanho) {

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let result = '';

    for (let i = 0; i < tamanho; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
  }

  geraStringNumericaAleatoria(tamanho) {

    const chars = "123456789";

    let result = '';

    for (let i = 0; i < tamanho; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
  }

  geraNomeAleatorio() {

    const nomes = ['Ana', 'Carlos', 'Beatriz'];
    const sobrenomes = ['Silva', 'Oliveira', 'Souza'];

    const nome = nomes[Math.floor(Math.random() * nomes.length)];

    const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];

    return `${nome} ${sobrenome}`;
  }

  geraEmailAleatorio() {

    const nomes = ['Ana', 'Carlos', 'Beatriz'];
    const sobrenomes = ['Silva', 'Oliveira', 'Souza'];
    const dominios = ['@gmail.com', '@hotmail.com', '@yahoo.com'];

    const nome = nomes[Math.floor(Math.random() * nomes.length)];

    const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];

    const num = Math.floor(Math.random() * 9999) + 1;

    return `${nome}${sobrenome}${num}${dominios[Math.floor(Math.random() * dominios.length)]}`.toLowerCase();
  }

  geraDataNascimento() {

    const dia = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');

    const mes = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');

    const ano = Math.floor(Math.random() * (2000 - 1930 + 1)) + 1930;

    return `${dia}${mes}${ano}`;
  }

  geraTelefoneFixo() {

    let s = '';

    for (let i = 0; i < 10; i++) {
      s += Math.floor(Math.random() * 10);
    }

    return s;
  }

  geraCelular() {

    let s = '';

    for (let i = 0; i < 11; i++) {
      s += Math.floor(Math.random() * 10);
    }

    return s;
  }

  geraCEP() {

    const ceps = ['01001000', '20040002', '30120010'];

    return ceps[Math.floor(Math.random() * ceps.length)];
  }

  geraCPF() {

    let cpf = '';

    for (let i = 0; i < 9; i++) {
      cpf += Math.floor(Math.random() * 10);
    }

    const calcDigito = (cpf, fator) => {

      let soma = 0;

      for (let i = 0; i < cpf.length; i++) {
        soma += parseInt(cpf.charAt(i)) * (fator - i);
      }

      let resto = soma % 11;

      return resto < 2 ? 0 : 11 - resto;
    };

    cpf += calcDigito(cpf, 10);

    cpf += calcDigito(cpf, 11);

    return cpf;
  }

  geraCNPJ() {

    const peso1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const peso2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    let cnpj = '';

    for (let i = 0; i < 8; i++) {
      cnpj += Math.floor(Math.random() * 10);
    }

    cnpj += '0001';

    const calcDigito = (cnpj, peso) => {

      let soma = 0;

      for (let i = 0; i < peso.length; i++) {
        soma += parseInt(cnpj.charAt(i)) * peso[i];
      }

      let resto = soma % 11;

      return resto < 2 ? 0 : 11 - resto;
    };

    cnpj += calcDigito(cnpj, peso1);

    cnpj += calcDigito(cnpj, peso2);

    return cnpj;
  }

  // ======= 🔹

  wait(ms) {
    cy.wait(ms);
  }

  clear(elementXpath) {
    cy.xpath(elementXpath).clear();
  }

  clickOut() {
    cy.get('body').click();
    cy.wait(1000);
  }

  changeTab(tabIndex) {
    cy.log('Trocar aba');
  }

  ClicaElemento(xpath, description = null, timer = 1000) {

    const stepDescription = description
      ? `Clicou no elemento: ${description}`
      : `Clicou no elemento: ${xpath}`;

    return this.runWithLogging(
      stepDescription,
      () => cy.xpath(xpath).click({ force: true }).wait(timer)
    );
  }

  SelecionaOpcao(xpath, valor, description = null, timer = 1000) {

    const stepDescription = description
      ? `Selecionou '${valor}' em: ${description}`
      : `Selecionou '${valor}' em: ${xpath}`;
  
    return this.runWithLogging(
      stepDescription,
      () => cy.xpath(xpath)
        .select(valor.toString())
        .wait(timer)
    );
  }

  DragAndDrop(origem, destino, description = null) {

    return this.runWithLogging(
      `Drag And Drop${description ? ` - ${description}` : ''}`,
      () => {
  
        return cy.xpath(origem)
          .drag(destino)
  
      }
    )
  
  }

  EsperaElemento(xpath, seconds = 120) {

    cy.xpath(xpath, { timeout: seconds * 1000 }).should('exist');

    cy.wait(1000);
  }

  AguardaLoading() {

    cy.xpath("//mat-spinner[@role='progressbar']", { timeout: 200000 }).should('not.exist');
  }

  EscreveTexto(xpath, texto, description = null, timer = 1000) {

    const stepDescription = description
      ? `Escreveu texto: ${description}`
      : `Escreveu texto: ${xpath}`;

    return this.runWithLogging(
      stepDescription,
      () => cy.xpath(xpath).type(texto).wait(timer)
    );
  }

  ValidaTexto(xpath, expected, description = null) {

    const stepDescription = description
      ? `Validou texto: ${description}`
      : `Validou texto: ${xpath}`;
  
    return this.runWithLogging(
      stepDescription,
      () => cy.xpath(xpath).should('contain.text', expected)
    );
  
  }

  elementExists(xpath) {
    return cy.xpath(xpath).should('exist');
  }

  elementNotExists(xpath, description = null) {

    cy.xpath(xpath).should('not.exist');

    if (description) cy.log(`Elemento ${description} não está presente.`);
  }

  ValidaProgressBarMenorQue(xpath, maxValue = 25, description = null) {

    const stepDescription = description
      ? `Validou progress bar < ${maxValue}% - ${description}`
      : `Validou progress bar < ${maxValue}% - ${xpath}`
  
    return this.runWithLogging(
      stepDescription,
      () => {
        return cy.xpath(xpath).then(($el) => {
  
          if (!$el.length) {
            throw new Error(
              `Elemento ${description || xpath} não encontrado`
            )
          }
  
          const text = $el.text()
          const value = parseFloat(text.replace('%', '').trim())
  
          expect(value).to.be.a('number')
          expect(value).to.be.lessThan(maxValue)
        })
      }
    )
  }

  FluxoProgressBarComStop(xpathProgress, xpathStart) {

    return this.runWithLogging(
      "Fluxo progress bar Iniciar - Esperar chegar 100% - Clicar Reset",
      () => {
  
        this.ClicaElemento(
          xpathStart,
          "Botão Start"
        )
  
        return cy.xpath(xpathProgress, { timeout: 20000 })
          .should('contain.text', '100%')
          .then(() => {
  
            cy.log("Progress chegou em 100%")      
            
  
          })
  
      }
    )
  
  }


  uploadFile(xpathInput, filePath, description = null) {

    cy.xpath(xpathInput)
      .selectFile(filePath, { force: true });
  
    if (description) {
      cy.log(`Fez upload de ${description}`);
    }
  }

  getText(xpath) {
    return cy.xpath(xpath).invoke('text');
  }

  getValue(xpath) {
    return cy.xpath(xpath).invoke('val');
  }

  validateMaxLength(xpath, expected) {
    cy.xpath(xpath).should('have.attr', 'maxlength', expected);
  }

  pressKey(key) {

    cy.get('body').type(`{${key}}`);

    cy.wait(500);
  }

  aguardaLoading() {
    cy.xpath("//mat-spinner[@role='progressbar']").should('not.exist');
  }

}

export default new dSL();