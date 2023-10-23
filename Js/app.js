// Import modulos
import {
    cliente,
    clientes,
    registrarCliente,
    cargarEventListeners
} from './modules/gestionClientes.js';

import {
    Videojuego,
    videojuegos,
    cargarEventGames
} from './modules/gestionGames.js';

import {
    cargarEventCompras
}from './modules/gestionCompras.js';

// variables

const login = document.querySelector('.user-login');
const loader = document.querySelector('.loader');
const  ocultar = document.querySelector('.ocultar');
const submitButton = document.querySelector('.btn-registrar');

cargarEventListeners();
cargarEventGames();
cargarEventCompras();

console.log(clientes);


// eventos



window.addEventListener('load', () => {

    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        ocultar.classList.remove('ocultar');
    }, 3000);
});

login.addEventListener('click',(e)=>{
    console.log('Login');
})

//evento que envia el formulario
submitButton.addEventListener('click', registrarCliente);





// funciones

