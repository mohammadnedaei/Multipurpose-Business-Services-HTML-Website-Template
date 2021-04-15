/*jshint browser:true */
/*
* ==================================================================
!             [Main JavaScript File (main.js)]

!     Project Name : Bit - Responsive Multi-Purpose HTML5 Template
!     Version : 1.0
?     Last Change : 20/12/2020
!     Primary Use : One/Multi Page/Multi Purpose Usage
?     Updates & Docs At : https://themeforest.net
?     @author : CreativeThemes Company, https://Bit.CreativeThemes.com                                                   *

* ===================================================================
*/
/*
 * ============================================================================================
!                             [Table OF Contents]

*                            1. Defining Variables
*                            2. Calling Functions
*                            3. Browsers & Devices Detection
*                            4. Header
*                            5. LightBox
*                            6. WOW Animations
*                            7. Modern Parallax
*                            8. Shortcodes
?                              --8.a  Minimal Tabs
?                              --8.b  Responsive Video
?                              --8.c  Team
?                              --8.d Back To Top
?                              --8.e YTPlayer
?                              --8.f Boxed HTML
?                              --8.g Default Theme
 ?                             --8.h Active Navbar
*                            9.  Isotope System
*                            10. CD Slider
*                            11. Cookie Alerts
*                            12. Testimonial Section
*                            13. Search
*                            14. Pricing
*                            15. NewsLetter
*                            16. Multi Language
*                            17. Count Down
*                            18. Toggle Light / Dark Mode
?                               --18.a Dark Mode
?                               --18.b Light Mode
*                            19. Shop
?                               --19.a Shop Items
?                               --19.b Shop Cart Button
?                               --19.c Shop Single
*                            20. Contact Form
* 		                     21. Triggered CSS 3 Plugin
* 			                 22. Jarallax
* ==============================================================================================
*/

/*
* =======================================
!          1. Defining Variables
* =======================================
*/

var body = $("body");
var pageLoaderDiv = $(".page-loader div");
var pageLoader = $(".page-loader");
var mobileTest;
var html = $("html");
var mobile_nav = $(".mobile-nav");
var desktop_nav = $(".desktop-nav");
var mozillaTest;
var safariTest;
var mobileUl = $(".mobile-on .desktop-nav > ul");
var mainNav = $(".main-nav");
var mnHasSub = $(".mn-has-sub");
var mnThisLi;
var backBtn = $('#back-to-top');
var mainParallax = document.getElementsByClassName("parallax");
var fselector = 0;
var isotopeGrid = $(".isotope-grid");
var customerLogo = $(".customer-logos");
var isotopeSys = $(".isotope-sys")
var media = document.getElementsByClassName("video, responsive-video, blog-media, work-full-media, work-full-media");
var masonry = $(".masonry")
var jarallax = $(".jarallax");
var sections = $("section");
var divs = $("div");
var anchors = $("a");
var popups = $(".lightbox-link, .lightbox-gallery-1, .lightbox-gallery-2, .lightbox-gallery-3, .lightbox");

/*
* =======================================
!           2. Calling Functions
* =======================================
*/

$(document).ready(function () {
  body.imagesLoaded(function () {
    pageLoaderDiv.fadeOut();
    pageLoader.delay(200).fadeOut("slow");

  });
  $(window).trigger("scroll");
  $(window).trigger("resize");
  if ((window.location.hash) && ($(window.location.hash).length)) {
    var hash_offset = $(window.location.hash).offset().top;

    $("html, body").animate({
      scrollTop: hash_offset
    });
  }
  $(window).trigger("resize");
  init_lightbox();
  init_simple_parallax();
  init_multi_lang();
  init_isotope_filter();
  init_team();
  init_pricing();
  init_news_letter();
  init_search();
  init_wow();
  init_cd_slider();
  init_testimonials();
  init_contact_form();
  init_jarallax();
});

