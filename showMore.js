/*

showMore - jQuery plugin for large content show more/less functionality
author : <wiflux@gmail.com> Dharminder Singh Negi

 Project home:
   https://github.com/wiflux/showMore

 Version:  0.1

 Usage :
<div class="largeContent"> ...... </div>

 $(".largeContent").showMore({ showChar: 150 });

*/
(function ($) {
 
    $.fn.showMore = function( options ) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the default values.
            showChar : 250,
            ellipsestext : "...",
            moretext : "Show more",
            lesstext : "Show less",
        }, options );
 
        // Greenify the collection based on the settings variable.
        this.each(function() {
            var description = $(this).html();
             if(description.length > settings.showChar){

                var lessDesc = description.substr(0, settings.showChar);
                var moreDesc = description.substr(settings.showChar, description.length - settings.showChar);

                var html = lessDesc + '<span class="moreellipses">' + settings.ellipsestext + 
                '&nbsp;</span><span class="morecontent">' + moreDesc + 
                '</span>&nbsp;&nbsp;<a href="" class="morelink">' + settings.moretext + '</a>';

                $(this).html(html);
             }
        });

        $("body").on("click", ".morelink", function(event){
            event.preventDefault();
            if($(this).text() == settings.moretext){
                  $(this).text(settings.lesstext);
                  $(this).prev(".moreellipses").hide();
                  $(this).prev(".morecontent").show();
            }else{
                  $(this).text(settings.moretext);
                  $(this).prev(".morecontent").hide();
                  $(this).prev(".moreellipses").show();
            }
        });

        return this;
 
    };
 
}( jQuery ));