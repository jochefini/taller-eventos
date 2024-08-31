function mostrarAlerta() {
    alert('Hola! soy el div');
}
document.addEventListener('DOMContentLoaded', function() {
const contenedor = document.querySelector('.contenedor');
    contenedor.addEventListener('click', mostrarAlerta);
});