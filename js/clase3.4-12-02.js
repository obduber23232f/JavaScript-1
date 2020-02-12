var cadena;
function leer_entero(){
 cadena = prompt("ingresa el valor","50");
 if(cadena==null){
 cadena = 8;
 }else{
 	cadena = parseFloat(cadena);
 	if (isNaN(cadena)) {
 		alert("debes escribir solo numeros");
 		leer_entero();
 	}
 }
}
leer_entero();
console.log(cadena);