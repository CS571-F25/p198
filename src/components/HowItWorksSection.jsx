export default function HowItWorksSection() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="mb-5 how-it-works-section"
    >
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
          We highlight matches where everyone in the group has swiped right —
          no more guessing what people actually want to do.
        </li>
        <li>
          You pick a time, and future versions will help with reservations and
          calendar integration.
        </li>
      </ol>
      <p className="mb-0">
        The idea is to change behavior: when a match appears, it already means
        everyone is in. That dramatically increases the chance that plans
        actually happen.
      </p>
    </section>
  );
}
