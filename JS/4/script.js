function validacionCorreo(){
    var correo1 = document.getElementById("correo").value;
    var correo2 = document.getElementById("correoValidacion").value;
    
    if(validarCorreo(correo1) && validarCorreo(correo2)){
        if(correo1 == correo2){
            alert("Los correos son iguales")
        } else{
            alert("Los correos DEBEN ser iguales")
        }
    } else{
        alert("El formato de los correos es incorrecto")
    }
}

function validarCorreo(correoElectronico){
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(regex.test(correoElectronico)){
        return true;
    } else{
        return false;
    }
}