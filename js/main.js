// JQuery
$(document).ready(function() {
	
	// delay button
    $('#nav_numbers').delay(1500).fadeIn(1000);

	// cookies
	jQuery.fn.cookiesEU({
	  text:	'Nasza strona internetowa używa plików cookies (tzw. ciasteczek) w celach statystycznych, reklamowych oraz funkcjonalnych. Dzięki nim możemy indywidualnie dostosować stronę do twoich potrzeb. <br>Pliki cookies można wyłączyć w przeglądarce, dzięki czemu nie będą zbierane żadne informacje',
		close: 'Akceptuję',
		position: 'bottom',
		auto_accept: false,
	});
	
	//shrink nav
	$(window).scroll(function() {
		if ($(document).scrollTop() > 50) {
			$('nav').addClass('shrink');
		} else {
			$('nav').removeClass('shrink');
		}
	});
	
	// smooth scrolling (older website)
	  // Add smooth scrolling to all links
	  $("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){

			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		} // End if
	  });
  
});

// JavaScript
// close mobile menu after clicking link
$(function(){ 
     var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
});

	
	