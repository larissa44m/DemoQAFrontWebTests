import dSL from "../../pages/dSL";
import practiceformPage from "../../pages/practiceformPage";

describe("Teste com LogSystem reutilizável", () => {
  beforeEach(function () {
    dSL.setLogSystem(this.logSystem);
  });

  it("Practice Form - Preencher form com arquivo e submeter", function () {
    cy.viewport(1360, 684);
    practiceformPage.acessaSite();
    practiceformPage.entraPracticeForm();
    practiceformPage.insereNome();
    practiceformPage.insereEmailEGenero();
    practiceformPage.insereTelefone();
    practiceformPage.insereDataNasc();
    practiceformPage.insereAssuntos();
    practiceformPage.insereHobbies();
    practiceformPage.insereImagem();
    practiceformPage.insereEnderecoCompleto();
    practiceformPage.clicaSubmeter();
   
  });
});