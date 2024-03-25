import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
    import {auth}  from './firebase.js'
    import { showMensajes } from './showMensajes.js'

const signupform = document.querySelector('#signup-form')

signupform.addEventListener('submit', async (e) =>{

    e.preventDefault()

   const email = signupform['signup-email'].value
    const pas = signupform['signup-password'].value

    console.log(email, pas)

    
    try{
        const userCredentials = await createUserWithEmailAndPassword(auth, email, pas)
        console.log(userCredentials)

        showMensajes("Bienvenido   "+ userCredentials.user.email, "success" )
        
    }catch(error){

        if(error.code === 'auth/email-already-in-use'){
            showMensajes("E-mail en uso")
        }else if(error.code ==='auth/invalid-email'){
            showMensajes(' No ha ingresado un e-mail')
        }else if(error.code ==='auth/weak-password'){
            showMensajes('Tu contraseña es débil')
        }else if(error.code){
            showMensajes('Algo salió mal')
        }
    } 
})