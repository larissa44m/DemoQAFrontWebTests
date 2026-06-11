import dSL from "../../pages/dSL";
import sortablePage from "../../pages/sortablePage";

describe("Teste com LogSystem reutilizável", () => {
  beforeEach(function () {
    dSL.setLogSystem(this.logSystem);
  });

  it("Drag and Drop - Desorganizar e em seguida colocar em ordem crescente", function () {
    cy.viewport(1360, 684);
    sortablePage.acessaSite();
    sortablePage.clicaSortable();
    sortablePage.desorganizarOrdem();
    sortablePage.reorganizaOrdemCrescente();

  });
});