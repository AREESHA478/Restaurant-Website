<?php

include('dbconn.php');


$name = $_REQUEST['name'];
$date = $_REQUEST['date'];
$email = $_POST['email'];
$time = $_POST['time'];
$phone = $_POST['phone'];
$person = $_REQUEST['person'];


$query = "insert into Booking values('$name', '$date', '$email' , '$time' , '$phone ','$person' )";

$res = mysqli_query($conn, $query);


if($res == true )
{
    echo '<script>
    alert("YOUR RESERVATION IS IN PROCESS. YOU WILL RECEIVE EMAIL SHORTLY");
    window.location.href = "reservation.html";
</script>';

}
else{
    echo "Your Data is not complete";
}

mysqli_close($conn);

?>