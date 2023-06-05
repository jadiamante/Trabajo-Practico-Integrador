// Método Resumen

function montoPagar () {

    event.preventDefault();    

let cantidad = parseInt(document.getElementById("input-cantidad").value);
let categoria = document.getElementById("select-tickets").value;

const valor = 200;
valorTotal = 0;

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

        alert("Error! No se ha completado un campo o se ha ingresado un valor inválido");
    }  
    
    document.getElementById("input-total-pagar").value='Monto total a pagar: $' + valorTotal;
}

// Método borrar

function borrar () {
    // form.reset();
    document.getElementById("miForm").reset();
}

// Esperando que presionen los botones
const clickresumen = document.querySelector('#btnresumen');
clickresumen.addEventListener('click', montoPagar);
const clickborrar = document.querySelector('btnborrar');
clickborrar.addEventListener('click', borrar);