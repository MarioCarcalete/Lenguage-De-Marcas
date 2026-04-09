function mostrarSolicitud() {
    var asunto = document.getElementById("asunto").value;
    var bloqueSolicitud = document.getElementById("bloqueSolicitud");

    if (asunto === "estado") {
        bloqueSolicitud.style.display = "block";
    } else {
        bloqueSolicitud.style.display = "none";
        document.getElementById("numSolicitud").value = "";
    }
}

function validar() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
    var numSolicitud = document.getElementById("numSolicitud").value;

    var hayError = false;

    if (nombre.trim() === "") {
        hayError = true;
    }

    if (email.trim() === "") {
        hayError = true;
    }

    if (asunto.trim() === "") {
        hayError = true;
    }

    if (mensaje.trim() === "") {
        hayError = true;
    }

    if (asunto === "estado" && numSolicitud.trim() === "") {
        hayError = true;
    }

    if (hayError) {
        document.getElementById("error").style.display = "block";
        return false;
    } else {
        document.getElementById("error").style.display = "none";
        return true;
    }
}