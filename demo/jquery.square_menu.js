/* ===========================================================
 * jquery-square_menu.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Recreate a full page animated menu like you see 
 * Square Website using jQuery and CSS3
 *
 * https://github.com/peachananr/square_menu
 *
 * ========================================================== */

!function($){
  
  var defaults = {
    flyDirection: "bottom",
    button: "Menu",
    animationStyle: "vertical",
    closeButton: "X"
	};
	
  
  $.fn.square_menu = function(options){
    var settings = $.extend({}, defaults, options),
        el = $(this);  
    
    $("body").addClass("fsm-body")
    
    el.addClass("sm-menu sm-"+settings.flyDirection+ " sm-" + settings.animationStyle)
    el.wrapInner("<div class='sm-wrapper'></div>")
    
    el.find("nav").addClass("sm-nav").wrapInner("<div class='nav-inner'></div>");
    
    $.fn.closeMenu = function() {
      
      $(".sm-menu").addClass("animated").removeClass("re-rotate")
      $(".sm-menu .sm-close").remove()
      $(".sm-menu .sm-nav:first-child .nav-inner").removeClass("animated flyInLeft")
      $(".sm-menu .sm-nav:nth-child(2) .nav-inner").removeClass("animated flyInRight")
      
      if ($("body").hasClass("sm-activate")) {
        $(".sm-menu").find(".sm-nav").removeClass("animated")
        $(".sm-menu").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
          $("body").removeClass("sm-activate").find(".sm-menu").removeClass("ff-hack")
        });
      }
    }
    
    $.fn.openMenu = function() {
      
      $(".sm-menu").addClass("animated").addClass("ff-hack")
      
      if (!$("body").hasClass("sm-activate")) {
        if ($(".sm-overlay").length < 1) $("<div class='sm-overlay'></div>").hide().prependTo("body")
        $(".sm-overlay").fadeIn("fast", function() {
          $("body").addClass("sm-activate")
          var fired = false;
          $("body").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e){
            if ( ! fired ) {
                fired = true;
                $(".sm-menu .sm-nav").addClass("animated");
                $(".sm-menu .sm-nav").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e){
                  if (e.originalEvent.propertyName == '-webkit-transform' || e.originalEvent.propertyName == 'transform' || e.originalEvent.propertyName == '-o-transform' || e.originalEvent.propertyName == '-moz-transform') {
                    $(".sm-menu").addClass("re-rotate")
                    if (settings.closeButton != false) {
                      el.prepend("<a href='#' class='sm-close'>" + settings.closeButton + "</a>")

                      $(".sm-close").click(function() {
                        el.closeMenu();
                        return false;
                      });
                    }

                    $(".sm-menu .sm-nav:first-child .nav-inner").addClass("animated flyInLeft")
                    $(".sm-menu .sm-nav:nth-child(2) .nav-inner").addClass("animated flyInRight")
                    $(".sm-overlay:not(.clicked)").addClass("clicked").click(function() {
                      el.closeMenu();
                    });
                  }
                });
            }
          });
        });
      } else {
        el.closeMenu();
      }
    }
    
    if (settings.button != false) {
      $("<a href='#' class='sm-button'>" + settings.button + "</a>").insertAfter(el)
    }
    
    
    $(".sm-button").click(function() {
      el.openMenu();
      return false;
    });
  }
}(window.jQuery);

