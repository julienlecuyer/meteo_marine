<?php
	echo "==> Extraction donnees vents\n";
	exec("wgrib2\wgrib2 ".$argv[1]." -wind_speed data/out -wind_dir data/out");
	echo "==> Ecriture donnees WIND\n";
	exec('wgrib2\wgrib2 data/out -s | findstr /R /C":WIND:10[ ]*m[ ]above[ ]ground" | wgrib2\wgrib2 -i data/out -spread data/in.txt');
	echo "==> Ecriture donnees WDIR\n";
	exec('wgrib2\wgrib2 data/out -s | findstr /R /C":WDIR:10[ ]*m[ ]above[ ]ground" | wgrib2\wgrib2 -i data/out -append -spread data/in.txt');



	ini_set('memory_limit', '-1');
	$handle = fopen("data/in.txt", 'r');
	$date = "";
	$mode = 0;
	$array = array();
	$data = array(
				'y' 	=> 0,
				'x'	=> 0,
				's'	=> 0,
				'd'	=> null
			);

	$i = 0;
	if ($handle) {
		echo "==> Lecture fichier :\n";
		while (!feof($handle)) {
			$buffer = fgets($handle);
			if(strcmp(explode(" ", $buffer)[0],"lon,lat,WIND") == 0) {
				echo "Mode SPEED\n";
				$mode = 0;
				$buffer = fgets($handle);
			} else if(strcmp(explode(" ", $buffer)[0],"lon,lat,WDIR") == 0) {
				echo "Mode DIR\n";
				$mode = 1;
				$date = explode("d=", $buffer)[1];
				$buffer = fgets($handle);
			}
			if($mode == 0) {
				$val = explode(",", $buffer);
				
				$data["y"] = number_format((float)$val[1], 1, '.', '');
				$data["x"]	= number_format((float)$val[0], 1, '.', '');
				$data["s"]	= $val[2];
				array_push($array, $data);
			} elseif($mode == 1) {
				$val = explode(",", $buffer);
				//var_dump($val);
				if(strcmp($val[0], "") != 0) {
					$array[$i]["d"] = $val[2];
					$i++;
				}
			}
		}
		echo "==> Fermeture fichier\n";
		fclose($handle);
	}
	echo "==> JSON ENCODE";
	$json = json_encode($array);
	echo "<Correction des caractères speciaux>\n";
	$json = str_replace('\r\n','', $json);
	$json = str_replace('\n','', $json);
	echo "==> Ecriture fichier json";
	$jsonfic = fopen("json/".explode(" ", $date)[0].".json", 'w+');
	fputs($jsonfic, $json);
	echo "FIN DU PROGRAMME";
?>