const formulario = document.getElementById('form-contato');

if (formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;
        const resultado = document.getElementById('mensagem-formulario');

        if (nome === '' || email === '' || assunto === '' || mensagem === '') {
            resultado.textContent = 'Preencha todos os campos.';
            resultado.style.color = '#ff6b6b';
            return;
        }

        resultado.textContent = 'Mensagem preenchida com sucesso!';
        resultado.style.color = '#7CFF7C';

        formulario.reset();
    });
}
