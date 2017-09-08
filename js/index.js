/*Patron modulo objeto Calculadora que engloba todo el codigo*/
var Calculadora = {
/* Declaracion de variables*/
/*innerHTML -> obtener contenido de la pantalla html*/
	pantalla: document.getElementById("display").innerHTML,
/*Inicializar todas las variables en cero*/
	decimal: 0,
	signo: 0,
/*Cantidad de digitos permitidos en la pantalla*/
	controlen: 8,
	stop: 0,
/*primer numero de la operacion*/
	num1: 0,
/*Identifica la operacion a realizar*/
	opcion: 0,
/*Segundo numero de la operacion*/
	auxnum: 0,
	auxestado: 0,
	auxresultado: 0,
/*Se cargan los valores y eventos a cada tecla*/
	inicio: (
		function(){
			this.EventosClick();
		}
	),
/*animar los botones al hacer click*/
	animacion1: function(tecla){
		document.getElementById(tecla).style.transform="scale(0.9)";
		setTimeout(function() {document.getElementById(tecla).style.transform="scale(1)";}, 200);
	},
/*funcion restar*/
		menos: function(){
			this.animacion1("menos");
			this.num1 = Number(this.pantalla);
			this.pantalla = "",
			this.opcion = 2,
			this.auxestado = 0,
			this.signo = 0,
			this.auxnum = 0,
			this.auxestado = 0,
			this.decimal = 0,
			this.viewdisplay();
	},
/*funcion multiplica*/
		por: function(){
			this.animacion1("por");
			this.num1 = Number(this.pantalla),
			this.pantalla = "",
			this.opcion = 3,
			this.auxestado = 0,
			this.signo = 0,
			this.auxnum = 0,
			this.auxestado = 0,
			this.decimal = 0,
			this.viewdisplay();
	},
/*funcion dividir*/
		dividido: function(){
			this.animacion1("dividido");
			this.num1 = Number(this.pantalla),
			this.pantalla = "",
			this.opcion = 4,
			this.auxestado = 0,
			this.signo = 0,
			this.auxnum = 0,
			this.auxestado = 0,
			this.decimal = 0,
			this.viewdisplay();
	},
/*funcion sumar*/
	mas: function(){
			this.animacion1("mas");
			this.num1 += Number(this.pantalla),
			this.pantalla = "",
			this.opcion = 1,
			this.auxestado = 0,
			this.signo = 0,
			this.auxnum = 0,
			this.auxestado = 0,
			this.decimal = 0,
			this.viewdisplay();
		},
	  /*funcion igual*/
	  igual: function(){
	 	 this.animacion1("igual");
/*Ejecutar segun la operación escogida -- valor de la var "opcion"*/
	 	 switch(this.opcion){
/*Caso suma*/
	 		 case 1:
	 				 if(this.auxestado == 0){
	 					 this.auxnum = Number(this.pantalla),
	 					 this.pantalla = this.num1 + Number(this.pantalla),
	 					 this.auxestado = 1,
	 					 this.num1 = 0;
/*Para sumar el segundo numero ingresado al resultado*/
	 				 }else{
	 					 this.pantalla = Number(this.pantalla)+this.auxnum;
	 				 }
	 			 break;
/*Caso resta*/
	 		 case 2:
	 				 if(this.auxestado == 0){
	 					 this.auxnum = Number(this.pantalla),
	 					 this.pantalla = this.num1 - Number(this.pantalla),
	 					 this.auxestado = 1,
	 					 this.num1 = 0;
/*Para restar el segundo numero ingresado al resultado*/
	 				 }else{
	 					 this.pantalla = Number(this.pantalla)-this.auxnum;
	 				 }
	 			 break;
/*Multiplicacion*/
	 		 case 3:
	 				 if(this.auxestado == 0){
	 					 this.auxnum = Number(this.pantalla),
	 					 this.pantalla = this.num1 * Number(this.pantalla),
	 					 this.auxestado = 1,
	 					 this.num1 = 0;
/*Para multiplicar el segundo numero ingresado al resultado*/
	 				 }else{
	 					 this.pantalla = Number(this.pantalla)*this.auxnum;
	 				 }
	 			 break;
/*Caso division*/
	 		 case 4:
	 				 if(this.auxestado == 0){
	 					 this.auxnum = Number(this.pantalla),
	 					 this.pantalla = this.num1 / Number(this.pantalla),
	 					 this.auxestado = 1,
	 					 this.num1 = 0;
/*Para dividir el segundo numero ingresado al resultado*/
	 				 }else{
	 					 this.pantalla = Number(this.pantalla)/this.auxnum;
	 				 }
	 			 break;
	 		 default:
	 			 break;
	 	 }
	 	 this.viewdisplay();
	  },
/* Se asignan teclas*/
	  EventosClick: function(){
	 	 document.getElementById("0").addEventListener("click",function(){Calculadora.viewnum("0")});
	 	 document.getElementById("1").addEventListener("click",function(){Calculadora.viewnum("1")});
	 	 document.getElementById("2").addEventListener("click",function(){Calculadora.viewnum("2")});
	 	 document.getElementById("3").addEventListener("click",function(){Calculadora.viewnum("3")});
	 	 document.getElementById("4").addEventListener("click",function(){Calculadora.viewnum("4")});
	 	 document.getElementById("5").addEventListener("click",function(){Calculadora.viewnum("5")});
	 	 document.getElementById("6").addEventListener("click",function(){Calculadora.viewnum("6")});
	 	 document.getElementById("7").addEventListener("click",function(){Calculadora.viewnum("7")});
	 	 document.getElementById("8").addEventListener("click",function(){Calculadora.viewnum("8")});
	 	 document.getElementById("9").addEventListener("click",function(){Calculadora.viewnum("9")});
	 	 document.getElementById("on").addEventListener("click",function(){Calculadora.on("")});
	 	 document.getElementById("sign").addEventListener("click",function(){Calculadora.sign()});
	 	 document.getElementById("dividido").addEventListener("click",function(){Calculadora.dividido()});
	 	 document.getElementById("menos").addEventListener("click",function(){Calculadora.menos()});
	 	 document.getElementById("punto").addEventListener("click",function(){Calculadora.punto()});
	 	 document.getElementById("igual").addEventListener("click",function(){Calculadora.igual()});
	 	 document.getElementById("mas").addEventListener("click",function(){Calculadora.mas()});
	 	 document.getElementById("por").addEventListener("click",function(){Calculadora.por()});
	  },
/* funcion vision de calculadora*/
	  viewnum: function(valor){
	 	 this.animacion1(valor);
/*Habilitar los 8 digitos cuando sea un valor negativo*/
	 	 if(this.signo == 1 && this.stop == 0){
	 		 this.controlen += 1,
	 		 this.stop = 1;
	 	 }
/*Habilitar los 8 digitos cuando tenga el punto decimal*/
	 	 if(this.decimal == 1  && this.stop == 0){
	 		 this.controlen += 1,
	 		 this.stop = 1;
	 	 }
	 	 if(this.pantalla.length < this.controlen){
/*Concatenar los valores existentes con el nuevo valor tecleado*/
	 		 if(this.pantalla != "0"){
	 			 this.pantalla += valor;
	 		 }else if(valor != 0){
	 			 this.pantalla = "",
	 			 this.pantalla += valor;
	 		 }
	 		 this.viewdisplay();
	 	 }
	  },
/* funcion limpieza*/
	  on: function(){
	 	 this.animacion1("on");
	 	 this.pantalla = "0",
	 	 this.decimal = 0,
	 	 this.signo = 0,
	 	 this.stop = 0,
	 	 this.controlen = 8
	 	 this.num1 = 0,
	 	 this.auxestado = 0,
	 	 this.auxnum = 0,
	 	 this.opcion = 0,
	 	 this.auxresultado = 0,
	 	 this.viewdisplay();
	  },
/* funcion estado negativo o positivo*/
	  sign: function(){
	 	 this.animacion1("sign");
	 	 if(this.pantalla != 0){
	 		 if(this.signo == 0){
	 			 this.pantalla = "-" + this.pantalla,
	 			 this.signo = 1;
	 		 }else{
	 			 this.pantalla = this.pantalla.slice(1);
	 			 this.signo = 0;
	 		 }
	 	 }
	 	 this.viewdisplay();
	  },
/*funcion decimal*/
	  punto: function(){
	 	 this.animacion1("punto");
	 	 if(this.decimal == 0){
	 		 this.pantalla += ".";
	 	 }
	 	 this.decimal = 1,
	 	 this.viewdisplay();
	  },
/*imprime en pantalla*/
	  viewdisplay: function(){
	 	 if(this.pantalla.toString().length > this.controlen){
	 		 this.pantalla = this.pantalla.toString().substring(0,8);
	 	 }
	 	 document.getElementById("display").innerHTML = this.pantalla;
	  }
	 }
	Calculadora.inicio();
