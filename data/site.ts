import { Award, HeartHandshake, ShieldCheck, Sparkles, Target, Trophy, Users, BadgeCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Core business details. Contact details below are placeholders
 * (the phone number uses Ofcom's reserved drama range) — replace before launch.
 */
export const siteConfig = {
  name: "FootballCoin Academy",
  shortName: "FootballCoin",
  tagline: "Developing talent. Creating opportunities.",
  description:
    "FootballCoin Academy is a UK youth football academy offering weekly training, holiday camps, schools coaching, 1-to-1 sessions and an elite performance pathway for players aged 4–18.",
  url: "https://www.footballcoinacademy.co.uk",
  phone: "0161 496 0123",
  phoneHref: "tel:+441614960123",
  email: "hello@footballcoinacademy.co.uk",
  address: {
    street: "Parkside Sports Centre, Parkside Road",
    locality: "Manchester",
    region: "Greater Manchester",
    postcode: "M14 5RX",
    country: "GB"
  },
  officeHours: [
    { days: "Monday – Friday", hours: "9:00am – 7:30pm" },
    { days: "Saturday", hours: "8:30am – 1:00pm" },
    { days: "Sunday", hours: "Closed" }
  ],
  socials: {
    instagram: { handle: "@footballcoin_academy", href: "https://www.instagram.com/footballcoin_academy" },
    facebook: { handle: "FootballCoin Academy", href: "https://www.facebook.com/footballcoinacademy" },
    youtube: { handle: "FootballCoin Academy", href: "https://www.youtube.com/@footballcoinacademy" }
  },
  trialCta: { label: "Book a Free Trial", href: "/contact#book-a-trial" }
} as const;

export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = { label: string; href: string; children?: NavLink[] };

export const mainNav: NavGroup[] = [
  { label: "About", href: "/about" },
  {
    label: "Programmes",
    href: "/programmes",
    children: [
      { label: "Weekly Training", href: "/programmes/weekly-training", description: "Term-time sessions, ages 4–16" },
      { label: "Holiday Camps", href: "/programmes/holiday-camps", description: "Half-term, Easter & summer" },
      { label: "Schools Programme", href: "/programmes/schools-programme", description: "PE, clubs & PPA cover" },
      { label: "1-to-1 Coaching", href: "/programmes/one-to-one-coaching", description: "Individual & small group" },
      { label: "Elite Performance", href: "/programmes/elite-performance", description: "Invitation squads, ages 11–18" },
      { label: "Goalkeeper Training", href: "/programmes/goalkeeper-training", description: "Specialist GK coaching" },
      { label: "All programmes", href: "/programmes" }
    ]
  },
  { label: "Player Development", href: "/player-development" },
  { label: "Coaches", href: "/coaches" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  {
    label: "Parents",
    href: "/faq",
    children: [
      { label: "Testimonials", href: "/testimonials", description: "What families say about us" },
      { label: "FAQs", href: "/faq", description: "Trials, kit, payments & more" },
      { label: "Safeguarding", href: "/safeguarding", description: "How we keep players safe" }
    ]
  },
  { label: "Contact", href: "/contact" }
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Programmes",
    links: [
      { label: "Weekly Training", href: "/programmes/weekly-training" },
      { label: "Holiday Camps", href: "/programmes/holiday-camps" },
      { label: "Schools Programme", href: "/programmes/schools-programme" },
      { label: "1-to-1 Coaching", href: "/programmes/one-to-one-coaching" },
      { label: "Elite Performance", href: "/programmes/elite-performance" },
      { label: "Goalkeeper Training", href: "/programmes/goalkeeper-training" }
    ]
  },
  {
    title: "Academy",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Player Development", href: "/player-development" },
      { label: "Our Coaches", href: "/coaches" },
      { label: "Gallery", href: "/gallery" },
      { label: "News", href: "/news" }
    ]
  },
  {
    title: "Parents",
    links: [
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQs", href: "/faq" },
      { label: "Safeguarding", href: "/safeguarding" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Contact Us", href: "/contact" }
    ]
  }
];

export type Stat = { value: string; label: string };

export const impactStats: Stat[] = [
  { value: "15+", label: "Years of coaching" },
  { value: "500+", label: "Players developed" },
  { value: "25+", label: "Partner clubs & schools" },
  { value: "10+", label: "Countries reached on tour" }
];

export const heroStats: Stat[] = [
  { value: "4–18", label: "Age groups" },
  { value: "40+", label: "Sessions every week" },
  { value: "UEFA", label: "Licensed coaches" }
];

export type Feature = { title: string; text: string; icon: LucideIcon };

export const trustPoints: Feature[] = [
  { title: "FA & UEFA qualified", text: "Every lead coach holds a recognised coaching licence", icon: Award },
  { title: "Enhanced DBS checked", text: "All staff vetted and safeguarding trained", icon: ShieldCheck },
  { title: "First-aid trained", text: "Emergency first aid qualified coaches on site", icon: HeartHandshake },
  { title: "Small ratios", text: "Maximum 1:12 coach-to-player ratio", icon: Users }
];

export const values: Feature[] = [
  { title: "Player first", text: "Every decision starts with what helps the individual player grow — on and off the pitch.", icon: Target },
  { title: "Enjoyment", text: "Young players who love the game keep playing. Sessions are challenging, active and fun.", icon: Sparkles },
  { title: "High standards", text: "Punctuality, effort and respect are non-negotiable, for players and coaches alike.", icon: BadgeCheck },
  { title: "Opportunity", text: "Pathways to grassroots clubs, professional trials, scholarships and tours for those ready.", icon: Trophy }
];

export const whyChooseUs: string[] = [
  "UEFA and FA licensed coaching team",
  "Individual development plans for every player",
  "Termly progress reports for parents",
  "International tournaments and tours",
  "Education and career support for older players",
  "Strength, conditioning and injury-prevention work"
];

export type AcademyEvent = {
  title: string;
  date: string;
  isoDate: string;
  time: string;
  venue: string;
  category: "Trial" | "Camp" | "Fixture" | "Event";
  href: string;
};

export const upcomingEvents: AcademyEvent[] = [
  { title: "Free Trial Evening — all age groups", date: "Tue 6 Oct 2026", isoDate: "2026-10-06", time: "5:00pm – 6:30pm", venue: "Parkside Sports Centre", category: "Trial", href: "/contact#book-a-trial" },
  { title: "FootballCoin U16 v Brighton Mariners U16", date: "Sat 10 Oct 2026", isoDate: "2026-10-10", time: "12:00pm KO", venue: "Riverside Community Stadium", category: "Fixture", href: "/programmes/elite-performance" },
  { title: "October Half-Term Camp", date: "26 – 30 Oct 2026", isoDate: "2026-10-26", time: "9:00am – 3:00pm", venue: "Parkside Sports Centre", category: "Camp", href: "/programmes/holiday-camps" },
  { title: "Christmas Skills Camp", date: "21 – 23 Dec 2026", isoDate: "2026-12-21", time: "9:00am – 3:00pm", venue: "St Anne's Academy (indoor)", category: "Camp", href: "/programmes/holiday-camps" }
];

export const venues = [
  { name: "Parkside Sports Centre", detail: "Floodlit 3G pitches, changing rooms and parent viewing area", address: "Parkside Road, Manchester M14 5RX" },
  { name: "St Anne's Academy", detail: "Indoor sports hall and grass pitches — used for winter and camps", address: "Wilmslow Road, Manchester M20 2RS" },
  { name: "Riverside Community Stadium", detail: "Match-day venue for performance squad fixtures", address: "Riverside Way, Salford M5 4WT" }
];
