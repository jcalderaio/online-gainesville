(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    //For ripple
    $('.button').mousedown(function (e) {
   var target = e.target;
   var rect = target.getBoundingClientRect();
   var ripple = target.querySelector('.ripple');
   $(ripple).remove();
   ripple = document.createElement('span');
   ripple.className = 'ripple';
   ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
   target.appendChild(ripple);
   var top = e.pageY - rect.top - ripple.offsetHeight / 2 -  document.body.scrollTop;
   var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
   ripple.style.top = top + 'px';
   ripple.style.left = left + 'px';
   return false;
});

})(jQuery); // End of use strict
