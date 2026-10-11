document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("open");
    });
  }

  const helloBtn = document.getElementById("helloBtn");
  const helloMessage = document.getElementById("helloMessage");

  if (helloBtn) {
    helloBtn.addEventListener("click", function () {
      helloMessage.textContent = "Thanks for visiting! Have a great day.";
    });
  }

  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(function(el) {
    observer.observe(el);
  });
});

$(document).ready(function () {
  $(".panel, .glass-card").on("mouseenter", function () {
    $(this).stop(true).animate({ marginTop: "-3px" }, 120);
  }).on("mouseleave", function () {
    $(this).stop(true).animate({ marginTop: "0px" }, 120);
  });
});
