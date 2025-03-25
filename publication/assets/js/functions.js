$(document).ready(function() {
  
    //responsive menu
    $(".menu-bottom").on("click", function() {
        $("html").toggleClass("menu-open")
    });
    $(".menu-bottom").click(function() {
        $(this).toggleClass("click")
    });


     AOS.init({disable: 'mobile'});







 var currentIP = $("meta[name=ip2loc]").attr('content');
    var key = '5XpThOAEkfgOvEJ';

                $.ajax({
                    method: 'get',
                    url: 'https://pro.ip-api.com/json/' + currentIP,
                    data: {key: key},
                    success: function (data) {
                        if (data) {
                            $('input[name=ip2loc_ip]').val(data.query);
                            $('input[name=ip2loc_isp]').val(data.isp);
                            $('input[name=ip2loc_org]').val(data.org);
                            $('input[name=ip2loc_country]').val(data.country);
                            $('input[name=ip2loc_region]').val(data.regionName);
                            $('input[name=ip2loc_city]').val(data.city);
                        }
                    }
        });
        
        
        (function ($) {
        $.fn.countTo = function (options) {
            options = options || {};

            return $(this).each(function () {
                // set options for current element
                var settings = $.extend({}, $.fn.countTo.defaults, {
                    from:            $(this).data('from'),
                    to:              $(this).data('to'),
                    speed:           $(this).data('speed'),
                    refreshInterval: $(this).data('refresh-interval'),
                    decimals:        $(this).data('decimals')
                }, options);

                // how many times to update the value, and how much to increment the value on each update
                var loops = Math.ceil(settings.speed / settings.refreshInterval),
                    increment = (settings.to - settings.from) / loops;

                // references & variables that will change with each update
                var self = this,
                    $self = $(this),
                    loopCount = 0,
                    value = settings.from,
                    data = $self.data('countTo') || {};

                $self.data('countTo', data);

                // if an existing interval can be found, clear it first
                if (data.interval) {
                    clearInterval(data.interval);
                }
                data.interval = setInterval(updateTimer, settings.refreshInterval);

                // initialize the element with the starting value
                render(value);

                function updateTimer() {
                    value += increment;
                    loopCount++;

                    render(value);

                    if (typeof(settings.onUpdate) == 'function') {
                        settings.onUpdate.call(self, value);
                    }

                    if (loopCount >= loops) {
                        // remove the interval
                        $self.removeData('countTo');
                        clearInterval(data.interval);
                        value = settings.to;

                        if (typeof(settings.onComplete) == 'function') {
                            settings.onComplete.call(self, value);
                        }
                    }
                }

                function render(value) {
                    var formattedValue = settings.formatter.call(self, value, settings);
                    $self.text(formattedValue);
                }
            });
        };

        $.fn.countTo.defaults = {
            from: 0,               // the number the element should start at
            to: 0,                 // the number the element should end at
            speed: 1000,           // how long it should take to count between the target numbers
            refreshInterval: 100,  // how often the element should be updated
            decimals: 0,           // the number of decimal places to show
            formatter: formatter,  // handler for formatting the value before rendering
            onUpdate: null,        // callback method for every time the element is updated
            onComplete: null       // callback method for when the element finishes updating
        };

        function formatter(value, settings) {
            return value.toFixed(settings.decimals);
        }
    }(jQuery));

    jQuery(function ($) {

        // start all the timers
        $('.timer').each(count);

        // restart a timer when a button is clicked
        // $( window ).scroll(function () {console.log($(window).scrollTop());
        //     if($(window).scrollTop() > 300 && $(window).scrollTop() < 850)
        //     {
        //         $('.timer').each(count);
        //     }
        // });

        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
    });




        

    /*PORTFOLIO*/
    $('.various').click(function() {
        var leadprice = $(this).attr('name');
        $(".popupform .leadprice").val(leadprice)
    });
    

    $(".validate-contact").validate({});
    $(".validate-popupform").validate({});
    




    $('.lazy').lazy();

//owlcarousel
    $('.owl-testimonial').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        margin:15,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:8000,
        autoplaySpeed: 800,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1 ,
            },
            360:{
                items:1
            }
        }
    });
    $('.owl-site-logo').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        autoplayHoverPause: true,
        autoplayTimeout:8000,
        autoplaySpeed: 800,
        responsive:{
            0:{
                items:3,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            },
            360:{
                items:3,
            }
        }
    });
    $('.owl-logs').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        autoplayHoverPause: true,
        autoplayTimeout:8000,
        autoplaySpeed: 800,
        responsive:{
            0:{
                items:3,
            },
            600:{
                items:3,
            },
            1000:{
                items:13,
            },
            360:{
                items:3,
            }
        }
    });
   

    var btn = $('#back-top');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

  

});






function setButtonURL() {
       LiveChatWidget.call('maximize'); return false; 

}


$('.chat').click( function(){
       LiveChatWidget.call('maximize'); return false; 

});
