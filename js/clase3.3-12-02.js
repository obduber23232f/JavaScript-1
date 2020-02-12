var nota;
var acum_nota=0;
var cant_notas=0;

function leer_entero(){
	nota = parseFloat(prompt("Ingrese la nota ")+ cant_notas);
	if(isNaN(nota)){
		alert("en las notas deben ser solo numeros ");
	}
	else{
		let bien="bien";
		acum_nota = acum_nota +nota;
		console.log(bien);
	}
}

while(confirm("Desea ingresar una nota?")){
	cant_notas++;
	leer_entero();
}
//calculo

console.log("la suma de las notas es :"+acum_nota);
var promedio= acum_nota / cant_notas;
console.log("El promedio es:" +promedio)