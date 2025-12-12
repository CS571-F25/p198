import { useState } from "react";
import { Card } from "react-bootstrap";

export default function FeatureCard({ feature }) {
  const { title, image, imageAlt, description, tag } = feature;
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped((prev) => !prev);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  };

  return (
    <div
      className="feature-card-flip-wrapper"
      role="button"
      tabIndex={0}
      onClick={toggleFlip}
      onKeyDown={handleKeyDown}
      aria-pressed={isFlipped}
      aria-label={`${title} feature card`}
    >
      <div className={`feature-card-inner ${isFlipped ? "is-flipped" : ""}`}>
        {/* FRONT: image + title */}
        <div className="feature-card-face feature-card-front">
          <Card className="h-100 shadow-lg rounded-4 overflow-hidden">
            <div className="feature-card-hero-image bg-light">
              {image ? (
                <img
                  src={image}
                  alt={imageAlt || title}
                  className="feature-card-hero-img"
                />
              ) : (
                <div className="d-flex h-100 w-100 align-items-center justify-content-center text-muted">
                  Feature image coming soon.
                </div>
              )}
            </div>
            <Card.Body>
              <Card.Title as="h3" className="h6 mb-0">
                {title}
              </Card.Title>
            </Card.Body>
          </Card>
        </div>

        {/* BACK: description + tag */}
        <div className="feature-card-face feature-card-back">
          <Card className="h-100 shadow-lg rounded-4 overflow-hidden">
            <Card.Body className="d-flex flex-column">
              {tag && (
                <span className="badge bg-secondary mb-2 align-self-start">
                  {tag}
                </span>
              )}
              <Card.Title as="h3" className="h6 mb-2">
                {title}
              </Card.Title>
              <Card.Text className="mb-0">{description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
