$(document).ready(function(){
    /*$("body").fadeOut();+
    $("body").fadeIn();
    alert("Hello World")
    $.get("readme.txt", function(data){
    $("body").text(data); */
    $.getJSON("data.php", function(data){

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
    
    var loc = window.location.href;
    var split = loc.split("=");
    
    
    $.getJSON("pro.php",function(data){
    $("#name").text(data.Product[split[1]].Nama);
    $("#price").text("Harga : "+data.Product[split[1]].Harga);
    $("#pic").html("<img src=\""+data.Product[split[1]].Image+"\" width=\"400px\">");
    $("#deskripsi").html(data.Product[split[1]].Deskripsi);
        
   $("#graphite-flat-button").attr('data-id',split[1]).click( function() {
                clickCounter($(this).attr('data-id'));
            });
        
    });
    
    
    
   function clickCounter(id) {
        if(typeof(Storage) !== "undefined") {
            /*
            if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount)+1;
            } else {
                localStorage.clickcount = 1;
            }
            */
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

