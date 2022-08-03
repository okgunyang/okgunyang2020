<?php
	include "db.php";
	include "password.php";

	$userid = $_POST['userid'];
	$userpw = password_hash($_POST['userpw'], PASSWORD_DEFAULT);
	$username = $_POST['name'];
	$adress = $_POST['adress'];
	$sex = $_POST['sex'];
	$email = $_POST['email'].'@'.$_POST['emadress'];

	$check="SELECT * from mem WHERE id=".$userid;
	$result=$mysqli->query($check);
	if($result->num_row==1) {
		echo "<script>
			alert('중복된 아이디입니다');
			history.back();
		</script>";
		exit();
	} else if($userid==NULL || $userpw==NULL || $username==NULL || $adress==NULL || $sex==NULL || $email==NULL) {
		echo "<script>
			alert('빠진 항목이 있어 회원가입에 실패하였습니다.');
			history.back();
		</script>";
		exit();
	}
	$sql = mq("insert into mem (id,pw,name,adress,sex,email) values('".$userid."','".$userpw."','".$username."','".$adress."','".$sex."','".$email."')");
?>
<meta charset="utf-8" />
<script type="text/javascript">alert('회원가입이 완료되었습니다.');</script>
<meta http-equiv="refresh" content="0 url=./loginForm.html">