let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    
    if (nome !== "") {

        if (nome === "") {
            alert("Por favor, digite um nome antes de adicionar.");
            return;
        }
        
        amigos.push(nome);
        
        // Atualiza a lista de amigos
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
        
        // Limpa o campo de input
        input.value = "";
        input.focus();
    }
}

function sortearAmigo() {
    if (amigos.length === 0) return;
    
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];
    
    // Exibe o nome sorteado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${nomeSorteado}</li>`;
    
    // Limpa a lista de amigos
    document.getElementById("listaAmigos").innerHTML = "";
    
    // Reseta o array
    amigos = [];
}