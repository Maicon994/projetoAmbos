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