/*
* =======================================
!       3. Browsers & Devices Detection
* =======================================
*/

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  mobileTest = true;
  html.addClass("mobile");
  sections.removeClass("jarallax parallax");
  divs.removeClass("jarallax tilt parallax");
} else {
  mobileTest = false;
  html.addClass("no-mobile");
}
if (/mozilla/.test(navigator.userAgent)) {
  mozillaTest = true;
} else {
  mozillaTest = false;
}
/*
!   Unfortunately, Safari Doesn't Support Jarallax For Now
*/
if (/safari/.test(navigator.userAgent)) {
  safariTest = true;
  sections.removeClass("jarallax");
  divs.removeClass("jarallax");
} else {
  safariTest = false;
}

if (!("ontouchstart" in document.documentElement)) {
  document.documentElement.className += " no-touch";
}

function height_line(height_object, height_donor) {
  height_object.height(height_donor.height());
  height_object.css({
    "line-height": height_donor.height() + "px"
  });
}! function (a) {
  a.fn.equalHeights = function () {
    var b = 0,
      c = a(this);
    return c.each(function () {
      var c = a(this).innerHeight();
      c > b && (b = c)
    }), c.css("height", b)
  }, a("[data-equal]").each(function () {
    var b = a(this),
      c = b.data("equal");
    b.find(c).equalHeights()
  })
}(jQuery);

/*
* =======================================
!            4. Header
* =======================================
*/

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 50) {
    $('.bg-scrolling-dark').css("background-color", "#000");
    $('.bg-scrolling-light').css("background-color", "#fff");
    $('.bg-scrolling-light .nav-link, .bg-scrolling-light .search-button, .bg-scrolling-light #cart, .bg-scrolling-light .fa-bars, .bg-scrolling-light .navbar-brand, .bg-scrolling-yellow .nav-link, .bg-scrolling-yellow .search-button, .bg-scrolling-yellow #cart, .bg-scrolling-yellow .fa-bars, .bg-scrolling-yellow .day-btn, .bg-scrolling-yellow .navbar-brand').css("color", "#000");
    $('.bg-scrolling-red').css("background-color", "#dc3545");
    $('.bg-scrolling-yellow').css("background-color", "#ffc107");
    $('.bg-scrolling-green').css("background-color", "#28a745");
    $('.bg-scrolling-blue').css("background-color", "#007bff");
  } else {
    $('.bg-scrolling-dark, .bg-scrolling-light, .bg-scrolling-red, .bg-scrolling-yellow, .bg-scrolling-green, .bg-scrolling-blue').css("background-color", "#00000000");
    $('.bg-scrolling-light .nav-link, .bg-scrolling-light .search-button, .bg-scrolling-light #cart, .bg-scrolling-light .fa-bars, .bg-scrolling-light .navbar-brand, .bg-scrolling-yellow .nav-link, .bg-scrolling-yellow .search-button, .bg-scrolling-yellow #cart, .bg-scrolling-yellow .fa-bars, .bg-scrolling-yellow .day-btn ,.bg-scrolling-yellow .navbar-brand ').css("color", "#fff");
  }

})

window.addEventListener('wheel', function(event)
{
  if (event.deltaY < 0)
  {
    $(".hide-on-scroll").fadeIn(1000 , "swing");

  }
  else if (event.deltaY > 0)
  {
    $(".hide-on-scroll").fadeOut(1000 , "swing");
  }
});
function activescroll() {
  if ($("#main-nav").hasClass("active-scroll")) {
    $("#main-nav").removeClass("active-scroll");

  } else {
    $("#main-nav").addClass("active-scroll");
  }
}
/* Hamburger menu */
function openNav() {
  $("#hamburger-menu-full").css("width", "100%");
  $("#hamburger-menu-half").css("width", "65%");
}

function openNavWithBlur() {
  $("#hamburger-menu-blur").css("width", "65%");
  $("#top").addClass("blur-mask");
}
function closeNav() {
  $("#hamburger-menu-full").css("width", "0");
  $("#hamburger-menu-half").css("width", "0");
  $("#hamburger-menu-blur").css("width", "0");
  $("#top").removeClass("blur-mask");
}

/*
* =======================================
!              5. LightBox
* =======================================
*/

