import dSL from "../../pages/dSL";
import progressbarPage from "../../pages/progressbarPage";

describe("Teste com LogSystem reutilizável", () => {
  beforeEach(function () {
    dSL.setLogSystem(this.logSystem);
  });

  it("Progress Bar - Verificar progress bar menor que 25%, esperar até 100% e resetar", function () {
    cy.viewport(1360, 684);
    progressbarPage.acessaSite();
    progressbarPage.clicaProgressBar();
    progressbarPage.clicaStart();
    progressbarPage.clicaEsperaSegundos();
    progressbarPage.clicaStop();
    progressbarPage.validaMenorQue25Percentage();
    progressbarPage.ClicaStartAte100();
    progressbarPage.limpaTemp();
    progressbarPage.ClicaReset();
    progressbarPage.ValidaBotaoStartPresente();

   
  });
});