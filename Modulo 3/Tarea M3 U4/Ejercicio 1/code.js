
const cuerpo = document.getElementsByTagName('body');

const cuadroRojo = document.querySelector('.cuadroRojo');
const cuadroVerde = document.querySelector('.cuadroVerde');
const cuadroAzul = document.querySelector('.cuadroAzul');

const botonRojo = document.querySelector('.rojo');
const botonVerde = document.querySelector('.verde');
const botonAzul = document.querySelector('.azul');

const reset = document.querySelector('.reset');


botonRojo.onclick = function(){
    cuadroRojo.style.backgroundColor = 'rgb(150, 11, 11)';
    cuadroVerde.style.backgroundColor = 'rgb(255 255 255)';
    cuadroAzul.style.backgroundColor = 'rgb(255 255 255)';
    cuerpo[0].style.backgroundColor = 'rgb(150, 11, 11)';
};

botonVerde.onclick = function(){
    cuadroVerde.style.backgroundColor = 'rgb(8 66 8)';
    cuadroRojo.style.backgroundColor = 'rgb(255 255 255)';
    cuadroAzul.style.backgroundColor = 'rgb(255 255 255)';
    cuerpo[0].style.backgroundColor = 'rgb(8 66 8)';
};

botonAzul.onclick = function(){
    cuadroAzul.style.backgroundColor = 'rgb(21 21 97)';
    cuadroRojo.style.backgroundColor = 'rgb(255 255 255)';
    cuadroVerde.style.backgroundColor = 'rgb(255 255 255)';
    cuerpo[0].style.backgroundColor = 'rgb(21 21 97)';
};

reset.onclick = function(){
    cuadroRojo.style.backgroundColor = 'rgb(255 255 255)';
    cuadroVerde.style.backgroundColor = 'rgb(255 255 255)';
    cuadroAzul.style.backgroundColor = 'rgb(255 255 255)';
    cuerpo[0].style.backgroundColor = 'rgb(255 255 255)';
};