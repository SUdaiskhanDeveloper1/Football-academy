import { images, type SiteImage } from "@/lib/images";

export const galleryCategories = ["Training", "Matchday", "Goalkeeping", "Girls’ football", "Kit & equipment"] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = { image: SiteImage; category: GalleryCategory; caption: string };

export const galleryItems: GalleryItem[] = [
  { image: images.weeklyTrainingCoachHuddle, category: "Training", caption: "Foundation group team talk" },
  { image: images.youthMatchAction, category: "Matchday", caption: "U16s in action on a Saturday fixture" },
  { image: images.girlsFootballDribbling, category: "Girls’ football", caption: "Girls’ Friday session" },
  { image: images.goalkeeperDivingSave, category: "Goalkeeping", caption: "Full-stretch save" },
  { image: images.elitePerformanceNightDrills, category: "Training", caption: "Performance squad speed work" },
  { image: images.teamLineUpArmsLinked, category: "Matchday", caption: "Line-up before kick-off" },
  { image: images.schoolsProgrammeGirlsMatch, category: "Girls’ football", caption: "Schools festival final" },
  { image: images.goalkeepingCoachHandling, category: "Goalkeeping", caption: "Handling drills" },
  { image: images.pitchTrainingSession, category: "Training", caption: "Passing patterns" },
  { image: images.finishingPracticeMotion, category: "Training", caption: "Finishing practice" },
  { image: images.girlsGoalkeeperSave, category: "Girls’ football", caption: "Match-day heroics" },
  { image: images.closeControlDuel, category: "Matchday", caption: "Winning the duel" },
  { image: images.goalkeeperDistribution, category: "Goalkeeping", caption: "Distribution from the keeper" },
  { image: images.oneToOneShootingTechnique, category: "Training", caption: "1-to-1 volley technique" },
  { image: images.playerReadyOnPitch, category: "Matchday", caption: "Ready for kick-off" },
  { image: images.youngPlayerSmilingWithBall, category: "Training", caption: "Mini Kickers smiles" },
  { image: images.bootsAndMatchBall, category: "Kit & equipment", caption: "Match-day ready" },
  { image: images.matchBallsReady, category: "Kit & equipment", caption: "Session set-up" },
  { image: images.floodlitEveningTraining, category: "Training", caption: "Floodlit winter training" },
  { image: images.bootOnBallCloseup, category: "Kit & equipment", caption: "Ball mastery" }
];
