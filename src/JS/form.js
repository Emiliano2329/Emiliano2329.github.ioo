window.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('formularioRegistro');
  
    //Creamos un listener para el momento en el que en el contenedor de formularioRegistro haya un submit
    form.addEventListener('submit', async (e) => {
      e.preventDefault(); // Previene el comportamiento predeterminado del formulario
  
      // Recolectar los datos del formulario
      const contactData = {
        nombre: form['nombre'].value,
        apellido: form['apellido'].value,
        email: form['correo'].value,
        celular: form['celular'].value
      };
  
      // Enviar los datos al servidor Node.js
      try {
        const response = await fetch('http://localhost:3000/createContact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(contactData)
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.text();
  
        console.log(data);
       
      } catch (error) { 
        // Mostrar mensaje de error al usuario
        console.error('Error:', error);
       
      }
    });
  });
  