import dSL from "./dSL";
import "cypress-xpath";

const browserwindowsPage = {

  acessaSite() {
    return cy.visit('https://demoqa.com/');
  },

  clicaemWindows() {

    dSL.EsperaElemento("//h5[contains(.,'Alerts, Frame & Windows')]");

    dSL.ValidaTexto("//h5[contains(.,'Alerts, Frame & Windows')]", "Alerts, Frame & Windows", "Acessou a página demoqa");

    dSL.ClicaElemento(
      "//h5[contains(.,'Alerts, Frame & Windows')]",
      "Alerts, Frame & Windows"
    );

    return dSL.ClicaElemento(
      "//span[contains(.,'Browser Windows')]",
      "Browser Windows"
    );
  },

  clicaemNewWindow() {


    return dSL.ClicaElemento(
      "//button[@id='windowButton']",
      "New Window"
    );
  },

  validaTextoJanela() {


    return cy.visit('https://demoqa.com/sample')
      .then(() => {

        return dSL.ValidaTexto(
          "//h1[@id='sampleHeading']",
          "This is a sample page",
          "This is a sample page"
        );

      });
  },

  finalizaTeste() {
    cy.clearCookies();
    cy.clearLocalStorage();
  }

};

export default browserwindowsPage;