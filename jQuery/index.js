$("h1").addClass("style-title");
$("button").click(function(){
  $("h1").css("color","purple");
});
$(document).keypress(function(event){
  $("h1").text("key is"+ " "+event.key);
});
