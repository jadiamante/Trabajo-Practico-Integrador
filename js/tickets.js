const clickresumen = document.querySelector('#btnresumen');
const clickborrar = document.querySelector('#btnborrar');

// Método Resumen

function montoPagar () {

    event.preventDefault();    

let cantidad = parseInt(document.getElementById("input-cantidad").value);
let categoria = document.getElementById("select-tickets").value;

const valor = 200;
valorTotal = 0;
    
    // Validacion de campos en formulario
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    const emailValido=email => {
        return /^[^/s@]+@[^/s@]+\.[^/s@]+$/.test(email);
    }

    if (nombre.value==="") {
        alert('Por favor, ingrese nombre');
        nombre.focus();
        return;
    }

    if (apellido.value==="") {
        alert('Por favor, ingrese apellido');
        apellido.focus();
        return;
    }

    if (email.value==="") {
        alert('Por favor, ingrese email');
        email.focus();
        return;
    }

    if (!emailValido(email.value)){
        alert('Por favor, ingrese un correo electronico válido');
        return;
    }
    
    if (cantidad <= 0 ) {
        alert('Por favor, ingrese una cantidad valida');
        document.getElementById(input-cantidad).focus();
        return;
    }
    

    if (cantidad > 0 && categoria > 0 && categoria <= 3) {

        // El valor 1 del select representa al primer elemento Estudiante
        if (categoria == 1) {
            valorEntrada = valor * 0.2;
            valorTotal = valorEntrada * cantidad;

        // El valor 2 del select representa al segundo elemento Trainee
        }else if (categoria == 2) {
            valorEntrada = valor * 0.5;
            valorTotal = valorEntrada * cantidad;
        
        // El valor 3 del select representa al tercer elemento Junior
        }else if (categoria == 3) {
            valorEntrada = valor * 0.85;
            valorTotal = valorEntrada * cantidad;
        } 
    } else {

        alert("Error! No se ha seleccionado una categoria o se ha ingresado un valor inválido en cantidad");
        return;
    }  
    
    document.getElementById("input-total-pagar").value='Total a pagar: $' + valorTotal;
    return;
}

// Método borrar

function borrar () {
    event.preventDefault();    
    // form.reset();
    document.getElementById("formulario-tickets").reset();
    return;
}

// Esperando a los botones

clickresumen.addEventListener('click', montoPagar);
clickborrar.addEventListener('click', borrar);