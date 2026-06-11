import dSL from "../../pages/dSL";
import browserwindowsPage from "../../pages/browserwindowsPage";

describe("Teste com LogSystem reutilizável", () => {
  beforeEach(function () {
    dSL.setLogSystem(this.logSystem);
  });

  it("Browser - Teste de conteúdo de nova janela", function () {
    cy.viewport(1360, 684);
    browserwindowsPage.acessaSite();
    browserwindowsPage.clicaemWindows();
    browserwindowsPage.validaTextoJanela();
    browserwindowsPage.finalizaTeste();

    
    
  });
});