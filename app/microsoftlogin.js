// Importa las funciones necesarias de los SDKs de Firebase para utilizarlas con Microsoft
import { OAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from './firebase.js'; 
import { showMensajes } from './showMensajes.js'; 


const microsoftButton = document.querySelector('#MicrosoftLoginn');

// Agrega un evento 'click' al botón de Microsoft.
microsoftButton.addEventListener('click', async () => {
    // Crea una nueva instancia del proveedor de autenticación de Microsoft.
    const provider = new OAuthProvider('microsoft.com');

    try {
        // Realiza la autenticación con una ventana emergente (popup) y espera la respuesta.
        const result = await signInWithPopup(auth, provider);
        // Extrae la credencial y el usuario .
        const credential = result.credential;
        const user = result.user;

        // Almacena el correo electrónico y el UID del usuario en el almacenamiento local del navegador.
        localStorage.setItem('userEmail', user.email)
        localStorage.setItem('userUID', user.uid);
        // Muestra un mensaje de bienvenida al usuario.
        showMensajes("Bienvenido " + user.email, "success");

        // Espera 2 segundos antes de redirigir al usuario a la página de registros.
        setTimeout(() => {
            window.location.href = "Registros.html";
        }, 2000);

        // Registra en la consola el objeto del usuario y la credencial (principalmente para depuración).
        console.log(user);
        console.log(credential);
    } catch (error) {
        // Si hay un error en el proceso de inicio de sesión, muestra un mensaje y registra el error en la consola.
        showMensajes("Error durante el inicio de sesión de Microsoft: " + error.message, "error");
        console.error('Error during Microsoft sign-in:', error);
    }
});

// Selecciona el botón de cierre de sesión en el documento HTML.
const logoutButton = document.querySelector('#logout');

// Agrega un evento 'click' al botón de cierre de sesión.
logoutButton.addEventListener('click', () => {
    // Realiza el cierre de sesión de Firebase.
    signOut(auth).then(() => {
        // Elimina el correo electrónico del almacenamiento local y muestra un mensaje de éxito.
        localStorage.removeItem('userEmail');
        showMensajes("Has cerrado sesión exitosamente.", "success");
        // Redirige al usuario a la página de inicio de sesión.
        window.location.href = "index.html";
    }).catch((error) => {
        // Si hay un error en el proceso de cierre de sesión, muestra un mensaje y registra el error en la consola.
        showMensajes("Error al cerrar sesión: " + error.message, "error");
        console.error('Error during sign-out:', error);
    });
});
