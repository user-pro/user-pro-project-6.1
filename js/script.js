//             BURGER
"use strict";
const reservationSubmitBtn1 = document.getElementById('reservation__submit-btn-1'),
   reservationPhoneNumber = document.getElementById('reservation-phone-number'),
   reservationTextJs = document.getElementById('reservation-text-js'),
   reservationSubmitBtn2 = document.getElementById('result__submit-btn-1'),
   resultPhoneNumber = document.getElementById('result-phone-number'),
   discountsPhoneNumber = document.getElementById('discounts-phone-number'),
   reservationSubmitBtn3 = document.getElementById('discounts__submit-btn-1'),
   sliderIndexes = document.querySelectorAll('.slider-2-item');

for (let index = 0; index < sliderIndexes.length; index++) {
   const sliderIndex = sliderIndexes[index];

   sliderIndex.addEventListener('click', getIndexOfSlide)
}

function getIndexOfSlide() {
   let index = $(this).attr("data-slick-index" );
   $('.slider-2').slick("slickGoTo", index)
}
reservationSubmitBtn1.addEventListener("click", () => {
   if (reservationPhoneNumber.value) {
      reservationSubmitBtn1.classList.add('active-btn');
      reservationSubmitBtn1.innerHTML = "<img class='check-class' src='img/check.svg'><span>ГОТОВО</span>";
      reservationPhoneNumber.style.padding = "0px";
      reservationPhoneNumber.classList.add('hide');
      reservationTextJs.innerHTML = "Мы с вами свяжемся в течении 30 минут!";
   }
});
reservationSubmitBtn2.addEventListener("click", () => {
   if (resultPhoneNumber.value) {
      reservationSubmitBtn2.classList.add('active-btn');
      reservationSubmitBtn2.innerHTML = "<img class='check-class' src='img/check.svg'><span>ГОТОВО</span>";
      resultPhoneNumber.style.padding = "0px";
      resultPhoneNumber.classList.add('hide');
   }
});
reservationSubmitBtn3.addEventListener("click", () => {
   if (discountsPhoneNumber.value) {
      reservationSubmitBtn3.classList.add('active-btn');
      reservationSubmitBtn3.innerHTML = "<img class='check-class' src='img/check.svg'><span>ГОТОВО</span>";
      discountsPhoneNumber.style.padding = "0px";
      discountsPhoneNumber.classList.add('hide');
   }
});
$(window).scroll(function () {
   if ($(this).scrollTop() > 1) {
      $('header').addClass("sticky")
      $('.header-top-fixed-wrapper').addClass("fixed");
   }
   else {
      $('header').removeClass("sticky")
      $('.header-top-fixed-wrapper').removeClass("fixed");
   }

   if ($(this).scrollTop() > 2200) {
      if (document.documentElement.clientWidth < 1400 && document.documentElement.clientWidth > 1024) {
         $('.result').addClass("sticky");
      }
   }
   else {
      $('.result').removeClass("sticky");
   }
   if ($(this).scrollTop() > 2300) {
      if (document.documentElement.clientWidth > 1400 && document.documentElement.clientWidth < 1800) {
         $('.result').addClass("sticky1");
      }

   }
   else {
      $('.result').removeClass("sticky1");
   }

});
const $slider = $('.slider-1');
const $progressBar = $('.progress');
const $step = $('.step');
const $stepsProgressBlock = $('#step-progress-block');

function setProgress(index) {
   // $slider.on('beforeChange', function (nextSlide) {});
   const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;
   $progressBar
      .css('width', `${calc}%`)
      .attr('aria-valuenow', calc);
   // $progressBarLabel.text(`${calc.toFixed(2)}% completed`);
}

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
   let nextSlideNumber = nextSlide + 1;
   let prevSlideNumber = nextSlide;
   setProgress(nextSlide);
   $(`.step${nextSlideNumber}`)
      .addClass('active-step');
   $(`.steps-progress-block__img${nextSlideNumber}`)
      .addClass('active-step-img')
      .css('transform', `translate(-50%, -50%) rotate(${prevSlideNumber * -22.5}deg)`);
});
$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
   let nextSlideNumber = currentSlide + 1;
   let prevSlideNumber = nextSlide;
   $(`.step${nextSlideNumber}`)
      .removeClass('active-step');
   $stepsProgressBlock
      .css('transform', `translate(0px, -50%) rotate(${prevSlideNumber * 22.5}deg)`);
   $(`.steps-progress-block__img${nextSlideNumber}`)
      .removeClass('active-step-img')
   $('.steps-progress-block__img')
      .css('transform', `translate(-50%, -50%) rotate(${prevSlideNumber * -22.5}deg)`);
});



$slider.slick({
   fade: true,
   arrows: true,
   dots: true,
   slidesToScroll: 1,
   asNavFor: '.slider-2',
   slidesToScroll: 1,
   responsive: [{
      breakpoint: 767,
      settings: {
         adaptiveHeight: true,
         arrows: false,
      }
   },{
      breakpoint: 380,
      settings: {
         slidesToShow: 1.1,
      }
   },{
      breakpoint: 321,
      settings: {
         slidesToShow: 1.09,
      }
   }]
});

$('.slider-2').slick({
   infinite: false,
   slidesToShow: 4,
   slidesToScroll: 1,
   arrows: false,
   asNavFor: '.slider-1',
   responsive: [{
      breakpoint: 530,
      settings: {
         slidesToShow: 3,
      }
   }],
   responsive: [{
      breakpoint: 414,
      settings: {
         slidesToShow: 3,
         // centerMode: true,
      }
   }],
});
setProgress(0);


window.addEventListener('resize', move);

//Функция
function move() {
   const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
   if (viewport_width <= 1155) {
      $('.discounts__cards').slick({
         arrows: false,
         infinite: false,
         fade: false,
         slidesToShow: 4,
         dots: true,
         responsive: [{
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
            }
         }, {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
            }
         }, {
            breakpoint: 520,
            settings: {
               slidesToShow: 1,
            }
         }, {
            breakpoint: 380,
            settings: {
               slidesToShow: 1.5,
            }
         }, {
            breakpoint: 359,
            settings: {
               slidesToShow: 1.31,
            }
         }],
      });
   }

}
//Вызываем функцию
move();
$('.test-slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.test-2-slider'
 });
 $('.test-2-slider').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.test-slider',
   dots: true,
   centerMode: true,
   focusOnSelect: true
 });

function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
   callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
   
testWebP(function (support) {
   
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   }else{
      document.querySelector('body').classList.add('no-webp');
   }
});;


