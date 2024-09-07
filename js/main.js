//Navbar Scrolls function
// document.addEventListener("DOMContentLoaded", function () {
//     const navbar = document.getElementById("navbar");

//     window.addEventListener("scroll", function () {
//       if (window.scrollY > 50) {
//         navbar.classList.add("scrolled");
//       } else {
//         navbar.classList.remove("scrolled");
//       }
//     });
//   });

// window.addEventListener("scroll", function() {
//     const navbar = document.getElementById("navbar");

//     if (window.innerWidth > 1000) {
//       if (window.scrollY > 50) {
//         navbar.classList.add("scrolled");
//       } else {
//         navbar.classList.remove("scrolled");
//       }
//     } else {
//       navbar.classList.remove("scrolled");
//     }
//   });

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

// document.addEventListener("DOMContentLoaded", function () {
//     const gridToggle = document.querySelector(".grid-toggle");
//     const closeToggle = document.querySelector(".close-toggle");
//     const navbarMenu = document.querySelector(".navbar-menu");

//     function openMenu() {
//         navbarMenu.style.display = "flex";
//     }

//     function closeMenu() {
//         navbarMenu.style.display = "none";
//     }

//     gridToggle.addEventListener("click", function () {
//         openMenu();
//     });

//     closeToggle.addEventListener("click", function () {
//         closeMenu();
//     });
// });

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


