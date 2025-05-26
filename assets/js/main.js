 window.addEventListener("load", () => {
    setTimeout(() => {
      const loader = document.querySelector(".page-loader");
      loader.classList.add("fade-out");
      setTimeout(() => loader.remove(), 1000); // fully remove after fade
    }, 3000); // 5 seconds delay
  });


//   fade effect
 const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // optional: only animate once
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.fade-in-section').forEach(el => {
    observer.observe(el);
  });




$(function(){
 // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });




});