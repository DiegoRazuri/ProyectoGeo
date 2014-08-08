$(document).ready(function(){

	console.log("codigo cargado");


	//Rendereada del template ** almacenamos datos del servidor y la imprimo en consola

	$.getJSON("consultserv1.php", function(data){
		var base3 = data;
		console.log(base3);

		var itemsTemplate = _.template($("#items-template").html());

		var activarRender = itemsTemplate({conexionTemplate : base3});

		$(".vitrina").html(activarRender);



	});

	$("div.holder").jPages({
      containerID : "itemContainer"
      
    });


});