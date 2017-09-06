<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Echo And Print</title>
</head>
<body>
<?php
//Using The Echo Statement
########################################
echo '<h1>Welcome to PHP</h1>';
echo "<h2>Echo Use For Print The Data</h2>";
echo ('<p>This Is new Way To Echo Data</p>');
########################################
//Using The Print Statement
########################################
print '<h1>Hello In Print Statement</h1>';
print "<h2>Echo Use For Print The Data</h2>";
print ('<p>This Is new Way To Echo Data</p>');
########################################
?>
<?php
#######################################
$data="Welcome to Variable Mode";
$name="Myunitbook";
echo $data,"India";
echo '<hr>';
########################################
/*
$myname= 'Punit';
$res= echo  $myname;
echo $res;
*/
$myname= 'Punit';
$res= print $myname;
echo $res;

?>



</body>
</html>