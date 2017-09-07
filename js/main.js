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

  remCalibrate();
  window.addEventListener('resize', remCalibrate, false);

  $('a[href^="#"]').click(function () {

    var the_id = $(this).attr("href");

    $('html, body').animate({
      scrollTop: $(the_id).offset().top
    }, 'slow');

    return false;
  });


};


function remCalibrate() {
  // clip to a decent range size to avoid, making endless size adjustments as screens being bigger and bigger
  var aspect_ratio = (window.innerHeight / window.innerWidth) / 0.75
  var vwh = window.innerWidth / 100
  var rem = Math.max(8, Math.min(24, vwh * aspect_ratio))

  document.documentElement.style.fontSize = rem + 'px';
}



