var _map;

$(function() {

	/* Définition des propriétés de la carte de l'API Leaflet */
	 _map = L.map('mapid',{
		center 	: [48.1, -4.4833],
		zoom 	: 6,
		minZoom	: 3,
		maxZoom	: 12
	});

	L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png', {
		attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(_map);

	var SizeOfIcon = 60;
	var beaufort = [
		L.icon({ iconUrl: 'src/img/beaufort/beaufort0.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort1.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort2.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort3.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort4.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort5.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort6.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort7.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort8.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort9.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort10.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort11.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort12.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon/2]})
	];

	$.getJSON('https://raw.githubusercontent.com/julienlecuyer/meteo_marine/master/js/data.json', function (data){
		$.each(data, function(index, d){
			var power = speedToBeaufort(d.speed);
			L.marker([d.lat, d.long], {
				icon: beaufort[power], iconAngle: d.direction
			}).addTo(_map).bindPopup("Latitude : "+ d.lat +"<br>Longitude : "+ d.long +"<br>Vitesse : "+ d.speed +" Noeuds<br>Force : "+ power +"<br>Direction : "+ d.direction +"°");			
		});
	});
});

/* Modification du pas de zoom */
//Action par la molette 
var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" 
$('#mapid').bind(mousewheelevt, function(e){
    var evt = window.event || e 
    evt = evt.originalEvent ? evt.originalEvent : evt; 
    var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta 
    if(delta > 0) {
        _map.zoomIn(3);
    }
    else{
        _map.zoomOut(3);
    }   
});

//Action par les boutons "+" et "-"
$(".leaflet-control-container").find(".leaflet-control-zoom-in").click(function(){
	_map.zoomIn(3);
});
$(".leaflet-control-zoom-out").click(function(){
	_map.zoomOut(3);
});

/* fonction de conversion de la  vitesse (en noeuds) à sa force (echelle de Beaufort) pour affichier les bons icônes et */
$("#sidebar").css("height", "350");
$("#reduce" ).click(function() {
	if($("#sidebar").css("height") == "0px") {
		$("#sidebar").css("height", "350");
		$("#sidebar").css("bottom", "30px");
	} else
		$("#sidebar").css("height", "0px");
});


function speedToBeaufort (speed){
	var beaufort = 0;
	if (speed < 1) 
		beaufort = 0;
	else if (speed < 4)
		beaufort = 1;
	else if (speed < 7)
		beaufort = 2;
	else if (speed < 11)
		beaufort = 3;
	else if (speed < 17)
		beaufort = 4;
	else if (speed < 22)
		beaufort = 5;
	else if (speed < 28)
		beaufort = 6;
	else if (speed < 34)
		beaufort = 7;
	else if (speed < 41)
		beaufort = 8;
	else if (speed < 48)
		beaufort = 9;
	else if (speed < 56)
		beaufort = 10;
	else if (speed < 64)
		beaufort = 11;
	else if (speed >= 64)
		beaufort = 12;

	return beaufort;
}

/* Gestion des boite parametres, etc */ 
$("#reduce" ).click(function() {
	if($("#sidebar").css("height") == "0px") {
		$("#sidebar").css("height", "");
		$("#sidebar").css("bottom", "30px");
	} else
		$("#sidebar").css("height", "0px");
});

