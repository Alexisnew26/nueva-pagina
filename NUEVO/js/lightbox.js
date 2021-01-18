const imagenes =document.querySelector('.img.galeria')
const imagenesLight =document.querySelector('.agregar-imagen')
const contenedorLight =document.querySelector('.imagenLight')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        
    })
})

const aparecerImagen =(imagen)=>{
    imagenesLight.src = imagenes;
    contenedorLight.classList.toggle('show')
    contenedorLight.classList.toggle('showimage')
}