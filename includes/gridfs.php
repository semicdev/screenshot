<?php
ini_set('memory_limit', '2000M');
set_time_limit ( 3600 );
include("foto.php");

$m = new MongoClient();
$db = $m->geo;
$gridFS = $db->getGridFS();

$id = 127;

// store
//$gridFS->storeFile('C:\mongodb\video.mp4', array("_id" => $id,"carretera" => "est004"));




//$response = $gridFS->storeBytes($post['foto'], array('carretera' => $post['carretera'], 'codificador' => $post['codificador'],'width'=> $post['width'],'height'=>$post['height']));
//var_dump($response);
// retrieve
//header('Content-type: image/png');
var_dump($gridFS->findOne(array('_id'=> new MongoId("53d961ca4a55d71c14000077")),array('_id'=>1)));
$src = $gridFS->findOne();
var_dump($src);
echo "<img width='".$src->file['width']."' height='".$src->file['height']."' src='".$src->getBytes()."'>";
?>

