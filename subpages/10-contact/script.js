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

(function () {
  emailjs.init({
    publicKey: 'IWHJXL5_pOB5VYAl-',
  });
})();

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const submitBtn = document.getElementById('btn-submit');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';

  const name = document.getElementById('floatingFullName').value;
  const email = document.getElementById('floatingEmail').value;
  const messageSubject = document.getElementById('floatingSubject').value;
  const phone = document.getElementById('floatingPhone').value;
  const message = document.getElementById('floatingMessage').value;

  let transformedFormData = {
    enquiryType: 'Contact',
    messageBody: `
    Name : ${name}
    <br>
    <br>
    Email: ${email}
    <br>
    <br>
    Subject: ${messageSubject}
    <br>
    <br>
    Phone: ${phone}
    <br>
    <br>
    Message: ${message}
    `,
  };

  emailjs.send('service_hqpvsud', 'template_3jvbjoa', transformedFormData).then(
    response => {
      window.location.href = '../../thanks.html';
    },
    error => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Submit Now';
      window.alert('Error ! Please try to contact us via mail or phone.');
    }
  );
});
