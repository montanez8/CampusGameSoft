// clase Cliente
class cliente {
    constructor(numeroIdentificacion, nombre, apellido, telefono, email, fechaNacimiento, nacionalidad) {
        this.numeroIdentificacion = numeroIdentificacion;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
        this.fechaNamiento = fechaNacimiento;
        this.nacionalidad = nacionalidad;
    }
}
let clientes = [];


export function cargarEventListeners() {

    document.addEventListener('DOMContentLoaded', () => {
        clientes = JSON.parse(localStorage.getItem('clients')) || [];
        mostrarClientes();
    });
    const listaClientes = document.querySelector('#lista-clientes');
    listaClientes.addEventListener('click', eliminarCliente);

    const listarClientes = document.querySelector('.listaClientes');
    listarClientes.addEventListener('click', (e)=>{
        const listaClientes = document.querySelector('.lista-clientes');
        const listaJuegos = document.querySelector('.main__Games');
        listaClientes.classList.add('mostrar-clientes');
        listaJuegos.classList.add('none');

        if(listaClientes.classList.contains('none')){
            listaClientes.classList.remove('none');
        }else{
            listaClientes.classList.add('none');
            listaJuegos.classList.remove('none');
        }

        mostrarClientes();


    });
}


console.log(clientes);

export { cliente, clientes }

// variables
const formularioRegistar = document.querySelector('.formularioRegistar');
// funcion que registra un cliente
export function registrarCliente(e) {
    e.preventDefault();
    const identificacionInput = document.getElementById('identificacion').value;
    let nombresInput = document.getElementById('nombres').value;
    let apellidosInput = document.getElementById('apellidos').value;
    let telefonoInput = document.getElementById('telefono').value;
    let registerInput = document.getElementById('register').value;
    let fechaNacimientoInput = document.getElementById('fechaNacimiento').value;
    let nacionalidadInput = document.getElementById('nacionalidad').value;
    let usuario = new cliente(identificacionInput, nombresInput, apellidosInput, telefonoInput, registerInput, fechaNacimientoInput, nacionalidadInput);
    clientes = [...clientes, usuario];
    guardarClienteLocalStorage();
    mostrarClientes();
    formularioRegistar.reset();
}

function guardarClienteLocalStorage() {
    localStorage.setItem('clients', JSON.stringify(clientes));
}

export function mostrarClientes() {
    vaciarListaClientes();
    clientes.forEach((cliente) => {
        console.log(cliente);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cliente.numeroIdentificacion}</td>
            <td>${cliente.nombre}</td>
            <td>${cliente.apellido}</td>
            <td>${cliente.telefono}</td>
            <td>${cliente.email}</td>
            <td>${cliente.fechaNamiento}</td>
            <td>${cliente.nacionalidad}</td>
            
            <td><a href="#" class="borrar-cliente" data-id="${cliente.numeroIdentificacion}">
                    <i class="fas fa-trash-alt"></i>
                </a></td>
        `;
        document.querySelector('#lista-clientes tbody').appendChild(row);
    });
    guardarClienteLocalStorage();
}
// funcion que elimina un cliente
export function eliminarCliente(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar-cliente')) {
        cliente = e.target.parentElement.parentElement;
        const clienteId = cliente.querySelector('a').getAttribute('data-id');
        clientes = clientes.filter(cliente => cliente.numeroIdentificacion !== clienteId);
        console.log('eliminado');
        mostrarClientes();
    }
}

function vaciarListaClientes() {
    const listaClientes = document.querySelector('#lista-clientes tbody');
    while (listaClientes.firstChild) {
        listaClientes.removeChild(listaClientes.firstChild);
    }
}







