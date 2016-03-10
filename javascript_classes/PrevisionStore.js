/*
 Classe PrevisionStore
 Permet de :
 - formater au format JSON un objet Prevision,
 - envoyer au serveur l'objet formaté,
 - lire depuis le serveur un objet JSON contenant des données de Prevision.
*/

function PrevisionStore () {}

PrevisionStore.createLogDate = function() {
	var now = new Date();
	return now.toLocaleDateString()+' '+now.toLocaleTimeString()+','+now.getUTCMilliseconds();
};

PrevisionStore.formaterDonnees = function(previsionAFormatee) {
	return JSON.stringify(previsionAFormatee);
};

/*
 La donnée à envoyer doit avoir été formatée avec "formaterDonnees".
 Retourne les données reçues par le serveur.
 TODO obtenir le responseText en valeur de retour. PB : asynchronisme.
*/
PrevisionStore.envoyerDonneesAuServeur = function(donnees, dataHolderName) {
	// Envoi de données par requête AJAX asynchrone.
	var dataHolder = document.getElementById('data-holder1');
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'internal/storePrevision.php', true); // true = asynchrone.
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
	xhr.send('prevision='+encodeURIComponent(donnees));

	// ATTENTION ! 
	// La méthode ci-dessous est appelée à chaque étape de traitement de la requête !
	xhr.addEventListener('readystatechange', function() {
		switch(xhr.readyState) {
			case XMLHttpRequest.OPENED:
				dataHolder.innerHTML += PrevisionStore.createLogDate()
				+' La méthode open() a été appelée !<br>';
				break;
			case XMLHttpRequest.HEADERS_RECEIVED:
				dataHolder.innerHTML += PrevisionStore.createLogDate()
				+' La méthode send() a été appelée !<br>';
				break;
			case XMLHttpRequest.LOADING:
				dataHolder.innerHTML += PrevisionStore.createLogDate()
				+' Le serveur traite les informations ...<br>';
				break;
			case XMLHttpRequest.DONE:
				if (xhr.status === 200) {
					dataHolder.innerHTML += PrevisionStore.createLogDate()
					+' Données ont été réceptionnées avec succès par le serveur !<br>';
					document.getElementById(dataHolderName).innerHTML +=
					'<pre>'+xhr.responseText+'</pre>';
					break;
				}
		}
	});
};

PrevisionStore.lireDonneesDuServeur = function(url, dataHolderName) {
	var xhr = new XMLHttpRequest();
	var dataHolder = document.getElementById(dataHolderName);
	xhr.open('GET', url, true);
	xhr.send();

	xhr.addEventListener('readystatechange', function() {
		if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
			dataHolder.innerHTML = '<pre>'+xhr.responseText+'</pre>';
		}
	});
};