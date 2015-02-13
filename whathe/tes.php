<?php

$serverName = "ENYOLL"; //serverName\instanceName
$connectionInfo = array( "Database"=>"dbek", "UID"=>"sa", "PWD"=>"bun");
$conn = sqlsrv_connect( $serverName, $connectionInfo);

if( $conn ) {
     echo "Berhasil konek!<br />";
}else{
     echo "Koneksi GAGAL!<br />";
     die( print_r( sqlsrv_errors(), true));
}
?>