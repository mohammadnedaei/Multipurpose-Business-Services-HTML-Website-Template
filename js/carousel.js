
$(document).ready(function () {
	$(window).trigger("resize");
	init_fullscreen_menu();
	initPageSliders();
});

function initPageSliders() {
	(function ($) {
		"use strict";
		$(".fullwidth-slider").owlCarousel({
			slideSpeed: 350,
			singleItem: true,
			autoHeight: true,
			navigation: true,
			navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		});
		$(".fullwidth-slider-fade").owlCarousel({
			transitionStyle: "fadeUp",
			slideSpeed: 350,
			singleItem: true,
			autoHeight: true,
			navigation: true,
			navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		});
		$(".fullwidth-gallery").owlCarousel({
			transitionStyle: "fade",
			autoPlay: 5000,
			slideSpeed: 700,
			singleItem: true,
			autoHeight: true,
			navigation: false,
			pagination: false
		});
		$(".item-carousel").owlCarousel({
			autoPlay: 2500,
			items: 3,
			itemsDesktop: [1199, 3],
			itemsTabletSmall: [768, 3],
			itemsMobile: [480, 1],
			navigation: false,
			navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		});
		$(".small-item-carousel").owlCarousel({
			autoPlay: 2500,
			stopOnHover: true,
			items: 6,
			itemsDesktop: [1199, 4],
			itemsTabletSmall: [768, 3],
			itemsMobile: [480, 2],
			pagination: false,
			navigation: false,
			navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		});
		$(".single-carousel").owlCarousel({
			singleItem: true,
			autoHeight: true,
			navigation: true,
			navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		});
		$(".content-slider").owlCarousel({
			slideSpeed: 350,
			singleItem: true,
			autoHeight: true,
			navigation: true,
			navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		});
		$(".photo-slider").owlCarousel({
			slideSpeed: 350,
			items: 4,
			itemsDesktop: [1199, 4],
			itemsTabletSmall: [768, 2],
			itemsMobile: [480, 1],
			autoHeight: true,
			navigation: true,
			navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		});
		$(".work-full-slider").owlCarousel({
			slideSpeed: 350,
			singleItem: true,
			autoHeight: true,
			navigation: true,
			navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		});
		$(".blog-posts-carousel").owlCarousel({
			autoPlay: 5000,
			stopOnHover: true,
			items: 3,
			itemsDesktop: [1199, 3],
			itemsTabletSmall: [768, 2],
			itemsMobile: [480, 1],
			pagination: false,
			navigation: true,
			navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		});
		$(".blog-posts-carousel-alt").owlCarousel({
			autoPlay: 3500,
			stopOnHover: true,
			slideSpeed: 350,
			singleItem: true,
			autoHeight: true,
			pagination: false,
			navigation: true,
			navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		});
		$(".image-carousel").owlCarousel({
			autoPlay: 5000,
			stopOnHover: true,
			items: 4,
			itemsDesktop: [1199, 3],
			itemsTabletSmall: [768, 2],
			itemsMobile: [480, 1],
			navigation: true,
			navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		});
		var sync1 = $(".fullwidth-slideshow");
		var sync2 = $(".fullwidth-slideshow-pager");
		$(".fullwidth-slideshow").owlCarousel({
			autoPlay: 5000,
			stopOnHover: true,
			transitionStyle: "fade",
			slideSpeed: 350,
			singleItem: true,
			autoHeight: true,
			pagination: false,
			navigation: true,
			navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			afterAction: syncPosition,
			responsiveRefreshRate: 200
		});
		$(".fullwidth-slideshow-pager").owlCarousel({
			autoPlay: 5000,
			stopOnHover: true,
			items: 8,
			itemsDesktop: [1199, 8],
			itemsDesktopSmall: [979, 7],
			itemsTablet: [768, 6],
			itemsMobile: [480, 4],
			autoHeight: true,
			pagination: false,
			navigation: false,
			responsiveRefreshRate: 100,
			afterInit: function (el) {
				el.find(".owl-item").eq(0).addClass("synced");
			}
		});

		function syncPosition(el) {
			var current = this.currentItem;
			$(".fullwidth-slideshow-pager").find(".owl-item").removeClass("synced").eq(current).addClass("synced")
			if ($(".fullwidth-slideshow-pager").data("owlCarousel") !== undefined) {
				center(current)
			}
		}
		$(".fullwidth-slideshow-pager").on("click", ".owl-item", function (e) {
			e.preventDefault();
			var number = $(this).data("owlItem");
			sync1.trigger("owl.goTo", number);
		});

		function center(number) {
			var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
			var num = number;
			var found = false;
			for (var i in sync2visible) {
				if (num === sync2visible[i]) {
					var found = true;
				}
			}
			if (found === false) {
				if (num > sync2visible[sync2visible.length - 1]) {
					sync2.trigger("owl.goTo", num - sync2visible.length + 2)
				} else {
					if (num - 1 === -1) {
						num = 0;
					}
					sync2.trigger("owl.goTo", num);
				}
			} else
			if (num === sync2visible[sync2visible.length - 1]) {
				sync2.trigger("owl.goTo", sync2visible[1])
			} else
			if (num === sync2visible[0]) {
				sync2.trigger("owl.goTo", num - 1)
			}
		}
		var owl = $(".fullwidth-slideshow").data("owlCarousel");
		$(document.documentElement).keyup(function (event) {
			if (event.keyCode == 37) {
				owl.prev();
			} else
			if (event.keyCode == 39) {
				owl.next();
			}
		});
		if ($(".owl-carousel").length) {
			var owl = $(".owl-carousel").data('owlCarousel');
			owl.reinit();
		}
	})(jQuery);
};
var fm_menu_wrap = $("#fullscreen-menu");
var fm_menu_button = $(".fm-button");

