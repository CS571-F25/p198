import Card from "react-bootstrap/Card";

export default function PersonCard({ name, college, title, photo, photoAlt }) {
  return (
    <Card className="h-100 text-center person-card shadow-sm">
      {photo && (
        <Card.Img
          variant="top"
          src={photo}
          alt={photoAlt || name}
          className="person-card-img"
        />
      )}
      <Card.Body>
        <Card.Title className="h5 mb-1">{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{college}</Card.Subtitle>
        {title && <Card.Text className="mb-0">{title}</Card.Text>}
      </Card.Body>
    </Card>
  );
}
