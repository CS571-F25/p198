import { Card } from "react-bootstrap";

export default function FeatureCard({ feature }) {
  const { title, description, tag, image, imageAlt } = feature;

  return (
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
            Feature image coming soon
          </div>
        )}
      </div>

      {/* Text content */}
      <Card.Body>
        {tag && (
          <span className="badge bg-secondary mb-2" aria-label={tag}>
            {tag}
          </span>
        )}
        <Card.Title as="h3" className="h5">
          {title}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
