import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("join");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("MatchBites — Contact Form");
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Reason: ${reason === "join" ? "I’d like to join the team" : reason === "feedback" ? "Product / UX feedback" : "Other"}`,
      "",
      message,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href = `mailto:vzhou2@wisc.edu?subject=${subject}&body=${body}`;
  };

  return (
    <div className="page-fullscreen">
      <div className="page-content">
        <h2 className="fw-bold mb-3">Contact Us</h2>
        <p className="mb-4">
          Interested in joining the team, sharing feedback, or exploring
          potential partnerships? We’d love to hear from you.
        </p>

        <Form onSubmit={handleSubmit} className="contact-form text-start">
          <Form.Group className="mb-3" controlId="contactName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactReason">
            <Form.Label>Reason for reaching out</Form.Label>
            <Form.Select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            >
              <option value="join">I want to join the team</option>
              <option value="feedback">I have product/UX feedback</option>
              <option value="other">Something else</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Tell us a bit more about how you’d like to get involved or what you’re thinking."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Send Email
          </Button>
        </Form>

        <p className="mt-4 text-muted small">
          You can also email us directly at{" "}
          <a href="mailto:vzhou2@wisc.edu">vzhou2@wisc.edu</a>.
        </p>
      </div>
    </div>
  );
}