function init_lightbox() {
  if (popups.length != 0) {
    $(".lightbox-link").magnificPopup({
      gallery: {
        enabled: true
      },
      mainClass: "mfp-fade"
    });
    $(".lightbox-gallery-1").magnificPopup({
      gallery: {
        enabled: true
      }
    });
    $(".lightbox-gallery-2").magnificPopup({
      gallery: {
        enabled: true
      }
    });
    $(".lightbox-gallery-3").magnificPopup({
      gallery: {
        enabled: true
      }
    });
    $(".lightbox").magnificPopup();
  }
}

/*
* =======================================
!          6. WOW Animations
* =======================================
*/
function init_wow() {
  (function ($) {
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 90,
      mobile: false,
      live: true
    });
    if ($("body").hasClass("appear-animate")) {
      wow.init();
    }
  })(jQuery);
}
/*
* =======================================
!          7. Modern Parallax
* =======================================
*/

function init_simple_parallax() {

  var i;
  for (i = 0; i < mainParallax.length; i++) {
    if (mainParallax !== undefined) {
      new simpleParallax(mainParallax, {
        delay: 1,
        transition: 'cubic-bezier(0.2,0.5,0.7,1)',
        scale: '1.2',
        overflow: 'true'
      });
    }
  }
}

/*
* =======================================
!              8. Shortcodes
* =======================================
*/

// 8.a >> Minimal Tabs <<
$(document).ready(function () {

  $(".alt-tabs-icon span").click(function () {
    $(".alt-tabs-icon span").removeClass("active");
    $(this).addClass("active");
  });

});

// 8.b >> Responsive Video <<
if (media.length !== 0) {
  media.fitVids();

}


// 8.c >> Team <<
function init_team() {
  $(".team-item").click(function () {
    if ($("html").hasClass("mobile")) {
      $(this).toggleClass("js-active");
    }
  });
}
// 8.d >> Back To Top <<
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    backBtn.addClass('show');
  } else {
    backBtn.removeClass('show');
  }
});
// 8.e >> YTPlayer <<
$(document).ready(function () {
  if (($("html").hasClass("player"))) {
    $(".player").mb_YTPlayer();
  }
});

// 8.f >> Boxed HTML <<
$(document).ready(function () {
  if (($("body").hasClass("boxed"))) {
    $("html").addClass("boxed-html");
  }
});

// 8.g >> Default Theme <<

$(document).ready(function () {
  if (($("body").hasClass("dark-theme"))) {
    darkmode();
  }
  if (($("body").hasClass("light-theme"))) {
    lightmode();
  }
});

// 8.h >> Active Navbar <<
$(document).ready(function () {

  $(".single-nav-item a").click(function () {
    $(".single-nav-item a").removeClass("active");
    $(this).addClass("active");
  });

});

/*
* =======================================
!          9. Isotope System
* =======================================
*/

function init_isotope_filter() {
  if (isotopeSys.length !== 0) {
    (function ($) {
      "use strict";
      var isotope_mode;
      if (isotopeGrid.hasClass("masonry")) {
        isotope_mode = "masonry";
      } else {
        isotope_mode = "fitRows"
      }
      $(".filter").click(function () {
        $(".filter").removeClass("active");
        $(this).addClass("active");
        fselector = $(this).attr('data-filter');
        isotopeGrid.imagesLoaded(function () {
          isotopeGrid.isotope({
            itemSelector: '.mix',
            layoutMode: isotope_mode,
            filter: fselector
          });
        });
        return false;
      });
      if (window.location.hash) {
        $(".filter").each(function () {
          if ($(this).attr("data-filter") == "." + window.location.hash.replace("#", "")) {
            $(this).trigger('click');
            $("html, body").animate({
              scrollTop: $(".isotope-sys").offset().top
            });
          }
        });
      }
      isotopeGrid.imagesLoaded(function () {
        isotopeGrid.isotope({
          itemSelector: '.mix',
          layoutMode: isotope_mode,
          filter: fselector
        });
      });
    })(jQuery);
  }
}

/*
* =======================================
!             10. CD Slider
* =======================================
*/

