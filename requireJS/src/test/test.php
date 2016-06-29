<?php
	$len = $_GET['len'];
	$data = array();
	$destitle = array('Round Icons','Startup Framework','Treehouse','Golden','Escape','Dreams');
	$info = array('Graphic Design AAAAAAAAAAAAAAAAAAAAAA
					AAAAAAAAAAAAAAAAAAAAAAAAAA','Website Design BBBBBBBBBBBBBBBBBBBBBBBBBB
					BBBBBBBBBBBBBBBBBBBBBBBBBBBBB
					BBBBBBBBBBBBBBBBB','Website Design','Website Design','Website Design','Website Design DDDDDDDDDDDDDDDDDDDDDDDDDDDDD
					DDDDDDDDDDDDDDDDDDDDDDDDDD
					DDDDDDDDDDDDDDDDDDDDDD');
	for ($i=0; $i < $len; $i++) {
        $data[$i]= array('destitle'=>$destitle[$i],'info'=>$info[$i]);
    }
    $ret = array("status"=>0,"data"=>$data);
    sleep(1);
    echo json_encode($ret);
?>