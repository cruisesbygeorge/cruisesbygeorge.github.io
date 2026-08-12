import './ProcessService.css';

const STATS = [
  { pct: '70%', desc: 'of all Baby Boomers use a travel advisor to book their luxury cruise.', source: 'The Roaming Boomers' },
  { pct: '47%', desc: 'of all Gen X are using in person face-to-face travel advisors.', source: 'TravelAge West' },
  { pct: '75%', desc: 'of Millennials said they want travel advisors to take care of researching vacations because of information overload "which takes too much time to go through."', source: 'The Travel Market Report' },
  { pct: '80%', desc: 'of travel advisors are seeing an increase in clients that have never worked with a travel advisor before.', source: 'The New York Times' },
];

const CUSTOM_INCLUSIONS = [
  '100% custom tailored trip based on your individual interests and budget',
  'Consultation with deciding on destination(s), lodging, airport transfers/transportation and local activities',
  'Research and trip planning, excursions off property, implementing a collective of vetted resources',
  'Negotiations with tour operators and vendors',
  'Booking and reconfirmation of all travel components',
  'Signature Travel Network and preferred partner pricing and amenities',
  'Full access via phone and/or e-mail to your hotel concierge and/or their ground partners, destination management company and transportation company',
  'Peace of mind while traveling with 24/7 back-up assistance available',
];

const SPECIALTIES = [
  'Destination Weddings & Honeymoons',
  'Europe and the Caribbean',
  'Exploratory, Adventure and Exotic Journeys',
  'African Safaris',
  'Friends and Family/Multigenerational Vacations',
  'Luxury Cruises, Hotels and Villas',
  'Themed Getaways such as Wellness Travel, Skiing in Europe, Golf Groups, Culinary, Food & Wine',
  'Luxury and Expedition Cruises',
];

const CRISIS_ITEMS = [
  'Handling your transfers to and from port and all land excursions while in port',
  'TSA and Global Entry',
  'Navigating over tourism',
  'VISAS',
  'Booking and handling any challenges with pre cruise and post cruise hotel stays',
  'Finding you the perfect cabin even when there is limited availability',
  'Adding last-minute bookings regarding family members and friends to your group',
  'Swapping cabins',
  'Private dinner reservations on shore',
];

export default function ProcessService() {
  return (
    <section className="process-service-section" id='process-services'>
      <div className="process-service-inner">
        <div className="service-block service-block--intro">
          <h3>Why use a Travel Advisor when I can just book online or call the cruise line directly?</h3>
          <p>
            The difference between traveling on your own or with the help of a travel advisor is that an
            advisor is the one who will worry about Plans A – Z. Instead of you sitting there trying to
            plan for the unexpected, we will. This leaves you to truly enjoy your vacation without a single
            worry and costs you nothing!
          </p>
          <p>
            The truth is, Luxury Travel Advisors are now in more demand than ever…if you are not using one,
            you are probably in the minority!
          </p>
          <h4>By the Numbers:</h4>
          <div className="service-stats">
            {STATS.map((s) => (
              <div key={s.source} className="service-stat">
                <span className="service-stat__pct">{s.pct}</span>
                <span className="service-stat__desc">{s.desc}</span>
                <span className="service-stat__source">— {s.source}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="my-process-services">
          <h3>My Services</h3>

          <div className="service-block">
            <h4>Logistical Nightmares Need Logistics Management</h4>
            <p>
              Long waits in baggage claim? Dragging and lifting heavy luggage through airport terminals and
              ports? Transfers that are late or even worse don't even show up and leave you stranded? A
              cruise involves more than just a ship ticket. For all your luggage, I recommend you just mail
              it to the port of call. The courier service I work with will pick up your luggage directly
              from your home and make sure it gets delivered straight to your cabin.
            </p>
            <p>
              For transfers, I am very particular with whom I do business with. For your air, I can book
              your flight or provide flight information. I also handle pre and post cruise hotel stays,
              dinner reservations, procuring a round of golf, arranging all transfers.
            </p>
          </div>

          <div className="service-block">
            <h4>Travel Protection</h4>
            <p>
              When booking a cruise, you should strongly consider procuring a travel cancellation insurance
              policy. Your holiday investment could be worth tens of thousands of dollars and there are many
              reasons why you may have to cancel your special trip. Cruises By George has partnered with
              Travel Guard – Zurich Cover More which has been in business for over 150 years! Cash back! No
              refunds in the form of future cruise credit and no gimmicks!
            </p>
            <h5>HOW IT WORKS:</h5>
            <p>
              In a nutshell, final payment is due 90 days prior to sail date. If you cancel your cruise
              after final payment, and you have insurance, you will get your money back.
            </p>
            <p>
              If you cancel your cruise after final payment, and you do not have insurance, you will lose
              all your money.
            </p>
          </div>

          <div className="service-block">
            <h4>Bespoke Shore and Port Experiences</h4>
            <h5>Private Destination Guides</h5>
            <p>
              The luxury cruise lines have carefully curated top notch shore excursions. If you are looking
              for something a little more private and off the beaten path, then I will help you choose a
              Destination Management Company comprised of specialized local experts.
            </p>
            <h5>Private Cars and Drivers</h5>
            <p>
              Instead of crowded group tour buses, I arrange dedicated private vehicles to meet clients
              right at the pier for seamless, flexible exploring.
            </p>
            <h5>Hard-to-Get Reservations</h5>
            <p>
              Table by the window? It will be my pleasure to help you secure high-demand specialty
              restaurant tables, premium spa slots, and front-row entertainment seating before you ever
              step onboard.
            </p>
          </div>

          <div className="service-block">
            <h4>Proactive Advocacy and Financial Protection</h4>
            <p>
              What is Automatic Price-Drop Monitoring? Whether you book directly with the cruise line or
              with a travel advisor, on many occasions, after you confirm and place deposit, the price of
              your cruise goes down, and the cruise line will not notify you or the travel advisor, so we
              are none the wiser. If a cruise line lowers the fare or introduces a better promotion after
              booking, I will proactively secure the refund, cabin upgrade, or fare adjustment. I learn of
              the price reductions by monitoring the price periodically.
            </p>
            <h5>24/7 Crisis Mitigation:</h5>
            <p>
              If a flight is canceled, an itinerary changes, or a medical emergency arises, Cruises By
              George handles all re-bookings and logistics in real time while you relax.
            </p>
            <p>
              You now have an actual person and no more call centers. You may have a problem before you
              even arrive at the port or get on the ship. I have your back, and I am available via phone
              7 days per week to help you with:
            </p>
            <ul>
              {CRISIS_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service-block">
            <h4>Cruise Only and Hotel Only Bookings</h4>
            <p>
              If you know which cruise or hotel you want… reserve through us…VIP amenities and perks
              included.
            </p>
            <p>
              If you want something very special and unique, we get up close and personal, then we will
              need to collaborate.
            </p>
          </div>

          <div className="service-block">
            <h4>Custom Itinerary Design</h4>
            <p>
              Multi-destination research or customized travel itinerary, domestic or international.
            </p>
            <p>
              For curated, bespoke vacation planning there is a nominal fee. Once you confirm through our
              agency, we will credit you back the booking fee. If you decide not to reserve your holidays
              through our agency, we will hold onto the fee and use it as credit for when you do book with us.
            </p>
            <h5>What's included in a Custom Itinerary Design?</h5>
            <ul>
              {CUSTOM_INCLUSIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="service-specialties">
          <h3>Our Specialties:</h3>
          <ul>
            {SPECIALTIES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
