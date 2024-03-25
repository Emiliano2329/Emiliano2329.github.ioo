document.getElementById('formularioRegistro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtén los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const celular = document.getElementById('celular').value;
    
    // Envía los valores al servidor
    fetch('http://localhost:3000/addContact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, apellido, correo, celular }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Aquí actualizas tu frontend con la nueva lista de contactos
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });
  