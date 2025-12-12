import { useMemo } from "react";
import FeatureCard from "./FeatureCard";

// ICON IMPORTS (match your actual files)
import friendsPrivacyImg from "../assets/add-user.png";
import filtersImg from "../assets/filter.png";
import undoImg from "../assets/undo.png";
import mapsImg from "../assets/google-maps.png";
import menuImg from "../assets/menu.png";
import friendActivityImg from "../assets/review.png";
import listsImg from "../assets/list.png";
import reservationsImg from "../assets/opentable_logo.png";
import calendarImg from "../assets/google-calendar.png";
import flexibleMatchingImg from "../assets/pie-chart.png";
import inAppPollingImg from "../assets/ballot.png";

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
    image: friendsPrivacyImg,
    imageAlt: "Add user icon for friends and privacy",
  },
  {
    id: "filters",
    title: "Filter Enhancements",
    description:
      "Filter by distance, price, dietary needs, allergens, open hours, formality, and dine-in vs. takeout so every suggestion is genuinely doable.",
    tag: "Core",
    image: filtersImg,
    imageAlt: "Filter funnel icon",
  },
  {
    id: "undo",
    title: "Undo Swipe",
    description:
      "A simple rewind button to fix accidental swipes. It gives users more control and reduces frustration without complicating the interface.",
    tag: "UX",
    image: undoImg,
    imageAlt: "Undo circular arrow icon",
  },
  {
    id: "maps",
    title: "Google Maps Link / Mini Map",
    description:
      "Show where each place is on a map or open it directly in Google Maps. A high-value, low-friction way to make decisions more grounded.",
    tag: "Maps",
    image: mapsImg,
    imageAlt: "Google Maps location icon",
  },
  {
    id: "menu",
    title: "Menu Preview",
    description:
      "Clean, visual layouts that put the menu front and center, with large food photos and minimal text, so groups can easily scan what’s available and decide what to eat faster.",
    tag: "UX",
    image: menuImg,
    imageAlt: "Restaurant menu icon",
  },
  {
    id: "friend-activity",
    title: "Friend Activity Indicators",
    description:
      "See when friends liked or visited a place, and if a friend reviews that restaurant, their review appears on the restaurant card so you can get opinions from people you trust.",
    tag: "Social",
    image: friendActivityImg,
    imageAlt: "Review star/icon for friend activity",
  },
  {
    id: "lists",
    title: "Want to Try / Have Tried Lists",
    description:
      "Separate saved places into 'Want to Try' and 'Have Tried' lists. Great for both group planning and solo exploring.",
    tag: "Personal",
    image: listsImg,
    imageAlt: "Checklist / list icon",
  },
  {
    id: "reservations",
    title: "Integrated Reservations",
    description:
      "Down the line, connect to OpenTable or Yelp so you can book directly after matching instead of jumping between apps.",
    tag: "Future",
    image: reservationsImg,
    imageAlt: "OpenTable logo for reservations",
  },
  {
    id: "calendar",
    title: "Calendar Integration",
    description:
      "Send plans to Google or Apple Calendar so everyone stays aligned on when and where you’re meeting, and automatically check each person’s calendar to find overlapping free times and suggest the best reservation slots.",
    tag: "Future",
    image: calendarImg,
    imageAlt: "Google Calendar icon",
  },
  {
    id: "flexible-matching",
    title: "Flexible Matching (Threshold-Based)",
    description:
      "Let groups match on a place when a set portion of the group swipes right (for example, 3 of 5 people), so it’s easier to find options most people like.",
    tag: "Future",
    image: flexibleMatchingImg,
    imageAlt: "Pie chart / distribution icon",
  },
  {
    id: "in-app-polling",
    title: "In-App Polling or Ranked-Choice Voting",
    description:
      "Run quick polls or ranked-choice votes in the group chat to pick from your top matches when there are multiple good options.",
    tag: "Future",
    image: inAppPollingImg,
    imageAlt: "Ballot / polling icon",
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
