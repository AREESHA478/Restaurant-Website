<?php

include('dbconn.php');


$fname = $_REQUEST['fullname'];
$number = $_POST['number'];
$address = $_POST['address'];
$city = $_POST['city'];
$street = $_REQUEST['street'];
$zip= $_REQUEST['zip'];

$query = "insert into Order_details values('$fname', '$number', '$address' , '$city' , '$street ','$zip' )";

$res = mysqli_query($conn, $query);

//   if (move_uploaded_file($tempname, $folder))  {
//             $msg = "Image uploaded successfully";
//         }else{
//             $msg = "Failed to upload image";
//       } 
      
if($res == true )
{
    header('location:thankyou.html');
}else{
    echo "Your Data is not Save";
}

mysqli_close($conn);

?>