/*3.Dada la cadena “Javascript es genial” recorra la cadena usando ciclo for y muestre por cuantas palabras está
compuesta la cadena. Como sugerencia se puede basar en el modelo del ejercicio 2 literal d.
 */


let palabra ="Javascript es genial" //prompt("ingrese palabras").toLowerCase();
let acumulador=1;

for (let index = 0; index < palabra.length; index++) {
    if(palabra[index]!=' ' && palabra[index-1]==' '){
        acumulador++
    }
}

if (palabra==""){
    console.log("la cadena no contiene palbras");
}else{
    if (palabra [0]==" ") {
        console.log("la cadena tiene ",acumulador-1," palabras")
        
    }else{
        console.log("la cadena tiene",acumulador,"palabras")
    }
}
