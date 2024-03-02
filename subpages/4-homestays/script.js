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
    var guests = document.getElementById('floatingGuests').value;
    var phone = document.getElementById('floatingPhone').value;
    var message = document.getElementById('floatingMessage').value;

    console.log('Name:', name);
    var email = 'info@espreeholidays.com';
    var subject = 'Homestay Enquiry';
    var emailBody = `Hi, I'm interested in booking a homestay!\nFull Name: ${name}\nDate of Arrival: ${startDate}\nNo. of Guests: ${guests}\nPhone: ${phone}\nAdditional Instructions: ${message}`;
    var email = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;
    window.open(email, '_blank').focus();
  });
});
