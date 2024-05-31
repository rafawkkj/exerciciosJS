alert('Olá, mundo');
function saudacao() {
    var nome = document.getElementById("nomeInput").value;
    var msg = "Olá, " + nome + "!";
    document.getElementById("saudacao").innerText = msg;
}