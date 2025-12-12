import { useMemo, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import FeatureCard from "./FeatureCard";

// Shuffle helper
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Your feature roadmap content
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
      "Show where each place is on a map or open directions in Google Maps. A high-value, low-effort way to make decisions more grounded.",
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
  // Randomized queue that stays fixed for this session
  const featureQueue = useMemo(() => shuffleArray(FEATURES), []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentFeature = featureQueue[currentIndex];

  // Motion values
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const likeOpacity = useTransform(x, [60, 140], [0, 1]);
  const skipOpacity = useTransform(x, [-140, -60], [1, 0]);

  const handleDragEnd = (_event, info) => {
    if (info.offset.x > 120) {
      // Swiped right
      advanceCard();
    } else if (info.offset.x < -120) {
      // Swiped left
      advanceCard();
    } else {
      x.set(0); // snap back
    }
  };

  const advanceCard = () => {
    setCurrentIndex((prev) => (prev + 1) % featureQueue.length);
    x.set(0);
  };

  return (
    <section aria-labelledby="features-heading" className="mb-5">
      <header className="mb-3">
        <h2 id="features-heading" className="fw-bold mb-1">
          What we’re building into MatchBites
        </h2>
        <p className="text-muted mb-0">
          Swipe through upcoming features just like you’d swipe on restaurants in the app.
        </p>
      </header>

      <div className="feature-swipe-wrapper">
        {/* Like / Skip labels */}
        <motion.div
          className="swipe-label swipe-label-like"
          style={{ opacity: likeOpacity }}
        >
          LIKE
        </motion.div>
        <motion.div
          className="swipe-label swipe-label-skip"
          style={{ opacity: skipOpacity }}
        >
          SKIP
        </motion.div>

        <motion.div
          className="feature-swipe-card-wrapper"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x, rotate }}
          onDragEnd={handleDragEnd}
        >
          <FeatureCard feature={currentFeature} />
        </motion.div>

        <p className="mt-3 text-muted small text-center">
          Swipe right if you like it, left if you don’t. Cards will keep looping in a random order.
          Swipes here are just for demo — they don’t affect any saved data.
        </p>
      </div>
    </section>
  );
}
