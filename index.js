const nav = document.getElementsByTagName('nav')[0];
const menuIcon = document.querySelector('.menu-icon');
function myFunction(x) {
    x.classList.toggle("change");
    nav.classList.toggle('active')  
  }


document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
    nav.classList.remove('active');
    menuIcon.classList.remove("change");
  });
});

