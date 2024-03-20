const carsContainer = document.querySelector('.cars-container');

const carCollection = [
  {
    id: 'car-1',
    name: 'Toyota Etios',
    seats: 4,
    baggage: 3,
    image: '../../assets/vehicle-rentals/etios.png',
  },
  {
    id: 'car-2',
    name: 'Maruti Swift DZire',
    seats: 4,
    baggage: 3,
    image: '../../assets/vehicle-rentals/dzire.png',
  },
  {
    id: 'car-3',
    name: 'Toyota Innova ',
    seats: 6,
    baggage: 5,
    image: '../../assets/vehicle-rentals/innova.png',
  },
  {
    id: 'car-4',
    name: 'Toyota Crysta Luxury',
    seats: 6,
    baggage: 5,
    image: '../../assets/vehicle-rentals/crysta.png',
  },
];

function displayVehicles() {
  carCollection.forEach(vehicle => {
    let card = document.createElement('div');
    card.className = 'vehicle-card';

    let cardContent = `
            <div class="vehicle-img-container">
            <img src="${vehicle.image}" alt="${vehicle.name} Image"/>
            </div>
            <div class="vehicle-details d-flex flex-column gap-4">
                <h3 class="vehicle-title">${vehicle.name}</h3>
                <div class="d-flex flex-column flex-xl-row gap-3 gap-xl-5 ps-1">
                    <span class="vehicle-capacity">
                         <div class="vehicle-capacity-icon">
                            <img src="../../assets/user.svg" width="25" height="25">
                         </div>
                         <h5>Seats: ${vehicle.seats} </h5>
                     </span>
                    <span class="vehicle-baggage">
                         <div class="vehicle-capacity-icon">
                            <img src="../../assets/suitcase.svg" width="25" height="25">
                         </div>
                         <h5>Baggage: ${vehicle.baggage} </h5> 
                    </span>
                </div>
                <button type="button" class="enquiry-btn w-100" data-bs-toggle="modal" data-bs-target="#exampleModal${vehicle.id}">
                 Send Enquiry
                </button>
            </div>  

            <!-- Modal -->
            <div
               class="modal fade"
               id="exampleModal${vehicle.id}"
               tabindex="-1"
               aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content p-4">
                <div class="d-flex justify-content-between">
                    <h4>Enquiry Details</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
              <div class="booking-details">
              </div>
              <form action="https://formsubmit.co/info@espreeholidays.com"
                method="POST" id="bookingForm${vehicle.id}" class="booking-form" data-vehicle-id="${vehicle.id}">
                <input type="hidden" name="_next" value="https://espreeholidays.com/thanks.html">
                <input type="hidden" name="_subject" value="Local Transport Enquiry!"/>
                <input type="hidden" name="_captcha" value="false" />
                <div class="form-floating d-flex">
              <input
              readonly
              value="${vehicle.name}"
              type="text"
              name="Selected Vehicle"
              class="form-control-plaintext"
              id="floatingVehicle${vehicle.id}"
              placeholder="Selected Vehicle"
              required
              />
            <label for="floatingVehicle${vehicle.id}">Selected Vehicle*</label>
            </div>
                <div class="form-floating mb-2">
                  <input
                  type="text"
                  name="Full Name"
                  class="form-control"
                  id="floatingFullName${vehicle.id}"
                  placeholder="Full Name"
                  required
                  />
                <label for="floatingFullName${vehicle.id}">Full Name*</label>
                </div>

                <div class="form-floating mb-2">
                            <input
                                type="email"
                                name="Email"
                                class="form-control"
                                id="floatingEmail${vehicle.id}"
                                placeholder="Email"
                                required
                            />
                            <label for="floatingEmail${vehicle.id}">Email*</label>
                        </div>


                <div class="form-floating mb-2">
                 <input
                 type="tel"
                 name="Phone"
                 class="form-control"
                 id="floatingPhone${vehicle.id}"
                 placeholder="Phone"
                  
                 />
                  <label for="floatingPhone${vehicle.id}">Phone (Optional)</label>
                </div>
                 
                 <div class="form-floating mb-2">
                    <textarea
                     class="form-control"
                     name="Message"
                     id="floatingMessage${vehicle.id}"
                     placeholder="Message"
                     rows="4"
                    cols="50"
                    style="height: 160px"
                    ></textarea>
                    <label for="floatingMessage${vehicle.id}">Message</label>
                 </div>
               <button id="btn-${vehicle.id}" type="submit" class="send-enquiry enquiry-btn w-100 mt-4">Submit Now</button>
             </form>
           
          </div>
         </div>
      </div>
    `;
    card.innerHTML = cardContent;
    carsContainer.appendChild(card);
  });
}

displayVehicles();

(function () {
  emailjs.init({
    publicKey: 'IWHJXL5_pOB5VYAl-',
  });
})();

function handleFormSubmission(event) {
  event.preventDefault();
  let vehicleId = event.target.getAttribute('data-vehicle-id');
  const submitBtn = document.getElementById(`btn-${vehicleId}`);
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';

  let formData = {
    vehicle: event.target.querySelector(`#floatingVehicle${vehicleId}`).value,
    email: event.target.querySelector(`#floatingEmail${vehicleId}`).value,
    fullName: event.target.querySelector(`#floatingFullName${vehicleId}`).value,
    phone: event.target.querySelector(`#floatingPhone${vehicleId}`).value,
    message: event.target.querySelector(`#floatingMessage${vehicleId}`).value,
  };

  let transformedFormData = {
    enquiryType: 'Local Transport Service',
    messageBody: `
    Selected Vehicle: ${formData.vehicle}
    <br>
    <br>
    Name: ${formData.fullName}
    <br>
    <br>
    Email: ${formData.email}
    <br>
    <br>
    Phone: ${formData.phone}
    <br>
    <br>
    Message: ${formData.message}
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
}

document.addEventListener('submit', event => {
  if (event.target.classList.contains('booking-form')) {
    handleFormSubmission(event);
  }
});

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
