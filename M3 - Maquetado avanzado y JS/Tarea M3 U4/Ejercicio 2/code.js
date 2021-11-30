const contenedorTexto = document.querySelector('textarea');
const cantLetras = document.querySelector('div.resultado');
let contador = '';

contenedorTexto.addEventListener('input', function(e){
    contador = e.target.value;
    cantLetras.textContent = contador.length;
})
