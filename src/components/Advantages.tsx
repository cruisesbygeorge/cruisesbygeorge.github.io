import './Advantages.css';

const REASONS = [
  {
    title: 'Expert Guidance, Advocacy and Time Savings',
    body: `How would you define luxury?

Today's consumers of luxury are changing and adapting to realize true luxury is YOUR TIME. Time is of course the scarcest resource, the one thing we can never have more of. If you are unsure as to which ship or destination to choose, we can discuss and collaborate for as long as you like. Together, let's find the cruise that suits you. When you do need something done, instead of spending an hour on hold with customer service to swap a cabin, or resolve a cancelled flight or a billing issue, I will do the heavy lifting for you. I act as your personal advocate to secure refunds, rebooking, and resolutions. Your Guardian Agent!`,
  },
  {
    title: 'Exclusive VIP Perks, Upgrades & Amenities',
    body: `Because of my buying power and strong relationships with my cruise industry partners, they provide me with added value which I then pass on to you.

Close your eyes. Now open the door to your glorious suite and what do you notice? A nice bottle of champagne, a sumptuous fruit basket and a lovely bouquet of flowers…all compliments of Cruises By George. On many occasions you will have access to group space or exclusive promotions. Cruises By George purchases group space on sailings one year in advance and as my client I can book you into this allotment for even more perks.`,
  },
  {
    title: 'Substantial Onboard Credits',
    body: `You are guaranteed additional onboard credit depending on what category of cabin and the duration of the voyage. I regularly secure $250 to $1,000 in complimentary shipboard credits per stateroom. This credit can be redeemed for premium spa treatments, boutique shopping, private dining, rare vintage wines, whatever you want!`,
  },
  {
    title: 'Added Value for Free Services',
    body: `Cruise lines set the base fares, meaning the price is identical whether you book online yourself or call the cruise line directly. Since travel advisors earn their commission from the cruise line, their expertise and support come at no extra cost to you.`,
  },
  {
    title: 'VIP Boarding Privileges',
    body: `Many of my clients receive early check-in, priority boarding, and exclusive "board anytime" embarkation vouchers to completely bypass standard terminal lines.`,
  },
  {
    title: 'Priority Stateroom Upgrades',
    body: `I speak with sales executives to move my clients into higher-tier suites or optimal ship locations that look unavailable online.`,
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="advantages-section">
      <div className="advantages-inner">
        <div className="advantages-reasons-bg">
          <p className="advantages-reasons-intro">
            Reserving your voyage with Cruises By George offers several distinct privileges:
          </p>
          <div className="advantages-reasons">
            {REASONS.map((reason, index) => (
              <div key={reason.title} className={`advantage-reason ${index % 2 === 0 ? 'advantage-reason--odd' : 'advantage-reason--even'}`}>
                <h3>{reason.title}</h3>
                {reason.body.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
