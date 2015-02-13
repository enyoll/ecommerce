<?php
 
$serverName = "ENYOLL";
$connectionInfo = array( "Database"=>"dbek", "UID"=>"sa", "PWD"=>"bun","CharacterSet" => "UTF-8");
$conn = sqlsrv_connect( $serverName, $connectionInfo);
 
$query = "SELECT * from kategori ";

$params = array(1, "some data");
      $getkate = sqlsrv_query( $conn, $query, $params);
      if ( $getkate === false)
            { 
                     die( print_r( sqlsrv_errors(), true));
            }
$nm=array();
 

while ($row = sqlsrv_fetch_array( $getkate, SQLSRV_FETCH_ASSOC)) 
{
    $temp[] = array("Nama" => $row["Namakat"]);
}

$arr = array("Nama"=>"Fransisca","Lokasi"=>"Cimone","Category"=>$temp);
$data = json_encode($arr);
echo $data;
?>