<?php
    include_once('./db.php');

    $conn = mysqli_query(HOST, USER, PASSWORD, DATABASE)
    or die('Server Could NOT be Started');
?>