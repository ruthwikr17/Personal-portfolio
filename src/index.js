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