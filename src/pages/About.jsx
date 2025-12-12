import uwLogo from "../assets/UWcrest.png";
import cmuLogo from "../assets/cmuSeal.jpg";

export default function About() {
  return (
    <div className="page-container">
      <div className="page-inner">
        <h1 className="fw-bold mb-3">About MatchBites</h1>

        <p className="mb-3">
          MatchBites is built by two long-time friends who are tired of watching
          group plans die in the group chat. We’re both in friend groups that
          can never decide on anything, and we wanted to fix that — not just for
          ourselves, but for everyone on campus and beyond.
        </p>

        <div className="school-logos mb-4">
          <div className="d-flex align-items-center gap-2">
            <img
              src={uwLogo}
              alt="University of Wisconsin–Madison crest"
              className="school-logo-img"
            />
            <span>Vincent Zhou — Junior, UW–Madison</span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <img
              src={cmuLogo}
              alt="Carnegie Mellon University seal"
              className="school-logo-img"
            />
            <span>Andi Sun — Junior, Carnegie Mellon University</span>
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

        <p className="mb-0">
          We’re starting with college campuses, where social life, new people,
          and local discovery all collide. But the same idea can help families,
          travelers, and any group that struggles to turn “we should hang out”
          into “we’re on the way.”
        </p>
      </div>
    </div>
  );
}
