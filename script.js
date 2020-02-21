$(document).ready(function() {

    $(window).scroll(function() {
      if($(this).scrollTop() > 550) { 
          $('.navbar').addClass('solid');
          $('.back-to-top').addClass('visible'); 
      } else {
          $('.navbar').removeClass('solid');
          $('.back-to-top').removeClass('visible');  
      }

    });

    $("#scrollIcon").click(function(e) {
        e.preventDefault();
        $.scrollTo($("#about"), 1000);
    });
    $("#nav-about").click(function(e) {
        e.preventDefault();
        $.scrollTo($("#about"), 1000);
    });
    $("#scrollIcon").click(function(e) {
        e.preventDefault();
        $.scrollTo($("#education"), 1000);
    });
    $("#nav-resume").click(function(e) {
        e.preventDefault();
        $.scrollTo($("#education"), 1000);
    });


  });
  function myFunction() {
    alert("Thank you! Your message has been successfully sent. We'll get back to you soon!");
  }

