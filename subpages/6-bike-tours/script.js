const bikeTours = [
  {
    id: 1,
    title: 'Srinagar - Leh – Manali ',
    img: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: {
      duration: {
        days: 10,
        nights: 9,
      },
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1: Arrival in Srinagar',
          description: `Activities: Arrive in Srinagar, the summer capital of Jammu and Kashmir. Explore local attractions like Dal Lake, Shalimar Bagh, and Nishat Bagh.
    <br/>
    Altitude: 1,585 meters (5,200 feet)`,
        },
        day2: {
          id: 2,
          title:
            'Day 2: Srinagar to Sonamarg to Zoji La Pass to Drass to Kargil',
          description: `Distance: Approximately 200 kilometers
    <br/>
    Activities: Start your bike journey towards Kargil. Pass through Sonamarg and the challenging Zoji La Pass (3,528 meters). Visit the Kargil War Memorial in Drass. Overnight stay in Kargil.
    <br/>
    Altitude of Kargil: 2,676 meters (8,780 feet)`,
        },
        day3: {
          id: 3,
          title: 'Day 3: Kargil to Lamayuru to Leh',
          description: `Distance: Approximately 210 kilometers
    <br/>
    Activities: From Kargil, head towards Leh, passing through the Moon landscape in Lamayuru, and Mulbekh Monastery. Visit the confluence of the Indus and Zanskar rivers and the Magnetic Hill. Overnight stay in Leh.
    <br/>
    Altitude of Leh: 3,500 meters (11,482 feet)`,
        },
        day4: {
          id: 4,
          title: 'Day 4: Leh (Acclimatization Day)',
          description: `Activities: Take a day to acclimatize to the high altitude. Explore Leh’s local attractions such as Shanti Stupa, Leh Palace, and local markets. Overnight stay in Leh.`,
        },
        day5: {
          id: 5,
          title: 'Day 5: Leh to Nubra Valley via Khardung La',
          description: `Distance: Approximately 120 kilometers
    <br/>
    Activities: Ride to Nubra Valley via Khardung La Pass (5,359 meters), one of the highest motorable roads in the world. Visit Diskit Monastery and the Hunder Sand Dunes. Overnight stay in Nubra Valley.
    <br/>
    Altitude of Nubra Valley: 3,048 meters (10,000 feet)`,
        },
        day6: {
          id: 6,
          title: 'Day 6: Nubra Valley to Pangong Lake via Shyok or Wari La',
          description: `Distance: Approximately 150-160 kilometers
    <br/>
    Activities: Travel to Pangong Lake, a stunning high-altitude lake famous for its changing colors. The route via Shyok is shorter but more challenging, while the Wari La route is longer but offers spectacular views.
    <br/>
    Altitude of Pangong Lake: 4,225 meters (13,862 feet)`,
        },
        day7: {
          id: 7,
          title: 'Day 7: Pangong Lake to Leh via Chang La',
          description: `Distance: Approximately 160 kilometers
    <br/>
    Activities: Return to Leh via Chang La Pass (5,360 meters), the third highest motorable road in the world. Visit the Thiksey Monastery and Shey Palace on the way back. Overnight stay in Leh.`,
        },
        day8: {
          id: 8,
          title: 'Day 8: Leh to Sarchu',
          description: `Distance: Approximately 250 kilometers
    <br/>
    Activities: Begin your journey back to Srinagar, stopping overnight at Sarchu. This leg involves crossing high-altitude passes like Nakee La, Lachulung La, and the Gata Loops.
    <br/>
    Altitude of Sarchu: 4,290 meters (14,070 feet)`,
        },
        day9: {
          id: 9,
          title: 'Day 9: Sarchu to Manali',
          description: `Distance: Approximately 230 kilometers
    <br/>
    Activities: Continue from Sarchu to Manali through the scenic Baralacha La Pass. Cross the Rohtang Pass before descending into Manali, marking the end of the high-altitude Himalayan terrain.
    <br/>
    Altitude of Manali: 2,050 meters (6,726 feet)`,
        },
        day10: {
          id: 10,
          title: 'Day 10: Manali (Departure)',
          description: `Activities: Explore Manali, visiting popular spots like Hadimba Temple, Vashist Hot Water Springs, and the Mall Road. In the evening, depart for your onward journey, marking the end of the bike tour.`,
        },
      },
    },
  },
  {
    id: 2,
    title: 'Gurez Valley Adventure',
    img: 'https://images.pexels.com/photos/17856976/pexels-photo-17856976/free-photo-of-gurez-valley-landscape-with-royal-enfield.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    details: {
      duration: {
        days: 6,
        nights: 5,
      },
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1: Arrival in Srinagar',
          description: `Activities: Arrive in Srinagar, explore local attractions like Dal Lake, Shalimar Bagh, and enjoy a Shikara ride. Prepare for the bike tour and get familiar with your bike. Overnight stay in Srinagar.
    <br/>
    Altitude: 1,585 meters (5,200 feet)`,
        },
        day2: {
          id: 2,
          title: 'Day 2: Srinagar to Bandipora to Razdan Pass to Gurez Valley',
          description: `Distance: Approximately 123 kilometers
    <br/>
    Activities: Start early from Srinagar towards Bandipora. Ascend the Razdan Pass (3,300 meters), enjoying panoramic views of the Himalayas. Enter the stunning Gurez Valley, known for its pristine beauty and strategic location. Overnight stay in Dawar, the central town in Gurez Valley.
    <br/>
    Altitude of Gurez Valley: 2,400 meters (7,874 feet)`,
        },
        day3: {
          id: 3,
          title: 'Day 3: Exploring Gurez Valley',
          description: `Activities: Spend the day exploring Gurez Valley. Visit the Habba Khatoon peak, named after the famous poetess of Kashmir. Explore the Tulail Valley, a less-visited area offering serene landscapes. Enjoy the local culture and hospitality. Overnight stay in Gurez Valley.`,
        },
        day4: {
          id: 4,
          title: 'Day 4: Gurez Valley to Tulail Valley and Back',
          description: `Distance: Variable, depending on the exploration route
    <br/>
    Activities: Take a ride deeper into the Tulail Valley, admiring its untouched beauty and remote villages. Return to Dawar by evening. This day allows for a deep dive into the natural and cultural essence of the region. Overnight stay in Gurez Valley.`,
        },
        day5: {
          id: 5,
          title: 'Day 5: Gurez Valley to Srinagar via Bandipora',
          description: `Distance: Approximately 123 kilometers
    <br/>
    Activities: Return to Srinagar from Gurez Valley, retracing the route via Bandipora and Razdan Pass. Enjoy the last views of the valley’s breathtaking landscapes. Overnight stay in Srinagar, marking the end of the Gurez Valley bike tour.`,
        },
        day6: {
          id: 6,
          title: 'Day 6: Departure from Srinagar',
          description: `Activities: After breakfast, proceed for your journey back home, carrying memories of the serene and majestic Gurez Valley.`,
        },
      },
    },
  },
  {
    id: 3,
    title: 'Kashmir Valley Bike Expedition',
    img: 'https://images.pexels.com/photos/18646443/pexels-photo-18646443/free-photo-of-the-kargyak-river-with-the-granite-mountain-peak-of-mount-gumbok-rangjon-on-the-darcha-padum-trekking-route-in-the-zanskar-valley-in-ladakh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    details: {
      duration: {
        days: 6,
        nights: 5,
      },
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1: Arrival in Srinagar',
          description: `Activities: Arrive in Srinagar and get acquainted with your bike. Explore local attractions such as Dal Lake, take a Shikara ride, and visit Mughal Gardens. Overnight stay in Srinagar.
    <br/>
    Altitude: 1,585 meters (5,200 feet)`,
        },
        day2: {
          id: 2,
          title: 'Day 2: Srinagar to Gulmarg',
          description: `Distance: Approximately 50 kilometers
    <br/>
    Activities: Ride to Gulmarg, known for its ski resorts and the world’s highest golf course. Enjoy activities like a Gondola ride for panoramic views of snow-capped mountains. Overnight stay in Gulmarg.
    <br/>
    Altitude of Gulmarg: 2,650 meters (8,694 feet)`,
        },
        day3: {
          id: 3,
          title: 'Day 3: Gulmarg to Pahalgam',
          description: `Distance: Approximately 140 kilometers
    <br/>
    Activities: Head towards Pahalgam, the 'Valley of Shepherds'. The route is scenic, with views of saffron fields and the Lidder River. Visit Betaab Valley and Aru Valley. Overnight stay in Pahalgam.
    <br/>
    Altitude of Pahalgam: 2,740 meters (8,990 feet)`,
        },
        day4: {
          id: 4,
          title: 'Day 4: Pahalgam to Sonamarg',
          description: `Distance: Approximately 170 kilometers
    <br/>
    Activities: Ride from Pahalgam to Sonamarg, known as 'Meadow of Gold'. The journey through the Kashmir Valley offers breathtaking views. Explore Thajiwas Glacier. Overnight stay in Sonamarg.
    <br/>
    Altitude of Sonamarg: 2,800 meters (9,186 feet)`,
        },
        day5: {
          id: 5,
          title:
            'Day 5: Sonamarg to Srinagar via Kheer Bhawani and Manasbal Lake',
          description: `Distance: Approximately 80 kilometers
    <br/>
    Activities: Return to Srinagar, visiting Kheer Bhawani Temple and Manasbal Lake, known for its serenity and bird-watching opportunities. Conclude the day with a peaceful evening by Dal Lake. Overnight stay in Srinagar.`,
        },
        day6: {
          id: 6,
          title: 'Day 6: Departure from Srinagar',
          description: `Activities: Conclude your Kashmir Valley bike tour with cherished memories of the stunning landscapes and rich culture. Transfer to the airport for your onward journey.`,
        },
      },
    },
  },
];

