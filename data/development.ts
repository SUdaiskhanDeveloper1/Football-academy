import { Brain, ClipboardList, Dumbbell, Footprints, LineChart, MessagesSquare, ShieldCheck, Users, Video } from "lucide-react";
import type { Feature } from "@/data/site";
import { images, type SiteImage } from "@/lib/images";

/** The FA Four Corner Model, which underpins our curriculum. */
export const fourCorners: Feature[] = [
  { title: "Technical & tactical", text: "Ball mastery, passing, receiving, finishing and understanding when and why to use each skill.", icon: Footprints },
  { title: "Physical", text: "Agility, balance, coordination, speed and — for older players — strength, conditioning and injury prevention.", icon: Dumbbell },
  { title: "Psychological", text: "Confidence, focus, resilience and the ability to learn from mistakes and perform under pressure.", icon: Brain },
  { title: "Social", text: "Communication, teamwork, leadership and respect for teammates, opponents and officials.", icon: Users }
];

export type PathwayStage = { stage: string; ages: string; focus: string; points: string[]; image: SiteImage };

export const pathwayStages: PathwayStage[] = [
  {
    stage: "Foundation",
    ages: "Ages 4–8",
    focus: "Fall in love with the ball",
    points: ["Fundamental movement skills", "Lots of touches in fun games", "1v1 confidence"],
    image: images.youngPlayerSmilingWithBall
  },
  {
    stage: "Development",
    ages: "Ages 9–12",
    focus: "Master the technique",
    points: ["Passing, receiving and turning", "Using both feet", "Small-sided game understanding"],
    image: images.weeklyTrainingCoachHuddle
  },
  {
    stage: "Youth",
    ages: "Ages 13–16",
    focus: "Understand the game",
    points: ["Positional roles and units", "Decision-making at speed", "Athletic development"],
    image: images.youthMatchAction
  },
  {
    stage: "Performance",
    ages: "Ages 16–18",
    focus: "Prepare for the next level",
    points: ["Professional training habits", "Match analysis", "Trials, scholarships & careers"],
    image: images.elitePerformanceNightDrills
  }
];

export const progressTools: Feature[] = [
  { title: "Individual development plans", text: "Three personal targets per block, agreed between player and coach.", icon: ClipboardList },
  { title: "Termly progress reports", text: "Clear written feedback for parents across all four corners.", icon: LineChart },
  { title: "Video analysis", text: "Clip reviews for 1-to-1 and performance players to speed up learning.", icon: Video },
  { title: "Parent check-ins", text: "Termly conversations with your child’s coach about progress and next steps.", icon: MessagesSquare }
];

export const specialistSupport: Feature[] = [
  { title: "Goalkeeper training", text: "Specialist coaching for reflexes, positioning, handling and distribution.", icon: ShieldCheck },
  { title: "Fitness & conditioning", text: "Speed, agility, strength and injury-prevention habits for older players.", icon: Dumbbell },
  { title: "Mental performance", text: "Focus, confidence, resilience and leadership workshops.", icon: Brain }
];
