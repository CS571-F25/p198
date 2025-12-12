import { Badge } from "react-bootstrap";
import eatingTogether from "../assets/eatingtogether.jpg";

export default function HeroSection() {
  return (
    <section aria-labelledby="home-hero-heading" className="mb-5">
      <div className="home-hero">
        {/* Text side */}
        <div>
          <Badge bg="primary" className="mb-3">
            For college friends & groups
          </Badge>

          <h1 id="home-hero-heading" className="fw-bold mb-3">
            Welcome to MatchBites
          </h1>
          <p className="lead mb-4">
            MatchBites helps your group actually follow through on plans. Swipe
            on restaurants and activities, see where your friends overlap, and
            lock in a plan that everyone is excited about.
          </p>

          <h2 className="h5 fw-semibold mb-2">Why it exists</h2>
          <p className="mb-3">
            Right now, someone says “we should hang out,” everyone drops a few
            ideas in the group chat, and then… nothing happens. It’s hard to
            coordinate, people don’t want to say no, and plans quietly die.
          </p>
          <p className="mb-3">
            Using tools like Google Maps or Yelp doesn’t really solve this.
            They bombard you with hundreds of options, long lists, and reviews,
            but they don’t help your specific group decide together. MatchBites
            simplifies that: you only swipe right on things you’re actually
            willing to do, and we focus on the overlap so your group isn’t stuck
            staring at endless search results.
          </p>
        </div>

        {/* Image side */}
        <div>
          <img
            src={eatingTogether}
            alt="Friends sharing food around a table"
            className="home-hero-image"
          />
        </div>
      </div>
    </section>
  );
}
