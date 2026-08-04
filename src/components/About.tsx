import profilePic from '../assets/profile_pic.JPG';
import './About.css';

const QUALIFICATIONS = [
  {
    title: 'Cruise Industry',
    body: `Time well spent was my tenure at Norwegian Cruise Line in Miami as customer service and inside sales representative. I fully realized at the time I was receiving a tremendous education regarding the cruise industry.

My first big break as an actual travel agent was at a cruise only travel agency in Miami called South Beach Cruises a.k.a CruiseShopping.com. The owner used to always give his top selling agents free cruises. The more we knew the cruise business the more we sold…product knowledge at the highest degree through personal experience on the ships. I was awarded two free cruises and I chose to go to Alaska both times. I used to sleep like a baby back in those days knowing I was part of such an exciting industry and getting paid for it.`,
  },
  {
    title: 'Hotel Industry',
    body: `Sol Melia Hotels and Resort Worldwide

At the time, it was one the largest hotel chains in the world, with over 400 hotels in 40 different countries. Only Marriott could be considered our competition.

Our corporate was at 1000 Brickell Ave in Miami Florida. Starting at the bottom and rising up through the ranks via hard work, there is no other way if you want the truth about it.

I started in the group sales department, and I was not allowed to speak to anyone, only my superiors. I had two mentors that were incredibly well educated and talented. I was the hungry protégé and had to study stacks of contracts before I was allowed to speak to clients on the phone. My training continued, and my mentors now included top executives, even the Vice President. The bosses started sending me to Europe, Costa Rica, Dominican Republic, Mexico etc. to learn more about the Melia properties and study the competition.

I was eventually promoted to Director of Sales, and it seemed I was always on a plane traveling to someplace agreeable.

The only professions I ever had that were not in the travel and tourism industry were selling women's shoes at Burdines, waiting tables at Smith & Wollensky Miami Beach and I was the chef and owner of a small café in Coconut Grove called Georgie's Place. These careers were very fulfilling and taught me lessons for life. The main thing the restaurant business taught me was a little hard work never hurt anybody… and NOBODY should ever feel like they can't get their hands dirty once in a while.`,
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <div className="about-image-col">
          <img src={profilePic} alt="George" className="about-profile-pic" />
        </div>

        <div className="about-content-col">
          <p className="about-role">Founder and Luxury Travel Advisor</p>
          <h2 className="about-name">MEET GEORGE</h2>

          <div className="about-philosophy">
            <h3 className="section-label">HOW IT ALL BEGAN</h3>
            <p>
              In the 80's, before most of my Millennial clients were even born, I lived and worked in the
              Cruise Capital of the World, Miami Beach, Florida. My fondest cruising memories were sailing
              to Caribbean destinations on the Norwegian Norway which offered a more intimate experience…pure
              ocean liner elegance. However, this was the 80's and we loved to party…so the Carnival
              Tropicale really used to hit way above it's pay grade! That was my jam!
            </p>
            <p>
              First and foremost, I am here to answer your questions, listen to your comments, solve
              problems and help you every step of the way.
            </p>
            <p>This is my personal cell phone number 305-878-0007.</p>
            <p>My hours of operation are 7 days per week:</p>
            <p>
              Monday – Friday 8am – 9pm<br />
              Saturday – 10am – 5pm<br />
              Sunday – 12noon – 5pm
            </p>
            <p>
              This means I am here to pick up the phone during those hours as opposed to making you, my
              client go back and forth via long text messages or emails.
            </p>
          </div>
        </div>
      </div>

      <div className="about-full-width">
        <div className="about-qualifications">
          <h3 className="section-label">Professional Qualifications</h3>
          {QUALIFICATIONS.map((q) => (
            <div key={q.title} className="qualification-block">
              <h4>{q.title}</h4>
              {q.body.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="about-mission">
          <h3 className="section-label">My Mission Statement</h3>
          <p className="mission-text">Hard Work!</p>
        </div>

        <div className="about-interests">
          <h3 className="section-label">Personal Interests</h3>
          <p>
            Growing up exposed to various cultures has accentuated my love for the travel & tourism
            industry. For leisure I enjoy physical activities such as tennis, disco dancing and break
            dancing, cooking, golf, snorkeling, skiing, kayaking and martial arts. For passive activities
            I enjoy listening to the 70's and 80' music, reading history, poetry and classic novels,
            studying Spanish, French and Italian, food & wine, and playing chess.
          </p>
        </div>
      </div>
    </section>
  );
}
