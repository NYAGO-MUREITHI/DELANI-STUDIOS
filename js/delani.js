$(document).ready(function(){
  $(".imagedes").click(function(event){

    $("#design").toggle();
    $(".imagedes").hide();
  });
   $("#design").click(function(){

    $("#design").toggle();
    $(".imagedes").show();
  });
  $(".imagedev").click(function(event){

    $("#DEV").toggle();
    $(".imagedev").hide();
  });
   $("#DEV").click(function(){

    $("#DEV").toggle();
    $(".imagedev").show();
  });
  $(".imagepro").click(function(event){

    $("#PRODUCT").toggle();
    $(".imagepro").hide();
  });
   $("#PRODUCT").click(function(){

    $("#PRODUCT").toggle();
    $(".imagepro").show();
  });

  //toggle between
  $("#work1").hover(function(){
    $("#work1").hide();
    $(".portfolio1").show();
  },function(){
    $(".portfolio1").hide();
    $("#work1").show();
  });
  $("#work2").hover(function(){
    $("#work2").hide();
    $(".portfolio2").show();
  },function(){
    $(".portfolio2").hide();
    $("#work2").show();
  });
  $("#work3").hover(function(){
    $("#work3").hide();
    $(".portfolio3").show();
  },function(){
    $(".portfolio3").hide();
    $("#work3").show();
  });
  $("#work4").hover(function(){
    $("#work4").hide();
    $(".portfolio4").show();
  },function(){
    $(".portfolio4").hide();
    $("#work4").show();
  });
  $("#work5").hover(function(){
    $("#work5").hide();
    $(".portfolio5").show();
  },function(){
    $(".portfolio5").hide();
    $("#work5").show();
  });
  $("#work6").hover(function(){
    $("#work6").hide();
    $(".portfolio6").show();
  },function(){
    $(".portfolio6").hide();
    $("#work6").show();
  });
  $("#work7").hover(function(){
    $("#work7").hide();
    $(".portfolio7").show();
  },function(){
    $(".portfolio7").hide();
    $("#work7").show();
  });
  $("#work8").hover(function(){
    $("#work8").hide();
    $(".portfolio8").show();
  },function(){
    $(".portfolio8").hide();
    $("#work8").show();
  });
  //submit button function to give alert on submit
  $("button#submit").click(function(){
     var name=$("#namefield").val();
      alert("We have recieved your message.Thankyou "  + name +  " for reaching out" );
  });

});
