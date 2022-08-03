<?php
	include "db.php";
	$id=$_GET['id'];
 
	$query="select count(*) from mem where logid='$id'";
	$result=mysql_query($query,$conn);
	$row=mysql_fetch_array($result);
 
	mysql_close($conn);	
?>
<script>
	var row="<?=$row[0]?>";
	if(row==1){
		parent.document.getElementById("chk_id1").value="0";
		parent.alert("이미 사용중인 아이디입니다.");
	} else {
		parent.document.getElementById("chk_id1").value="1";
		parent.alert("사용 가능합니다.");
 }
</script>