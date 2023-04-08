var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var started = false;

function init() {
  $(document).keydown(function () {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

  $(".btn").on("click", function (event) {
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
    animatePress(userChosenColour);
    
    checkAnswer(userClickedPattern.length - 1);
  })

  // $(".btn").click(function() {
  //   var userChosenColour = $(this);
  //   userClickedPattern.push(userChosenColour.attr("id"));
  //   console.log("userClickedPattern? " + userClickedPattern);
  // })
}

function nextSequence() {
  userClickedPattern = [];
  var randomNumber = calculateRandomIntegerUpTo(4, true);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

  level++;
  $("#level-title").text("Level " + level);
}

function calculateRandomIntegerUpTo(topLimit, isZeroIndexed) {
  return Math.floor(Math.random() * topLimit) + (isZeroIndexed ? 0 : 1);
}

function playSound(fileName) {
  var audio = new Audio("sounds/" + fileName + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  var currentButton = $("#" + currentColour);
  if (currentButton) {
    currentButton.addClass("pressed");
    setTimeout(function () {
      currentButton.removeClass("pressed");
    }, 100);
  }
}

function checkAnswer(answerIndex) {
  if (gamePattern[answerIndex] === userClickedPattern[answerIndex]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    
    startOver();
  }
}

function startOver() {
  gamePattern = [];  
  level = 0;
  started = false;
}