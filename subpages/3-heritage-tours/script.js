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

forms = document.querySelectorAll('.enquiry-form');
forms.forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('floatingFullName').value;
    var startDate = document.getElementById('floatingStartDate').value;
    var phone = document.getElementById('floatingPhone').value;
    var message = document.getElementById('floatingMessage').value;

    console.log('Name:', name);
    var email = 'info@espreeholidays.com';
    var subject = 'Vehicle Rental Enquiry';
    var emailBody = `Hi, I'm interested in booking the Kashmir Heritage Tour!\nFull Name: ${name}\nDate of Arrival: ${startDate}\nPhone: ${phone}\nMessage: ${message}`;
    var email = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;
    window.open(email, '_blank').focus();
  });
});
