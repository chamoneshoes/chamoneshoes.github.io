/*king*/
let ver_mais_king

ver_mais_king = document.getElementById('ver_mais_king')

ver_mais_king.addEventListener('click', mostra_king)

function mostra_king() {
    let info_avancadas_king, ver_mais_king

    info_avancadas_king = document.getElementById('info_avancadas_king')
    ver_mais_king = document.getElementById('ver_mais_king')
     
    if (info_avancadas_king.style.display == 'block') {
        info_avancadas_king.style.display = 'none'
        ver_mais_king.innerHTML = 'Ver Mais'
    } else {
        info_avancadas_king.style.display = 'block'
        ver_mais_king.innerHTML = 'Ver Menos'
    }
}

function show_king(imgElement) {
    const mainImage = document.getElementById('imagem_king');
    mainImage.src = imgElement.src;
}