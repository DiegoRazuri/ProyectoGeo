$(document).ready(function(){

	console.log("codigo cargado");

	//animacion de la navegacion

	$('.actHover0').hover(
    	function(e)
        {      
        	$("#btnNosotros").find("p").css({color: "white"});
        	$("#btnNosotros").css({backgroundColor: "#0071b5"});
      	},
      	function(e)
      	{
         	$("#btnNosotros").find("p").css({color: "#4d4d4d"});
         	$("#btnNosotros").css({backgroundColor: ""});
      	}
    );

	$('.actHover1').hover(
    	function(e)
        {      
        	$("#subNavProductos").css({display: "block"});
        	$("#btnProductos").find("p").css({color: "white"});
        	$("#btnProductos").css({backgroundColor: "#0071b5"});
      	},
      	function(e)
      	{
         	$("#subNavProductos").css({display: "none"});
         	$("#btnProductos").find("p").css({color: "#4d4d4d"});
         	$("#btnProductos").css({backgroundColor: ""});
      	}
    );

    $('.actHover2').hover(
    	function(e)
        {      
        	$("#subNavServicios").css({display: "block"});
        	$("#btnServicios").find("p").css({color: "white"});
        	$("#btnServicios").css({backgroundColor: "#0071b5"});
      	},
      	function(e)
      	{
         	$("#subNavServicios").css({display: "none"});
         	$("#btnServicios").find("p").css({color: "#4d4d4d"});
         	$("#btnServicios").css({backgroundColor: ""});
      	}
    );

    $('.actHover3').hover(
    	function(e)
        {      
        	$("#subNavSoluciones").css({display: "block"});
        	$("#btnSoluciones").find("p").css({color: "white"});
        	$("#btnSoluciones").css({backgroundColor: "#0071b5"});
      	},
      	function(e)
      	{
         	$("#subNavSoluciones").css({display: "none"});
         	$("#btnSoluciones").find("p").css({color: "#4d4d4d"});
         	$("#btnSoluciones").css({backgroundColor: ""});
      	}
    );

    $('.actHover4').hover(
    	function(e)
        {      
        	$("#subNavSoporte").css({display: "block"});
        	$("#btnSoporte").find("p").css({color: "white"});
        	$("#btnSoporte").css({backgroundColor: "#0071b5"});
      	},
      	function(e)
      	{
         	$("#subNavSoporte").css({display: "none"});
         	$("#btnSoporte").find("p").css({color: "#4d4d4d"});
         	$("#btnSoporte").css({backgroundColor: ""});
      	}
    );

    $('.actHover5').hover(
    	function(e)
        {      
        	$("#btnContacto").find("p").css({color: "white"});
        	$("#btnContacto").css({backgroundColor: "#0071b5"});
      	},
      	function(e)
      	{
         	$("#btnContacto").find("p").css({color: "#4d4d4d"});
         	$("#btnContacto").css({backgroundColor: ""});
      	}
    );

    

	//$("#btnProductos").mouseover(desliz);
	//$("#btnProductos").mouseout(deslizFuera);



	//HOVER EN BOTONES DE CRUZ



	function ap (ico){
		return function(){
			$(ico).css("display","block");
		}
	}

	function ds (ico){
		return function(){
			$(ico).css("display","none");
		}
	}

	var apIcoT = ap(".cruzSelect1");
	var dsIcoT = ds(".cruzSelect1");
	var apIcoR = ap(".cruzSelect2");
	var dsIcoR = ds(".cruzSelect2");
	var apIcoG = ap(".cruzSelect3");
	var dsIcoG = ds(".cruzSelect3");
	var apIcoC = ap(".cruzSelect4");
	var dsIcoC = ds(".cruzSelect4");

	$("#btn1").mouseover(apIcoT);
	$("#btn1").mouseout(dsIcoT);
	$("#btn2").mouseover(apIcoR);
	$("#btn2").mouseout(dsIcoR);
	$("#btn3").mouseover(apIcoG);
	$("#btn3").mouseout(dsIcoG);
	$("#btn4").mouseover(apIcoC);
	$("#btn4").mouseout(dsIcoC);


	//HOVER EN BOTONES DE REDES

	function ap (ico){
		return function(){
			$(ico).css("display","block");
		}
	}

	function ds (ico){
		return function(){
			$(ico).css("display","none");
		}
	}

	var apIcoT = ap(".icoFbcolor");
	var dsIcoT = ds(".icoFbcolor");
	var apIcoR = ap(".icoTcolor");
	var dsIcoR = ds(".icoTcolor");
	var apIcoG = ap(".icoLcolor");
	var dsIcoG = ds(".icoLcolor");
	var apIcoC = ap(".icoYcolor");
	var dsIcoC = ds(".icoYcolor");

	$("#btn5").mouseover(apIcoT);
	$("#btn5").mouseout(dsIcoT);
	$("#btn6").mouseover(apIcoR);
	$("#btn6").mouseout(dsIcoR);
	$("#btn7").mouseover(apIcoG);
	$("#btn7").mouseout(dsIcoG);
	$("#btn8").mouseover(apIcoC);
	$("#btn8").mouseout(dsIcoC);

	//HOVER EN BOTONES DE NAVEGACION

	function ap (ico){
		return function(){
			$(ico).css("display","block");
		}
	}

	function ds (ico){
		return function(){
			$(ico).css("display","none");
		}
	}

	var apIcoT = ap(".icoFlechaSelect1");
	var dsIcoT = ds(".icoFlechaSelect1");
	var apIcoR = ap(".icoFlechaSelect2");
	var dsIcoR = ds(".icoFlechaSelect2");
	var apIcoG = ap(".icoFlechaSelect3");
	var dsIcoG = ds(".icoFlechaSelect3");
	var apIcoC = ap(".icoFlechaSelect4");
	var dsIcoC = ds(".icoFlechaSelect4");

	$("#btnProductos").mouseover(apIcoT);
	$("#btnProductos").mouseout(dsIcoT);
	$("#btnServicios").mouseover(apIcoR);
	$("#btnServicios").mouseout(dsIcoR);
	$("#btnSoluciones").mouseover(apIcoG);
	$("#btnSoluciones").mouseout(dsIcoG);
	$("#btnSoporte").mouseover(apIcoC);
	$("#btnSoporte").mouseout(dsIcoC);

	function abreviar  (){
		
		$(".textosDescrip").each(function(){
			var contenidoPermitido = "";
			var contenido = $(this).text();
			for(i=0; i<= contenido.length; i++){
				if(i<196){
					contenidoPermitido += contenido[i];
					
				}
			}
			if(contenido.length >contenidoPermitido.length){
			contenidoPermitido += "..."
				
			}
			$(this).html(contenidoPermitido);
		});
		
	}
	abreviar();
});