function init_fullscreen_menu() {
	fm_menu_button.click(function () {
		if ($(this).hasClass("animation-process")) {
			return false;
		} else {
			if ($(this).hasClass("active")) {
				$(this).removeClass("active").css("z-index", "2001").addClass("animation-process");;
				fm_menu_wrap.find(".fm-wrapper-sub").fadeOut("fast", function () {
					fm_menu_wrap.fadeOut(function () {
						fm_menu_wrap.find(".fm-wrapper-sub").removeClass("js-active").show();
						fm_menu_button.css("z-index", "1030").removeClass("animation-process");
					});
				});
				if ($(".owl-carousel").lenth) {
					$(".owl-carousel").data("owlCarousel").play();
				}
			} else {
				if ($(".owl-carousel").lenth) {
					$(".owl-carousel").data("owlCarousel").stop();
				}
				$(this).addClass("active").css("z-index", "2001").addClass("animation-process");
				fm_menu_wrap.fadeIn(function () {
					fm_menu_wrap.find(".fm-wrapper-sub").addClass("js-active");
					fm_menu_button.removeClass("animation-process");
				});
			}
			return false;
		}
	});
	$("#fullscreen-menu").find("a:not(.fm-has-sub)").click(function () {
		if (fm_menu_button.hasClass("animation-process")) {
			return false;
		} else {
			fm_menu_button.removeClass("active").css("z-index", "2001").addClass("animation-process");
			fm_menu_wrap.find(".fm-wrapper-sub").fadeOut("fast", function () {
				fm_menu_wrap.fadeOut(function () {
					fm_menu_wrap.find(".fm-wrapper-sub").removeClass("js-active").show();
					fm_menu_button.css("z-index", "1030").removeClass("animation-process");
				});
			});
			if ($(".owl-carousel").lenth) {
				$(".owl-carousel").data("owlCarousel").play();
			}
		}
	});
	var fmHasSub = $(".fm-has-sub");
	var fmThisLi;
	fmHasSub.click(function () {
		fmThisLi = $(this).parent("li:first");
		if (fmThisLi.hasClass("js-opened")) {
			fmThisLi.find(".fm-sub:first").slideUp(function () {
				fmThisLi.removeClass("js-opened");
				fmThisLi.find(".fm-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down");
			});
		} else {
			$(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up");
			fmThisLi.addClass("js-opened");
			fmThisLi.find(".fm-sub:first").slideDown();
		}
		return false;
	});
}
