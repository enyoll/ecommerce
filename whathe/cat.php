<?php
$json=array(
    "Nama"=>"Fransisca",
    "Lokasi" => "Cimone",
    "Category"=> [
                    array("Nama" => "T-Shirt"),
                    array("Nama" => "Pants"),
                    array("Nama" => "Jackets"),
                    array("Nama" => "Blouse"),
                    array("Nama" => "Skirt")
    ]
);
echo json_encode($json);
?>