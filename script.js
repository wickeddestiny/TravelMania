

//          Hamburger Button for Menu

$("#bars").click(function(){
    
    $(".nav-expander").toggle(function(){

       });
       if($("#bars").hasClass("fa fa-bars")){
        $("#bars").removeClass()
        $("#bars").addClass("fas fa-times")
       }
       else if($("#bars").hasClass("fas fa-times")){
        $("#bars").removeClass()
        $("#bars").addClass("fa fa-bars")
       }
       else{
       }
});