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


$tgl    = date_default_timezone_set('Asia/Jakarta');
$script_tz = date_default_timezone_get();
$id     = json_decode($_POST['id']);
$nama   = json_decode($_POST['nama']);
$total  = json_decode($_POST['total']);
$qty    = json_decode($_POST['qty']);
$cart   = $_POST['cart'];




for ($i = 0; $i<$cart; $i++) 
    {
    $sql ="INSERT INTO pembelian (tglpembelian, id, nama, qty, total) VALUES ('$tgl', '$id[$i]', '$nama[$i]', '$qty[$i]', '$total[$i]')"; 
    

        $stmt = sqlsrv_query( $conn, $sql);

        if ($stmt == TRUE) 
            {          
            } 
    

        else 
            {
                die( print_r( sqlsrv_errors(), true));
            }
    
    }
	
	 echo "SUKSES";

sqlsrv_close( $conn);

?>

