const backToTopBtn = document.getElementById('myBtn');
function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    backToTopBtn.style.opacity = '1';
  } else {
    backToTopBtn.style.opacity = '0';
  }
}

/* Back To Top button functionality */
backToTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.onscroll = function () {
  scrollFunction();
};

contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var name = document.getElementById('floatingFullName').value;
  var messageSubject = document.getElementById('floatingSubject').value;
  var phone = document.getElementById('floatingPhone').value;
  var message = document.getElementById('floatingMessage').value;

  console.log('Name:', name);
  var email = 'info@espreeholidays.com';
  var subject = 'Enquiry for Espree Holidays';
  var emailBody = `Full Name: ${name}\nSubject: ${messageSubject}\nPhone: ${phone}\nAdditional Instructions: ${message}`;
  var email = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(emailBody)}`;
  window.open(email, '_blank').focus();
});
