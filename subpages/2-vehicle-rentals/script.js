const carsContainer = document.querySelector('.cars-container');
const bikesContainer = document.querySelector('.bikes-container');
const scootiesContainer = document.querySelector('.scooties-container');

const carCollection = [
  {
    id: 'car-1',
    name: 'Mahindra Thar',
    seats: 4,
    baggage: 3,
    image: '../../assets/vehicle-rentals/thar.png',
  },
  {
    id: 'car-2',
    name: 'Toyota Fortuner',
    seats: 6,
    baggage: 5,
    image: '../../assets/vehicle-rentals/fortuner.png',
  },

  {
    id: 'car-3',
    name: 'Mahindra Scorpio',
    seats: 6,
    baggage: 5,
    image: '../../assets/vehicle-rentals/scorpio.png',
  },
];
const bikeCollection = [
  {
    id: 'bike-1',
    name: 'Royal Enfield Himalayan',
    seats: 2,
    baggage: 1,
    image: '../../assets/vehicle-rentals/himalayan.png',
  },
  {
    id: 'bike-2',
    name: 'Royal Enfield Classic',
    seats: 2,
    baggage: 1,
    image: '../../assets/vehicle-rentals/classic.png',
  },
  {
    id: 'bike-3',
    name: 'Royal Enfield Thunderbird',
    seats: 2,
    baggage: 1,
    image: '../../assets/vehicle-rentals/thunderbird.png',
  },
];
const scootyCollection = [
  {
    id: 'scooty-1',
    name: 'Honda Activa',
    seats: 2,
    baggage: 1,
    image: '../../assets/vehicle-rentals/activa.png',
  },
  {
    id: 'scooty-2',
    name: 'TVS Ntorq',
    seats: 2,
    baggage: 1,
    image: '../../assets/vehicle-rentals/ntorq.png',
  },
  {
    id: 'scooty-3',
    name: 'TVS Jupiter',
    seats: 2,
    baggage: 1,
    image: '../../assets/vehicle-rentals/jupiter.png',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  displayVehicles(carCollection, carsContainer);

  vehicleBtns = document.querySelectorAll('.vehicle-btn');
  vehicleBtns.forEach(vehicleBtn => {
    vehicleBtn.addEventListener('click', e => {
      const vehicleCategoriesID = ['cars', 'bikes', 'scooties'];
      vehicleCategoriesID.forEach(vehicleCategoryID => {
        if (e.target.id === `${vehicleCategoryID}-btn`) {
          document.querySelector(`.${vehicleCategoryID}-container`).innerHTML =
            '';
          document.querySelector(
            `.${vehicleCategoryID}-container`
          ).style.display = 'flex';

          switch (vehicleCategoryID) {
            case 'cars':
              displayVehicles(carCollection, carsContainer);
              break;
            case 'bikes':
              displayVehicles(bikeCollection, bikesContainer);
              break;
            case 'scooties':
              displayVehicles(scootyCollection, scootiesContainer);
              break;
          }
        } else {
          document.querySelector(
            `.${vehicleCategoryID}-container`
          ).style.display = 'none';
        }
      });
    });
  });
});

function displayVehicles(object, container) {
  object.forEach(vehicle => {
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
              <form  action="https://formsubmit.co/info@espreeholidays.com" method="POST" id="bookingForm${vehicle.id}" class="booking-form" data-vehicle-id="${vehicle.id}"  method="POST">
              <input type="hidden" name="_next" value="https://espreeholidays.com/thanks.html">
              <input type="hidden" name="_subject" value="Vehicle Rentals Enquiry!">
              <input type="hidden" name="_captcha" value="false">
              
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
               <button id="submitForm" type="submit" class="send-enquiry enquiry-btn w-100 mt-4">Submit Now</button>
             </form>
           
          </div>
         </div>
      </div>
    `;
    card.innerHTML = cardContent;
    container.appendChild(card);
  });
}

/* function handleFormSubmission(event) {
  event.preventDefault();
  let vehicleId = event.target.getAttribute('data-vehicle-id');

  let formData = {
    vehicle: event.target.querySelector(`#floatingVehicle${vehicleId}`).value,
    fullName: event.target.querySelector(`#floatingFullName${vehicleId}`).value,
    phone: event.target.querySelector(`#floatingPhone${vehicleId}`).value,
    message: event.target.querySelector(`#floatingMessage${vehicleId}`).value,
  };

  var email = 'info@espreeholidays.com';
  var subject = 'Vehicle Rental Enquiry';
  var emailBody = `Hi, I'm interested in renting a vehicle!\nSelected Vehicle: ${formData.vehicle}\nFull Name: ${formData.fullName}\nPhone: ${formData.phone}\nAdditional Instructions: ${formData.message}`;
  var email = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(emailBody)}`;
  window.open(email, '_blank').focus();
} */

/* document.addEventListener('submit', event => {
  if (event.target.classList.contains('booking-form')) {
    handleFormSubmission(event);
  }
  location.reload();
}); */

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
