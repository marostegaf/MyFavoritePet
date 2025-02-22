import { conectaAPI } from "./ConectaAPI.js";

const adicionarFotos = document.querySelector(".fotos-cachorros");

export function mostrarFotosCachorros(imagem) {
    const fotoCachorro = document.createElement("img");
    fotoCachorro.className = "foto";
    fotoCachorro.src = imagem;
    return fotoCachorro;
}

export async function listaDeFotos(racaSelecionada) {
    try {
        const listaAPI = await conectaAPI.conectarComAPI();
        adicionarFotos.innerHTML = "";

        if (racaSelecionada === "Todos") {
            listaAPI.forEach(cachorro => adicionarFotos.appendChild(mostrarFotosCachorros(cachorro.imagem)));
        } else {
            const fotosFiltradas = listaAPI.filter(cachorro => cachorro.raca === racaSelecionada);
            fotosFiltradas.forEach(cachorro => adicionarFotos.appendChild(mostrarFotosCachorros(cachorro.imagem)));

        }
    } catch (erro) {
        console.error("Erro ao filtrar as fotos:", erro);
        adicionarFotos.innerHTML = `<h1>Erro ao carregar as fotos</h1>`;
    }
}
