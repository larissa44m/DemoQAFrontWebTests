import dSL from "../../pages/dSL";
import webtablesPage from "../../pages/webtablesPage";

describe("Teste com LogSystem reutilizável", () => {
  beforeEach(function () {
    dSL.setLogSystem(this.logSystem);
  });

  it("Web tables - Adicionar, Editar e Excluir", function () {
    cy.viewport(1360, 684);
    webtablesPage.acessaSite();
    webtablesPage.clicaElementsTables();
    webtablesPage.clicaAdicionar();
    webtablesPage.insereNome();
    webtablesPage.insereEmail();
    webtablesPage.insereIdade();
    webtablesPage.insereSalario();
    webtablesPage.insereDepartamento();
    webtablesPage.clicaAdd();
    webtablesPage.clicaEditarRegistro();
    webtablesPage.inserirNome();
    webtablesPage.inserirEmail();
    webtablesPage.inserirIdade();
    webtablesPage.inserirSalario();
    webtablesPage.inserirDepartamento();
    webtablesPage.clicaSubmit();
    webtablesPage.clicaExcluir();
   
  });

});