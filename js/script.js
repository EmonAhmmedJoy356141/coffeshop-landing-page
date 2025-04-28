
// Banner animation
$(document).ready(function(){
  $("#banner").hide(); // First hide it
  $("#banner").fadeIn(3000); // Then fade in over 2 seconds
  // best-coffee and image anc c-group
  function animateOnScroll() {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var elementTop = $("#best-text, #best-image, #c-group").offset().top;

    if (scrollTop + windowHeight > elementTop + 50) {
      setTimeout(function() {
        $("#best-text, #best-image, #c-group").addClass("active");
      }, 500);
    }
  }

  $(window).on("scroll", animateOnScroll);
  animateOnScroll(); 
});

// enjoy part
$(document).ready(function(){
  function animateOnScroll (){
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var elementTop = $("#enjoy-text").offset().top;
    if(scrollTop + windowHeight > elementTop +50){
      setTimeout(function(){
        $("#enjoy-text").addClass("active");
      }, 500);
    }
  }
  $(window).on("scroll", animateOnScroll);
  animateOnScroll();
})
// different part
$(document).ready(function(){
  function animateOnScroll (){
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var elementTop = $("#different-text").offset().top;
    if(scrollTop + windowHeight > elementTop +50){
      setTimeout(function(){
        $(" #different-text").addClass("active");
      }, 500);
    }
  }
  $(window).on("scroll", animateOnScroll);
  animateOnScroll();
})
// amazing part 
$(document).ready(function() {
  function animateOnScroll() {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var elementTop = $("#amazing-text").offset().top;

    if (scrollTop + windowHeight > elementTop + 50) {
      setTimeout(function() {
        $(" #amazing-text").addClass("active");
      }, 500);
    }
  }

  $(window).on("scroll", animateOnScroll);
  animateOnScroll(); 
});
// Feedback part
$(document).ready(function() {
  function animateOnScroll() {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var elementTop = $("#feedback").offset().top;

    if (scrollTop + windowHeight > elementTop + 50) {
      setTimeout(function() {
        $(" #feedback").addClass("active");
      }, 500);
    }
  }

  $(window).on("scroll", animateOnScroll);
  animateOnScroll(); 
});

// subcribe text
$(document).ready(function() {
  function animateOnScroll() {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var elementTop = $("#subcribe-text").offset().top;

    if (scrollTop + windowHeight > elementTop + 50) {
      setTimeout(function() {
        $(" #subcribe-text").addClass("active");
      }, 500);
    }
  }

  $(window).on("scroll", animateOnScroll);
  animateOnScroll(); 
});