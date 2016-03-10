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
	_draw.drawFromJSON('https://raw.githubusercontent.com/julienlecuyer/meteo_marine/master/data/previsions16030906.json');
		
});
