var temp;
var first = 1;
var second = 2;
var third = 3;
var nbClick1 = 0;
var nbClick2 = 0;
var nbClick3 = 0;
var nbClick4 = 0;


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

function agrandir(elt){
  var elem = document.getElementById(elt);
  if(elem === document.getElementById('album1')){
    nbClick1++;
    if(nbClick1%2 != 0)
      RemettrePlace('13vw', '2vw', '0%', '0%', 'absolute', 3,'scale(1.7, 1.7)', elem);
    else if (nbClick1%2 == 0) {
      RemettrePlace('2px', '2px', '2px', '2px', 'relative', 0,'scale(1, 1)', elem);
    }
  }
  else if(elem == document.getElementById('album2')){
    nbClick2++;
    if(nbClick2%2 != 0)
      RemettrePlace('13vw', '-2vw', '0%', '0%', 'absolute', 3,'scale(1.7, 1.7)', elem);
    else if (nbClick2%2 == 0) {
      RemettrePlace('2px', '2px', '2px', '2px', 'relative', 0, 'scale(1, 1)', elem);
    }
  }
  else if(elem == document.getElementById('album3')){
    nbClick3++;
    if(nbClick3%2 != 0)
      RemettrePlace('13vw', '2vw', '0%', '0%', 'absolute', 3,'scale(1.7, 1.7)', elem);
    else if (nbClick3%2 == 0) {
      RemettrePlace('2px', '2px', '2px', '2px', 'relative', 0, 'scale(1, 1)', elem);
    }
  }
  else if(elem == document.getElementById('album4')){
    nbClick4++;
    if(nbClick4%2 != 0)
      RemettrePlace('13vw', '-2vw', '0%', '0%', 'absolute', 3,'scale(1.7, 1.7)', elem);
    else if (nbClick4%2 == 0) {
      RemettrePlace('2px', '2px', '2px', '2px', 'relative', 0, 'scale(1, 1)', elem);
    }
  }
}

function RemettrePlace(top, left, right, bottom, position, zIndex,transform, element){
  element.style.transform = transform;
  element.style.marginTop = top;
  element.style.marginLeft = left;
  element.style.marginRight = right;
  element.style.marginBottom = bottom;
  element.style.position = position;
  element.style.zIndex = zIndex;
  element.style.transitionDuration = '0.5s';
}
