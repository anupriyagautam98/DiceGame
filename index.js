var randomNumber1=Math.floor(Math.random()*6+1);
var randomNumber2=Math.floor(Math.random()*6+1);
var image="images/dice"+randomNumber1+".png"
var image2="images/dice"+randomNumber2+".png"
document.querySelector(".img1").setAttribute("src", image);
document.querySelector(".img2").setAttribute("src", image2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="Player A wins 🎉";
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent="Player B wins 🎇";
}else{
  document.querySelector("h1").textContent="Draw";
}
