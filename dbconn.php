<?php
$host = "localhost";
$username = "root";
$conn = mysqli_connect($host , $username);
// if($conn == true){
//     echo "<script> alert ('connect  to database') </script>";
// }

// else{
//     echo "<script> alert ('connect not to database') </script>";
// }

$db = mysqli_select_db($conn , "restaurant");
if($db == true){
    echo " ('connect  to database')";
}

else{
    echo " ('connect not to database')";
}
?>