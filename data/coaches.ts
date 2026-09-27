import { images, type SiteImage } from "@/lib/images";

export type Coach = {
  name: string;
  role: string;
  qualifications: string[];
  bio: string;
  specialism: string;
  /** Photo of the coach's specialist session — replace with a real headshot when available. */
  image: SiteImage;
};

export const coaches: Coach[] = [
  {
    name: "James Wilson",
    role: "Head of Coaching",
    qualifications: ["UEFA A Licence", "FA Youth Module 3"],
    specialism: "Performance squads",
    bio: "Former semi-professional midfielder with 15 years in youth development. James leads our coaching curriculum and the elite performance pathway.",
    image: images.headCoachTouchline
  },
  {
    name: "Marie Sanchez",
    role: "Technical Director",
    qualifications: ["UEFA B Licence", "FA Talent Identification"],
    specialism: "Curriculum & girls’ football",
    bio: "Marie designs our age-specific development programme and player reviews, and leads our growing girls’ football section.",
    image: images.girlsFootballDribbling
  },
  {
    name: "David Lee",
    role: "Goalkeeping Coach",
    qualifications: ["FA Goalkeeping Level 2", "UEFA C Licence"],
    specialism: "Goalkeeper training",
    bio: "A specialist in handling, positioning and distribution, David coaches keepers from their very first session through to performance level.",
    image: images.goalkeepingCoachHandling
  },
  {
    name: "Tom Gallagher",
    role: "Foundation Phase Lead",
    qualifications: ["FA Level 2", "FA Introduction to Futsal"],
    specialism: "Ages 4–9 & holiday camps",
    bio: "Tom runs our Mini Kickers and Foundation groups, creating energetic, playful sessions where young children fall in love with the ball.",
    image: images.foundationCoachSession
  }
];

export const coachingStandards = [
  "Enhanced DBS check, renewed every three years",
  "FA Safeguarding Children certificate",
  "Emergency first aid, including concussion awareness",
  "Minimum FA Level 1 — lead coaches Level 2 / UEFA B or above",
  "Termly internal CPD and session observations"
];
