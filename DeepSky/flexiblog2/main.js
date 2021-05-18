
$(document).ready(function() {
    var x = 0;
    $("#circleJS").click(function() {
        x++;
if (x % 2 == 0) {
            $(this).css({ "left": "1px" });
            $("#mod2").css("background", " radial-gradient(circle, rgba(241,195,125,1) 0%, rgba(237,155,31,1) 100%)");

} else if (x % 2 == 1) {
$(this).css({ "left": "31px" });
$("#mod2").css("background", "radial-gradient(circle, rgba(170, 70, 252, 1) 0%, rgba(63, 86, 251, 1) 100%)");
$("body").css("background-color", "black");
}
    });
});




$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        800:{
            items:1
        },
        1024:{
            items:2
        },
        1500:{
            items:3
        }

    }
});
