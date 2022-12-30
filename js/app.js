
$(document).ready(function(){

    $('.slider').slick({

        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots:true,
        responsive:[
        {
            breakpoint: 426,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]

    });

   $('#form').validate({

    rules:{

        select_people:
        {
            required:true
        },
        select_name:
        {
            required:true
        },
        date:
        {
            required:true
        },
        email:
        {
            required:true
        },
        time:
        {
            required:true
        },
        phone:
        {
            required:true
        }
    },
    messages:
    {
        select_people:
        {
            required:"please select people !"
        },
        select_name:
        {
            required:"please enter name !"
        },
        date:
        {
            required:"please select date !"
        },
        email:
        {
            required:"please enter valid email !"
        },
        time:
        {
            required:"please select time !"
        },
        phone:
        {
            required:"please enter a valid phone number !"
        }
    }

   });

   $(".upside").click(function(){
        $("html, body").animate({scrollTop: 0}, 1000);
    });

    AOS.init();

});

