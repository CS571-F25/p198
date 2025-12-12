import { useMemo } from "react";
import FeatureCard from "./FeatureCard";

// Shuffle helper for initial random order
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const FEATURES = [
  {
    id: "friends-privacy",
    title: "Friends List + Privacy Settings",
    description:
      "Add friends, create groups, and limit visibility of matches and chats so only your people see your plans. This is essential for trust and usability.",
    tag: "Core",
  },
  {
    id: "filters",
    title: "Filter Enhancements",
    description:
      "Filter by distance, price, dietary needs, allergens, open hours, formality, and dine-in vs. takeout so every suggestion is genuinely doable.",
    tag: "Core",
  },
  {
    id: "undo",
    title: "Undo Swipe",
    description:
      "A simple rewind button to fix accidental swipes. It gives users more control and reduces frustration without complicating the interface.",
    tag: "UX",
  },
  {
    id: "maps",
    title: "Google Maps Link / Mini Map",
    description:
      "Show where each place is on a map or open it directly in Google Maps. A high-value, low-friction way to make decisions more grounded.",
    tag: "Maps",
  },
  {
    id: "menu",
    title: "Menu Display Improvements",
    description:
      "Clean tabs and layouts that prioritize menus and photos over long text, so groups can decide what to eat faster.",
    tag: "UX",
  },
  {
    id: "friend-activity",
    title: "Friend Activity Indicators",
    description:
      "See when friends liked or visited a place. This social signal makes matches feel more trustworthy and interesting.",
    tag: "Social",
  },
  {
    id: "lists",
    title: "Want to Try / Have Tried Lists",
    description:
      "Separate saved places into 'Want to Try' and 'Have Tried' lists. Great for both group planning and solo exploring.",
    tag: "Personal",
  },
  {
    id: "reservations",
    title: "Integrated Reservations",
    description:
      "Down the line, connect to OpenTable or Yelp so you can book directly after matching instead of jumping between apps.",
    tag: "Future",
  },
  {
    id: "calendar",
    title: "Calendar Integration",
    description:
      "Eventually, send plans to Google or Apple Calendar so everyone stays aligned on when and where you’re meeting.",
    tag: "Future",
  },
];

export default function FeatureSwipeDeck() {
  const featureQueue = useMemo(() => shuffleArray(FEATURES), []);

  return (
    <section
      aria-labelledby="feature-deck-heading"
      className="mb-5 feature-carousel-section"
    >
      <header className="mb-3">
        <h2 id="feature-deck-heading" className="fw-bold mb-2">
          Explore the MatchBites feature roadmap
        </h2>
        <p className="text-muted mb-0">
          Swipe or scroll sideways, then tap a card to flip it and see what
          we’re planning for future versions of MatchBites.
        </p>
      </header>

      <div className="feature-carousel-bg">
        <div
          className="feature-carousel-scroll"
          aria-label="Feature cards carousel"
        >
          {featureQueue.map((feature) => (
            <div key={feature.id} className="feature-carousel-card-snap">
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
