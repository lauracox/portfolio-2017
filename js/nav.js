// JavaScript Document
$(document).ready(function(){
	"use strict";
	
	function checkSize(){
		if ($("#topNav").css("position") === "absolute" ){
			$(".mobile-nav").show();
			$(".mobile-sw").show();
			$(".mobile-sw2").css("z-index", "-1");
		}
	}
	
	checkSize();
	
	$(window).resize(checkSize);
	
// LOADER
	$(window).on("load", function(){
		$("#loader").delay(200).fadeOut(1000);
	});
	
// CORNER MENU TOGGLE BUTTONS
	$(".TL .switch").click(function(){
		$("#topNav").fadeToggle("fast");
		$(".TL .switch2").css("z-index", "1");
		$(this).toggle();
	});

	$(".TL .switch2").click(function(){
		$("#topNav").fadeToggle("fast");
		$(".TL .switch").toggle();
		$(this).css("z-index", "-1");
	});
	
	$(".BR .switch").click(function(){
		$("#bottomNav").fadeToggle("fast");
		$(".BR .switch2").css("z-index", "1");
		$(this).toggle();
	});

	$(".BR .switch2").click(function(){
		$("#bottomNav").fadeToggle("fast");
		$(".BR .switch").toggle();
		$(this).css("z-index", "-1");
	});
	
// MAIN MENU NAV
	$("#work>.button").click(function(){
		$("#playnav").hide();
		$("#storenav").hide();
		$("#infonav").hide();
		$("#worknav").slideToggle("fast");
	});
	
	$("#play>.button").click(function(){
		$("#worknav").hide();
		$("#storenav").hide();
		$("#infonav").hide();
		$("#playnav").slideToggle("fast");
	});
	
	$("#store>.button").click(function(){
		$("#worknav").hide();
		$("#playnav").hide();
		$("#infonav").hide();
		$("#storenav").slideToggle("fast");
	});
	
	$("#info>.button").click(function(){
		$("#worknav").hide();
		$("#playnav").hide();
		$("#storenav").hide();
		$("#infonav").slideToggle("fast");
	});
	
	$(".close").click(function(){
		$(this).closest(".subNav").slideToggle("fast");
	});

// INFO MENU TOGGLES
	$("#info>.button").one("click", function(){
		$("#mail, #call, #pdf, #print").hide();
	});
	
	$("#contact").click(function(){
		$("#mail, #call").slideToggle(100);
	});
	
	$("#resume").click(function(){
		$(this).css("display", "inline-block");
		$("#pdf, #print").fadeToggle(100);
	});
	
// MOBILE CONTENT TRIGGERS
	$("#left-column .project-header").click(function(){
		if (window.matchMedia("(orientation: portrait)").matches) {
			$("#left-column").toggleClass("left-min left-max");
		}
	});
	
// FLOATING IMG MODAL
	$(".container img").click(function(){
		$(this).clone().prependTo(".modal");
		$("#modal").fadeIn("slow");
		$(".corner p").css("visibility", "hidden");
	});
	
	$("#modal").click(function(){
		$("#modal").fadeOut("slow");
		$(".modal").empty();
		$(".corner p").css("visibility", "visible");
	});

});