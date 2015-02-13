<?php
     
$serverName = "ENYOLL";
$connectionInfo = array( "Database"=>"dbek", "UID"=>"sa", "PWD"=>"bun","CharacterSet" => "UTF-8");
$conn = sqlsrv_connect( $serverName, $connectionInfo);


if( $conn )
{
}
else
{
     echo "Connection could not be established.\n";
     die( print_r( sqlsrv_errors(), true));
}

$tsql ="SELECT * from product LEFT JOIN kategori ON kategori.id_kat=product.id_kat";

     $params = array(1, "some data");
      $getProducts = sqlsrv_query( $conn, $tsql, $params);
      if ( $getProducts === false)
            { 
                     die( print_r( sqlsrv_errors(), true));
            }
$nm=array();
while( $row = sqlsrv_fetch_array( $getProducts, SQLSRV_FETCH_ASSOC) ) 
{
     $nm[]= array(
    "id_kat"=> $row["id_kat"],
    "Nama" => $row["Nama"],
    "Deskripsi" => $row["Deskripsi"],
    "Categori" => $row["Namakat"],
    "Harga" => $row["Harga"],
    "id_pro" => $row["id_pro"],
    "Image" => $row["Image"]);
}

$data = array(
			"Product"=>
			$nm
    	);
echo json_encode($data);
?>

