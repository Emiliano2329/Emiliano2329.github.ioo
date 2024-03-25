//Importamos todo lo que vayamos a usar en el main del login
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import{auth} from '../../app/firebase.js'
import '../../app/loginform.js'
import '../../app/logout.js'
import '../../app/microsoftlogin.js'

//Este se dispara cada que el usuario es autenticado
onAuthStateChanged(auth, async (user) =>{
    console.log(user)
})




