$(function() {

	var _map = L.map('mapid').setView([48.1, -4.4833], 10);

	L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png', {
		attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(_map);

	var SizeOfIcon = 60;
	var beaufort = [
		L.icon({ iconUrl: 'src/img/beaufort/beaufort0.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort1.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort2.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort3.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort4.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort5.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort6.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort7.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort8.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort9.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort10.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort11.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort12.png', iconSize: [SizeOfIcon, SizeOfIcon], iconAnchor: [SizeOfIcon/2, SizeOfIcon]})
	];


	$.getJSON('js/data.json', function (data){
		$.each(data, function(index, d){
			console.log(d);
			L.marker([d.lat, d.long], {icon: beaufort[d.speed], iconAngle: d.direction}).addTo(_map).bindPopup("Latitude : '+ d.lat + '<br>Longitude : '+ d.long + '<br>Vitesse : '+ d.speed + '<br>Direction : '+ d.direction + '°");			
		});
	});
});

//L.marker([48.0, -4.2], {icon: b5, iconAngle: 0}).addTo(_map).bindPopup("Longitude : 48.0<br>Latitude : -4.0<br>Vitesse : 5<br>Direction : 0°");
//L.marker([48.0, -4.0], {icon: b6, iconAngle: 90}).addTo(_map).bindPopup("Longitude : 48.2<br>Latitude : -4.0<br>Vitesse : 5<br>Direction : 0°");
//L.marker([48.2, -4.2], {icon: b7, iconAngle: 0}).addTo(_map).bindPopup("Longitude : 48.0<br>Latitude : -4.2<br>Vitesse : 5<br>Direction : 0°");
//L.marker([48.2, -4.0], {icon: b8, iconAngle: 0}).addTo(_map).bindPopup("Longitude : 48.2<br>Latitude : -4.2<br>Vitesse : 5<br>Direction : 0°");

$("#reduce" ).click(function() {
	if($("#sidebar").css("height") == "0px") {
		$("#sidebar").css("height", "");
		$("#sidebar").css("bottom", "30px");
	} else
		$("#sidebar").css("height", "0px");
});