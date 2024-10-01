//Reload = Home
window.addEventListener('load', function() {
  window.location.hash = '#home';
});


//Navbar Scrolls function
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  if (window.innerWidth > 1000) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  } else if (window.innerWidth <= 1000) {
    if (window.scrollY > 50) {
      navbar.classList.add("sm-scrolled");
    } else {
      navbar.classList.remove("sm-scrolled");
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const gridToggle = document.querySelector(".grid-toggle");
  const closeToggle = document.querySelector(".close-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");

  function openMenu() {
    navbarMenu.classList.add("show");
  }

  function closeMenu() {
    navbarMenu.classList.remove("show");
  }

  gridToggle.addEventListener("click", function () {
    openMenu();
  });

  closeToggle.addEventListener("click", function () {
    closeMenu();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.querySelector(".scroll-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollToTopButton.classList.add("show");
    } else {
      scrollToTopButton.classList.remove("show");
    }
  });

  scrollToTopButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

//Loader

window.addEventListener("load", function () {
  setTimeout(function () {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("hidden");
    }
  }, 1000);
});




