function calcularAreaRetangulo() {
    // Obtém os valores dos inputs
    let comprimento = document.getElementById('comprimento').value;
    let largura = document.getElementById('largura').value;
    let resultado = document.getElementById('resultado');
    
    // Converte os valores para número
    let comprimentoNum = parseFloat(comprimento);
    let larguraNum = parseFloat(largura);
    
    // Verifica se os valores são números
    if (!isNaN(comprimentoNum) && comprimentoNum > 0 && !isNaN(larguraNum) && larguraNum > 0) {
        // Calcula a área do retângulo
        let area = comprimentoNum * larguraNum;
        resultado.textContent = `A área do retângulo é: ${area}`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Erro: Insira valores numéricos positivos para comprimento e largura.";
        resultado.style.color = "red";
    }
}