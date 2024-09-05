const btnMas = document.getElementById('boton-mas');
const btnMenos=document.getElementById('boton-menos');

let number=1;
const input=document.getElementById('number');

const aumentar = () => {
    if(number<4){
        number++;
        input.value = number;
        agregarImagen();
    }
};
btnMas.addEventListener('click', aumentar);

const disminuir=()=>{
    if(number>1){
        number--;
        input.value=number;
        agregarImagen();
    }
}
btnMenos.addEventListener('click',disminuir);

const agregarImagen = ()=>{
    const contenedorImagen=document.getElementById('imagen-variable');
    contenedorImagen.innerHTML=`<img src="./images/pokemon-${number}.png" alt="" class="imagen">`
    
}
agregarImagen();
