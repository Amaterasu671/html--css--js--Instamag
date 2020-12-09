var temp;
var first = 1;
var second = 2;
var third = 3;


function changeImage(x){
  document.getElementById('slide'+String(first+x)).style.zIndex = '0';
  document.getElementById('slide'+String(first+x)).style.opacity = '0';
  document.getElementById('slide'+String(second+x)).style.zIndex = '2';
  document.getElementById('slide'+String(second+x)).style.opacity = '1';
  document.getElementById('slide'+String(second+x)).style.transitionDuration = '2s';
  document.getElementById('slide'+String(third+x)).style.zIndex = '1';
  document.getElementById('slide'+String(third+x)).style.opacity = '0';

  temp = third;
  third = second;
  second = first;
  first = temp;

}

setInterval(function() { changeImage(0); },3000);
setInterval(function() { changeImage(3); },3500);
setInterval(function() { changeImage(6); },3200);
setInterval(function() { changeImage(9); },3700);
