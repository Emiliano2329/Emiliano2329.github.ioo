//Esto lo que hace es poner el email del usuario en la navbar cuando se inicia la sesión
window.addEventListener('DOMContentLoaded', (event) => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        const navbarBrand = document.querySelector('.navbar-brand');
        navbarBrand.textContent += `  ${userEmail}`; // Añade el email al texto de la barra de navegación
    }
});
