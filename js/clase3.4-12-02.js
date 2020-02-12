var cadena;
function leer_entero(){
 cadena = prompt("ingresa el valor","50");
 if(cadena==null){
 cadena = 8;
 }
}
leer_entero();
console.log(cadena);