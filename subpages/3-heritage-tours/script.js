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

(function () {
  emailjs.init({
    publicKey: 'IWHJXL5_pOB5VYAl-',
  });
})();

document
  .getElementById('heritage-form-lg')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('floatingFullName').value;
    const email = document.getElementById('floatingEmail').value;
    const startDate = document.getElementById('floatingStartDate').value;
    const phone = document.getElementById('floatingPhone').value;
    const message = document.getElementById('floatingMessage').value;

    let transformedFormData = {
      enquiryType: 'Heritage Tours',
      messageBody: `
    Name : ${name}
    <br>
    <br>
    Email: ${email}
    <br>
    <br>
    Date of Arrival: ${startDate}
    <br>
    <br>
    Phone: ${phone}
    <br>
    <br>
    Message: ${message}
    `,
    };

    emailjs
      .send('service_hqpvsud', 'template_3jvbjoa', transformedFormData)
      .then(
        response => {
          window.location.href = '../../thanks.html';
        },
        error => {
          window.alert('Error ! Please try to contact us via mail or phone.');
        }
      );
  });

document
  .getElementById('heritage-form-sm')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('floatingFullNameSm').value;
    const email = document.getElementById('floatingEmailSm').value;
    const startDate = document.getElementById('floatingStartDateSm').value;
    const phone = document.getElementById('floatingPhoneSm').value;
    const message = document.getElementById('floatingMessageSm').value;

    let transformedFormData = {
      enquiryType: 'Heritage Tours',
      fullName: name,
      email: email,
      phone: phone,
      startDate: startDate,
      message: message,
    };

    emailjs
      .send('service_69esjw8', 'template_897f1hw', transformedFormData)
      .then(
        response => {
          window.location.href = 'http://127.0.0.1:5500/thanks.html';
        },
        error => {
          window.alert('Error ! Please try to submit the form again.');
        }
      );
  });
