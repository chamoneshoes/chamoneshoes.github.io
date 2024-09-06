/*trainer*/

let ver_mais_trainer

ver_mais_trainer = document.getElementById('ver_mais_trainer')
ver_mais_trainer.addEventListener('click', mostra_trainer)

function mostra_trainer() {
    let ver_mais_trainer, info_avancadas_trainer

    ver_mais_trainer = document.getElementById('ver_mais_trainer')
    info_avancadas_trainer = document.getElementById('info_avancadas_trainer')

    if (info_avancadas_trainer.style.display == 'none') {
        info_avancadas_trainer.style.display = 'block';
        ver_mais_trainer.innerHTML = 'Ver Menos';
    } else {
        info_avancadas_trainer.style.display = 'none';
        ver_mais_trainer.innerHTML = 'Ver Mais';
    }
}

function show_trainer(imgElement) {
    const mainImage = document.getElementById('imagem_trainer');
    mainImage.src = imgElement.src;
}
