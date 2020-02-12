var nota;
var acum_nota=0;
var cant_notas=0;

while(confirm("Desea ingresar una nota?")){
	cant_nota++;
	nota = parseFloat(prompt("Ingrese la nota" +cant_nota))
	if(isNaN(nota)){
		alert("en las notas deben ser solo numeros ");
	}
	else{
		acum_nota = acum_nota +nota;
	}
}
//calculo

console.log("la suma de las notas es :"+acum_nota);
var promedio= acum_nota / cant_notas;
console.log("El promedio es:" +promedio)