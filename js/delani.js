$(document).ready(function(){
  $(".imagedes").hover(function(event){
    $(".imagedes").hide();
    $("#design").show();
  }, function(){
    $(".imagedes").show();
    $("#design").hide();
  });
  $(".imagedev").hover(function(event){
    $(".imagedev").hide();
    $("#DEV").show();
  }, function(){
    $(".imagedev").show();
    $("#DEV").hide();
  });
