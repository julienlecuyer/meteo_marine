var _map = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png', {
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(_map);


var b5 = L.icon({
    iconUrl: 'src/img/beaufort/beaufort5.png',
    iconSize:     [100, 100],
    iconAnchor:   [50, 50]
});

L.marker([51.5, -0.09], {icon: b5, iconAngle: -20}).addTo(_map).bindPopup("Longitude : 45<br>Latitude : 23<br>Noeud : 5");

$( "#reduce" ).click(function() {
  $("#sidebar").css("height", "0px");
});