var promedio,aruba,mexico,miami,londres,suiza,cedula,nombre,destino,genero,precio,descuento,impuesto,impuesto1,impuesto0,descuento1;
aruba = 25000;
mexico = 45700;
miami = 50000;
londres = 140000;
suiza  = 220000;
descuento = 1500;
impuesto1 = 3000;
var cantidad_pasajero = 0;
var ingresos = 0;



function solicitar_datos(){
	cantidad_pasajero++;
	do{
		nombre = prompt("Ingrese su Nombre:");
		if(nombre == null || nombre.length === 0){
			alert("¡¡Debes Ingresar tu Nombre!!");
		}
	}while(nombre == null || nombre.length === 0);

	do{
       cedula = parseInt(prompt("Ingrese su Cedula:"));
       if(isNaN(cedula) || cedula < 1){
       	alert("¡¡Debes Ingresar tu Cedula (en Numeros Positivos y Mayores de 0)!!");
       }
	}while(isNaN(cedula) || cedula < 1);

	do{
       genero = prompt("Ingrese su Sexo: Femenino o Masculino");
       if (genero == null || genero.length === 0) {
       	alert("¡¡Debes Ingresar tu Genero!!");
       }
	}while(genero == null || genero.length === 0);

	do{
		destino = prompt("Ingrese su Destino:\nAruba\nMexico\nMiami\nLondres\nSuiza");
		if (destino == null || destino.length === 0) {
			alert("¡¡Debes Ingresar tu Destino!!");
		}

	}while(destino == null || destino.length === 0)
	
}

function mostrar_datos(){
	minuscula = nombre.charAt(0).toUpperCase()+nombre.slice(1);
	minuscula1 = destino.charAt(0).toUpperCase()+destino.slice(1);
	minuscula2 = genero.charAt(0).toUpperCase()+genero.slice(1);
	console.log("El Nombre del Pasajero es: " + minuscula);
	console.log("El Destido Escogido es: " + minuscula1);
	alert("El Nombre del Pasajero es :  " + minuscula);
	alert("El Destido Escogido es :  " + minuscula1);

	if (minuscula1 == "Aruba" && minuscula2 == "Femenino") {
		precio = aruba-(aruba*0.15);
		ingresos = ingresos+precio;

	}else if (minuscula1 == "Aruba" && minuscula2 == "Masculino") {
		precio = aruba-(aruba*0.10);
		ingresos = ingresos+precio;
	}

	if (minuscula1 == "Mexico" && minuscula2 == "Femenino") {
		precio = mexico-(mexico*0.15);
		ingresos = ingresos+precio;

	}else if (minuscula1 == "Mexico" && minuscula2 == "Masculino") {
		precio = mexico-(mexico*0.10);
		ingresos = ingresos+precio;
	}

	if (minuscula1 == "Miami" && minuscula2 == "Femenino") {
		precio = miami-(miami*0.15);
		ingresos = ingresos+precio;

	}else if (minuscula1 == "Miami" && minuscula2 == "Masculino") {
		precio = miami-(miami*0.10);
		ingresos = ingresos+precio;
	}

	if (minuscula1 == "Londres" && minuscula2 == "Femenino") {
		precio = londres-(londres*0.15);
		impuesto = 10000+(precio*0.5);
		ingresos = ingresos+precio+impuesto;

	}else if (minuscula1 == "Londres" && minuscula2 == "Masculino") {
		precio = londres-(londres*0.10);
		impuesto = 10000+(precio*0.5);
		ingresos = ingresos+precio+impuesto;
	}

	if (minuscula1 == "Suiza" && minuscula2 == "Femenino") {
		precio = suiza-(suiza*0.15);
		impuesto = 10000+(precio*0.5);
		ingresos = ingresos+precio+impuesto;

	}else if (minuscula1 == "Suiza" && minuscula2 == "Masculino") {
		precio = suiza-(suiza*0.10);
		impuesto = 10000+(precio*0.5);
		ingresos = ingresos+precio+impuesto;
	}

	if (cedula % 2 == 0) {
		descuento1 = precio-descuento;
		ingresos = ingresos-descuento1;

	}else{
		impuesto0 = precio+impuesto1;
		ingresos = ingresos+impuesto0;


	} 
	if (cantidad_pasajero > 0) {
		promedio = ingresos/cantidad_pasajero;
		console.log("La Cantidad de Pasajeros Registrados es: " +cantidad_pasajero);
		console.log("El Ingreso de la Agencia es: " +ingresos+ "Bs.");
		console.log("El Promedio de Ingreso de la Agencia es: " +promedio+ "Bs.");
		alert("La Cantidad de Pasajeros Registrados es: " +cantidad_pasajero);
		alert("El Ingreso de la Agencia es: " +ingresos+ "Bs.");
		alert("El Promedio de Ingreso de la Agencia es: " +promedio+ "Bs.");

	}else{
		alert("No se registraron pasajeros");
		console.log("No se registraron pasajeros");
	}
}