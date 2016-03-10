<?php
	$handle = fopen($argv[1], 'r');

	$mode = 0;
	$array = array();
	$data = array(
				'lat' 	=> 0,
				'long'	=> 0,
				'speed'	=> 0,
				'direction'	=> null
			);

	$i = 0;
	if ($handle) {
		while (!feof($handle)) {
			$buffer = fgets($handle);
			if(strcmp(explode(" ", $buffer)[0],"lon,lat,WIND") == 0) {
				echo "Mode SPEED";
				$mode = 0;
				$buffer = fgets($handle);
			} else if(strcmp(explode(" ", $buffer)[0],"lon,lat,WDIR") == 0) {

				echo "Mode DIR";
				$mode = 1;
				$buffer = fgets($handle);
			}
			if($mode == 0) {
				$val = explode(",", $buffer);
				$data["lat"] 	= $val[1];
				$data["long"]	= $val[0];
				$data["speed"]	= $val[2];
				array_push($array, $data);
			} elseif($mode == 1) {
				$val = explode(",", $buffer);
				$array[$i]["direction"] = $val[2];
				$i++;
			}
		}
		//print_r($array);
		fclose($handle);
	}

	$json = json_encode($array);
	$json = str_replace('\r\n','', $json);
	$jsonfic = fopen("out.json", 'r+');
	fputs($jsonfic, $json);


?>