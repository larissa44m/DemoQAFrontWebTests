import dSL from "./dSL";
import "cypress-xpath";

const progressbarPage = {

  acessaSite() {
    return cy.visit('https://demoqa.com/');
  },

  clicaProgressBar() {

    dSL.EsperaElemento("//h5[contains(.,'Widgets')]");

    dSL.ValidaTexto("//h5[contains(.,'Widgets')]", "Widgets", "Acessou a página demoqa");

    dSL.ClicaElemento(
      "//h5[contains(.,'Widgets')]",
      "Widgets"
    );

    return dSL.ClicaElemento(
      "//span[contains(.,'Progress Bar')]",
      "Progress Bar"
    );
  },

  clicaStart() {


    return dSL.ClicaElemento(
      "//button[contains(.,'Start')]",
      "Botão Start"
    );
  },

  clicaEsperaSegundos() {

    return dSL.wait(1300);
  },

  clicaStop() {

    return dSL.ClicaElemento(
      "//button[contains(.,'Stop')]",
      "Botão Stop"
    );
  },

  validaMenorQue25Percentage() {

        return dSL.ValidaProgressBarMenorQue("//div[@role='progressbar']", 25, "Progress bar");
  
      },

  ClicaStartAte100() {

    return dSL.FluxoProgressBarComStop("//div[@role='progressbar']", "//button[@id='startStopButton']", "Esperou chegar até 100% antes de clicar em Reset");
 
  }, 

  limpaTemp() {

    return   cy.clearCookies();
   
  },

   ClicaReset() {

    return dSL.ClicaElemento("//button[@id='resetButton']", "Botão Reset");

   }
   
   ,

   ValidaBotaoStartPresente() {

    return dSL.ValidaTexto("//button[contains(.,'Start')]", "Start", "Botão tornou a aparecer como Botão 'Start'");
   
   }

};

export default progressbarPage;