const nav = document.getElementsByTagName("nav")[0];
const menuIcon = document.querySelector(".menu-icon");
function myFunction(x) {
  x.classList.toggle("change");
  nav.classList.toggle("active");
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
    nav.classList.remove("active");
    menuIcon.classList.remove("change");
  });
});
const form = document.getElementById("form");
const name = document.getElementById("name");
const mail = document.getElementById("email");
const message = document.getElementById("message");
function formValidation(e) {
  e.preventDefault();
  const errors = document.querySelectorAll(".error");
  errors.forEach((error) => (error.textContent = ""));
  isValid = true;

  //   Name validation
  const nameMssg = document.querySelector(".name-mssg");
  const nameRegex = /^[a-zA-Z ]+$/;
  if (name.value == "") {
    nameMssg.innerHTML = "Please enter your name";
    nameMssg.classList.add("mssg");
    isValid = false;
  } else if (!nameRegex.test(name.value)) {
    nameMssg.innerHTML = "Please enter a valid name";
    nameMssg.classList.add("mssg");
    isValid = false;
  }
// mail validation
  const mailMssg = document.querySelector(".mail-mssg");
  const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (mail.value == "") {
    mailMssg.innerHTML = "Email field is required";
    mailMssg.classList.add("mssg");
    isValid = false;
  } else if (!mailRegex.test(mail.value)) {
    mailMssg.innerHTML = "Valid email required";
    mailMssg.classList.add("mssg");
    isValid = false;
  } else if (mail.value.length <= 11) {
    mailMssg.innerHTML = "Email should be more than 12 characters";
    mailMssg.classList.add("mssg");
    isValid = false;
  } else if (mail.value !== mail.value.toLowerCase()) {
    mailMssg.innerHTML = "Email must be in lowercase letters.";
    mailMssg.classList.add("mssg");
    isValid = false;
  }

//   Test area validation
const testArea = document.querySelector(".message-mssg");
if (message.value == ""){
    testArea.innerHTML = "Please enter your message";
    testArea.classList.add("mssg");
    isValid = false;
}
}
form.addEventListener("submit", formValidation);
