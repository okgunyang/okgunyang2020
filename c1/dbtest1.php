<?php
    echo "MySql 연결 테스트<br>";
    $db = mysqli_connect("localhost", "root", "1234", "kkt09072");
    if($db){echo "연결되었습니다.<br>";}
    else{echo "연결에 실패하셨습니다.<br>";}
    $result = mysqli_query($db, 'SELECT VERSION() as VERSION');
    $data = mysqli_fetch_assoc($result);
    echo $data['VERSION'];
?>