function init_cd_slider() {
  jQuery(document).ready(function ($) {
    var sliderContainers = $('.cd-slider-wrapper');
    if (sliderContainers.length > 0) initBlockSlider(sliderContainers);

    function initBlockSlider(sliderContainers) {
      sliderContainers.each(function () {
        var sliderContainer = $(this),
          slides = sliderContainer.children('.cd-slider').children('li'),
          sliderPagination = createSliderPagination(sliderContainer);
        sliderPagination.on('click', function (event) {
          event.preventDefault();
          var selected = $(this),
            index = selected.index();
          updateSlider(index, sliderPagination, slides);
        });
        sliderContainer.on('swipeleft', function () {
          var bool = enableSwipe(sliderContainer),
            visibleSlide = sliderContainer.find('.is-visible').last(),
            visibleSlideIndex = visibleSlide.index();
          if (!visibleSlide.is(':last-child') && bool) {
            updateSlider(visibleSlideIndex + 1, sliderPagination, slides);
          }
        });
        sliderContainer.on('swiperight', function () {
          var bool = enableSwipe(sliderContainer),
            visibleSlide = sliderContainer.find('.is-visible').last(),
            visibleSlideIndex = visibleSlide.index();
          if (!visibleSlide.is(':first-child') && bool) {
            updateSlider(visibleSlideIndex - 1, sliderPagination, slides);
          }
        });
      });
    }

    function createSliderPagination(container) {
      var wrapper = $('<ol class="cd-slider-navigation"></ol>');
      container.children('.cd-slider').find('li').each(function (index) {
        var dotWrapper = (index == 0) ? $('<li class="selected"></li>') : $('<li></li>'),
          dot = $('<a href="#0"></a>').appendTo(dotWrapper);
        dotWrapper.appendTo(wrapper);
        var dotText = (index + 1 < 10) ? '0' + (index + 1) : index + 1;
        dot.text(dotText);
      });
      wrapper.appendTo(container);
      return wrapper.children('li');
    }

    function updateSlider(n, navigation, slides) {
      navigation.removeClass('selected').eq(n).addClass('selected');
      slides.eq(n).addClass('is-visible').removeClass('covered').prevAll('li').addClass('is-visible covered').end().nextAll('li').removeClass('is-visible covered');
      navigation.parent('ul').addClass('slider-animating').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
        $(this).removeClass('slider-animating');
      });
    }

    function enableSwipe(container) {
      return (container.parents('.touch').length > 0);
    }
  });
}

/*
* =======================================
!             11. Cookie Alerts
* =======================================
*/

if (localStorage.getItem('cookieSeen') != 'shown') {
  $('#cookie-alert').delay(2000).fadeIn();
  localStorage.setItem('cookieSeen', 'shown')
};
if (localStorage.getItem('cookieSeen') != 'shown') {
  $('#cookie-alert').delay(2000).fadeIn();
  localStorage.setItem('cookieSeen', 'shown')
};
$('#close-success').click(function () {
  $('.success-alert').fadeOut();
})
$('#close-warning').click(function () {
  $('.warning-alert').fadeOut();
})
$('#close-info').click(function () {
  $('.info-alert').fadeOut();
})
$('#close-danger').click(function () {
  $('.danger-alert').fadeOut();
})
$('#close-icon-success').click(function () {
  $('.icon-success-alert').fadeOut();
})
$('#close-icon-warning').click(function () {
  $('.icon-warning-alert').fadeOut();
})
$('#close-icon-info').click(function () {
  $('.icon-info-alert').fadeOut();
})
$('#close-icon-danger').click(function () {
  $('.icon-danger-alert').fadeOut();
})
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
  return p.toString() === "[object SafariRemoteNotification]";
})(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
var isIE = false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);
var isBlink = (isChrome || isOpera) && !!window.CSS;
if (isOpera = true) {
  document.getElementById("browser-alert").style.display = "none";
}
if (isFirefox = true) {
  document.getElementById("browser-alert").style.display = "none";
}
if (isEdgeChromium = true) {
  document.getElementById("browser-alert").style.display = "none";
}
if (isChrome = true) {
  document.getElementById("browser-alert").style.display = "none";
}
if (isBlink = true) {
  document.getElementById("browser-alert").style.display = "none";
}

/*
* =======================================
!           12. Testimonial Section
* =======================================
*/

