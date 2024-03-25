import { signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from './firebase.js';


//Aquí lo que hacemos es cerrar la sesión con la cual se había entrado y regresamos al index o mejor docho el login
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.querySelector('#logout');

    if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            signOut(auth).then(() => {
                console.log('Sesión cerrada');
                window.location.href = '../../index.html';
            }).catch((error) => {
                console.error('Error al cerrar sesión', error);
            });
        });
    } else {
        console.error('El botón de logout no se encontró en el DOM.');
    }
});
    