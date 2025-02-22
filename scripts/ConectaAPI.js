import { listaDeRacas } from "./MenuDeRacas.js";
import { listaDeFotos } from "./MostrarFotos.js";

async function conectarComAPI() {
    const conexaoAPI = await fetch("https://67a91a056e9548e44fc2e149.mockapi.io/dogs");
    const conexaoConvertida = await conexaoAPI.json();

    return conexaoConvertida;
}

export const conectaAPI = {
    conectarComAPI
};

listaDeRacas();
listaDeFotos();
