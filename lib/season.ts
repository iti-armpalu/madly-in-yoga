// lib/season.ts

export type Season = "spring" | "summer" | "autumn" | "winter";

export interface SeasonalProduct {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
}

export const seasonalProducts: Record<Season, SeasonalProduct> = {
  spring: {
    title: "Spring Renewal",
    subtitle: "Detox Program",
    description: "Cleanse & restore balance",
    image: "/spring-renewal.jpg",
    href: "/products/spring-renewal",
  },
  summer: {
    title: "Summer Vitality",
    subtitle: "Hydration Pack",
    description: "Stay active & energized",
    image: "/summer-vitality.jpg",
    href: "/products/summer-vitality",
  },
  autumn: {
    title: "Autumn Wellness",
    subtitle: "Seasonal Program",
    description: "Boost immunity & energy",
    image: "/autumn-wellness.png",
    href: "/products/autumn-wellness",
  },
  winter: {
    title: "Winter Comfort",
    subtitle: "Warmth Collection",
    description: "Nourish & strengthen body",
    image: "/winter-comfort.jpg",
    href: "/products/winter-comfort",
  },
};

/**
 * Determine the current season based on the user's local month.
 * Optionally accepts a Date (for testing or overriding).
 */
export function getCurrentSeason(date: Date = new Date()): Season {
  const month = date.getMonth(); // 0 = January
  if (month >= 2 && month <= 4) return "spring"; // Mar–May
  if (month >= 5 && month <= 7) return "summer"; // Jun–Aug
  if (month >= 8 && month <= 10) return "autumn"; // Sep–Nov
  return "winter"; // Dec–Feb
}
