<?php
 
mysql_connect("localhost", "root", "");
mysql_select_db("dbek");
 
$query = "SELECT * from product LEFT JOIN kategori ON kategori.id_kat=product.id_kat";
$result = mysql_query($query) or die(mysql_error());
 
$arr = array();
while ($row = mysql_fetch_assoc($result)) {
    $temp = array(
    "id_kat"=> $row["id_kat"],
    "Nama" => $row["Nama"],
    "Deskripsi" => $row["Deskripsi"],
    "Categori" => $row["Namakat"],
    "Harga" => $row["Harga"],
    "id_pro" => $row["id_pro"],
    "Image" => $row["Image"]);
   
    array_push($arr, $temp);
}  
 
$data = json_encode($arr);
 
echo "{\"Product\":" . $data . "}";
?>