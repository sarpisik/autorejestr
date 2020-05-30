/*
	Industrious by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
(function($) {
  var $window = $(window),
    $banner = $("#banner"),
    $body = $("body");

  // Breakpoints.
  breakpoints({
    default: ["1681px", null],
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: ["361px", "480px"],
    xxsmall: [null, "360px"]
  });

  // Play initial animations on page load.
  $window.on("load", function() {
    window.setTimeout(function() {
      $body.removeClass("is-preload");
    }, 100);

    // Menu.
    $("#hamburger").on("click", toggleMenu($body));
    $(".close").on("click", toggleMenu($body));
    $(".links > li").on("click", toggleMenu($body));

    $(".scroll").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;
        var locationHash;
        var scrollTop;

        if (this.hash === "#top") {
          scrollTop = 0;
          locationHash = "";
        } else {
          scrollTop = $(hash).offset().top;
          locationHash = hash;
        }

        $("html, body").animate(
          {
            scrollTop: scrollTop
          },
          1200,
          function() {
            window.location.hash = locationHash;
          }
        );
      }
    });
  });

  function toggleMenu(element) {
    return function(event) {
      event.preventDefault();
      element.toggleClass("is-menu-visible");
    };
  }

  var copyright = document.querySelector(".copyright");
  var text = copyright.innerHTML;
  copyright.innerHTML =
    text +
    new Date().getFullYear() +
    " Autorejestr. Made with &#10084; by Coala Web Studio";
})(jQuery);
