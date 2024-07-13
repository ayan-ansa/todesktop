const hamburgerMenu = document.getElementById("hamburger-menu");
console.log(hamburgerMenu);
const navbar = document.querySelector("nav");

const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;
function setupIntersectionObserver(element, isLTR, speed) {
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    if (isIntersecting) {
      document.addEventListener("scroll", handleScroll);
    }
  };
  const intersectionObserver = new IntersectionObserver(intersectionCallback);

  intersectionObserver.observe(element);

  const handleScroll = () => {
    const TranslateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;
    let totalTranslate = 0;
    if (isLTR) {
      totalTranslate = TranslateX + initialTranslateLTR;
    } else {
      totalTranslate = -(TranslateX + initialTranslateRTL);
    }
    element.style.transform = `TranslateX(${totalTranslate}px)`;
  };
}
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, false, 0.8);

const questions = document.querySelectorAll("dt");
questions.forEach((ques) => {
  ques.addEventListener("click", (e) => {
    const quesId = ques.getAttribute("aria-controls");
    const ansId = document.getElementById(quesId);
    const arrowIcon = ques.querySelector("i");
    ansId.classList.toggle("hidden");
    arrowIcon.classList.toggle("rotate-180");
  });
});

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("bx-x");
  navbar.classList.toggle("top-[70px]");
});
window.addEventListener("scroll", () => {
  navbar.classList.remove(window.screenY > 0, "top-[70px]");
  hamburgerMenu.classList.remove("bx-x");
});
