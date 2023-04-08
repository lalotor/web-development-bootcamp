function init() {
  var buttonsArr = document.querySelectorAll(".drum");
  for (let i = 0; i < buttonsArr.length; i++) {
    buttonsArr[i].addEventListener("click", function () {
      assignSoundAndPlay(this.innerHTML);
      animateButton(this.innerHTML);
    });
  }
}

function assignSoundAndPlay(key) {
  switch (key) {
    case "w":
      playSound("tom-1");
      break;
    case "a":
      playSound("tom-2");
      break;
    case "s":
      playSound("tom-3");
      break;
    case "d":
      playSound("tom-4");
      break;
    case "j":
      playSound("snare");
      break;
    case "k":
      playSound("crash");
      break;
    case "l":
      playSound("kick-bass");
      break;
    default:
      console.log(`No sound for ${key}`);
      break;
  }
}

function playSound(fileName) {
  var audio = new Audio("sounds/" + fileName + ".mp3");
  audio.play();
}

function animateButton(key) {
  var activeButton = document.querySelector("." + key)
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

document.addEventListener("keydown", function (event) {
  assignSoundAndPlay(event.key);
  animateButton(event.key);
});
