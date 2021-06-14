function mouser() {
    document.getElementById("mouse6-2").style.display = "block";
    document.getElementById("mouse6-4").style.display = "block";
    document.getElementById("mouse6-6").style.display = "block";
}

function mouserout() {
    document.getElementById("mouse6-2").style.display = "none";
    document.getElementById("mouse6-4").style.display = "none";
    document.getElementById("mouse6-6").style.display = "none";
}

function mousel() {
    document.getElementById("mouse6-1").style.display = "block";
    document.getElementById("mouse6-3").style.display = "block";
    document.getElementById("mouse6-5").style.display = "block";
}

function mouselout() {
    document.getElementById("mouse6-1").style.display = "none";
    document.getElementById("mouse6-3").style.display = "none";
    document.getElementById("mouse6-5").style.display = "none";
}

// var h5 = document.getElementById("h5");
// var p = document.getElementById("p");

// function change(){
//     p.innerHTML = "salam";
// }

function navcontent(){
    document.getElementById("navcontent1").style.display ="block";
    document.getElementById("navcontent2").style.display ="none";
    document.getElementById("navcontent3").style.display ="none";
    document.querySelector('.missionnav').style.cssText = 'color:#ffb400;';
    document.querySelector('.advnav').style.cssText = 'color:white';
    document.querySelector('.guarnav').style.cssText = 'color:white';
  }
  function navcontent1(){
    document.getElementById("navcontent2").style.display ="block";
    document.getElementById("navcontent1").style.display ="none";
    document.getElementById("navcontent3").style.display ="none";
    document.querySelector('.advnav').style.cssText = 'color:#ffb400;';
    document.querySelector('.missionnav').style.cssText = 'color:white';
    document.querySelector('.guarnav').style.cssText = 'color:white';
  }
  function navcontent2(){
    document.getElementById("navcontent3").style.display ="block";
    document.getElementById("navcontent1").style.display ="none";
    document.getElementById("navcontent2").style.display ="none";
    document.querySelector('.guarnav').style.cssText = 'color:#ffb400;';
    document.querySelector('.missionnav').style.cssText = 'color:white';
    document.querySelector('.advnav').style.cssText = 'color:white';
  }