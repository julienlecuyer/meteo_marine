<?php
  if(isset($_POST['prevision'])) {
  	//$decodedPrevision = json_decode($_POST['prevision']); OR see below
  	$decodedPrevision = $_POST['prevision']; // compacts informations when displaying with JS.
  	writeJSONToFile($decodedPrevision);
	print_r($decodedPrevision);
  } else {
  	echo 'Error in receiving data';
  }

  function writeJSONToFile($input) {
  	$fileHandler = fopen('previsions.json', 'a');
  	fwrite($fileHandler, $input.PHP_EOL);
  	fclose($fileHandler);
  }
?>