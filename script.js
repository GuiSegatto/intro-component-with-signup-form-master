
function showError(errorElementClassName, errorMessage, inputID) { // Recebe os valores da função que realiza as verificações
  document.querySelector("." + errorElementClassName).classList.add("display-error") // Ativa um display block no css adicionando a classe display-error
  document.querySelector("." + errorElementClassName).innerHTML = errorMessage; // Adiciona dentro da tag que estava escondida a mensagem de erro
  document.querySelector("#" + inputID).classList.add("input-error")
}

function clearError() { // Limpa os erros
  let errors = document.querySelectorAll(".error"); // retorna todas as classes como um array
  console.log(errors)
  for (let error of errors) { // Percore o nodeList retornado de "errors", definindo cada elemento para "error"
    error.classList.remove("display-error"); // Removerá a classe "display-error" de cada erro
  }

  let inputError = document.querySelectorAll("input") // Seleciona todos meus inputs
  for (let input of inputError) { // Percorre o nodeList
    input.classList.remove("input-error") // remove a classe "input-error"
  }

}


// retorna nosso formulario e define uma variavel
const form = document.forms['sign-up-form'];

// Retorna nossos inputs e define o valor para as variaveis
const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const email = document.querySelector("#mail")
const password = document.querySelector("#password")

// Adiciona evento que quando o formulário for enviado irá chamar as funções que irão realizar as verificações
form.addEventListener('submit', function (event) {
  event.preventDefault();
  clearError();

  checkFirstNameBlank(firstName)
  checkLastNameBlank(lastName)
  validateEmail(email)
  checkEmailBlank(email)
  checkPasswordBlank(password)
})

function checkFirstNameBlank(input){
  if (input.value.trim() === ""){ // verificar se o campo está vazio e remove os espaços
    showError("first-name-error", "First Name cannot be empty", "firstName") // envia a essa mensagem de erro
}
}

function checkLastNameBlank(input){
  if (input.value.trim() === ""){// verificar se o campo está vazio e remove os espaços
    showError("last-name-error", "Last Name cannot be empty", "lastName") // envia a essa mensagem de erro
}
}

function checkEmailBlank(input){
  if (input.value.trim() === ""){// verificar se o campo está vazio e remove os espaços
    showError("email-error", "Email cannot be empty", "mail") // envia a essa mensagem de erro
}
}

function validateEmail(input) { // Verifica se é um formato de e-mail valido utilizando regexp
  const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegexp.test(input.value.trim())) { // realiza o teste e inverte o resultado
    showError("email-error", "Looks like this is not an email", "mail"); // envia essa mensagem de erroo
  }
}

function checkPasswordBlank(input) {
  if (input.value.trim() === ""){ // verificar se o campo está vazio e remove os espaços
    showError("password-error", "Password cannot be empty", "password") // envia a essa mensagem de erro
}
}
