import dSL from "./dSL";
import "cypress-xpath";

// Para utilizar drag and drop, instalar pelo terminal: npm install --save-dev @4tw/cypress-drag-drop
// Em seguida inserir na pasta cypress/support/e2e.js, o import: import '@4tw/cypress-drag-drop'


const sortablePage = {

  acessaSite() {
    return cy.visit('https://demoqa.com/');
  },

  clicaSortable() {

    dSL.EsperaElemento("//h5[contains(.,'Interactions')]");

    dSL.ValidaTexto("//h5[contains(.,'Interactions')]", "Interactions", "Acessou a página demoqa");

    dSL.ClicaElemento(
      "//h5[contains(.,'Interactions')]",
      "Interactions"
    );

    return dSL.ClicaElemento(
      "//span[contains(.,'Sortable')]",
      "Sortable"
    );
  },

  desorganizarOrdem() {

    dSL.EsperaElemento(
        "//div[@data-handler-id='T2']"
    );  

    dSL.DragAndDrop(
        "//div[@data-handler-id='T6']", "#demo-tabpane-list > div > div > div:nth-child(2)",
        "Desorganizou ordem: Moveu elemento 4 para o segundo elemento da lista"
      );

      dSL.wait(2300)

      dSL.DragAndDrop(
        "/html/body//div[2]/div[1]/div/div[1]/div/div/div[6]", "#demo-tabpane-list > div > div > div:nth-child(5)",
        "Desorganizou ordem: Moveu elemento 6 para o quinto elemento da lista"
      );

      dSL.wait(2300)

      return dSL.DragAndDrop("/html/body//div[2]/div[1]/div/div[1]/div/div/div[4]", "#demo-tabpane-list > div > div > div:nth-child(2)", "Desorganizou ordem: Moveu elemento 3 para o segundo elemento da lista");

  },

  reorganizaOrdemCrescente() {

   dSL.DragAndDrop(
        "/html/body//div[2]/div[1]/div/div[1]/div/div/div[4]", "#demo-tabpane-list > div > div > div:nth-child(2)",
        "Reorganizou para ordem crescente: Moveu elemento 2 para o segundo elemento da lista"
      );

      dSL.wait(3000)

      return   dSL.DragAndDrop(
        "/html/body//div[2]/div[1]/div/div[1]/div/div/div[6]", "#demo-tabpane-list > div > div > div:nth-child(5)",
        "Reorganizou para ordem crescente: Moveu elemento 5 para o quinto elemento da lista"
      );
    
    }

 
};

export default sortablePage;