var numButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    // Defining sounds by button of pic
    makeSound(buttonInnerHTML);
    btnAniation(buttonInnerHTML);

  });
}
document.addEventListener("keydown", function(event){
  console.log(event);
  makeSound(event.key);
  btnAniation(event.key);
});
//
// Remember to pass key
function makeSound(key){
  switch (key) {
    case "q":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "w":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "e":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "r":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "t":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "y":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "u":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
// keydown
    default: console.log
}
}

function btnAniation(currentKey){
  var activeBtn = document.querySelector("." + currentKey);
  activeBtn.classList.add("pressed");
  setTimeout(function(){
    activeBtn.classList.remove("pressed");
  }, 100);
}
