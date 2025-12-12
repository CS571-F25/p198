import uwLogo from "../assets/UWcrest.png";
import cmuLogo from "../assets/cmuSeal.jpg";
import PersonCard from "../components/PersonCard";
import vincentProfilePic from "../assets/vincentProfilePic.jpeg";

export default function About() {
  return (
    <div className="page-container">
      <div className="page-inner">
        <h1 className="fw-bold mb-3">About MatchBites</h1>

        <p className="mb-3">
          MatchBites is a collaboration between students at the University of
          Wisconsin–Madison and Carnegie Mellon University. We are two
          long-time friends who were tired of watching group plans die in the
          group chat, and we wanted to fix that — not just for ourselves, but
          for everyone on campus and beyond.
        </p>

        {/* School Logos */}
        <div className="school-logos mb-4">
          <div className="d-flex flex-column flex-md-row align-items-start gap-3">
            <div className="d-flex align-items-center gap-2">
              <img
                src={uwLogo}
                alt="University of Wisconsin–Madison crest"
                className="school-logo-img"
              />
              <span className="fw-semibold">
                University of Wisconsin–Madison
              </span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <img
                src={cmuLogo}
                alt="Carnegie Mellon University seal"
                className="school-logo-img"
              />
              <span className="fw-semibold">Carnegie Mellon University</span>
            </div>
          </div>
        </div>

        <h2 className="fw-semibold mb-2">Why we’re building this</h2>
        <p className="mb-3">
          We’ve seen the same pattern over and over: someone suggests hanging
          out, everyone says “I’m down,” people research on their own, and then
          coordination becomes a mess. No one wants to say they’re not
          interested, and nothing ever gets locked in.
        </p>
        <p className="mb-3">
          As college students and entrepreneurs, we understand campus life and
          how easy it is for good ideas to fade out. Our hypothesis is simple:
          if people only swipe right on things they truly want to do, and we
          only surface options where the whole group matches, then plans are
          much more likely to actually happen.
        </p>

        <h2 className="fw-semibold mb-2">The problem we’re solving</h2>
        <ul className="text-start mb-3">
          <li>Coordinating plans across multiple people and schedules.</li>
          <li>
            Decision fatigue when there are too many options and no clear
            overlap.
          </li>
          <li>
            Politeness in group chats — people don’t want to say they’re not
            interested, so nothing gets decided.
          </li>
          <li>
            Lack of a social layer on top of tools like Yelp or OpenTable.
          </li>
        </ul>

        <p className="mb-4">
          We’re starting with college campuses, where social life, new people,
          and local discovery all collide. But the same idea can help families,
          travelers, and any group that struggles to turn “we should hang out”
          into “we’re on the way.”
        </p>

        {/* Person cards at the bottom */}
        <h2 className="fw-semibold mb-2">Meet the team</h2>
        <p className="mb-3">
          MatchBites was built by two friends who care about making it easier
          for groups to actually follow through on great ideas.
        </p>

        <div className="team-card-grid">
          <PersonCard
            name="Vincent Zhou"
            college="University of Wisconsin–Madison"
            title="Co-founder · Chief of Product & Design"
            photo={vincentProfilePic}
            photoAlt="Portrait of Vincent Zhou"
          />
          <PersonCard
            name="Andi Sun"
            college="Carnegie Mellon University"
            title="Co-founder · CEO"
          />
        </div>
      </div>
    </div>
  );
}
