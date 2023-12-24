// Código del cliente (JavaScript para el navegador)
function guardarFecha() {
    const fechaInput = document.getElementById('fechaInput').value;

    fetch('http://localhost:3000/fechas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fecha: fechaInput }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Manejar la respuesta del servidor según sea necesario
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
