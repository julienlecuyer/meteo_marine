/*
 Classe Beaufort
 Définit et dessine tous les objets icone de beaufort
*/
function Draw () {
	this.SizeOfIcon = 30;
	this.beaufortIcon = [
		L.icon({ iconUrl: 'src/img/beaufort/beaufort0.png', iconSize: [this.SizeOfIcon, this.SizeOfIcon], iconAnchor: [this.SizeOfIcon/2, this.SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort1.png', iconSize: [this.SizeOfIcon, this.SizeOfIcon], iconAnchor: [this.SizeOfIcon/2, this.SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort2.png', iconSize: [this.SizeOfIcon, this.SizeOfIcon], iconAnchor: [this.SizeOfIcon/2, this.SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort3.png', iconSize: [this.SizeOfIcon, this.SizeOfIcon], iconAnchor: [this.SizeOfIcon/2, this.SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort4.png', iconSize: [this.SizeOfIcon, this.SizeOfIcon], iconAnchor: [this.SizeOfIcon/2, this.SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort5.png', iconSize: [this.SizeOfIcon, this.SizeOfIcon], iconAnchor: [this.SizeOfIcon/2, this.SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort6.png', iconSize: [this.SizeOfIcon, this.SizeOfIcon], iconAnchor: [this.SizeOfIcon/2, this.SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort7.png', iconSize: [this.SizeOfIcon, this.SizeOfIcon], iconAnchor: [this.SizeOfIcon/2, this.SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort8.png', iconSize: [this.SizeOfIcon, this.SizeOfIcon], iconAnchor: [this.SizeOfIcon/2, this.SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort9.png', iconSize: [this.SizeOfIcon, this.SizeOfIcon], iconAnchor: [this.SizeOfIcon/2, this.SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort10.png', iconSize: [this.SizeOfIcon, this.SizeOfIcon], iconAnchor: [this.SizeOfIcon/2, this.SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort11.png', iconSize: [this.SizeOfIcon, this.SizeOfIcon], iconAnchor: [this.SizeOfIcon/2, this.SizeOfIcon/2]}),
		L.icon({ iconUrl: 'src/img/beaufort/beaufort12.png', iconSize: [this.SizeOfIcon, this.SizeOfIcon], iconAnchor: [this.SizeOfIcon/2, this.SizeOfIcon/2]})
	];
}


Draw.prototype.fromJSON = function(nomDuFichier) {
	console.log("toto");
	var self = this;
	$.getJSON(nomDuFichier, function (data){
		$.each(data, function(index, d){
				var power = self.speedToBeaufort(d.s);
				L.marker([d.y, d.x], {
					icon: self.beaufortIcon[power], 
					iconAngle: d.d
				}).addTo(_map).bindPopup("Latitude : "+ d.y +"<br>Longitude : "+ d.x +"<br>Vitesse : "+ d.s +" Noeuds<br>Force : "+ power +"<br>Direction : "+ d.d +"°");			
			
			console.log(d);
		});
	});
};

//fonction dessinant à partir du  JSON du jour 
Draw.prototype.getCurrentJSON = function (){
	/*var d 		= new Date();
	var year 	= d.getFullYear();
	var month 	= (d.getMonth()+1);
	var day 	= d.getDate();
	var hour;
	var isBissextile = new Date(year,1,1).getMonth() == new Date(year,1,29).getMonth() ? true : flase;

	if (d.getHours() < 6) hour = "00"
	else if (d.getHours() < 12) hour = "06"
	else if (d.getHours() < 18)	hour = "12"
	else hour = "18"

	if (hour === "00" )day = day-1;

	if (isBissextile)*/
	
	//return 'http://dev.radarvirtuel.com/jlecuyer/parser_grib2/parser.php?latNW='+_map.getBounds().getNorthWest().lat+'&lngNW='	+_map.getBounds().getNorthWest().lng+'&latSE='	+_map.getBounds().getSouthEast().lat+'&lngSE='	+_map.getBounds().getSouthEast().lng+'';
	//return 'https://raw.githubusercontent.com/julienlecuyer/meteo_marine/master/data/previsions2016030906.json';
	return 'http://dev.radarvirtuel.com/jlecuyer/parser_grib2/parser.php?latNW=42&lngNW=32&latSE=23&lngSE=34'
}


/*Draw.prototype.isInZone = function(point){
	return (point.lat < _map.getBounds().getNorthWest().lat && point.lng > _map.getBounds().getNorthWest().lng && point.lat > _map.getBounds().getSouthEast().lat  && point.lng < _map.getBounds().getSouthEast().lng)
}*/

// fonction de conversion de la  vitesse (en noeuds) à sa force (echelle de Beaufort) pour afficher les bons icônes 
Draw.prototype.speedToBeaufort = function(speed) {
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
};