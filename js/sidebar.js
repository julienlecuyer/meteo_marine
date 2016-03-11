/* fonction de conversion de la  vitesse (en noeuds) à sa force (echelle de Beaufort) pour afficher les bons icônes  */
$("#sidebar").css("height", "480px");

$("#reduce" ).click(function() {
	if($("#sidebar").css("height") != "480px"){
		$("#sidebar").css("height", "480px");
		$("#sidebar").css("bottom", "30px");
		$("#result").css("display", "block");
	}else{
		$("#sidebar").css("height", "0px");
		$("#result").css("display", "none");
	}
});