function init_testimonials() {
  $(document).ready(function () {
    $('.client-single').on('click', function (event) {
      event.preventDefault();
      var active = $(this).hasClass('active');
      var parent = $(this).parents('.testi-wrap');
      if (!active) {
        var activeBlock = parent.find('.client-single.active');
        var currentPos = $(this).attr('data-position');
        var newPos = activeBlock.attr('data-position');
        activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(currentPos);
        activeBlock.attr('data-position', currentPos);
        $(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(newPos);
        $(this).attr('data-position', newPos);
      }
    });
  }(jQuery));
}

/*
* =======================================
!                13. Search
* =======================================
*/

function init_search() {
  $(function () {
    $(".search-button").on("click", function () {
      $("#search").addClass("open");
    });
    $("#search .close").on("click", function () {
      $("#search").removeClass("open");
    });
    document.onkeydown = function (evt) {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
        $("#search").removeClass("open");

      }
    };
    $(".searchform").submit(function (event) {
      event.preventDefault();
      return false;
    });
  });
}

/*
* =======================================
!                14. Pricing
* =======================================
*/

function init_pricing() {
  jQuery(document).ready(function ($) {
    checkScrolling($('.pricing-body'));
    $(window).on('resize', function () {
      window.requestAnimationFrame(function () {
        checkScrolling($('.pricing-body'))
      });
    });
    $('.pricing-body').on('scroll', function () {
      var selected = $(this);
      window.requestAnimationFrame(function () {
        checkScrolling(selected)
      });
    });

    function checkScrolling(tables) {
      tables.each(function () {
        var table = $(this),
          totalTableWidth = parseInt(table.children('.pricing-features').width()),
          tableViewport = parseInt(table.width());
        if (table.scrollLeft() >= totalTableWidth - tableViewport - 1) {
          table.parent('li').addClass('is-ended');
        } else {
          table.parent('li').removeClass('is-ended');
        }
      });
    }
    bouncy_filter($('.pricing-container'));

    function bouncy_filter(container) {
      container.each(function () {
        var pricing_table = $(this);
        var filter_list_container = pricing_table.children('.pricing-switcher'),
          filter_radios = filter_list_container.find('input[type="radio"]'),
          pricing_table_wrapper = pricing_table.find('.pricing-wrapper');
        var table_elements = {};
        filter_radios.each(function () {
          var filter_type = $(this).val();
          table_elements[filter_type] = pricing_table_wrapper.find('li[data-type="' + filter_type + '"]');
        });
        filter_radios.on('change', function (event) {
          event.preventDefault();
          var selected_filter = $(event.target).val();
          show_selected_items(table_elements[selected_filter]);
          if (!Modernizr.cssanimations) {
            hide_not_selected_items(table_elements, selected_filter);
            pricing_table_wrapper.removeClass('is-switched');
          } else {
            pricing_table_wrapper.addClass('is-switched').eq(0).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
              hide_not_selected_items(table_elements, selected_filter);
              pricing_table_wrapper.removeClass('is-switched');
              if (pricing_table.find('.pricing-list').hasClass('bounce-invert')) pricing_table_wrapper.toggleClass('reverse-animation');
            });
          }
        });
      });
    }

    function show_selected_items(selected_elements) {
      selected_elements.addClass('is-selected');
    }

    function hide_not_selected_items(table_containers, filter) {
      $.each(table_containers, function (key, value) {
        if (key != filter) {
          $(this).removeClass('is-visible is-selected').addClass('is-hidden');
        } else {
          $(this).addClass('is-visible').removeClass('is-hidden is-selected');
        }
      });
    }
  });
}

/*
* =======================================
!              15. NewsLetter
* =======================================
*/

function init_news_letter() {
  $(document).ready(function () {
    $(".newsletter-signup > form").submit(function (e) {
      e.preventDefault();
      var validForm = true;
      var inputArray = $(this).find("input.required");
      inputArray.each(function (item) {
        if ($(this).val() == "") {
          validForm = false;
          $(".newsletter-signup .error-message").show();
          $('.newsletter-signup input.required').addClass('error');
        }
      });
      if (validForm == true) {
        var formContainer = $(".newsletter-signup");
        var formData = $(this).serialize();
        $.ajax({
          type: $(this).attr("method"),
          url: $(this).attr("action"),
          data: formData,
          cache: false,
          dataType: "json",
          contentType: "application/json; charset=utf-8",
          encode: true,
          error: function (err) {
            console.log("Uh, oh. There was an error:", err);
          },
          success: function (data) {
            console.log("Success! Here is the data:", data);
          }
        }).done(function (data) {
          $(formContainer).hide();
          $(".success-message").show();
          $("svg").addClass("active");
        });
      }
      return;
    });
  });
}

