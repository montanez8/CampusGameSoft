// clase videojuego
class Videojuego {
    constructor(id, nombre, tematica, valorLicencia, puntosFidelizacion) {
        this.id = id;
        this.nombre = nombre;
        this.tematica = tematica;
        this.valorLicencia = valorLicencia;
        this.puntosFidelizacion = puntosFidelizacion;
    }
}

let videojuegos = [];

export { Videojuego, videojuegos };


export function cargarEventGames() {
// variables
    const formGames =document.getElementById('videojuegoForm');
    const btnGames = document.querySelector('.btn-formGames');
    const listGames = document.querySelector('.btn-listGames');
    const gamesRegister = document.querySelector('.main-form');
    const contenedor = document.getElementById('contenedorVideojuegos');
    const navGames = document.querySelector('.nav-juegos');
    const listaClientes = document.querySelector('.lista-clientes');

    const gamesList = document.querySelector('#contenedorVideojuegos');
    // eventos

    document.addEventListener('DOMContentLoaded', () => {
        videojuegos = JSON.parse(localStorage.getItem('videojuegos')) || [];
       mostrarVideojuegos();
    });

    formGames.addEventListener('submit', registrarVideojuego);

    btnGames.addEventListener('click',(e)=>{
        const gamesRegister = document.querySelector('.main-form');

        gamesRegister.classList.remove('none');
        gamesList.classList.add('none');
        console.log('Games');

    });

    listGames.addEventListener('click',(e)=>{
        gamesRegister.classList.add('none');
        gamesList.classList.remove('none');

        mostrarVideojuegos();
        console.log('Games');
    });

    contenedor.addEventListener('click',eliminarGame);

    navGames.addEventListener('click',()=>{

        if(gamesList.classList.contains('none')){
            gamesList.classList.remove('none');
            listaClientes.classList.add('none');

        }else {
            gamesList.classList.add('none');
            listaClientes.classList.remove('none');
        }

    })
}

function registrarVideojuego(e){
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const tematica = document.getElementById('tematica').value;
    const valorLicencia = parseFloat(document.getElementById('valorLicencia').value);
    const puntosFidelizacion = parseInt(document.getElementById('puntosFidelizacion').value);
    const videojuego = new Videojuego(Date.now(),nombre,tematica,valorLicencia,puntosFidelizacion);
    videojuegos = [...videojuegos, videojuego];
    console.log(videojuegos);
    document.getElementById('videojuegoForm').reset();
    guardarVideojuegos();
}


function mostrarVideojuegos() {
    vaciarListaVideojuegos();
    const contenedor = document.getElementById('contenedorVideojuegos');
    videojuegos.forEach(function(videojuego) {
        const videojuegoDiv = document.createElement('div');
        videojuegoDiv.classList.add('card', 'm-1');
        // videojuegoDiv.style.width = '18rem';
        videojuegoDiv.style.overflow = 'hidden';
        videojuegoDiv.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${videojuego.nombre}</h5>
      <p class="card-text">Temática: ${videojuego.tematica}</p>
      <p class="card-text">Valor de la Licencia: $${videojuego.valorLicencia}</p>
      <p class="card-text">Puntos para Fidelización: ${videojuego.puntosFidelizacion}</p>
<!--      btn eliminar videojuego-->
        <a href="#" class="btn btn-danger btn-block eliminar-videojuego" data-id="${videojuego.id}">Eliminar</a>
<!--        btn enviar a lista de deseos-->
        <a href="#" class="btn btn-primary btn-block">Lista de Deseos</a>
<!--        btn enviar al carrito-->
        <a href="#" class="btn btn-primary btn-block">Agregar al carrito</a>
      
    </div>
  `;
        // Agregar el div del videojuego al contenedor
        contenedor.appendChild(videojuegoDiv);
    });

}

function guardarVideojuegos() {
    localStorage.setItem('videojuegos', JSON.stringify(videojuegos));
}

function vaciarListaVideojuegos() {
    while (contenedorVideojuegos.firstChild) {
        contenedorVideojuegos.removeChild(contenedorVideojuegos.firstChild);
    }
}

function eliminarGame(e){
    if (e.target.classList.contains('eliminar-videojuego')) {
        const videojuegoId = parseInt(e.target.getAttribute('data-id'));

        // Filtrar los videojuegos, excluyendo el que se va a eliminar
        videojuegos = videojuegos.filter(videojuego => videojuego.id !== videojuegoId);

        // Volver a mostrar los videojuegos actualizados
        mostrarVideojuegos();
        guardarVideojuegos();
    }

}