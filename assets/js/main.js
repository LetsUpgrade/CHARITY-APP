// const home_svg = document.querySelectorAll("#home_svg path");
// console.log(home_svg);

// for(let i = 0; i<home_svg.length; i++) {
//     console.log(`Letter ${i} is ${home_svg[i].getTotalLength()}`);
// }

  // Back to top button
  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > 15) {
  //     $('.back-to-top').fadeIn('slow');
  //   } else {
  //     $('.back-to-top').fadeOut('slow');
  //   }
  // });
  // $('.back-to-top').click(function() {
  //   $('html, body').animate({
  //     scrollTop: 0
  //   }, 1500, 'easeInOutExpo');
  //   return false;
  // });


const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
  const updateCount  = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    
    // Lower inc to slow and higher to slow
    const inc = target / speed;

    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      counter.innerText = Math.ceil(count + inc);
      // Call function every ms
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }

    console.log(count);
    console.log(inc)
    console.log(typeof target);
  }
  updateCount();
});

// Back to top button
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});

$('.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 1500, 'easeInOutExpo');
  return false;
});

// const btnScrollToTop = document.querySelector("#btnScrollToTop")

// btnScrollToTop.addEventListener("click", function() {
//   // window.scrollTo(0,0);

//   // window.scrollTo({
//   //   left: 0,
//   //   top: 0,
//   //   behavior: "smooth"
//   // })

//   $("html, body").animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
//   return false;

// });