/*
* =======================================
!          16. Multi Language
* =======================================
*/

function init_multi_lang() {
  var tnum = 'en';
  $(document).ready(function () {
    $(document).click(function (e) {
      $('.translate-wrapper, .more-lang').removeClass('active');
    });
    $('.translate-wrapper .current-lang').click(function (e) {
      e.stopPropagation();
      $(this).parent().toggleClass('active');
      setTimeout(function () {
        $('.more-lang').toggleClass('active');
      }, 5);
    });
    translate(tnum);
    $('.more-lang .lang').click(function () {
      $(this).addClass('selected').siblings().removeClass('selected');
      $('.more-lang').removeClass('active');
      var img = $(this).find('img').attr('src');
      var lang = $(this).attr('data-value');
      var tnum = lang;
      translate(tnum);
      $('.current-lang .lang-txt').text(lang);
      $('.current-lang img').attr('src', img);
    });
  });

  function translate(tnum) {
    $('h1').text(trans[0][tnum]);
    $('p').text(trans[1][tnum]);
    $('.content a span').text(trans[2][tnum]);
  }
  var trans = [{}, {}, {}, ];
}

/*
* =======================================
!            17. Count Down
* =======================================
*/
function countdown() {

  future = Date.parse("aug 2, 2021, 11:30:00");
  now = new Date();
  diff = future - now;
  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);
  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;
  var mainTimer = $(".timer");
  if (mainTimer.length !== 0) {
    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("mins").innerHTML = m;
    document.getElementById("secs").innerHTML = s;
  }
}
setInterval('countdown()', 5);

/*
* =======================================
!          18. Toggle Light / Dark Mode
* =======================================
*/

// 18.a >> Dark Mode <<
function darkmode() {
  $("#body, h3, h4, h6, .small-features p, .post-prev-title a, .post-prev-info a, .section-more, .footer-header h2, #services-section-header, #pricing-switch-monthly, #pricing-switch-yearly, #post-title, #google-map p, #footer p, .googlemap-headers, #footer .social i, .section-title , .section-text, .filter, .megamenu ul li a, .dark-outline-btn, .light-outline-btn , .faq-title, .grid-item h2, .alt-tabs-icon .fa-copyright, .blog-item-title a, .cart-item-text").css("color", "#fff");
  $("#body, .page, #portfolio, #small-services .service-item, .services-down, .services-intro, #pricing-section, #features, #cd-slider-section, #news, #google-map, #footer , .demo-section, .inner-26").css("background", "#121212");
  $(".megamenu, .faq .card").css("background-color", "#212121");
  $(".mobile-nav .fa, .shop-cart, .content-element-light").css("color", "#212121");
  $(".pricing-wrapper > li , .our-offer-items .item, .shop-item-wrapper .container .bottom .left, .shopping-cart, .card, .shop-single-card .description, .shop-single-card").css("background", "#212121");
  $(".google-map-icons, .pricing-table-section").css("color", "#3f72af");
  $("#bootstrap-icon").css("color", "#9d42e7");
  $("#footer-logo").attr("src", "./images/logo/logo-light.webp");
  $("#curve-dark").css("opacity", "1");
  $("#curve-light").css("opacity", "0");
  $(".deco-layer").attr("fill", "#212121");
  $(".night-btn").addClass("active-theme");
  $(".day-btn").addClass("non-active-theme");
  $(".day-btn").removeClass("active-theme");
}
// 18.b >> Light Mode <<
function lightmode() {
  $("#body, h3, h4, h6, .small-features p, .post-prev-title a, .post-prev-info a, .section-more, .footer-header h2, #services-section-header, #pricing-switch-monthly, #pricing-switch-yearly, #post-title, #footer p, .googlemap-headers, #footer .social i, .section-title, .section-text, #google-map p ,  .megamenu ul li a, .dark-outline-btn, .light-outline-btn, .faq-title, .grid-item h2, .alt-tabs-icon .fa-copyright, .blog-item-title a, .cart-item-text").css("color", "#000");
  $("#body, .page, #portfolio, #small-services .service-item, .services-down, .services-intro, #pricing-section, #features, #cd-slider-section, #news, #google-map, #footer , .demo-section, .inner-26").css("background", "#ece9e6");
  $(".megamenu, .faq .card").css("background-color", "#fff");
  $(".top-shop-banner h3, .top-shop-banner h4, .shop-cart").css("color", "#ece9e6");
  $(".pricing-wrapper > li, .our-offer-items .item, .shop-item-wrapper .container .bottom .left, .shopping-cart,  .card, .shop-single-card .description, .shop-single-card").css("background", "#fff");
  $(".big-update h2, .mobile-nav .fa, h4.font-alt.normal").css("color", "#fff");
  $(".pricing-table-section, .google-map-icons").css("color", "#000");
  $(".filter").css("color", "#ff2e63");
  $("#bootstrap-icon").css("color", "#6211a5");
  $("#footer-logo").attr("src", "./images/logo/logo-dark.webp");
  $("#curve-dark").css("opacity", "0");
  $("#curve-light").css("opacity", "1");
  $(".deco-layer").attr("fill", "#fff");
  $(".day-btn").addClass("active-theme");
  $(".night-btn").addClass("non-active-theme");
  $(".night-btn").removeClass("active-theme");
}

