/*
$(document).ready( function() {
  $("h1").css("color", "red");
});
*/

function init() {
  console.log("h1 font-size before: " + $("h1").css("font-size"));
  // $("h1").css("font-size", "5rem");
  
  console.log("h1 color before: " + $("h1").css("color"));
  $("h1").addClass("big-title margin-50");
  // $("h1").removeClass("big-title");
  console.log("h1 class attr: " + $("h1").attr("class"));
  $("h1").click(function() {
    $("h1").css("color", "purple");
  });
 
  console.log("h1 text before: " + $("h1").text());
  $("h1").text("Everything. Again.");

  console.log("button elements text:" + $("button").text());
  $("button").text("New Click!");

  console.log("button elements html:" + $("button").html());
  $("button").html("<em>jQuery rules!</em>");
  $("button").click(function() {
    $("button").css("color", "purple");
  });

  console.log("image attribute src: " + $("img").attr("src"));
  console.log("a src attr: " + $("a").attr("href"));
  $("a").attr("href", "https:///www.yahoo.com");
  $("a").text("Yahoo!");

  $("input").keydown(function(event) {
    console.log("Key down: " + event.key);
  });

  $(document).keydown(function(event) {
    $("h1").text(event.key);
  });

  $("h1").on("mouseover", function() {
    $("h1").css("color", "blue");
  });

  $("h1").before("<button class='addedJQ'>Added by jQuery - before</button>");
  $("h1").after("<button class='addedJQ'>Added by jQuery - before</button>");
  $("h1").prepend("<button class='addedJQ'>Added by jQuery - prepend</button>");
  $("h1").append("<button class='addedJQ'>Added by jQuery - append</button>");

  $(".addedJQ").remove();

  $("button").on("click", function() {
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();

    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();

    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();

    // $("h1").animate({opacity: 0.5});
    $("h1").slideUp().slideDown().animate({opacity: 0.5});;
  })
}