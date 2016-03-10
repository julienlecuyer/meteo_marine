/*
 Classe PrevisionStore
 Permet de formater au format JSON un objet Prevision.
 Stocke ensuite l'objet formaté dans un fichier JSON.
*/

function PrevisionStore () {}

PrevisionStore.prototype.formaterDonnees = function(previsionAFormatee) {
	return JSON.stringify(previsionAFormatee);
};

PrevisionStore.prototype.envoyerDonneesAuServeur = function(donnees) {
	// Envoi de données par requête AJAX asynchrone.
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'internal/storePrevision.php', true); // true = asynchrone.
	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhr.send('prevision='+encodeURIComponent(donnees));
	xhr.addEventListener('readystatechange', function() {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			// Add  && xhr.status === 200 in the future.
			return true;
		}
	});
	return false;
};

PrevisionStore.prototype.lireDonneesDuServeur = function(donnees) {
	//TODO
};