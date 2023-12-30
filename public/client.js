// Código del cliente (JavaScript para el navegador)
function guardarFecha(fecha) {

    fetch('http://localhost:3000/fechas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fecha }),
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


const form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);

    const fecha = data.get("date");

    console.log(fecha);

    guardarFecha(fecha)
})