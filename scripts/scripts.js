function login() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("senha").value;

    if (user === "" || pass === "") {
        alert("Preencha usuário e senha!");
        return;
    }

    // Login simples
    localStorage.setItem("usuario_logado", user);

    // Entra na home
    window.location.href = "home.html";
}
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o formulário recarregar a página

        const usuario = document.getElementById("username").value;
        const senha = document.getElementById("password").value;

        // Usuário correto
        const usuarioCorreto = "claudio";
        const senhaCorreta = "1234";

        if (usuario === usuarioCorreto && senha === senhaCorreta) {
            alert("Login realizado com sucesso!");

            // Redireciona para a página inicial
            window.location.href = "inicial.html";
        } else {
            alert("Usuário ou senha incorretos. Tente novamente.");
        }
    });
});
