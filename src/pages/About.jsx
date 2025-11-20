import uwLogo from "../assets/UWcrest.png";
import cmuLogo from "../assets/cmuSeal.jpg";

export default function About() {
  return (
    <div className="page-fullscreen">
      <div className="page-content">
        <h2 className="fw-bold mb-3">About MatchBites</h2>

        <p className="mb-3">
          MatchBites is built by two college students who are tired of group
          plans falling apart in group chats.
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

        <h5 className="fw-semibold mb-2">Why we’re building this</h5>
        <p className="mb-3">
          The current social workflow looks like this: someone suggests hanging
          out, everyone says “I’m down,” people do separate research on food or
          activities, and then coordinating schedules and interests becomes a
          tedious mess. No one wants to be the person who says “I’m not into
          that,” so ideas stall and never become real plans.
        </p>

        <p className="mb-3">
          We want to break that inertia. Our hypothesis is simple: if you only
          swipe right on things you’d actually be willing to do, and we only
          highlight the options that everyone in the group likes, then matches
          are far more likely to turn into real, committed plans.
        </p>

        <h5 className="fw-semibold mb-2">The problem we’re solving</h5>
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
            Lack of a social layer on top of existing tools like Yelp or
            OpenTable.
          </li>
        </ul>

        <p className="mb-3">
          We’re starting with college students, where there’s a dense
          social graph, lots of new people every year, and a real desire to
          explore local spots. But the same idea can extend to families,
          travelers, and any group that needs an easier way to go from “we
          should do something” to “we’re actually on the way.”
        </p>

        <p className="mb-0">
          Long term, we imagine MatchBites helping with reservations, timing,
          and logistics — turning the hardest part of hanging out (coordination)
          into something fun and fast instead of stressful.
        </p>
      </div>
    </div>
  );
}