const packageCardsContainer = document.querySelector('.package-card-container');
bikeTours.forEach(tour => {
  const packageCard = document.createElement('article');
  packageCard.className = 'package-card';
  packageCard.id = tour.id;

  let innerHTMLContent;
  innerHTMLContent = `
        <div class="package-card-banner">
          <img src="${tour.img}" alt="${tour.title}" />
        </div>

        <div
          class="package-card-details d-flex flex-column justify-content-between"
        >
          <div
            class="package-card-header d-flex justify-content-between align-items-center p-3"
          >
            <h3 class="package-card-title ps-2">${tour.title}</h3>
          </div>
          
          <ul
            class="package-card-amenities mb-3 pb-0 ps-4"
          >
            <li>
              <div class="package-card-amenity" title="Duration">
                <div class="package-card-amenities-icon">
                    <img src="../../assets/clock.svg" width="25"
                height="25">
                </div>
                <h5>${tour.details.duration.days} Days / ${
    tour.details.duration.nights
  } Nights</h5>
              </div>
            </li>            
          </ul>

          <div class="itenary">
            <div
              class="accordion accordion-flush itenary-accordian"
              id="accordian-${tour.id}"
            >
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#itenary-${tour.id}"
                    aria-expanded="false"
                    aria-controls="itenary-${tour.id}"
                  >
                    <h5 class="accordion-title">Itinerary</h5>
                  </button>
                </h2>
                <div
                  id="itenary-${tour.id}"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordian-${tour.id}"
                >
                  <div class="accordion-body">
                    <ul class="itenary">
                      ${Object.keys(tour.details.tourPlan)
                        .map(
                          day => `
                      <li class="tour-plan">
                        <div class="day">${tour.details.tourPlan[day].title}</div>
                        <div class="day-plan">${tour.details.tourPlan[day].description}</div>
                      </li>
                      `
                        )
                        .join('')}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="package-card-booking ps-3 pe-3 pb-2 d-flex justify-content-center"
          >
            <button class="package-enquiry-btn w-100" data-bs-toggle="modal" data-bs-target="#exampleModal${
              tour.id
            }">Send Enquiry
            </button>
          </div>
        </div>

         <!-- Modal -->
        <div class="modal fade " id="exampleModal${
          tour.id
        }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content p-4">
                    <div class="d-flex justify-content-between">
                        <h4 class="fw-semi-bold">Enquiry Details</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    
                    <div class="booking-details"></div>
                    <form action="https://formsubmit.co/info@espreeholidays.com"
                method="POST" id="bookingForm${
                  tour.id
                }" class="enquiry-form" data-package-id="${
    tour.id
  }"  autocomplete="on">
  <input
                  type="hidden"
                  name="_subject"
                  value="Bike Tour Enquiry!"
                />
                <input type="hidden" name="_captcha" value="false" />
                        <div class="form-floating" >
                            <input
                            readonly
                                value="${tour.title}"
                                type="text"
                                name="Selected Package"
                                class="form-control-plaintext"
                                id="floatingPackage${tour.id}"
                                placeholder="Selected Package"
                                required
                            />
                            <label for="floatingPackage${
                              tour.id
                            }">Selected Package*</label>
                        </div>
                        
                        <div class="form-floating mb-2">
                            <input
                                type="text"
                                name="Full Name"
                                class="form-control"
                                id="floatingFullName${tour.id}"
                                placeholder="Full Name"
                                required
                            />
                            <label for="floatingFullName${
                              tour.id
                            }">Full Name*</label>
                        </div>

                         <div class="form-floating mb-2">
                            <input
                                type="email"
                                name="Email"
                                class="form-control"
                                id="floatingEmail${tour.id}"
                                placeholder="Email"
                                required
                            />
                            <label for="floatingEmail${tour.id}">Email*</label>
                        </div>

                        
                        <div class="form-floating mb-2">
                            <input
                                type="tel"
                                name="Phone"
                                class="form-control"
                                id="floatingPhone${tour.id}"
                                placeholder="Phone"
                            />
                            <label for="floatingPhone${
                              tour.id
                            }">Phone (Optional)</label>
                        </div>

                        <div class="form-floating mb-2 ">
                              <input
                                type="date"
                                name="Start Date"
                                class="form-control"
                                id="floatingStartDate${tour.id}"
                                placeholder="Date of Arrival" 
                                />
                              <label for="floatingStartDate${
                                tour.id
                              }">Date of Arrival</label>
                          </div>

                        <div class="form-floating mb-2">
                              <textarea
                                class="form-control"
                                name="Message"
                                id="floatingMessage${tour.id}"
                                placeholder="Message"
                                style="height: 160px"
                              ></textarea>
                                    <label for="floatingMessage${
                                      tour.id
                                    }">Message</label>
                        </div>
                                <button type="submit" class="send-enquiry-final w-100 mt-4">Submit Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
  `;
  packageCard.innerHTML = innerHTMLContent;
  packageCardsContainer.appendChild(packageCard);
});

// Event listener for form submissions
/* packageCardsContainer.addEventListener('submit', function (event) {
  if (event.target.classList.contains('enquiry-form')) {
    event.preventDefault();

    // Extract form data
    let packageId = event.target.getAttribute('data-package-id');
    let formData = {
      selectedPackage: event.target.querySelector(
        `#floatingPackage${packageId}`
      ).value,
      startDate: event.target.querySelector(`#floatingStartDate${packageId}`)
        .value,
      fullName: event.target.querySelector(`#floatingFullName${packageId}`)
        .value,
      phone: event.target.querySelector(`#floatingPhone${packageId}`).value,
      message: event.target.querySelector(`#floatingMessage${packageId}`).value,
    };

    var email = 'info@espreeholidays.com';
    var subject = 'Tour Package Enquiry';
    var emailBody = `Hi, I'm interested in booking a tour package!\nSelected Package: ${formData.selectedPackage}\nDate of Arrival: ${formData.startDate}\nFull Name: ${formData.fullName}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    var email = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;
    window.open(email, '_blank').focus();
    window.location.reload();
  }
});
 */
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
