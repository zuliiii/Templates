document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {
    
        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
            everyitem.addEventListener('mouseover', function(e){
    
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }
    
            });
            everyitem.addEventListener('mouseleave', function(e){
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
    
    
            })
        });
    
    }
    // end if innerWidth
    }); 
    // DOMContentLoaded  end

    // $(document).ready(function(){
    //     $(".img").click(function(){
    //       $(".social").fadeIn();
          
       
    //     });
    //   });

    // $(document).ready(function(){
    //     $('.customer-logos').slick({
    //         slidesToShow: 6,
    //         slidesToScroll:1,
    //         autoplay: true,
    //         autoplaySpeed: 1500,
    //         arrows: false,
    //         dots: false,
    //         pauseOnHover: false,
    //         responsive: [{
    //             breakpoint:768,
    //             settings: {
    //                 slidesToShow: 4
    //             }
    //         }, {
    //             breakpoint: 520, 
    //             settings: {
    //                 slidesToShow: 3
    //             }
            
    //         }]
    //     });
    // });

    $('.accordion').on('click', '.accordion-control', function(e){
        e.preventDefault(); 
        $(this) 
          .next('.accordion-panel')
          .not(':animated') 
          .slideToggle(); 
      })

    // $( function() {
    //     $( ".accordion" ).accordion();
    //   } );


    