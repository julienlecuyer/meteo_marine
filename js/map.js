var _map;

$(function() {

	/* Définition des propriétés de la carte de l'API Leaflet */
	 _map = L.map('mapid',{
		center 	: [48.1, -4.4833],
		zoom 	: 6,
		minZoom	: 4,
		maxZoom	: 8
	});

	L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png', {}).addTo(_map);

	var b = new Beaufort();
	b.drawFromJSON('https://raw.githubusercontent.com/julienlecuyer/meteo_marine/master/data/previsions16030906.json');
});

/* Modification du pas de zoom */
//Via le scroll 
var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" 
$('#mapid').bind(mousewheelevt, function(e){
    var evt = window.event || e 
    evt = evt.originalEvent ? evt.originalEvent : evt; 
    var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta 
    if(delta > 0) {
        _map.zoomIn(2);
    }
    else{
        _map.zoomOut(2);
    }   
});



//NE FONCTIONNE PAS !!!
//Via les boutons "+" et "-" de la map
/*$(".leaflet-control-zoom-in").click(function(){
	console.log("toto");
	_map.zoomIn(2);
});
$(".leaflet-control-zoom-out").click(function(){
	_map.zoomOut(2);
});*/