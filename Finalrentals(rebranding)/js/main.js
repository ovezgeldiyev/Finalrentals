// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
const dropBtn = document.querySelectorAll(".dropBtn");
const dropEvent = document.querySelectorAll(".dropEvent");
const dropCloses = document.querySelectorAll(".dropClose");
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  dropBtn.forEach((item) => {
    item.classList.remove("active");
  });
  dropEvent.forEach((item) => {
    item.classList.remove("active");
  });
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};
// menu end
dropBtn.forEach((e) => {
  onDropClick(dropBtn, dropEvent, e);
});
function onDropClick(dropBtns, dropItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-drop");
    let currentDrop = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      if (currentDrop) {
        currentDrop.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      dropBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      dropItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentDrop.classList.add("active");
    }
  });
}
dropCloses.forEach((dropClose) => {
  dropClose.onclick = () => {
    dropBtn.forEach((item) => {
      item.classList.remove("active");
    });
    dropEvent.forEach((item) => {
      item.classList.remove("active");
    });
  };
});
// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// faq start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end

// faq start
const faqBtn = document.querySelectorAll(".faqBtn");
const faqEvent = document.querySelectorAll(".faqEvent");
faqBtn.forEach((e) => {
  onFaqClick2(faqBtn, faqEvent, e);
});
function onFaqClick2(faqBtns, faqItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let faqId = currentBtn.getAttribute("data-faq");
    let currentTab = document.querySelector(faqId);
    if (currentBtn.classList.contains("active")) {
      const faq = currentBtn.parentElement.querySelector(".faqEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      faqBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      faqItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end

// sliders
$(function () {
  $(".deals__inner-slider").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(function () {
  $(".steps__inner-slider").slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(function () {
  $(".news__inner-slider").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(function () {
  $(".clients__inner-slider").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(function () {
  $(".clients__inner-swiper").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    speed: 600,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(function () {
  $(".story__inner-slider").slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(function () {
  $(".franchise__inner-slider").slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
/*mobile slider */
function mobileOnlySlider() {
  $(".slider").slick({
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    adaptiveHeight: false,
    arrows: true,
    dots: false,
  });
}
if (window.innerWidth < 651) {
  mobileOnlySlider();
}
function resizeListener(e) {
  if (window.innerWidth < 651) {
    $(".slider").addClass("sliderMob");
    if (!$(".slider").hasClass("slick-initialized")) {
      mobileOnlySlider();
    }
  } else {
    $(".slider").removeClass("sliderMob");
    if ($(".slider").hasClass("slick-initialized")) {
      $(".slider").slick("unslick");
    }
  }
}
resizeListener();
$(window).resize(resizeListener);

const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");
const currencyBtn = document.getElementById("currencyBtn");
const currencyMenu = document.getElementById("currencyMenu");

function closeMenus() {
  langMenu.classList.remove("active");
  currencyMenu.classList.remove("active");
}

if (langBtn) {
  langBtn.onclick = () => {
    currencyMenu.classList.remove("active");
    langMenu.classList.toggle("active");
  };
}

if (currencyBtn) {
  currencyBtn.onclick = () => {
    langMenu.classList.remove("active");
    currencyMenu.classList.toggle("active");
  };
}

window.onclick = (event) => {
  if (
    !langBtn.contains(event.target) &&
    !langMenu.contains(event.target) &&
    !currencyBtn.contains(event.target) &&
    !currencyMenu.contains(event.target)
  ) {
    closeMenus();
  }
};

const affiliateForm = document.getElementById("affiliateForm");
if (affiliateForm) {
  const formBtn = document.getElementById("formBtn");
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  formBtn.onclick = () => {
    step1.classList.remove("active");
    step2.classList.add("active");
  };
}
// showMore start
const showMoreBtns = document.querySelectorAll(".showMoreBtn");
showMoreBtns.forEach((showMoreBtn) => {
  showMoreBtn.onclick = () => {
    const parentElement = showMoreBtn.parentElement.parentElement;
    const showMore = parentElement.querySelector(".showMore");
    const buttonText = showMoreBtn.querySelector("b");

    showMore.classList.toggle("active");
    showMoreBtn.classList.toggle("active");
    if (showMoreBtn.classList.contains("active")) {
      buttonText.innerText = "See less";
    } else {
      buttonText.innerText = "See more";
    }
  };
});
// showMore end
