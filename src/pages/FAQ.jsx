import Accordion from "react-bootstrap/Accordion";

export default function FAQ() {
  return (
    <div className="page-container">
      <div className="page-inner">
        <h1 className="fw-bold mb-3">FAQ</h1>
        <p className="mb-4">
          Here are some common questions about MatchBites and how it fits into
          your group’s planning flow.
        </p>

        <Accordion alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              How does MatchBites work with my friend group?
            </Accordion.Header>
            <Accordion.Body>
              You create or join a group with your friends, then swipe on
              nearby restaurants and activities. When everyone in the group
              swipes right on the same place, MatchBites surfaces that overlap
              so you can quickly agree on a plan instead of arguing in the
              group chat.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Why not just use Google Maps or Yelp?
            </Accordion.Header>
            <Accordion.Body>
              Tools like Google Maps or Yelp are great for finding options, but
              they bombard you with hundreds of choices and don’t help multiple
              people decide together. MatchBites is built around groups and
              commitment: people only swipe right on things they actually want
              to do, so matches are more likely to turn into real plans.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Is MatchBites free to use?
            </Accordion.Header>
            <Accordion.Body>
              Our prototype is free to use while we test ideas and refine the
              experience with college students. In the future, we may explore
              premium features, but the core goal is to keep group planning
              simple and accessible.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Who is MatchBites designed for?
            </Accordion.Header>
            <Accordion.Body>
              We’re starting with college students, since campus life is very
              social and people are constantly trying to coordinate plans.
              Long-term, we think the same idea can help families, friend
              groups in cities, and even travelers who want to decide what to
              do together.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Do I need to know everyone in my group personally?
            </Accordion.Header>
            <Accordion.Body>
              Early on, we’re focused on friend groups where people already
              know each other, like roommates, classmates, or clubs. A friends
              list and privacy settings will let you control who sees your
              matches and which groups you plan with.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              What’s next for MatchBites?
            </Accordion.Header>
            <Accordion.Body>
              On our roadmap are features like better filters, “Want to Try” /
              “Have Tried” lists, integrated reservations, and calendar
              integration. The goal is to remove as much friction as possible
              between “we should hang out” and “we’re actually meeting up.”
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
