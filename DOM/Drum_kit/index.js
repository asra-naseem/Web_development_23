
var len= document.querySelectorAll('.drum').length;

var i=0;
for(i=0;i<len;i++){
document.querySelectorAll('.drum')[i].addEventListener("click",function(){
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);

  }

  );
}
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);

});

function makeSound(x){
  switch(x){
      case "w":
       var first = new Audio("sounds/crash.mp3");
       first.play();
       break;
      case "a":
        var second = new Audio("sounds/kick-bass.mp3");
        second.play();
        break;
      case "s":
        var third= new Audio("sounds/snare.mp3");
        third.play();
        break;
      case "d":
        var fourth = new Audio("sounds/tom-1.mp3");
        fourth.play();
        break;
       case "j":
          var fifth = new Audio("sounds/tom-2.mp3");
          fifth.play();
          break;
        case "k":
           var sixth= new Audio("sounds/tom-3.mp3");
            sixth.play();
            break;
        case "l":
            var seventh= new Audio("sounds/tom-4.mp3");
            seventh.play();
            break;
        Default:
           alert('Nothing');
           break;
}
}

function buttonAnimation(key){
  var actv_btn=document.querySelector("."+key);
  actv_btn.classList.add("pressed");
  setTimeout(function(){
    actv_btn.classList.remove("pressed");
  },200)
  //alert(activebtn);
}
