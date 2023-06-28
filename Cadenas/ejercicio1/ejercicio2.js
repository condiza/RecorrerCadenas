/*2.Dada la cadena “Somos SENA”:
c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “E”
d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una
variable contadora para contar el número de veces que se encuentra la letra “o”.
 */


let mensaje = "Somos SENA";
for (let i = 0; i < mensaje.length; i++) {
    if (mensaje[i] =="E") {
        console.log("si contiene la letra ",mensaje[i]);
    }
    
}


let suma = 0;

for (let j = 0; j < mensaje.length; j++) {

    if (mensaje[j]=="o") {
        suma++
    }
    
}
console.log("la letra o esta ",suma," veces")


