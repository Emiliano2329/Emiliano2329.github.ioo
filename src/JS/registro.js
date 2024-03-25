//Aquí hacemos toda la parte del frontend para así mandarlo al server node.js
document.addEventListener('DOMContentLoaded', function () {
  const formularioRegistro = document.getElementById('formularioRegistro');
  const infoContactoDiv = document.getElementById('infoContacto');

  // Esta función obtiene el UID del usuario almacenado y checa los datos que haya en el registro
 // Define la función cargarContactos.
function cargarContactos() {
  // Obtiene el UID del usuario del almacenamiento local del navegador.
  const userUID = localStorage.getItem('userUID'); 

  // Hace una solicitud GET al servidor en la ruta '/getContacts' pasando el UID del usuario.
  fetch(`http://localhost:3000/getContacts?userUID=${encodeURIComponent(userUID)}`)
    // Espera la respuesta del servidor y la convierte de JSON a un objeto JavaScript.
    .then(response => response.json())
    // Una vez que se recibe la respuesta y se parsea el JSON, esta función anónima es llamada con los contactos.
    .then(contactos => {
      // Limpia el contenido HTML interno del elemento infoContactoDiv, preparándolo para los nuevos datos.
      infoContactoDiv.innerHTML = ''; 

      // Itera sobre el array de contactos recibidos del servidor.
      contactos.forEach(contacto => {
        // Crea un nuevo elemento div para cada contacto.
        const contactoDiv = document.createElement('div');
      
        contactoDiv.className = 'contacto-entry';
        // Establece el contenido HTML interno del div, llenándolo con la información del contacto.
        contactoDiv.innerHTML = `
          <p>Nombre: ${contacto.nombre}</p>
          <p>Apellido: ${contacto.apellido}</p>
          <p>Correo: ${contacto.correo}</p>
          <p>Celular: ${contacto.celular}</p>
        `;
        // Añade el nuevo div de contacto como hijo del elemento infoContactoDiv.
        infoContactoDiv.appendChild(contactoDiv);
      });
    })
    // error
    .catch(error => {
      // Imprime el error en la consola del navegador.
      console.error('Error al cargar los contactos:', error);
    });
}

//Esta función manda al server los datos del registro
  formularioRegistro.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const celular = document.getElementById('celular').value;
    const userUID = localStorage.getItem('userUID'); 
    
    fetch('http://localhost:3000/addContact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, apellido, correo, celular, userUID }), // Incluye el UID del usuario
    })
    .then(response => response.json())
    .then(() => {
      cargarContactos(); // Recargar la lista de contactos
      formularioRegistro.reset();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });

  cargarContactos(); // Carga inicial de contactos cuando se abre la página
});