/*
* =======================================
!                19. Shop
* =======================================
*/

// 19.a >> Shop Items <<
$('.buy-1').click(function () {
  $('.bottom-1').addClass("clicked");
});

$('.remove-1').click(function () {
  $('.bottom-1').removeClass("clicked");
});

$('.buy-2').click(function () {
  $('.bottom-2').addClass("clicked");
});

$('.remove-2').click(function () {
  $('.bottom-2').removeClass("clicked");
});

$('.buy-3').click(function () {
  $('.bottom-3').addClass("clicked");
});

$('.remove-3').click(function () {
  $('.bottom-3').removeClass("clicked");
});



// 19.b >> Shop Cart Button <<

const cartButtons = document.querySelectorAll('.cart-button');

cartButtons.forEach(button => {
  button.addEventListener('click', cartClick);
});

function cartClick() {
  let button = this;
  button.classList.add('clicked');
}
(function () {

  $("#cart").on("click", function () {

    $(".shopping-cart").fadeToggle("fast");
  });
  $(".trash-1").on("click", function () {
    $(".shopping-cart-item-1").fadeOut("fast");
  });
  $(".trash-2").on("click", function () {
    $(".shopping-cart-item-2").fadeOut("fast");
  });
  $(".trash-3").on("click", function () {
    $(".shopping-cart-item-3").fadeOut("fast");
  });
  $(".trash-all").on("click", function () {
    $(".shopping-cart-items, .shopping-cart .left-badge, .shopping-cart-total, .trash-all, .badge-number").fadeOut("fast");
  });
  $(".close-cart").on("click", function () {
    $(".shopping-cart").fadeOut("fast");
  });

})();

// 19.c >> Shop Single <<



