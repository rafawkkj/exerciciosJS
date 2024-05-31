function validarNumeroPositivo() {
    // Obtém o valor do input
    let numero = document.getElementById('numero').value;
    let mensagem = document.getElementById('mensagem');
    
    // Converte o valor para número
    let numeroConvertido = parseFloat(numero);
    
    // Verifica se é um número e se é positivo
    if (!isNaN(numeroConvertido) && numeroConvertido > 0) {
        mensagem.textContent = "O número é positivo.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Erro: Insira um número positivo.";
        mensagem.style.color = "red";
    }
}