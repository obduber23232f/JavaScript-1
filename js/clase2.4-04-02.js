console.log("EJERCICIO 5");
var numero;
numero = prompt("Ingresa un numero");
numero = parseFloat(numero);

if (isNaN(numero)){
	alert("No introdujo un numero");
}
else{
	alert("Bien " +numero);
}