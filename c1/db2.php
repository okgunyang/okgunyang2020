<?php
    //db.php - db설정 정보
    @session_start();
    
    $db = new mysqli("localhost", "닷홈DBid", "닷홈DB비밀번호", "닷홈DB명");
    $db->set_charset("utf8");
    
    function mq($sql){
        global $db;
        return $db->query($sql);
    }
?>
