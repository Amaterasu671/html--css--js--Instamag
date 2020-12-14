var temp;
var first = 1;
var second = 2;
var third = 3;
var a = 1;
var b = 2;
var c = 3;
var EltAgrandi;

function changeImage(x){
  document.getElementById('slide'+String(a+x)).style.zIndex = '0';
  document.getElementById('slide'+String(a+x)).style.opacity = '0';
  document.getElementById('slide'+String(b+x)).style.zIndex = '2';
  document.getElementById('slide'+String(b+x)).style.opacity = '1';
  document.getElementById('slide'+String(b+x)).style.transitionDuration = '2s';
  document.getElementById('slide'+String(c+x)).style.zIndex = '1';
  document.getElementById('slide'+String(c+x)).style.opacity = '0';

  temp = c;
  c = b;
  b = a;
  a = temp;

}

changeSlide1 =  setInterval(function() { changeImage(0); },3000);
changeSlide2 =  setInterval(function() { changeImage(3); },3500);
changeSlide3 =  setInterval(function() { changeImage(6); },3200);
changeSlide4 =  setInterval(function() { changeImage(9); },3700);

function toRight(){

  if(EltAgrandi == document.getElementById('album1')){
    x = 0;
  }
  else if (EltAgrandi == document.getElementById('album2')){
    x = 3;
  }
  else if (EltAgrandi == document.getElementById('album3')){
    x = 6;
  }
  else if (EltAgrandi == document.getElementById('album4')){
    x = 9;
  }

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
function toLeft(){

  var x;

  if(EltAgrandi == document.getElementById('album1')){
    x = 0;
  }
  else if (EltAgrandi == document.getElementById('album2')){
    x = 3;
  }
  else if (EltAgrandi == document.getElementById('album3')){
    x = 6;
  }
  else if (EltAgrandi == document.getElementById('album4')){
    x = 9;
  }

  temp = first;
  first = second;
  second = third;
  third = first;

  document.getElementById('slide'+String(first+x)).style.zIndex = '0';
  document.getElementById('slide'+String(first+x)).style.opacity = '0';
  document.getElementById('slide'+String(second+x)).style.zIndex = '2';
  document.getElementById('slide'+String(second+x)).style.opacity = '1';
  document.getElementById('slide'+String(second+x)).style.transitionDuration = '2s';
  document.getElementById('slide'+String(third+x)).style.zIndex = '1';
  document.getElementById('slide'+String(third+x)).style.opacity = '0';
}

function agrandir(elt){
  var elem = document.getElementById(elt);
  document.getElementById('imageLeft').style.opacity = 1;
  document.getElementById('imageRight').style.opacity = 1;
  document.getElementById('imageClose').style.opacity = 1;
  document.getElementById('imageLeft').style.transitionDuration = '1s';
  document.getElementById('imageRight').style.transitionDuration = '1s';
  document.getElementById('imageClose').style.transitionDuration = '1s';
  if(elem === document.getElementById('album1')){
      RemettrePlace('30vh', '-1vw', '0%', '0%', 'absolute', 3,'scale(2, 2)', elem);
      clearInterval(changeSlide1);
      EltAgrandi = document.getElementById('album1');
      document.getElementById('titleContainer2').style.opacity = 0;
      document.getElementById('titleContainer3').style.opacity = 0;
      document.getElementById('titleContainer4').style.opacity = 0;
  }
  else if(elem == document.getElementById('album2')){
      RemettrePlace('30vh', '1vw', '0%', '0%', 'absolute', 3,'scale(2, 2)', elem);
      clearInterval(changeSlide2);
      EltAgrandi = document.getElementById('album2');
      document.getElementById('titleContainer1').style.opacity = 0;
      document.getElementById('titleContainer3').style.opacity = 0;
      document.getElementById('titleContainer4').style.opacity = 0;
  }
  else if(elem == document.getElementById('album3')){
      RemettrePlace('30vh', '-1vw', '0%', '0%', 'absolute', 3,'scale(2, 2)', elem);
      clearInterval(changeSlide3);
      EltAgrandi = document.getElementById('album3');
      document.getElementById('titleContainer2').style.opacity = 0;
      document.getElementById('titleContainer1').style.opacity = 0;
      document.getElementById('titleContainer4').style.opacity = 0;
  }
  else if(elem == document.getElementById('album4')){
      RemettrePlace('30vh', '1vw', '0%', '0%', 'absolute', 3,'scale(2, 2)', elem);
      clearInterval(changeSlide4);
      EltAgrandi = document.getElementById('album4');
      document.getElementById('titleContainer2').style.opacity = 0;
      document.getElementById('titleContainer3').style.opacity = 0;
      document.getElementById('titleContainer1').style.opacity = 0;
  }
}

function rapetisser(){
  var element = EltAgrandi;
  document.getElementById('imageLeft').style.opacity = 0;
  document.getElementById('imageRight').style.opacity = 0;
  document.getElementById('imageClose').style.opacity = 0;
  if(element == document.getElementById('album1')){
    RemettrePlace('2px', '2px', '2px', '2px', 'relative', 0, 'scale(1, 1)', element);
    changeSlide1 =  setInterval(function() { changeImage(0); },3500);
    document.getElementById('titleContainer2').style.opacity = 1;
    document.getElementById('titleContainer3').style.opacity = 1;
    document.getElementById('titleContainer4').style.opacity = 1;
  }
  else if(element == document.getElementById('album2')){
    RemettrePlace('2px', '2px', '2px', '2px', 'relative', 0, 'scale(1, 1)', element);
    changeSlide2 =  setInterval(function() { changeImage(3); },3500);
    document.getElementById('titleContainer1').style.opacity = 1;
    document.getElementById('titleContainer3').style.opacity = 1;
    document.getElementById('titleContainer4').style.opacity = 1;
  }
  else if(element == document.getElementById('album3')){
    RemettrePlace('2px', '2px', '2px', '2px', 'relative', 0, 'scale(1, 1)', element);
    changeSlide3 =  setInterval(function() { changeImage(6); },3500);
    document.getElementById('titleContainer2').style.opacity = 1;
    document.getElementById('titleContainer1').style.opacity = 1;
    document.getElementById('titleContainer4').style.opacity = 1;
  }
  else if(element == document.getElementById('album4')){
    RemettrePlace('2px', '2px', '2px', '2px', 'relative', 0, 'scale(1, 1)', element);
    changeSlide4 =  setInterval(function() { changeImage(9); },3500);
    document.getElementById('titleContainer2').style.opacity = 1;
    document.getElementById('titleContainer3').style.opacity = 1;
    document.getElementById('titleContainer1').style.opacity = 1;
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
