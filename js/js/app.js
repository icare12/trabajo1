  <script>
        // Función para manejar el envío del formulario
        function enviarFormulario(event) {
            event.preventDefault(); // Evita el comportamiento de envío predeterminado

            // Obtener valores de los campos del formulario
            const nameValue = document.getElementById('name').value;
            const emailValue = document.getElementById('email').value;
            const countryValue = document.getElementById('country').value;

            // Crear el cuerpo de la solicitud
            const payload = {
                title: nameValue,
                body: `${emailValue} ${countryValue}`,
                userId: 1, // Este valor es estático ya que el API de prueba lo requiere
            };

            // Realizar la llamada fetch
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'PUT',
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => {
                // Mostrar la respuesta debajo del formulario
                document.getElementById('response').innerText = JSON.stringify(json, null, 2);
            })
            .catch((error) => {
                console.error('Error:', error);
                document.getElementById('response').innerText = 'Ocurrió un error al enviar el formulario.';
            });
        }

        // Añadir el evento de escucha al formulario
        document.getElementById('myForm').addEventListener('submit', enviarFormulario);
    </script>