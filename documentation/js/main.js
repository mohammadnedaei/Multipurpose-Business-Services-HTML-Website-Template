$(".sidebar-dropdown > a").click(function () {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
    .parent()
    .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function () {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function () {
  $(".page-wrapper").addClass("toggled");
});
const Prismtheme = document.querySelector("#prism-style");


//>> Dark Mode <<
function darkmode() {
  $("#body, h3, h4, h6, .small-features p, .post-prev-title a, .post-prev-info a, .section-more, .footer-header h2, #services-section-header, #pricing-switch-monthly, #pricing-switch-yearly, #post-title, #google-map p, #footer p, .googlemap-headers, #footer .social i, .section-title , .section-text, .filter, .megamenu ul li a, .dark-outline-btn, .light-outline-btn , .faq-title, .grid-item h2, .alt-tabs-icon .fa-copyright, .blog-item-title a, .cart-item-text").css("color", "#fff");
  $("#body, .page, #portfolio, #small-services .service-item, .services-down, .services-intro, #pricing-section, #features, #cd-slider-section, #news, #google-map, #footer , .demo-section, .inner-26").css("background", "#121212");
  $(".megamenu, .faq .card").css("background-color", "#212121");
  $(".mobile-nav .fa, .shop-cart").css("color", "#212121");
  $(".pricing-wrapper > li , .our-offer-items .item, .shop-item-wrapper .container .bottom .left, .shopping-cart, .card").css("background", "#212121");
  $(".google-map-icons, .pricing-table-section").css("color", "#3f72af");
  $("#bootstrap-icon").css("color", "#9d42e7");
  $("#footer-logo").attr("src", "./images/logo/logo-light.webp");
  $("#curve-dark").css("opacity", "1");
  $("#curve-light").css("opacity", "0");
  $(".deco-layer").attr("fill", "#212121");
  $(".night-btn").addClass("active-theme");
  $(".day-btn").addClass("non-active-theme");
  $(".day-btn").removeClass("active-theme");
  if (Prismtheme.getAttribute("href") == "../css/prism.css") {
    // ... then switch it to "dark-theme.css"
    Prismtheme.href = "../css/prism-dark.css";
  }

}
// >> Light Mode <<
function lightmode() {
  $("#body, h3, h4, h6, .small-features p, .post-prev-title a, .post-prev-info a, .section-more, .footer-header h2, #services-section-header, #pricing-switch-monthly, #pricing-switch-yearly, #post-title, #footer p, .googlemap-headers, #footer .social i, .section-title, .section-text, #google-map p ,  .megamenu ul li a, .dark-outline-btn, .light-outline-btn, .faq-title, .grid-item h2, .alt-tabs-icon .fa-copyright, .blog-item-title a, .cart-item-text").css("color", "#000");
  $("#body, .page, #portfolio, #small-services .service-item, .services-down, .services-intro, #pricing-section, #features, #cd-slider-section, #news, #google-map, #footer , .demo-section, .inner-26").css("background", "#ece9e6");
  $(".megamenu, .faq .card").css("background-color", "#fff");
  $(".top-shop-banner h3, .top-shop-banner h4, .shop-cart").css("color", "#ece9e6");
  $(".pricing-wrapper > li, .our-offer-items .item, .shop-item-wrapper .container .bottom .left, .shopping-cart,  .card").css("background", "#fff");
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
  if (Prismtheme.getAttribute("href") == "css/prism-dark.css") {
    // ... then switch it to "dark-theme.css"
    Prismtheme.href = "css/prism.css";
  }
}


//new Clipboard('.btn');

var copyCode = new Clipboard('.btn-copy');

copyCode.on('success', function (event) {
  event.clearSelection();
  event.trigger.textContent = 'Copied to Clipboard!';
  window.setTimeout(function () {
    event.trigger.textContent = 'Copy';
  }, 2300);
});

copyCode.on('error', function (event) {
  event.trigger.textContent = 'Press "Ctrl + C" to copy';
  window.setTimeout(function () {
    event.trigger.textContent = 'Copy';
  }, 2000);
});

function sidePop() {
  setTimeout(() => {
    $(".page-wrapper").addClass("toggled");
    $(".view-intro").addClass("tada-btn");
  }, 2000);

}

function sidePopOut() {
  setTimeout(() => {
    $(".page-wrapper").removeClass("toggled");
    $(".view-intro").removeClass("tada-btn");
  }, 4000);

}
sidePop();
sidePopOut();