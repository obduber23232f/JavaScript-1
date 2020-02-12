var nombre = prompt("Ingrese sum nombre");

do{
	cantidad= parseInt(prompt("Ingresa un numero"));
	if(isNaN(cantidad)){
		alert("Solo numeros positivos");
	}
}while(!isNaN(cantidad));