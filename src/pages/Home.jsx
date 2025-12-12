import { Button, Badge } from "react-bootstrap";
import eatingTogether from "../assets/eatingtogether.jpg";
import FeatureSwipeDeck from "../components/FeatureSwipeDeck";

export default function Home() {
  return (
    <div className="page-container">
      <div className="page-inner">
        {/* HERO SECTION (same content as before) */}
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
                MatchBites helps your group actually follow through on plans.
                Swipe on restaurants and activities, see where your friends
                overlap, and lock in a plan that everyone is excited about.
              </p>

              <h5 className="fw-semibold mb-2">Why it exists</h5>
              <p className="mb-3">
                Right now, someone says “we should hang out,” everyone drops a
                few ideas in the group chat, and then… nothing happens. It’s
                hard to coordinate, people don’t want to say no, and plans
                quietly die. MatchBites flips that: you only swipe right on
                plans you’re actually willing to commit to, so a match means
                everyone genuinely wants it.
              </p>

              <h5 className="fw-semibold mb-2">How it works</h5>
              <ul className="text-start mb-4">
                <li>Swipe right/left on nearby restaurants and activities.</li>
                <li>
                  Create or join a group with your friends and see where your
                  likes overlap.
                </li>
                <li>
                  We surface group matches so you can quickly pick a place and
                  time.
                </li>
                <li>
                  Future versions will help with reservations and logistics so
                  plans don’t fall apart.
                </li>
              </ul>

              <Button
                variant="primary"
                size="lg"
                href="https://gum-cream-89552792.figma.site"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started – Try the Prototype
              </Button>
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

        {/* HOW IT WORKS SECTION (scrollable explanation) */}
        <section aria-labelledby="how-it-works-heading" className="mb-5">
          <h2 id="how-it-works-heading" className="fw-bold mb-2">
            From “we should hang out” to “we’re actually going”
          </h2>
          <p className="mb-3">
            Our goal is to reduce the friction between wanting to hang out and
            actually showing up. Instead of messy group chats and endless links,
            MatchBites gives your group one simple flow:
          </p>
          <ol className="mb-3">
            <li>Start or join a group with your friends.</li>
            <li>Swipe on nearby spots that look interesting.</li>
            <li>
              We highlight matches where everyone has swiped right — no more
              guessing what people actually want to do.
            </li>
            <li>
              You pick a time, and future versions will help with reservations
              and calendar integration.
            </li>
          </ol>
          <p className="mb-0">
            The idea is to change behavior: when a match appears, it already
            means everyone is in. That dramatically increases the chance that
            plans actually happen.
          </p>
        </section>

        {/* SWIPEABLE FEATURE DECK */}
        <FeatureSwipeDeck />
      </div>
    </div>
  );
}
