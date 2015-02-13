<?php
$prod = array(
        "Product"=> [
                        array("Nama" => "All day green",
                              "Deskripsi" => "",
                              "Harga" => "IDR 200",
                              "Categori" => "T-Shirt",
                              "Image" => "images/tshirt.jpg"),    

                        array("Nama" => "Varsity",
                              "Deskripsi" => "",
                              "Harga" => "IDR 300",
                              "Categori" => "Jackets",
                              "Image" => "images/jaket1.jpg"),

                        array("Nama" => "North Face Jacket Pink",
                              "Deskripsi" => "",
                              "Harga" => "IDR 400",
                              "Categori" => "Jackets",
                              "Image" => "images/jaket2.jpg"),

                        array("Nama" => "Skinny Pant",
                              "Deskripsi" => "",
                              "Harga" => "IDR 500",
                              "Categori" => "Pants",
                              "Image" => "images/pants.jpg"),

                        array("Nama" => "Velvet Skirt",
                              "Deskripsi" => "",
                              "Harga" => "IDR 600",
                              "Categori" => "Skirt",
                              "Image" => "images/skirt.jpg"),
            
                        array("Nama" => "Grey Lace Peplum",
                              "Deskripsi" => "",
                              "Harga" => "IDR 600",
                              "Categori" => "Blouse",
                              "Image" => "images/blouse.jpg"),
                    ]
        );
        echo json_encode($prod);
?>