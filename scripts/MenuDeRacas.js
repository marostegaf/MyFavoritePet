import { conectaAPI } from "./ConectaAPI.js";
import { listaDeFotos } from "./MostrarFotos.js";

const adicionarRacas = document.querySelector("#menu");

function mostrarRacas(raca) {
    const racaCategoria = document.createElement("button");
    racaCategoria.textContent = raca;

    racaCategoria.addEventListener("click", () => listaDeFotos(raca));


    return racaCategoria;
}

export async function listaDeRacas() {
    try {
        const listaAPI = await conectaAPI.conectarComAPI();
        const racasUnicas = new Set(listaAPI.map(cachorro => cachorro.raca));

        adicionarRacas.innerHTML = "";

        adicionarRacas.appendChild(mostrarRacas("Todos"));
        racasUnicas.forEach(raca => adicionarRacas.appendChild(mostrarRacas(raca)));

        listaDeFotos("Todos");
    } catch (erro) {
        console.error("Erro ao carregar as raças:", erro);
        adicionarRacas.innerHTML = `<h1>Erro ao carregar as raças</h1>`;
    }
}
