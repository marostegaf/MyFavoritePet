function abrirMenu() {
    if (menu.style.display == "flex") {
        menu.style.display = "none"
    } else {
        menu.style.display = "flex"
    }
}

function esconderAparecerMenuAoMudarTamanho() {
    if (window.innerWidth >= 1050) {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
}

window.onload = function() {
    esconderAparecerMenuAoMudarTamanho();
};

// Correção de bug: Ao ocultar o menu pelo botão "hamburguer" e depois aumentar o tamanho da tela, o menu permanecia escondido sem opção de reexibição. Agora, ao redimensionar a tela para mais de 1000px, o menu será exibido automaticamente, desconsiderando a configuração anterior.
