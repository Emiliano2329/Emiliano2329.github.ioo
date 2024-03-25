export function showMensajes(mensaje,type){

    Toastify({
    text: mensaje,
    duration: 2000,
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "right", 
    stopOnFocus: true, 
    style: {
      background: type === "success" ? "linear-gradient(to right, #00b09b, #96c93d)" : "red"
    },
    onClick: function(){} 
  }).showToast();

}

