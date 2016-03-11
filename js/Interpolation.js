/*
 Classe Interpolation
 Calcule l'interpolation de deux vecteurs avec un facteur
*/

function Interpolation (vit1, ang1, vit2,  ang2, factor) {
	this.uVector;
	this.vVector;
	this.speed;
	this.angle;
	this.calcule(vit1, ang1, vit2,  ang2, factor);
}

Interpolation.prototype.getU = function() {
	return this.uVector;
};

Interpolation.prototype.getV = function() {
	return this.vVector;
};

Interpolation.prototype.getSpeed = function() {
	return this.speed;
};

Interpolation.prototype.getAngle = function() {
	return this.angle;
};

/*
 Retourne 4 valeurs :
 - speed,
 - angle,
 - u vector et,
 - v vector.
*/
Interpolation.prototype.calcule = function(vit1, ang1, vit2,  ang2, factor) {
	const Pi=3.1416;	
	var xR, yR, vRes,theta, thetaDeg;
	var x1=vit1*Math.cos(ang1*Pi/180.0);
	var x2=vit2*Math.cos(ang2*Pi/180.0);

	var y1=vit1*Math.sin(ang1*Pi/180.0);
	var y2=vit2*Math.sin(ang2*Pi/180.0);

	xR=x1*(1-factor)+x2*factor;
	yR=y1*(1-factor)+y2*factor;

	if ( xR < 0.0  && xR > -0.0001  ){
	      xR = 0.0;
	}

	if ( yR < 0.0  && yR > -0.0001  ) {
	      yR = 0.0;
	}

	if (xR == 0.0  && yR == 0.0 ){
		theta = 0.0;	
	} else if (yR==0.0 && xR<0) {
	       theta = Pi;
	} else {
		theta = Math.atan (yR/xR);		//calcul de l'angle en radian
	}
	
	if (xR <0.0){
		this.angle=(theta+Pi)*180.0/Pi;	//conversion en degrés
	}else{
		this.angle=theta*180.0/Pi;		//conversion en degrés
	}

	this.speed   = ( Math.sqrt(Math.pow(xR , 2.0) + Math.pow(yR, 2.0)) );	//valeur de la résultante
	this.uVector = xR;
	this.vVector = yR;
};

Interpolation.prototype.afficherDetails = function() {
	console.log('Speed: '+inter.getSpeed());
	console.log('Angle: '+inter.getAngle());
	console.log('V vector: '+inter.getV());
	console.log('U vector: '+inter.getU());
};
