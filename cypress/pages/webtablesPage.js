import dSL from "./dSL";
import "cypress-xpath";

const webtablesPage = {

  acessaSite() {
    return cy.visit('https://demoqa.com/');
  },

  clicaElementsTables() {

    dSL.EsperaElemento("//h5[contains(.,'Elements')]");

    dSL.ValidaTexto("//h5[contains(.,'Elements')]", "Elements", "Acessou a página demoqa");

    dSL.ClicaElemento(
      "//h5[contains(.,'Elements')]",
      "Elements"
    );

    return dSL.ClicaElemento(
      "//span[contains(.,'Web Tables')]",
      "Web Tables"
    );
  },

  clicaAdicionar() {


    return dSL.ClicaElemento(
      "//button[@id='addNewRecordButton']",
      "Adicionar"
    );
  },

  
  insereNome() {

    dSL.EsperaElemento("//input[@placeholder='First Name']");

    const primeiro = dSL.geraStringAlfanumericoAleatorio(6);

    dSL.EscreveTexto("//input[@placeholder='First Name']", primeiro, "Primeiro nome");

    const sobrenome = dSL.geraStringAlfanumericoAleatorio(6);
    return dSL.EscreveTexto("//input[@placeholder='Last Name']", sobrenome, "Sobrenome");

  },

  insereEmail() {

    const email = dSL.geraEmailAleatorio();

    return dSL.EscreveTexto("//input[contains(@placeholder,'name@example.com')]", email, `Email do usuário: ${email}`);
  
 }

  ,

  insereIdade() {

    return dSL.EscreveTexto("//input[@id='age']", "30", "30 anos");

  }
  
  ,

  insereSalario() {

    return dSL.EscreveTexto("//input[@id='salary']", "5555", "Salário 5555");

  }
,

  insereDepartamento()
  {
    return dSL.EscreveTexto("//input[@id='department']", "Tecnologia Informação", "Tecnologia Informação");
  }
  ,

  clicaAdd()
  {
    return dSL.ClicaElemento("//button[@id='submit']", "Submit/Adicionar");
  }
  ,

  clicaEditarRegistro()
  {
    return dSL.ClicaElemento("//tr[td[normalize-space()='5555']]//span[contains(@id,'edit')]", "Editar Registro de teste");
  }
,

  inserirNome() {



    dSL.EsperaElemento("//input[@placeholder='First Name']");

    dSL.clear("//input[@placeholder='First Name']");

    dSL.clear("//input[@placeholder='Last Name']");

    const primeiro = dSL.geraStringAlfanumericoAleatorio(6);

    dSL.EscreveTexto("//input[@placeholder='First Name']", primeiro, "Primeiro nome");

    const sobrenome = dSL.geraStringAlfanumericoAleatorio(6);
    return dSL.EscreveTexto("//input[@placeholder='Last Name']", sobrenome, "Sobrenome");

  },

  
  inserirEmail() {

    dSL.clear("//input[contains(@placeholder,'name@example.com')]");

    const email = dSL.geraEmailAleatorio();

    return dSL.EscreveTexto("//input[contains(@placeholder,'name@example.com')]", email, `Email do usuário: ${email}`);
  
 }

  ,

  inserirIdade() {

    dSL.clear("//input[@id='age']");

    return dSL.EscreveTexto("//input[@id='age']", "31", "31 anos");

  }

  ,

  inserirSalario() {

    dSL.clear("//input[@id='salary']");

    return dSL.EscreveTexto("//input[@id='salary']", "8888", "Salário editado 8888");

  }

,

  inserirDepartamento()

  {
    dSL.clear("//input[@id='department']");

    return dSL.EscreveTexto("//input[@id='department']", "Negócios", "Negócios");

  }
  ,

  clicaSubmit()

  {

    return dSL.ClicaElemento("//button[@id='submit']", "Submit/Adicionar");
  }
  ,

  clicaExcluir()
  {
  return dSL.ClicaElemento("//tr[td[normalize-space()='8888']]//span[contains(@id,'delete-record')]", "Excluir registro de teste");
  }


};

export default webtablesPage;