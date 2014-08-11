<?php 
function getImagen($url, $rename, $ch)
{
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_BINARYTRANSFER,1);
    $rawdata=curl_exec ($ch);
    curl_close ($ch);

$fp = fopen("$rename.jpg",'w');
fwrite($fp, $rawdata); 
fclose($fp); 

return $rawdata;

}

$ch = curl_init();

if ($_GET['side'] == "l") {
	$image ="http://sctcloud.com.mx/caiman2014/KY001/CAM%20IZQ/0000000001_S.JPEG";
}
if ($_GET['side'] == "c") {
	$image ="http://sctcloud.com.mx/caiman2014/KY001/CAM%20CEN/0000000001_S.JPEG";
}
if ($_GET['side'] == "d") {
	$image ="http://sctcloud.com.mx/caiman2014/KY001/CAM%20DER/0000000001_S.JPEG";
}


$img = getImagen ($image, "imagen", $ch);
header('Content-Type: image/jpeg;');
echo $img;

?>