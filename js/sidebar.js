/* fonction de conversion de la  vitesse (en noeuds) à sa force (echelle de Beaufort) pour affichier les bons icônes et */
$("#sidebar").css("height", "350");
$("#reduce" ).click(function() {
	if($("#sidebar").css("height") != "400px") {
		$("#sidebar").css("height", "350");
		$("#sidebar").css("bottom", "30px");
		
	} else
		$("#sidebar").css("height", "0px");
});