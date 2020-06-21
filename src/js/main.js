jQuery(document).ready( function(){
  //Header constriction on scroll
  window.addEventListener('scroll', function() {
    var bodyTop = $('html').offset().top+20;
		var topOfWindow = $(window).scrollTop();
    
    if (bodyTop < topOfWindow) {
      $('.header .container').addClass('shadowed');
		}
		else{
      $('.header .container').removeClass('shadowed');
		}
  });

  // Main sider
  jQuery('#main-slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    
    draggable: false,
    swipe: false,
    dots: false,
    fade: true,
    speed: 2000
  });

  jQuery('.projects-slider-list').slick({
    arrows: true,
    autoplay: false,
    infinite: true,
    
    draggable: false,
    swipe: true,
    dots: true,
    fade: true,
    speed: 1000
  });

  jQuery('.practices-slider-list').slick({
    arrows: true,
    autoplay: false,
    infinite: true,
    
    draggable: false,
    swipe: true,
    dots: true,
    fade: true,
    speed: 1000
  });

  jQuery('.news-slider-list').slick({
    arrows: true,
    autoplay: false,
    infinite: true,
    
    draggable: false,
    swipe: true,
    dots: true,
    fade: true,
    speed: 1000
  });

  jQuery('.practices-list').slick({
    arrows: true,
    autoplay: false,
    infinite: false,
    
    draggable: true,
    swipe: true,
    focusOnSelect: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    speed: 500,

    asNavFor: '.practices-bg-list',
  });

  jQuery('.practices-bg-list').slick({
    arrows: false,
    autoplay: false,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    
    draggable: true,
    swipe: false,
    dots: false,
    fade: true,
    speed: 300,
  });

  //Клик по бургер-меню
  document.getElementsByClassName("burger-button")[0].addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementsByTagName("nav")[0].classList.toggle("active");
    document.getElementsByTagName("body")[0].classList.toggle("ovh");
  });

  //Crew-card-page. Адаптив: аккордеон на блоках
  jQuery(window).resize(function () {
    screenCheck();
  });

  screenCheck();

  //Проверка ширины экрана и установка состояния аккордеона
  function screenCheck() {
    if (window.matchMedia('(max-width: 991px)').matches) {
      removeAccordListener();
      addAccordListener();

      jQuery('.spec-block .title-container').toArray().forEach(
        function(item){
          jQuery(item).removeClass('active');
        }
      )
      jQuery('.spec-block').toArray().forEach(
        function(item){
          let content = jQuery(item.querySelector('.content'));
          content.slideUp(0);
        }
      )
    }
    else {
      let title = jQuery('.spec-block .title-container h3');
      title.off('click');

      jQuery(title).closest('.spec-block').toArray().forEach(
        function(item){
          let content = jQuery(item.querySelector('.content'));
          content.slideDown(0);
        }
      )
    }
  }

  function addAccordListener() {
    jQuery('.spec-block .title-container h3').on('click', accordeonSlide);  
  };

  function removeAccordListener() {
    jQuery('.spec-block .title-container h3').off('click', accordeonSlide);  
  };
  
  function accordeonSlide(){
    let content = jQuery(this.closest('.spec-block').querySelector('.content'));
    let titleContainer = jQuery(this.closest('.spec-block').querySelector('.title-container'));
    titleContainer.toggleClass('active');

    content.slideToggle(500);
  };
});
