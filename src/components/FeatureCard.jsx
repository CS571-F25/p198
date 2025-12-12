import { Card } from "react-bootstrap";

export default function FeatureCard({ feature, onClick }) {
  const { title, image, imageAlt } = feature;

  const handleKeyDown = (e) => {
    if (onClick && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className="feature-card-clickable"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <Card className="h-100 shadow-lg rounded-4 overflow-hidden feature-card-hero">
        {/* Hero image area */}
        <div className="feature-card-hero-image bg-light">
          {image ? (
            <img
              src={image}
              alt={imageAlt || title}
              className="w-100 h-100 object-fit-cover"
            />
          ) : (
            <div className="d-flex h-100 w-100 align-items-center justify-content-center text-muted">
              Feature image coming soon.
            </div>
          )}
        </div>

        {/* Title only */}
        <Card.Body>
          <Card.Title as="h3" className="h6 mb-0">
            {title}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
