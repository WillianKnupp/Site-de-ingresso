
const formulario = document.getElementById("form-comentario");
const listaComentarios = document.getElementById("comentarios-publicados");

let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

function mostrarComentarios() {
    listaComentarios.innerHTML = "";

    comentarios.forEach((comentario) => {
        const card = document.createElement("div");
        card.classList.add("comentario-card");

        const nome = document.createElement("h3");
        nome.textContent = comentario.nome;

        const estrelas = document.createElement("p");
        estrelas.classList.add("avaliacao");
        estrelas.textContent = "★".repeat(comentario.avaliacao) +
            "☆".repeat(5 - comentario.avaliacao);

        const mensagem = document.createElement("p");
        mensagem.textContent = comentario.mensagem;

        card.appendChild(nome);
        card.appendChild(estrelas);
        card.appendChild(mensagem);

        listaComentarios.appendChild(card);
    });
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const avaliacao = document.querySelector(
        'input[name="avaliacao"]:checked'
    );

    if (!nome || !mensagem || !avaliacao) {
        alert("Preencha todos os campos!");
        return;
    }

    const novoComentario = {
        nome: nome,
        mensagem: mensagem,
        avaliacao: Number(avaliacao.value)
    };

    comentarios.unshift(novoComentario);

    localStorage.setItem("comentarios", JSON.stringify(comentarios));

    formulario.reset();
    mostrarComentarios();

    alert("Comentário publicado com sucesso!");
});

mostrarComentarios();
