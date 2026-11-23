function validar(){

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
     var contraseña1 = document.getElementById("contraseña1").value;
    var contraseña2 = document.getElementById("contraseña2").value;
    var direccion = document.getElementById("direccion").value;
    var edad = document.getElementById("edad").value;
    var estudios = document.getElementById("estudios").value;
    var checkbox = document.getElementById("acepto").checked;

    var hayerror = false;

    // campos vacíos
    if (nombre.trim() === "") {
        hayerror = true;
    }

    if (apellido.trim() === "") {
        hayerror = true;
    }
     if (contraseña1.trim() === "" || contraseña2.trim() === "") {
        hayerror = true;
    }

    if (direccion.trim() === "") {
        hayerror = true;
    }

    if (edad.trim() === "") {
        hayerror = true;
    }

    if (estudios === "") {
        hayerror = true;
    }

    // validaciones específicas
    if (nombre.trim().length < 2) {
        hayerror = true;
    }

    if (apellido.trim().length < 10) {
        hayerror = true;
    }

    var edadnum = Number(edad);
    if (edadnum < 18) {
        hayerror = true;
    }

    if (!checkbox) {
        hayerror = true;
    }



    if(!validarContraseña()){
        hayerror=true;
    }

    // mostrar error
    if (hayerror) {
        document.getElementById("error").style.display = "block";
        return false;
    } else {
        document.getElementById("error").style.display = "none";
        return true;
    }
}

function validarContraseña(){
    var contraseña1 = document.getElementById("contraseña1").value;
    var contraseña2 = document.getElementById("contraseña2").value;

    var fallo=false;



    if(contraseña1!==contraseña2){
        fallo = true;
    }

    if (fallo) {
        document.getElementById("fallo").style.display = "block";
        return false;
    } else {
        document.getElementById("fallo").style.display = "none";
        return true;
    }

}