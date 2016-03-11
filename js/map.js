var _map;
var _draw;

$(function() {

	/* Définition des propriétés de la carte de l'API Leaflet */
	 _map = L.map('mapid',{
		center 	: [48.1, -4.4833],
		zoom 	: 8,
		minZoom	: 6,
		maxZoom	: 10
	});

	L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png', {}).addTo(_map);
	_draw = new Draw();
	_draw.fromJSON(_draw.getCurrentJSON());
	//_draw.fromJSON('https://raw.githubusercontent.com/julienlecuyer/meteo_marine/master/parser_grib2/json/2016030706.json');
		
});


var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" 
$('#mapid').bind(mousewheelevt, function(e){
    var evt = window.event || e 
    evt = evt.originalEvent ? evt.originalEvent : evt; 
    var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta 
    if(delta > 0) {
        _map.zoomIn(2);
    }else{
        _map.zoomOut(2);
    }   
});