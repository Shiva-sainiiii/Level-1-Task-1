

var card1 = document.querySelector(".card1");
var card2 = document.querySelector(".card2");
var card3 = document.querySelector(".card3");


card1.addEventListener("touchstart",function(){
card1.style.scale="1.1";
card1.style.transform="rotate(0deg)";
card2.style.opacity=".5";
card3.style.opacity=".5";
card1.style.zIndex="2";
card1.style.boxShadow="0px 0px 10px 1px aqua";
})
card1.addEventListener("touchend",function(){
card1.style.scale="1";
card1.style.transform="rotate(-5deg)";
card2.style.opacity="1";
card1.style.zIndex="0";
card3.style.opacity="1";
card1.style.boxShadow="none";
})


card2.addEventListener("touchstart",function(){
card2.style.scale="1.1";
card1.style.opacity=".5";
card3.style.opacity=".5";
card2.style.zIndex="2";
card2.style.boxShadow="0px 0px 10px 1px aqua";
})
card2.addEventListener("touchend",function(){
card2.style.scale="1";
card1.style.opacity="1";
card3.style.opacity="1";
card2.style.zIndex="0";
card2.style.boxShadow="none";
})



card3.addEventListener("touchstart",function(){
card3.style.scale="1.1";
card3.style.transform="rotate(0deg)";
card1.style.opacity=".5";
card2.style.opacity=".5";
card3.style.zIndex="2";
card3.style.boxShadow="0px 0px 10px 1px aqua";
})
card3.addEventListener("touchend",function(){
card3.style.scale="1";
card3.style.transform="rotate(5deg)";
card1.style.opacity="1";
card3.style.zIndex="0";
card3.style.boxShadow="none";
card2.style.opacity="1";
})



const elements = [ 
"#bio",
".helpcontent",
".helps",
".feats",
".ht2",
".pimg1",
".pimg2",
".pimg3",
".pimg4",
".pimg5",
"#page4",
".links",
".box1",
".box2",
".box3",
".box4",
".box5",
".c1",
".c2",
"#achivement h1",
"#lets",
"#connect",
".msgg1",
".msgg2",
".chacha1",
".chacha2",
".chacha3",

];

elements.forEach(el => {
  gsap.from(el, {
  y: 50,
  duration: 0.5,
  scrollTrigger: { 
  trigger: el,
  toggleActions: "play none none reset"
  } 
  
  }); 
  
  });



const locomotive = new LocomotiveScroll({
el: document.querySelector('#main'),
smooth: true,
getDirection: true
});

locomotive.on('scroll', (args) => {
// your code here
});

locomotive.on('call', (args) => {
// your code here
});



var menubtn = document.querySelector("nav i");
var menupage = document.querySelector("#menupage");
var flag = 1;

menubtn.addEventListener("click",function(){
if(flag == 1){
menupage.style.width="60vw";
flag = 0;}
else{
menupage.style.width="0vw";
flag = 1;}

})



const parent = document.getElementById('imgcont');
const children = parent.children;

window.addEventListener('scroll', () => {
  const top = parent.getBoundingClientRect().top;
  const scrollY = window.scrollY;

  if (top < window.innerHeight / 2) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.style.transform = `translateY(${scrollY / 20}px)`;

    }
  } else {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.style.transform = '';

    }
  }
});


var pimg = document.querySelectorAll(".pimg");

pimg.forEach(function(e){

e.addEventListener("touchstart",function(){
e.style.boxShadow="0px 0px 10px 1px aqua";
e.style.scale="1.02";
})
e.addEventListener("touchend",function(){
e.style.boxShadow="0px 0px 0px 0px aqua";
e.style.scale="1";
})

})


var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");
var box5 = document.querySelector(".box5");


box1.addEventListener("touchstart",function(){
box1.style.boxShadow="0px 0px 10px 1px orange";
box1.style.transform="rotate(0deg)";
box1.style.scale="1.1";
})

box1.addEventListener("touchend",function(){
box1.style.boxShadow="none";
box1.style.scale="1";
box1.style.transform="rotate(5deg)";
})


box2.addEventListener("touchstart",function(){
box2.style.boxShadow="0px 0px 10px 1px red";
box2.style.transform="rotate(0deg)";
box2.style.scale="1.1";

})

box2.addEventListener("touchend",function(){
box2.style.boxShadow="none";
box2.style.scale="1";
box2.style.transform="rotate(-5deg)";
})


box3.addEventListener("touchstart",function(){
box3.style.boxShadow="0px 0px 10px 1px aqua";
box3.style.transform="rotate(0deg)";
box3.style.scale="1.1";

})

box3.addEventListener("touchend",function(){
box3.style.boxShadow="none";
box3.style.scale="1";
box3.style.transform="rotate(5deg)";
})


box4.addEventListener("touchstart",function(){
box4.style.boxShadow="0px 0px 10px 1px green";
box4.style.transform="rotate(0deg)";
box4.style.scale="1.1";

})

box4.addEventListener("touchend",function(){
box4.style.boxShadow="none";
box4.style.scale="1";
box4.style.transform="rotate(-5deg)";
})


box5.addEventListener("touchstart",function(){
box5.style.boxShadow="0px 0px 10px 1px yellow";
box5.style.transform="rotate(0deg)";
box5.style.scale="1.1";

})

box5.addEventListener("touchend",function(){
box5.style.boxShadow="none";
box5.style.scale="1";
box5.style.transform="rotate(5deg)";
})
