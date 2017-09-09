/**
 * Created by abhishek on 8/4/17.
 */


window.onload = function () {

  var greeting = new Typed(".greeting", {
    // Waits 1000ms after typing "First"
    strings   : ["Hello! 👋   ^1000 I am <strong> Abhishek </strong>"],
    typeSpeed : 30,
    onComplete: function () {
      showIntroduction();
    }
  });


  function showIntroduction() {
    var typedIntro = new Typed(".typed-intro", {
      strings  : ["Nice to meet you!", "Please scroll down to know more about me.", "What are you waiting for?  🤓"],
      backDelay: 1500,
      typeSpeed: 40,
      backSpeed: 20,
      loop     : true,
    });
  }

  $('a[href^="#"]').click(function () {

    var the_id = $(this).attr("href");

    $('html, body').animate({
      scrollTop: $(the_id).offset().top
    }, 'slow');

    return false;
  });


};
