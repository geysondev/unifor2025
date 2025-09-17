const form = document.getElementById("formCadastro");
const mensagemErro = document.getElementById("mensagem-erro");
const mensagemSucesso = document.getElementById("mensagemSucesso");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // impede o envio tradicional

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  // Limpa mensagens anteriores
  mensagemErro.textContent = "";
  mensagemSucesso.textContent = "";

  // Validações
  if (!nome || !email || !senha || !confirmarSenha) {
    mensagemErro.textContent = "Preencha todos os campos.";
    return;
  }

  if (senha.length < 6) {
    mensagemErro.textContent = "A senha deve ter pelo menos 6 caracteres.";
    return;
  }

  if (senha !== confirmarSenha) {
    mensagemErro.textContent = "As senhas não coincidem.";
    return;
  }

  // Sucesso
  mensagemSucesso.textContent = "Cadastro realizado com sucesso!";
  form.reset();
});