$(".shop-single-item-2").on("click", function () {
  $("#shop-single-item-3").fadeOut();
  $("#shop-single-item-1").fadeOut();
  $("#shop-single-item-2").fadeIn();
});
$(".shop-single-item-1").on("click", function () {
  $("#shop-single-item-1").fadeIn();
  $("#shop-single-item-2").fadeOut();
  $("#shop-single-item-3").fadeOut();
});
$(".shop-single-item-3").on("click", function () {
  $("#shop-single-item-1").fadeOut();
  $("#shop-single-item-2").fadeOut();
  $("#shop-single-item-3").fadeIn();
});
/*Dropdown Menu*/
$('.shop-single-dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.shop-single-dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.shop-single-dropdown-menu').slideUp(300);
});
$('.shop-single-dropdown .shop-single-dropdown-menu li').click(function () {
  $(this).parents('.shop-single-dropdown').find('span').text($(this).text());
  $(this).parents('.shop-single-dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
msg = '<span class="msg">Hidden input value: ';
$('.msg').html(msg + input + '</span>');
}); 
jQuery(document).ready(($) => {
  $('.quantity').on('click', '.plus', function(e) {
      let $input = $(this).prev('input.qty');
      let val = parseInt($input.val());
      $input.val( val+1 ).change();
  });

  $('.quantity').on('click', '.minus', 
      function(e) {
      let $input = $(this).next('input.qty');
      var val = parseInt($input.val());
      if (val > 1) {
          $input.val( val-1 ).change();
      } 
  });
});

/*
* =======================================
!           20. Contact Form
* =======================================
*/

function init_contact_form() {

  $("#submit_btn").click(function () {
    var user_name = $('input[name=name]').val();
    var user_email = $('input[name=email]').val();
    var user_message = $('textarea[name=message]').val();
    var user_phone = $('input[name=phone]').val();
    var user_title = $('input[name=title]').val();

    var proceed = true;
    if (user_name == "") {
      $('input[name=name]').css('border-color', '#e33131');
      proceed = false;
    }
    if (user_email == "") {
      $('input[name=email]').css('border-color', '#e33131');
      proceed = false;
    }
    if (user_message == "") {
      $('textarea[name=message]').css('border-color', '#e33131');
      proceed = false;
    }
    if (user_phone == "") {
      $('input[name=phone]').css('border-color', '#e33131');
      proceed = false;
    }
    if (user_title == "") {
      $('input[name=title]').css('border-color', '#e33131');
      proceed = false;
    }
    if (proceed) {
      post_data = {
        'userName': user_name,
        'userEmail': user_email,
        'userMessage': user_message,
        'userPhone': user_phone,
        'userTitle': user_title
      };
      $.post('php/contact_me.php', post_data, function (response) {
        if (response.type == 'error') {
          output = '<div>' + response.text + '</div>';
        } else {
          output = '<div>' + response.text + '</div>';
        }
      }, 'json');
    }
    return false;
  });
}

/*
* =======================================
!        21. Triggered CSS 3 Plugin
* =======================================
*/

(function ($, win) {
  $.fn.inViewport = function (cb) {
    return this.each(function (i, el) {
      function visPx() {
        var H = $(this).height(),
          r = el.getBoundingClientRect(),
          t = r.top,
          b = r.bottom;
        return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
      }
      visPx();
      $(win).on("resize scroll", visPx);
    });
  };
}(jQuery, window));

$(".animated-progress-1").inViewport(function (px) {
  if (px) $(this).addClass("progress-effect-1");
});
$(".animated-progress-2").inViewport(function (px) {
  if (px) $(this).addClass("progress-effect-2");
});
$(".animated-progress-3").inViewport(function (px) {
  if (px) $(this).addClass("progress-effect-3");
});
$("#home").inViewport(function (px) {
  if (px) {
    $(".home-nav-item a").addClass("active");
  } else {
    $(".home-nav-item a").removeClass("active");
  }
});
$("#about").inViewport(function (px) {
  if (px) {
    $(".about-nav-item a").addClass("active");
  } else {
    $(".about-nav-item a").removeClass("active");
  }
});
$("#portfolio").inViewport(function (px) {
  if (px) {
    $(".portfolio-nav-item a").addClass("active");
  } else {
    $(".portfolio-nav-item a").removeClass("active");
  }
});
$("#tab-services").inViewport(function (px) {
  if (px) {
    $(".services-nav-item a").addClass("active");
  } else {
    $(".services-nav-item a").removeClass("active");
  }
});
$("#news").inViewport(function (px) {
  if (px) {
    $(".blog-nav-item a").addClass("active");
  } else {
    $(".blog-nav-item a").removeClass("active");
  }
});
$("#contact").inViewport(function (px) {
  if (px) {
    $(".contact-nav-item a").addClass("active");
  } else {
    $(".contact-nav-item a").removeClass("active");
  }
});
/*
* =======================================
!           22. Jarallax
* =======================================
*/
function init_jarallax() {
  if (jarallax.length != 0) {
    $(".jarallax").jarallax({
      speed: 0.2
    });
  }
}
