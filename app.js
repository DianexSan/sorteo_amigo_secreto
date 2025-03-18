let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    // Limpiar el input en todos los casos
    inputAmigo.value = "";

    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombreAmigo);

    // Actualizar la lista de amigos en el HTML
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    // 1. Obtener el elemento de la lista
    const listaAmigos = document.getElementById("listaAmigos");

    // 2. Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // 3. Iterar sobre el array "amigos" y agregar cada nombre a la lista
    amigos.forEach((amigo) => {
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigo;
        listaAmigos.appendChild(nuevoAmigo);
    });
}

function sortearAmigo() {
    // 1. Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Agrega al menos uno.");
        return;
    }

    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>"El amigo sorteado es ${amigoSorteado}"</li>`;

    // 5. Limpiar el input
    const inputAmigo = document.getElementById("amigo");
    inputAmigo.value = ""; // Limpiar el input
}

