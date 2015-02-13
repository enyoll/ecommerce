$(document).ready(function(){

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
/*--------------------------------------------------------------*/    
    
    $.getJSON("productserver.php",function(data)
              
    {
       
        var item  = JSON.parse(localStorage.items);
        
        var jum   = parseInt(item.length);
        
        var id    = new Array ();
        
        var idnew = new Array ();
        
        var newnama =   new Array();
        
        var newgambar =   new Array();
        
        var newharga =   new Array();
        
        var newqty      =new Array();
        
        
        var no    = 1 , a = 0;
        
        var pjg   = parseInt(data.Product.length);
        
        var c     = $("#tampil").clone().removeClass('template');
        
        var qty   = new Array();
        
		var total = new Array();
        
        var inputnama  = "[";
        
        var inputid  = "[";
        
        var inputharga  = "[";
        
        var inputqty  = "[";
        
        var inputtotal  = "[";
       
        
        
        
       for(i=0;i<pjg;i++)
                        {   
                            qty[i] = 0;
                        }
        
        for(b=0;b<jum;b++)
            {
                
                for(i=0;i<pjg;i++)
                        {   
                            
                            if(item[b] == data.Product[i].id_pro )
                                 { 
                                     id[i]  = item[b];
                                     
                                     qty[i] = qty[i]+1;
                                 }
                        }
              
            }
					
        
        
 
         var pjg_id  = parseInt(id.length);
        
         for(i=0;i<pjg_id;i++)
         {                          
                        
                    if(id[i]  == data.Product[i].id_pro)
                        {
							idnew[a] = id[i];
                            
                            newqty[a]   = qty[i];
                            
                            newnama[a]  = data.Product[i].Nama;
                            
                            newgambar[a]  = data.Product[i].Image;
                            
                            newharga[a] =   data.Product[i].Harga; 
                            
                            total[a] = newqty[a]*newharga[a];
                                    
                                   
                                    $("#table").append(c);
                            
                                    $("#no",c).text(no);
                            
                                    $("#id",c).text(idnew[a]);
                            
                                    $("#name",c).text(newnama[a]);
                            
									$("#qty",c).text(newqty[a]);
                            
                                    $("#price",c).text(newharga[a]);
                            
									$("#total",c).text(total[a]);
                            
                                    $(".pic",c).attr("src",newgambar[a]);
                            
                                   
                                    a++    
                       
                                    c=$(c).clone();
                            
                                    no++;
                        }
             
         }
        
        var pjg_idnew = parseInt(idnew.length)
        
       
        for(i=0;i<pjg_idnew-1;i++)
        {
                    inputnama    = inputnama+JSON.stringify(newnama[i])+",";
            
                    inputid      = inputid+JSON.stringify(idnew[i])+",";
             
                    inputqty     = inputqty+JSON.stringify(newqty[i])+",";
        
                    inputharga   = inputharga+JSON.stringify(newharga[i])+",";
            
                    inputtotal   = inputtotal+JSON.stringify(total[i])+",";    
           
        }
        
        
                    inputnama    = inputnama+JSON.stringify(newnama[pjg_idnew-1])+"]";
             
                    inputid      = inputid+JSON.stringify(idnew[pjg_idnew-1])+"]";
             
                    inputqty     = inputqty+JSON.stringify(newqty[pjg_idnew-1])+"]";
        
                    inputharga   = inputharga+JSON.stringify(newharga[pjg_idnew-1])+"]";
            
                    inputtotal   = inputtotal+JSON.stringify(total[pjg_idnew-1])+"]";   
    
       
        $("#idinput").attr("value",inputnama);
        
        $("#namainput").attr("value",inputid);
        
        $("#qtyinput").attr("value",inputqty);
        
        $("#totalinput").attr("value",inputtotal);
        
        $("#cart").attr("value",pjg_idnew);
        
                                
       
    });
});