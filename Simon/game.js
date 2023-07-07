var buttonColors=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userchoosencolor=[];
function makeSound(text){
  var src= "sounds/"+text+".mp3";
  var audio = new Audio(src);
  audio.play();
}
// function animatepress(text){
//   alert("text")
//   $("#"+ text).addClass("pressed");
//   var delayInMilliseconds = 1000; //1 second
//
//   setTimeout(function() {
//     //your code to be executed after 1 second
//   }, delayInMilliseconds);
//   $("#"+text).removeClass("pressed");
}

$(document).keypress(newSequence);
function newSequence(event){
  var random= Math.floor(Math.random()*3);
  var randomchoosencolor=buttonColors[random];
  gamePattern.push(randomchoosencolor);
 $("#"+randomchoosencolor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
 makeSound(randomchoosencolor);
 switch(randomchoosencolor){
  case 0:
  {
    var audio = new Audio('sounds/red.mp3');
    audio.play();
    break;
  }
  case 1:
  {
    var audio1 = new Audio('sounds/blue.mp3');
    audio1.play();
    break;
  }
  case 2:
  {
    var audio2 = new Audio('sounds/green.mp3');
    audio2.play();
    break;
  }
  case 3:
  {
    var audio3 = new Audio('sounds/yellow.mp3');
    audio3.play();
    break;}
 default:
 {
   var audio4 = new Audio('sounds/wrong.mp3');
   audio4.play();
   break;}
}}
$(document).click(function(event) {
    var text = $(event.target).attr("id");
    userchoosencolor.push(text);
    //Sanimatepress(text);
    makeSound(text);

});
