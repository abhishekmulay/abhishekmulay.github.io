/**
 * Created by abhishek on 8/4/17.
 */


window.onload = function () {

  var greeting = new Typed(".greeting", {
    // Waits 1000ms after typing "First"
    strings: ["Hello! 👋   ^1000 I am <strong> Abhishek </strong>"],
    typeSpeed: 30,
    onComplete : function () {
      showIntroduction();
    }
  });


  function showIntroduction() {
    var typedIntro = new Typed(".typed-intro", {
      strings: ["Nice to meet you!", "Please scroll down to know more about me.", "Seriously! Please scroll down."],
      backDelay: 1500,
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
    });
  }

};


// $(function(){
//   $("h2 .first").typed({
//     strings: ["This should stay forever. "],
//     typeSpeed: 0,
//     callback: function() {
//       showThis();
//     },
//
//   });
//
//   function showThis(){
//
//     $("span.second").typed({
//       strings: ["Loop Element 1", "Element 2 Here", "New Element 3", "Element # 4"],
//       backDelay: 1500,
//       typeSpeed: 100,
//       backSpeed: 100,
//       loop: true,
//
//     });
//
//   }
// });


