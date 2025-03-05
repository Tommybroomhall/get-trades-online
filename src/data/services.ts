import { Palette, Search, BarChart, Smartphone, Clock } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: { text: string }[];
}

export const services: Service[] = [
  {
    icon: Palette,
    title: "Professional Design",
    description: "Looks like you spent thousands, but without the price tag. Shows your work in the best possible light so you stand out from the competition.",
    features: [
      { text: "Mobile-friendly so customers can find you on their phones" },
      { text: "Your trade colors and style - not some generic template" }
    ]
  },
  {
    icon: Search,
    title: "Local SEO That Works",
    description: "When someone searches for a builder in your area, you'll show up. No technical mumbo-jumbo - we handle everything behind the scenes.",
    features: [
      { text: "Optimized for your specific service area postcodes" },
      { text: "Google Business profile setup and optimization" }
    ]
  },
  {
    icon: Smartphone,
    title: "Made For The Van",
    description: "Update your site from the job site. Send us photos of your latest work from your phone, and we'll add them for you.",
    features: [
      { text: "No computer needed - manage everything from your phone" },
      { text: "Fast loading - even on site with poor signal" }
    ]
  },
  {
    icon: BarChart,
    title: "Competitor-Beating Strategy",
    description: "We research what works best in your specific trade across the UK. Your site isn't just pretty - it's built to convert lookers into bookers.",
    features: [
      { text: "We analyze the top-performing tradespeople in your area" },
      { text: "Focus on what makes customers choose one builder over another" },
      { text: "Highlight what makes your business special and different" }
    ]
  },
  {
    icon: Clock,
    title: "Done in days not weeks",
    description: "Your website up and running in just a few days and your kept in the loop every step of the way. No lengthy design processes or endless meetings. Just quick results.",
    features: [
      { text: "From order to live site in around 3 days (not weeks)" },
      { text: "Start getting new business right away" }
    ]
  }
]; 