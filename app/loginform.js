//Importamos los módulos para la autenticación del usuario con correo electrónico
    import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
    import { auth }  from './firebase.js'
 //Este import es para los toasts que avisarán si algo sale bien o mal
    import { showMensajes } from './showMensajes.js'

    //Constante donde guardaremos lo que pase en el login-form del index.html
    const loginform = document.querySelector('#login-form')

    //uso "async" por que es una propuesta más nueva que las promesas normales 
    //abre un listener para cuando exista un evento de tipo "submit"
    loginform.addEventListener('submit', async (e) =>{
        e.preventDefault()

        //Guardamos en email y pas los datos del usuario
        const email = loginform['login-email'].value
        const pas = loginform['login-password'].value
        

        //en un bloque try-catch hacemos que se autentifique al usuario
        try{
            const credentials = await signInWithEmailAndPassword(auth, email, pas)
            console.log(credentials)
            localStorage.setItem('userEmail', credentials.user.email); // Guarda el email en localStorage
            localStorage.setItem('userUID', credentials.user.uid);
            // Aquí es donde rediriges al usuario a registros.html
            window.location.href = "../src/Registros.html"; // Redirigimos al usuario a los registros si es que se logró autentificar

            //Si no se autentifica o existen errores lo marcará en pantalla 
        }catch(error){
            if(error.code === "auth/wrong-password"){
                showMensajes('Contraseña incorrecta')
            }else if(error.code === 'auth/user-not-found'){
                showMensajes('Usuario no encontrado')
            }else{
                showMensajes('Algo salió mal')
            }
        }
    })
    