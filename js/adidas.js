/*campus bad bunny*/

let ver_mais_campus_bad_bunny

ver_mais_campus_bad_bunny = document.getElementById('ver_mais_campus_bad_bunny')
ver_mais_campus_bad_bunny.addEventListener('click', mostra_campus_bad_bunny)

function mostra_campus_bad_bunny() {
    let ver_mais_campus_bad_bunny = document.getElementById('ver_mais_campus_bad_bunny')
    let campus_bad_bunny = document.getElementById('info_avancadas_campus_bad_bunny')

    if (campus_bad_bunny.style.display == 'block') {
        campus_bad_bunny.style.display = 'none'
        ver_mais_campus_bad_bunny.innerHTML = 'Ver Mais'
    } else {
        campus_bad_bunny.style.display = 'block'
        ver_mais_campus_bad_bunny.innerHTML = 'Ver Menos'
    }
}

function show_campus_bad_bunny(imgElement) {
    const mainImage = document.getElementById('imagem_campus_bad_bunny');
    mainImage.src = imgElement.src;
}

/*campus*/

let ver_mais_campus

ver_mais_campus = document.getElementById('ver_mais_campus')
ver_mais_campus.addEventListener('click', mostra_campus)

function mostra_campus() {
    let ver_mais_campus = document.getElementById('ver_mais_campus')
    let campus = document.getElementById('info_avancadas_campus')

    if (campus.style.display == 'block') {
        campus.style.display = 'none'
        ver_mais_campus.innerHTML = 'Ver Mais'
    } else {
        campus.style.display = 'block'
        ver_mais_campus.innerHTML = 'Ver Menos'
    }
}

/*Samba Og*/

let ver_mais_samba_og

ver_mais_samba_og = document.getElementById('ver_mais_samba_og')
ver_mais_samba_og.addEventListener('click', mostra_samba_og)

function mostra_samba_og() {
    let ver_mais_samba_og = document.getElementById('ver_mais_samba_og')
    let samba_og = document.getElementById('info_avancadas_samba_og')

    if (samba_og.style.display == 'block') {
        samba_og.style.display = 'none'
        ver_mais_samba_og.innerHTML = 'Ver Mais'
    } else {
        samba_og.style.display = 'block'
        ver_mais_samba_og.innerHTML = 'Ver Menos'
    }
}

function show_samba_og(imgElement) {
    const mainImage = document.getElementById('imagem_samba_og');
    mainImage.src = imgElement.src;
}