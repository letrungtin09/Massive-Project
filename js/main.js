// navbar active
var myNavBar = document.getElementById("myNavBar");
var listNav = myNavBar.getElementsByTagName("a");
for (var i = 0; i < listNav.length; i++) {
    listNav[i].addEventListener("click", function () {
         var current = document.querySelector("#myNavBar .active");
        current.className = current.className.replace("active", "");
        // Cộng thêm class active cho thẻ li được click
        this.className += " active";
    });
}

// showcaseNavBar active
var showcaseNavBar = document.getElementById("showcaseNavBar");
var showcaseList = showcaseNavBar.getElementsByTagName("a");
for (var j = 0; j < showcaseList.length; j++) {
    showcaseList[j].addEventListener("click", function () {
         var current = document.querySelector("#showcaseNavBar .active");
        current.className = current.className.replace("active", "");
        this.className += " active";
    });
}

// progressBar active
window.onscroll = function (event){
    let progressBars = document.getElementsByClassName('progressBar')
    Array.from(progressBars).forEach(bar =>{
        let windowTop = window.scrollY;
        let windowBot = windowTop + window.innerHeight;
        let eleTop = bar.offsetTop;
        let eleBot = eleTop + bar.clientHeight;
        if ((eleBot <= windowBot) && (eleTop >= windowTop)){
            bar.classList.add('active');
        }
    })
}

// isotope (filter)
let iso = new Isotope(".showcase__content", {
    itemSelector: ".showcase__item",
});
let filtersElem = document.querySelector(".filter-nav");
filtersElem.addEventListener("click", function (event) {
    if (!matchesSelector(event.target, "a")) {
      return;
    }
    let filterValue = event.target.getAttribute("data-filter");
    iso.arrange({ filter: filterValue });
});

// magnific popup
$(".popup-link").magnificPopup({
    type: "image"
});

$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});

// count up
$('.numbers__counter').countUp();

// owl carousel
$(".feedback__carousel").owlCarousel({
    loop: Infinity,
    margin: 0,
    nav: false,
    autoplay: true,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      784: {
        items: 3
      },
      1215: {
        items: 1
      }
    }
});

$(".partners__carousel").owlCarousel({
  loop: false,
  margin: 0,
  nav: false,
  autoplay: true,
  smartSpeed: 800,
  responsive: {
    0: {
      items: 1
    },
    500: {
      items: 2
    },
    784: {
      items: 3
    },
    1215: {
      items: 6
    }
  }
});