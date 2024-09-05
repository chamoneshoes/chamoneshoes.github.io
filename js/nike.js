//dunk low//
let ver_mais_dunk_low 

ver_mais_dunk_low = document.getElementById('ver_mais_dunk_low')
ver_mais_dunk_low.addEventListener('click', mostra_dunk_low)

function mostra_dunk_low() {
    let ver_mais_dunk_low = document.getElementById('ver_mais_dunk_low')
    let dunk_low = document.getElementById('info_avancadas_dunk_low')

    if (dunk_low.style.display == 'block') {
        dunk_low.style.display = 'none'
        ver_mais_dunk_low.innerHTML = 'Ver Mais'
    } else {
        dunk_low.style.display = 'block'
        ver_mais_dunk_low.innerHTML = 'Ver Menos'
    }
}

function show_dunk(imgElement) {
    const mainImage = document.getElementById('imagem_dunk_low');
    mainImage.src = imgElement.src;
}

//air force//
let ver_mais_air_force

ver_mais_air_force = document.getElementById('ver_mais_air_force')
ver_mais_air_force.addEventListener('click', mostra_air_force)

function mostra_air_force() {
    let ver_mais_air_force = document.getElementById('ver_mais_air_force')
    let air_force = document.getElementById('info_avancadas_air_force')

    if (air_force.style.display == 'block') {
        air_force.style.display = 'none'
        ver_mais_air_force.innerHTML = 'Ver Mais'
    } else {
        air_force.style.display = 'block'
        ver_mais_air_force.innerHTML = 'Ver Menos'
    }
}

function show_air_force(imgElement) {
    const mainImage = document.getElementById('imagem_air_force');
    mainImage.src = imgElement.src;
}