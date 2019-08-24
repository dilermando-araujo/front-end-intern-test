(function() {
  const contactForm = document.getElementById('contact');

  // Recebe os campos do formulário.
  const nameInput    = document.getElementById('name');
  const emailInput   = document.getElementById('email');
  const messageInput = document.getElementById('message');

  contactForm.addEventListener('submit', function(e) {
    
    let inputsEmptyText = ""; // Para a mensagem de falha.
    let inputsEmpty     = []; // Para a troca do placeholder em caso de falha.

    // Utilizado o trim para remover espaços em branco desnecessários.
    const nameLength    = nameInput.value.trim().length;
    const emailLength   = emailInput.value.trim().length;
    const messageLength = messageInput.value.trim().length;

    if (nameLength == 0) {
      inputsEmptyText += " nome,";
      inputsEmpty     = ["name", ...inputsEmpty];
    }
    if (emailLength == 0) {
      inputsEmptyText += " email,";
      inputsEmpty     = ["email", ...inputsEmpty];
    }
    if (messageLength == 0) {
      inputsEmptyText += " mensagem"
      inputsEmpty = ["message", ...inputsEmpty];
    }

    if (inputsEmptyText.length == 0)
    {
      window.alert("Sucesso, seus dados serão enviados!");
    }
    else
    {
      // Para remover a virgula no final da string se existir.
      if (inputsEmptyText.charAt(inputsEmptyText.length - 1) == ","){
        inputsEmptyText = inputsEmptyText.substr(0, (inputsEmptyText.length - 1));
      }

      window.alert(`Infelizmente não será possível, pois não é permitido campo(s) vazio(s):${inputsEmptyText}`);
    
    }

  });
})();
