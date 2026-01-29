// Auto close for Hamburguer Menu on Mobile/Tablet
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.querySelector('nav'); 

  // Close menu on link click 
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navToggle.checked) {
        navToggle.checked = false;
      }
    });
  });

  // Close menu on click outside the nav
  document.addEventListener('click', function(event) {
    const isClickInsideNav = nav.contains(event.target);

    if (navToggle.checked && !isClickInsideNav) {
      navToggle.checked = false;
    }
  });
});


// Internship modal logic 

const modal = document.getElementById('modal');
const fullCert = document.getElementById('full-cert');
const internshipTitle = document.getElementById('internship-title');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.internship-card-title.clickable').forEach(title => {
  title.addEventListener('click', (e) => {
    const card = e.target.closest('.internship-card');
    const certPath = card.getAttribute('data-cert');

    modal.style.display = 'flex';
    fullCert.src = certPath;
    internshipTitle.textContent = e.target.textContent;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});


const sideNav = document.getElementById("sideNav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
      sideNav.classList.add("active");
    } else {
      sideNav.classList.remove("active");
    }
  });