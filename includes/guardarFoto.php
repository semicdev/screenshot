<?php 
$m = new MongoClient();
$db = $m->geo;
$gridFS = $db->getGridFS();
$response = $gridFS->storeBytes($_POST['img']);
echo json_encode($response);
?>