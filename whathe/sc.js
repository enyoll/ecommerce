$(document).ready(function(){
    /*$("body").fadeOut();+
    $("body").fadeIn();
    alert("Hello World")
    $.get("readme.txt", function(data){
    $("body").text(data); */
    $.getJSON("data.php",function(data){

    $("#mblo").text("Welcome "+data.Nama);
        var ctr=parseInt(data.Category.length);
        var c = $("#cat").clone().removeClass('template');
        for(var i=0;i<ctr;i++)
        {
            $("#kat").append(c);
            $("#links",c).attr("href","filter.html?id="+data.Category[i].Nama);
            $("#isi",c).text(data.Category[i].Nama);
            c=$(c).clone();
        }
    });
    
    $.getJSON("productserver.php",function(data){
        var pjg=parseInt(data.Product.length);
        var a = $("#listpro").clone().removeClass('template');
        for(var i=0;i<pjg;i++)
        {
            
         
            $("#pro").append(a);
            $("#link",a).attr("href","product.html?id="+i);
            $(".pic",a).html('<img src="'+data.Product[i].Image+'" width="100px">');
            $(".nama",a).text(data.Product[i].Nama);
            $(".harga",a).text(data.Product[i].Harga);
            $("#graphite-flat-button",a).attr('data-id',data.Product[i].id_pro).click( function() {
                clickCounter($(this).attr('data-id'));
            });
        a=$(a).clone();
        }
    });
    
    
    
    function clickCounter(id) {
        if(typeof(Storage) !== "undefined") {
       
            var items;
            
            
            if (localStorage.items) 
            {
                    items = JSON.parse(localStorage.items); // ubah localStorage jadi array  
            }
            else 
            {
                items = []; // array kosong
            }
            
            
            
            items.push(id);
            localStorage.items = JSON.stringify(items);
            
            
            document.getElementById("result").innerHTML =  items.length + " item(s) On Your Basket";

        } else {}
    }
  
    
    $('#hapus').click( function() {
        apus(); 
    });
    function apus(){
    localStorage.clear();
        document.getElementById("result").innerHTML =  "0 item(s) On Your Basket";
    }
        if(typeof(Storage) !== "undefined") {
            if(localStorage.clickcount==null){
                document.getElementById("result").innerHTML =  "0 item(s) On Your Basket";
            }
    }
});

