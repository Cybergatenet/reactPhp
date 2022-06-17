<?php
    include_once('./conn.php');

    header("Access-control-Allow-Origin: *");

    $dbs = mysqli_query('SHOW DATABASES', $conn);

    if(mysqli_num_rows($dbs) > 0){
        $data = [];
        while($row = mysqli_fetch_assoc($dbs)){
            $data = $row;
            var_dump($data);
            // echo json_encode($data);
        }
    }


    // echo json_encode(["name"=>"Cybergate", "dept"=>"Computer Engineering"])
?>