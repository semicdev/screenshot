<?php 

$m = new MongoClient();
$db = $m->geo;
$gridFS = $db->getGridFS();
$response = $gridFS->find();
echo json_encode(iterator_to_array($response));


?>