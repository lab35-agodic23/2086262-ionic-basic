var campoTexto = document.getElementById('InputUsuario')

function mostrarSesion(){
     var Mensaje = document.createElement("p");
     Mensaje.innerHTML = "Sesion iniciada" + campoTexto.value;
     var Contenido = document.getElementById("Contenido");
     Contenido.appendChild(Mensaje);
}

function Registrarme(){
    var Dato = document.createElement("p");
    Dato.innerHTML = "Registro Exitoso" + campoTexto.value;
    var Registr = document.getElementById("Registr");
    Registr.appendChild(Dato);
    
}