$(document).ready(function(){
  $(".imagedes").hover(function(event){
    $(".imagedes").hide();
    $("#design").show();
  }, function(){
    $(".imagedes").show();
    $("#design").hide();
  });
