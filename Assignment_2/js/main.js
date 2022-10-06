//When the user clicks on any of the 3 links in the #content-wrapper block, load the
//correct content into the #content div using AJAX.


// WEB303 Assignment 2
	
$(document).ready(function(){
    
    $("#prospect").click(function(){

      
        $("#content").load("prospect.html", function(responseTxt1, prospect, xhr){
            if(prospect == "success")
            {
				$("#content").fadeIn(2000);

            //$("#convert").fadeOut(1000);
           // $("#retain").fadeOut(1000);
                
            }
        });

    });


    $("#convert").click(function(){
        $("#content").load("convert.html", function(responseTxt2, convert, xhr){
            if(convert == "success") {
				$("#content").fadeIn(2000);
            //$("#prospect").fadeOut(1000);
            //$("#retain").fadeOut(1000);
            }
        });
    });


    $("#retain").click(function(){
        $("#content").load("retain.html", function(responseTxt3, retain, xhr){
            if(retain == "success") {
				$("#content").fadeIn(2000);
            //$("#prospect").fadeOut(1000);
        }
        });
      
    });

});
