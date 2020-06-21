/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.sass":
/*!****************************!*\
  !*** ./src/css/style.sass ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/css/style.sass ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! ./src/css/style.sass */"./src/css/style.sass");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map