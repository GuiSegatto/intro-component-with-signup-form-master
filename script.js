
function showError(errorElementClassName, errorMessage){ 
  document.querySelector("."+errorElementClassName).classList.add("display-error") // Ativa um display block no css adicionando a classe display-error
  document.querySelector("."+errorElementClassName).innerHTML = errorMessage; // Adiciona dentro da tag que estava escondida a mensagem de erro
}

function clearError(){
  let errors = document.querySelectorAll(".error"); // retorna todas as classes como um array
  for(let error of errors){ // Percore o array retornado de "errors", definindo cada elemento para "error"
      error.classList.remove("display-error"); // Removerá a classe "display-error" de cada erro
  }
}



const form = document.forms['sign-up-form'];
form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  clearError(); // Executa a função clearError que irá remover todas as classes error antes de fazer as verificações

  if (form.firstName.value.trim() === ""){
      showError("first-name-error", "First Name cannot be empty") // Envia para a função "showError" o nome da classe, e a mensangem que irá aparecer
      return false; // Irá parar a função
  };

  if (form.lastName.value.trim() === ""){
      showError("last-name-error", "Last Name cannot be empty") // Envia para a função "showError" o nome da classe, e a mensangem que irá aparecer
      return false; // Irá parar a função
  };

  if (form.mail.value.trim() === ""){
      showError("email-error", "Email cannot be empty") // Envia para a função "showError" o nome da classe, e a mensangem que irá aparecer
      return false; // Irá parar a função
  };

  if (form.password.value.trim() === ""){
      showError("password", "Password cannot be empty") // Envia para a função "showError" o nome da classe, e a mensangem que irá aparecer
      return false; // Irá parar a função
  };
}