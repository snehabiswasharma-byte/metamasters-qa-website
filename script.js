// MOBILE MENU
document.getElementById("mobileMenuBtn").onclick = () => {
  document.getElementById("mobileMenu").classList.toggle("hidden");
};

// NAVBAR SCROLL
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("bg-black", window.scrollY > 50);
});



// HERO SLIDER (ADVANCED)
const heroTitles = [
  "Where Games Level Up",
  "Testing Every Pixel",
  "Powering Game Quality"
];

const heroSubs = [
  "Professional QA Testing for Games",
  "Precision QA for flawless gameplay",
  "We ensure bug-free experiences"
];

let current = 0;

const title = document.getElementById("heroTitle");
const sub = document.getElementById("heroSub");
const dots = document.querySelectorAll(".dot");
const images = document.querySelectorAll(".hero-img");

function animateHero() {


  // HERO TEXT ANNIMATION

  

  // TEXT OUT
  title.classList.add("slide-out");
  sub.classList.add("slide-out");

  setTimeout(() => {

    // NEXT INDEX
    current = (current + 1) % heroTitles.length;

    // CHANGE TEXT
    title.innerText = heroTitles[current];
    sub.innerText = heroSubs[current];

    // UPDATE DOTS
    dots.forEach(dot => dot.classList.remove("active"));
    dots[current].classList.add("active");

    // IMAGE CHANGE
    images.forEach(img => img.classList.remove("active"));
    images[current].classList.add("active");

    // RESET TEXT POSITION
    title.classList.remove("slide-out");
    sub.classList.remove("slide-out");

    title.classList.add("slide-in-start");
    sub.classList.add("slide-in-start");

    void title.offsetWidth;

    // TEXT IN
    title.classList.add("slide-in-end");

    setTimeout(() => {
      sub.classList.add("slide-in-end");
    }, 150);

    // CLEANUP
    setTimeout(() => {
      title.classList.remove("slide-in-start", "slide-in-end");
      sub.classList.remove("slide-in-start", "slide-in-end");
    }, 700);

  }, 600);
}

// AUTO LOOP
setInterval(animateHero, 4000);

// COUNTERS
function counter(id, max) {
  let count = 0;
  let el = document.getElementById(id);

  let interval = setInterval(() => {
    count++;
    el.innerText = count;
    if (count >= max) clearInterval(interval);
  }, 20);
}

window.onload = () => {
  counter("c1", 250);
  counter("c2", 100);
  counter("c3", 14);
  counter("c4", 550);
};


//FOR CLOSING LINKS


const menu = document.getElementById("mobileMenu");

document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});






//SERVICE CARD GLOW
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-up").forEach(el => {
  observer.observe(el);
});







// PROJECT SECTION

const scrollContainer = document.querySelector(".project-scroll");

if (scrollContainer) {
  // ALL your project scroll code goes inside here

  let isDown = false;
  let startX;
  let scrollLeft;

  scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    scrollContainer.classList.add("active");
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });

  scrollContainer.addEventListener("mouseleave", () => {
    isDown = false;
  });

  scrollContainer.addEventListener("mouseup", () => {
    isDown = false;
  });

  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 1.5;

    scrollContainer.scrollLeft = scrollLeft - walk;
  });
}

let autoScrollSpeed = 0.5;
let userVelocity = 0;
let scrollPos = 0;

// AUTO SCROLL LOOP
function autoScroll() {

  // base slow movement
  scrollPos += autoScrollSpeed;

  // add user momentum
  scrollPos += userVelocity;

  // apply scroll
  scrollContainer.scrollLeft = scrollPos;

  // smooth slowdown (friction)
  userVelocity *= 0.92;

  // reset loop
  if (scrollPos >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
    scrollPos = 0;
  }

  requestAnimationFrame(autoScroll);
}

// ===== USER INTERACTION DETECTION =====

// Mouse hover = pause
scrollContainer.addEventListener("mouseenter", () => {
  isUserInteracting = true;
});

scrollContainer.addEventListener("mouseleave", () => {
  isUserInteracting = false;
});

// Touch (mobile)
scrollContainer.addEventListener("touchstart", () => {
  isUserInteracting = true;
});

scrollContainer.addEventListener("touchend", () => {
  isUserInteracting = false;
});

// Manual scroll (wheel / drag)
scrollContainer.addEventListener("wheel", () => {
  isUserInteracting = true;

  setTimeout(() => {
    isUserInteracting = false;
  }, 1000);
});



// DRAG CODE HERE
let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  scrollContainer.classList.add("active");
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener("mouseleave", () => {
  isDown = false;
});

scrollContainer.addEventListener("mouseup", () => {
  isDown = false;
});

scrollContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();

  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 1.5;

  scrollContainer.scrollLeft = scrollLeft - walk;
});







// Scroll to the PROJECT SECTION part
const leftBtn = document.getElementById("scrollLeft");
const rightBtn = document.getElementById("scrollRight");

if (leftBtn && rightBtn && scrollContainer) {
  leftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });

  rightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });
}







lucide.createIcons();
