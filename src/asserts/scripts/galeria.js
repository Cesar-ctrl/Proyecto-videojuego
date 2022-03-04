window.addEventListener("load", function(event) {
const enlaces  = document.querySelectorAll('.ul .a')//Seleccionamos todas las etiquetas de la clase ul y a
const lightbox = document.querySelector('.lightbox')//Seleccionamos todas las etiquetas de la clase lightbox
const grande   = document.querySelector('.grande')//Seleccionamos todas las etiquetas de la clase grande
const cerrar   = document.querySelector('.cerrar')//Seleccionamos todas las etiquetas de la clase cerrar

enlaces.forEach(( cadaEnlace , i )=>{
    enlaces[i].addEventListener('click', ( e )=>{ // Cuando hacemos el evento click en <a>
        e.preventDefault()
        let ruta = cadaEnlace.querySelector('.img').src //Seleccionamos los elementos src de las etiquetas <img>

        lightbox.classList.add('activo')// Añadimos a los elementos clase lightbox la clase 'activo'
        grande.setAttribute('src', ruta)//Alteramos la ruta para que se vea la imagen seleccionada

    })
})

cerrar.addEventListener('click', ()=>{// Cuando hacemos el evento click en el boton cerrar
    lightbox.classList.remove('activo')// Eliminamos la clase 'activo' de los elementos de clase lightbox
})
})
