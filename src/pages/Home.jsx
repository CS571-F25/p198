import { Button } from "react-bootstrap";

export default function Home({ user }) {
  return (
    <div className="page-fullscreen">
      <h1 className="display-5 fw-bold">Welcome to MatchBites</h1>
      <p className="lead">
        Swipe, match, and plan meals with your friends — all in one place.
      </p>

      {/* Get Started button that opens your Figma site */}
      <Button
        variant="primary"
        className="mt-3"
        href="https://gum-cream-89552792.figma.site"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Started
      </Button>
    </div>
  );
}
