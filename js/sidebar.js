/* Gestion des boite parametres, edition */ 
$("#sidebar").css("height", "400px");
$("#reduce" ).click(function() {
	if($("#sidebar").css("height") != "400px") {
		$("#sidebar").css("height", "400px");
		$("#result").css("display", "block");
	} else {
		$("#sidebar").css("height", "0px");
		$("#result").css("display", "none");
	}
});