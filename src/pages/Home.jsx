import { Button, Badge } from "react-bootstrap";
import eatingTogether from "../assets/eatingtogether.jpg";

export default function Home() {
  return (
    <div className="page-fullscreen">
      <div className="page-content home-hero">
        {/* Text side */}
        <div>
          <Badge bg="primary" className="mb-3">
            For college friends & groups
          </Badge>

          <h1 className="fw-bold mb-3">Welcome to MatchBites</h1>
          <p className="lead mb-4">
            MatchBites helps your group actually follow through on plans.
            Swipe on restaurants and activities, see where your friends overlap,
            and lock in a plan that everyone is excited about.
          </p>

          <h5 className="fw-semibold mb-2">Why it exists</h5>
          <p className="mb-3">
            Right now, someone says “we should hang out,” everyone drops a few
            ideas in the group chat, and then… nothing happens. It’s hard to
            coordinate, people don’t want to say no, and plans quietly die.
            MatchBites flips that: you only swipe right on plans you’re actually
            willing to commit to, so a match means everyone genuinely wants it.
          </p>

          <h5 className="fw-semibold mb-2">How it works</h5>
          <ul className="text-start mb-4">
            <li>Swipe right/left on nearby restaurants and activities.</li>
            <li>
              Create or join a group with your friends and see where your likes
              overlap.
            </li>
            <li>
              We surface group matches so you can quickly pick a place and time.
            </li>
            <li>
              Future versions will help with reservations and logistics so plans
              don’t fall apart.
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
    </div>
  );
}
