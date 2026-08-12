import './PassengerRights.css';

const RIGHTS = [
  'The right to disembark a docked ship if essential provisions such as food, water, restroom facilities and access to medical care cannot adequately be provided onboard, subject only to the Master\'s concern for passenger safety and security and customs and immigration requirements of the port.',
  'The right to a full refund for a trip that is canceled due to mechanical failures, or a partial refund for voyages that are terminated early due to those failures.',
  'The right to have available on board ships operating beyond rivers or coastal waters full-time, professional emergency medical attention, as needed until shore side medical care becomes available.',
  'The right to timely information updates as to any adjustments in the itinerary of the ship in the event of a mechanical failure or emergency, as well as timely updates of the status of efforts to address mechanical failures.',
  'The right to a ship crew that is properly trained in emergency and evacuation procedures.',
  'The right to an emergency power source in the case of a main generator failure.',
  'The right to transportation to the ship\'s scheduled port of disembarkation or the passenger\'s home city in the event a cruise is terminated early due to mechanical failures.',
  'The right to lodging if disembarkation and an overnight stay in an unscheduled port are required when a cruise is terminated early due to mechanical failures.',
  'The right to have included on each cruise line\'s website a toll-free phone line that can be used for questions or information concerning any aspect of shipboard operations.',
  'The right to have this Cruise Line Passenger Bill of Rights published on each line\'s website.',
];

export default function PassengerRights() {
  return (
    <section id="passenger-rights" className="passenger-rights-section">
      <div className="passenger-rights-inner">
        <h2 className="passenger-rights-title">Passenger Bill of Rights</h2>

        <p className="passenger-rights-intro">
          As a member of the Cruise Lines International Association (CLIA), Cruises By George has agreed
          to adopt the following passenger rights and post CLIA's Cruise Line Passenger Bill of Rights
          on its website:
        </p>

        <p className="passenger-rights-intro">
          The Members of the Cruise Lines International Association are dedicated to the comfort and care
          of all passengers on oceangoing cruises throughout the world. To fulfill this commitment, our
          members have agreed to adopt the following set of passenger rights:
        </p>

        <ol className="passenger-rights-list">
          {RIGHTS.map((right, i) => (
            <li key={i} className="passenger-rights-item">
              <span className="passenger-rights-number">{i + 1}</span>
              <p>{right}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
