$(document).ready(function() {

	//definimos filas y columnas
	 iMax = 8;  
	 jMax = 8;
	 cantidad_reinas = 0;
	//creamos el array 
	 f = new Array();

	// 1. primero llenamos el array con ceros.
	for (i=0;i<iMax;i++) {
		f[i]=new Array();
			for (j=0;j<jMax;j++) {
	  			f[i][j]=0;
	 		}
	}

	//f[0][0] = 2;

	//2. recorro el array para incluir las reinas
	for (i=0;i<iMax;i++) {
			for (j=0;j<jMax;j++) {
				//si encuentra un cero, es por que hay espacio para una reina
				if (f[i][j] == 0) {
					//console.log("encontré un espacio en "+i+""+j);
					espaciosreina();
				}
				//console.log("estoy en la posición"+i+""+j);

				// if (i==0 && j==1) {
				// 	espaciosreina();
				// }


	 		}
	}
	// 3. mostramos el array
	for (i=0;i<iMax;i++) {
			for (j=0;j<jMax;j++) {
	  			document.write("[<span class='"+f[i][j]+"'>"+f[i][j]+"</span>]");
	 		}
	 		//hacemos un salto de línea para que se vea como una matriz
	 		document.writeln("<br>");
	}

	function espaciosreina(){				
		//hago ciclos para llenar los 4 cruces con el número 2 (restricciones)
		console.log("creando reina en "+i+" "+j);
	   	for(rc=0;rc<jMax;rc++){
	   		//llena filas
	   		f[i][rc] = 2;
	   		//lena columnas
	   		f[rc][j] = 2;
		}
		console.log("cruz en "+i+""+j);
		//cruz derecha abajo
		df = i;
		dc = j;
		for(rc=i;rc<(jMax-1);rc++){
			df = df+1;
			dc = dc+1;
			f[df][dc] = 2;
		}
		console.log("cruz derecha abajo en "+i+""+j);
		//cruz izquierda abajo
		df = i;
		dc = j;
		for(rc=i;rc>0;rc--){
			df = df+1;
			dc = dc-1;
			f[df][dc] = 2;
		}
		console.log("cruz izquierda abajo en "+i+""+j);
		//cruz derecha arriba
		df = i;
		dc = j;
		for(rf=i;rf>0;rf--){
			df = df-1;
			dc = dc+1;
			f[df][dc] = 2;
		}
		//cruz izquierda arriba
		df = i;
		dc = j;
		for(rf=i;rf>0;rf--){
			df = df-1;
			dc = dc-1;
			f[df][dc] = 2;
		}
		console.log("he creado la reina en "+i+""+j);
		//finalmente vuelvo e indico como 1 la reina y sumo cantidad reinas
		f[i][j] = 1;
		cantidad_reinas++;
		console.log(" ");
	}	
		//le ponemos color para evitar dolor de cabeza
		$(".0").css("background-color", "green");
		$(".1").css("background-color", "red");
		$(".2").css("background-color", "yellow");
});