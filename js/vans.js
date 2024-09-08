/*old_scool*/
let ver_mais_old_scool

ver_mais_old_scool = document.getElementById('ver_mais_old_scool')
ver_mais_old_scool.addEventListener('click', mostra_old_scool)

function mostra_old_scool() {
    let ver_mais_old_scool = document.getElementById('ver_mais_old_scool')
    let old_scool = document.getElementById('info_avancadas_old_scool')

    if (old_scool.style.display == 'block') {
        old_scool.style.display = 'none'
        ver_mais_old_scool.innerHTML = 'Ver Mais'
    } else {
        old_scool.style.display = 'block'
        ver_mais_old_scool.innerHTML = 'Ver Menos'
    }
}

/*Knu*/
let ver_mais_knu

ver_mais_knu = document.getElementById('ver_mais_knu')
ver_mais_knu.addEventListener('click', mostra_knu)

function mostra_knu() {
    let ver_mais_knu = document.getElementById('ver_mais_knu')
    let old_knu = document.getElementById('info_avancadas_knu')

    if (old_knu.style.display == 'block') {
        old_knu.style.display = 'none'
        ver_mais_knu.innerHTML = 'Ver Mais'
    } else {
        old_knu.style.display = 'block'
        ver_mais_knu.innerHTML = 'Ver Menos'
    }
}

function show_knu(imgElement) {
    const mainImage = document.getElementById('imagem_knu');
    mainImage.src = imgElement.src;
}

/*ultrarange*/

let ver_mais_ultrarange

ver_mais_ultrarange = document.getElementById('ver_mais_ultrarange')
ver_mais_ultrarange.addEventListener('click', mostra_ultrarange)

function mostra_ultrarange() {
    let ver_mais_ultrarange = document.getElementById('ver_mais_ultrarange')
    let ultrarange = document.getElementById('info_avancadas_ultrarange')

    if (ultrarange.style.display == 'block') {
        ultrarange.style.display = 'none'
        ver_mais_ultrarange.innerHTML = 'Ver Mais'
    } else {
        ultrarange.style.display = 'block'
        ver_mais_ultrarange.innerHTML = 'Ver Menos'
    }
}

function show_ultrarange(imgElement) {
    const mainImage = document.getElementById('imagem_ultrarange');
    mainImage.src = imgElement.src;
}