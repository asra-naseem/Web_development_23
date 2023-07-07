var len=6;
var random= Math.floor(Math.random()*len)+1;
var l="images/dice"+random+".png";
document.querySelector("img.img1").setAttribute("src",l);
var len=6;
var random2= Math.floor(Math.random()*len)+1;
var r="images/dice"+random2+".png";
document.querySelector("img.img2").setAttribute("src",r);
if (r>l)
document.querySelector("h1").textContent="Player 2 wins";
else if(l>r)
document.querySelector("h1").textContent="Player 1 wins";
else
document.querySelector("h1").textContent="Its a draw";
