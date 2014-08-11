<?php
ini_set('memory_limit', '2000M');
set_time_limit ( 3600 );
$m = new MongoClient();
$db = $m->geo;
$gridFS = $db->getGridFS();
$src = $gridFS->findOne(array('_id' => new MongoId($_POST['id'])));
echo $src->getBytes();