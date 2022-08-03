<?php
    include "db.php";
    include "password";

    $userid = $_POST['userid'];
    $userpw = $_POST['userpw'];
    $username = $_POST['name'];
    $adress = $_POST['adress'];
    $sex = $_POST['sex'];
    $email = $_POST['email']."@".$_POST['emadress'];
    
    $sql = mq("insert into mem(id, pw, name, adress, sex, email) values ('".$userid."','".$userpw."','".$username."','".$adress."','".$sex."','".$email."')");
?>
<meta charset="utf-8">
<script>
    alert("회원가입이 성공적으로 이루어졌습니다.");
</script>
<meta http-equiv="refresh" content="0 url=./loginForm.html">