// loader gsap
const loader = () => {
  var tl = gsap.timeline();

  tl.to(".yellow", {
    right: "-100%",
    delay: 3,
    duaration: 10,
    ease: "expo.out",
  });

  tl.to("#loader", {
    display: "none",
    opacity: 0,
  });
};

loader();

let cursor = document.querySelector(".cursor");
let body = document.querySelector("body");
let cursorColor = document.querySelectorAll(".cursor-color");
let navInfo = document.querySelector(".nav-info");
let nav = document.querySelector(".bar");
let closeBtn = document.querySelector(".close");

// cursor js

body.addEventListener("mousemove", function (location) {
  cursor.style.left = location.x + "px";
  cursor.style.top = location.y + "px";
})

cursorColor.forEach((link) => {
  link.addEventListener("mousemove", () => {
    cursor.classList.add("color");
  });

  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("color");
  });
});


// nav-info js

nav.addEventListener("click", () => {
  if (nav) {
    navInfo.classList.add("show");
  }
});

closeBtn.addEventListener("click", () => {
  if (closeBtn) {
    navInfo.classList.remove("show");
  }
})

// services box hover 

let serBOx = document.querySelectorAll(".ser-box");
serBOx.forEach(function (ele) {

  ele.addEventListener("mouseenter", function () {
    let attr = ele.getAttribute("data-img");
    cursor.style.width = "200px"
    cursor.style.height = "200px"
    cursor.style.borderRadius = "10px"
    cursor.style.backgroundImage = `url(${attr})`;
    cursor.style.zIndex = -1;
    // cursor.style.backgroundSize = "cover";
  })

  ele.addEventListener("mouseleave", function () {
    cursor.style.width = "20px"
    cursor.style.height = "20px"
    cursor.style.borderRadius = "50%"
    cursor.style.backgroundImage = `none`
    cursor.style.zIndex = 1000;
  })
})

// accordian js 


// const myInterval = setInterval(myTimer, 500);

// function myTimer() {
//   const accordionItems = document.querySelectorAll('.accordion-item');

//   accordionItems.forEach(item => {
//     const title = item.querySelector('.accordion-title');
//     const content = item.querySelector('.accordion-content');

//     title.addEventListener('mouseenter', () => {
//       for (i = 0; i < accordionItems.length; i++) {
//         if (accordionItems[i] != item) {
//           accordionItems[i].classList.remove('active');
//         } else {
//           // toggle the accordion item
//           item.classList.toggle('active');
//         }
//       }

//     });
//   });
// }

const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
  const title = item.querySelector('.accordion-title');
  const content = item.querySelector('.accordion-content');
  title.addEventListener('mouseenter', () => {
    for (i = 0; i < accordionItems.length; i++) {
      if (accordionItems[i] != item) {
        accordionItems[i].classList.remove('active');
      } else {
        // toggle the accordion item
        item.classList.toggle('active');
      }
    }

  });
});

