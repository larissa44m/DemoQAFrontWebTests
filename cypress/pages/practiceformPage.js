import dSL from "./dSL";
import "cypress-xpath";

// Para rodar testes, entrar no terminal: 'npx cypress open'

const practiceformPage = {

  acessaSite() {

    cy.visit(
      'https://demoqa.com'
    );

  }
  ,

  entraPracticeForm() {

    dSL.EsperaElemento("//h5[contains(.,'Forms')]");

    dSL.ValidaTexto("//h5[contains(.,'Forms')]", "Forms", "Acessou a página demoqa");

    dSL.ClicaElemento(
      "//h5[contains(.,'Forms')]",
      "Forms"
    );

    return dSL.ClicaElemento(
      "//span[contains(.,'Practice Form')]",
      "Practice Form"
    );
  }

  ,

  insereNome() {

     dSL.EsperaElemento("//input[@placeholder='First Name']");

     const primeiro = dSL.geraStringAlfanumericoAleatorio(6);

     dSL.EscreveTexto("//input[@placeholder='First Name']", primeiro, "Primeiro nome");

     const sobrenome = dSL.geraStringAlfanumericoAleatorio(6);
     return dSL.EscreveTexto("//input[@placeholder='Last Name']", sobrenome, "Sobrenome");
     
   }
   
  ,

  insereEmailEGenero() {

    const email = dSL.geraEmailAleatorio();

    dSL.EscreveTexto("//input[contains(@placeholder,'name@example.com')]", email, `Email do usuário: ${email}`);

    return dSL.ClicaElemento("//input[@value='Male']", "Gênero Masculino");

  }

 ,

 insereTelefone() {

  const celular = dSL.geraCelular()
  
    return dSL.EscreveTexto("//input[@placeholder='Mobile Number']", celular, `Celular: ${celular}`);

}

,

insereDataNasc() {
  

  dSL.ClicaElemento(
    "//input[@id='dateOfBirthInput']",
    "Botão Calendário de Data de Nascimento"
  )

  dSL.SelecionaOpcao(
    "//select[contains(@class,'year-select')]",
    "1990", "Data de nascimento com ano de nascimento 1990", 
  )

  return cy.get('body').type('{esc}');

}

,

  insereAssuntos() {

    dSL.EscreveTexto(
    "//div[contains(@class,'value-container--is-multi css-hlgwow')]",
    "Computer Science", "Assunto: Computer Science"
    )

    return cy.get('body').type('{enter}');

}

,

insereHobbies() {
  

  dSL.ClicaElemento(
    "(//input[@type='checkbox'])[1]",
    "Opção Esportes"
  )

  dSL.ClicaElemento(
    "(//input[@type='checkbox'])[2]",
    "Opção Ler"
  )

  return   dSL.ClicaElemento(
    "(//input[@type='checkbox'])[3]",
    "Opção Música"
  )

}


,

insereImagem() {

 return dSL.uploadFile(
  "//input[@id='uploadPicture']",
  "cypress/file/empty.txt", "imagem"
  )

}

,

insereEnderecoCompleto() {

  dSL.EscreveTexto(
  "//textarea[@id='currentAddress']",
  "Rua das Ruas", "Endereço Rua das Ruas"
  )

  dSL.ClicaElemento(
    "//input[@id='react-select-3-input']",
    "Selecionar Estado"
  )

  cy.contains('NCR').click();

  dSL.EsperaElemento("//input[@id='react-select-4-input']");

  dSL.ClicaElemento(
    "//input[@id='react-select-4-input']",
    "Selecionar Cidade"
  )

  return cy.contains('Delhi').click();

}

,

clicaSubmeter() {

   dSL.ClicaElemento(
    "//button[@type='submit']",
    "Botão Submeter"
   )

   dSL.ValidaTexto(
    "//td[contains(.,'Computer Science')]", "Computer Science",
    "Assunto: Computer Science"
   )

   dSL.ValidaTexto(
    "//td[contains(.,'Sports, Reading, Music')]", "Sports, Reading, Music",
    "Interesses: Esportes, Ler e Música"
   )

   return cy.get('body').type('{esc}');
}

// Ao final de cada teste, é gerado um relatório do passo a passo em html na pasta cypress/logs
// O arquivo enviado está na pasta cypress/file


};

export default practiceformPage;