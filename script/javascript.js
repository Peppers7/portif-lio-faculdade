
// Espera o carregamento da página
document.addEventListener("DOMContentLoaded", function() {
    
    // Pega o formulário pelo seletor
    const form = document.querySelector("form");

    // Adiciona evento ao enviar
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // impede o envio real só pra simulação
        
        // Exibe mensagem de confirmação
        alert("Mensagem enviada com sucesso! Obrigado pelo contato 😊");

        // Opcional: limpa os campos do formulário
        form.reset();
    });
});
