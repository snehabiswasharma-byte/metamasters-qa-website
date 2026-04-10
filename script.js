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

document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});

lucide.createIcons();