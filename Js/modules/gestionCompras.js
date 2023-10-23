
// variables
const carrito = document.querySelector('.carrito');
let videojuego = [];
let cliente = [];
export function cargarEventCompras(){


    document.addEventListener('DOMContentLoaded', () => {
        videojuego = JSON.parse(localStorage.getItem('videojuegos')) || [];
        cliente = JSON.parse(localStorage.getItem('clients')) || [];
        addCarrito();

    });

}


// funciones

function addCarrito(){
    const selectGame = document.getElementById('videojuegosSelect');
    const selectUsuario = document.getElementById('usuariosSelect');

    selectGame.innerHTML = '<option value="">Select a video game</option>';

    videojuego.forEach(function(juego) {

        const option = document.createElement('option');
        option.value = juego.id;
        option.innerText = juego.nombre;


        selectGame.appendChild(option);
    });

    selectUsuario.innerHTML = '<option value="">Select a user</option>';

    cliente.forEach(function(client) {

            const option = document.createElement('option');
            option.value = client.identificacion;
            option.innerText = client.nombre;
            selectUsuario.appendChild(option);
    }
    );
     
}