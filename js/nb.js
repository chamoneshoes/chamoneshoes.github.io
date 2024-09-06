/*9060*/
let ver_mais_9060

ver_mais_9060 = document.getElementById('ver_mais_9060')
ver_mais_9060.addEventListener('click', mostra_9060)

function mostra_9060() {
    let ver_mais_9060, info_avancadas_9060

    ver_mais_9060 = document.getElementById('ver_mais_9060')
    info_avancadas_9060 = document.getElementById('info_avancadas_9060')

    if (info_avancadas_9060.style.display == 'none') {
        info_avancadas_9060.style.display = 'block';
        ver_mais_9060.innerHTML = 'Ver Menos';
    } else {
        info_avancadas_9060.style.display = 'none';
        ver_mais_9060.innerHTML = 'Ver Mais';
    }
}

function show_9060(imgElement) {
    const mainImage = document.getElementById('imagem_9060');
    mainImage.src = imgElement.src;
}

/*550*/
let ver_mais_550

ver_mais_550 = document.getElementById('ver_mais_550')
ver_mais_550.addEventListener('click', mostra_550)

function mostra_550() {
    let ver_mais_550, info_avancadas_550

    ver_mais_550 = document.getElementById('ver_mais_550')
    info_avancadas_550 = document.getElementById('info_avancadas_550')

    if (info_avancadas_550.style.display == 'none') {
        info_avancadas_550.style.display = 'block';
        ver_mais_550.innerHTML = 'Ver Menos';
    } else {
        info_avancadas_550.style.display = 'none';
        ver_mais_550.innerHTML = 'Ver Mais';
    }
}

function show_550(imgElement) {
    const mainImage = document.getElementById('imagem_550');
    mainImage.src = imgElement.src;
}


