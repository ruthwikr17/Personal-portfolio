// Auto close for Hamburguer Menu
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


const modal = document.getElementById('modal');
const fullCert = document.getElementById('full-cert');
const internshipTitle = document.getElementById('internship-title');
const internshipDetails = document.getElementById('internship-details');
const closeBtn = document.querySelector('.close');
const certImages = document.querySelectorAll('.internship-cert');

// Add click event to each certificate image
certImages.forEach(img => {
  img.addEventListener('click', (e) => {
    console.log("Certificate clicked", e.target.src);
    modal.style.display = 'flex';
    fullCert.src = e.target.src; 
    const card = e.target.closest('.internship-card');
    internshipTitle.textContent = card.querySelector('.internship-card-title').textContent;
    internshipDetails.textContent = card.querySelector('.internship-card-text').textContent;
  });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});