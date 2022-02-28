window.onload = function () {
    const IMAGENES = [
        '/FondoSetas.f457b149.jpg',
        '/Fran.99aa2bd5.jpg',
        "/aLE2.0ab5ef83.jpg"
    ];

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 7000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        clearInterval(intervalo)
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        renderizarImagen();
    }
    
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        clearInterval(intervalo)
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        renderizarImagen();
    }

    function renderizarImagen () {
        $imagen.src = IMAGENES[posicionActual];
    }

    let intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);

    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);

    renderizarImagen();
        
}

