import Image from "next/image";

export const metadata = {
  title: "Coaching Services | Life Coaching with Kaelynn",
  description:
    "Explore life coaching services with Kaelynn including personal growth coaching, confidence coaching, accountability coaching, life transition coaching, emotional wellness coaching, and healing support.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

export default function Services() {
  const services = [
    {
      title: "Personal Growth Coaching",
      bestFor: "You want clarity, direction, and intentional growth.",
      description:
        "Supports self-awareness, personal direction, confidence, and meaningful growth.",
      outcomes: [
        "Greater clarity",
        "Stronger self-awareness",
        "Personal direction",
        "More intentional choices",
      ],
    },
    {
      title: "Confidence Coaching",
      bestFor: "You struggle with self-doubt or second-guessing yourself.",
      description:
        "Helps strengthen self-trust, self-worth, courage, and confidence in your decisions.",
      outcomes: [
        "Increased self-trust",
        "Stronger self-worth",
        "Less fear of judgment",
        "More confident decisions",
      ],
    },
    {
      title: "Accountability Coaching",
      bestFor: "You know what you want but need support following through.",
      description:
        "Provides structure, encouragement, and support so you can stay focused and take action.",
      outcomes: [
        "Clear action steps",
        "Consistent follow-through",
        "Reduced procrastination",
        "Support staying focused",
      ],
    },
    {
      title: "Life Transition Coaching",
      bestFor: "You are navigating change, uncertainty, or a new chapter.",
      description:
        "Supports you through life changes, decisions, reinvention, and moving forward with confidence.",
      outcomes: [
        "Support through change",
        "Better decision-making",
        "Renewed direction",
        "Confidence in your next chapter",
      ],
    },
    {
      title: "Mindset & Emotional Wellness Coaching",
      bestFor: "You want healthier thought patterns and emotional balance.",
      description:
        "Helps you recognize patterns, manage overwhelm, reduce negative self-talk, and build resilience.",
      outcomes: [
        "Healthier mindset",
        "Emotional awareness",
        "Less overwhelm",
        "Stronger resilience",
      ],
    },
    {
      title: "Healing & Self-Discovery Coaching",
      bestFor: "You want to reconnect with yourself and your identity.",
      description:
        "Creates space to explore your values, reconnect with who you are, and move forward
