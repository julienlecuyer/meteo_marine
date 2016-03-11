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
	var self = this;
	$.getJSON(nomDuFichier, function (data){
		$.each(data, function(index, d){
			var power = self.speedToBeaufort(d.s);
			L.marker([d.y, d.x], {
				icon: self.beaufortIcon[power], 
				iconAngle: d.d
			}).addTo(_map).bindPopup("Latitude : "+ d.y +"<br>Longitude : "+ d.x +"<br>Vitesse : "+ d.s +" Noeuds<br>Force : "+ power +"<br>Direction : "+ d.d +"°");			
		});
	});
};

//fonction dessinant à partir du  JSON  
Draw.prototype.fromCurrentJSON = function (){
	var d = new Date();
}

Draw.prototype.getZone = function(){
	
	var NW = _map.getBounds().getNorthWest();
	var SE = _map.getBounds().getSouthEasth();
	
	return zone;
}

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