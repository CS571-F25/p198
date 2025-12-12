import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="page-container">
      <div className="page-inner">
        <h1 className="fw-bold mb-3">Contact Us</h1>
        <p className="mb-4">
          Interested in joining the team, sharing feedback, or exploring
          potential partnerships? We’d love to hear from you.
        </p>

        <ContactForm />

        <p className="mt-4 text-muted small">
          You can also email us directly at{" "}
          <a href="mailto:vzhou2@wisc.edu">vzhou2@wisc.edu</a>.
        </p>
      </div>
    </div>
  );
}
