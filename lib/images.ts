import type { StaticImageData } from "next/image";

import youthMatchAction from "@/assets/images/hero/youth-match-action.webp";
import floodlitEveningTraining from "@/assets/images/hero/floodlit-evening-training.webp";
import floodlitTeamHuddle from "@/assets/images/hero/floodlit-team-huddle.webp";

import weeklyTrainingCoachHuddle from "@/assets/images/programmes/weekly-training-coach-huddle.webp";
import schoolsProgrammeGirlsMatch from "@/assets/images/programmes/schools-programme-girls-match.webp";
import oneToOneShootingTechnique from "@/assets/images/programmes/one-to-one-shooting-technique.webp";
import elitePerformanceNightDrills from "@/assets/images/programmes/elite-performance-night-drills.webp";
import goalkeeperDivingSave from "@/assets/images/programmes/goalkeeper-diving-save.webp";
import girlsFootballDribbling from "@/assets/images/programmes/girls-football-dribbling.webp";

import closeControlDuel from "@/assets/images/development/close-control-duel.webp";
import firstTouchBallMastery from "@/assets/images/development/first-touch-ball-mastery.webp";
import youthPlayerStrikingBall from "@/assets/images/development/youth-player-striking-ball.webp";
import trainingConeAndBall from "@/assets/images/development/training-cone-and-ball.webp";
import pitchTrainingSession from "@/assets/images/development/pitch-training-session.webp";
import matchdayBootsAndSocks from "@/assets/images/development/matchday-boots-and-socks.webp";

import headCoachTouchline from "@/assets/images/coaches/head-coach-touchline.webp";
import goalkeepingCoachHandling from "@/assets/images/coaches/goalkeeping-coach-handling.webp";
import foundationCoachSession from "@/assets/images/coaches/foundation-coach-session.webp";

import teamLineUpArmsLinked from "@/assets/images/gallery/team-line-up-arms-linked.webp";
import finishingPracticeMotion from "@/assets/images/gallery/finishing-practice-motion.webp";
import girlsGoalkeeperSave from "@/assets/images/gallery/girls-goalkeeper-save.webp";
import playerReadyOnPitch from "@/assets/images/gallery/player-ready-on-pitch.webp";
import youngPlayerSmilingWithBall from "@/assets/images/gallery/young-player-smiling-with-ball.webp";
import keepyUpInThePark from "@/assets/images/gallery/keepy-up-in-the-park.webp";
import goalkeeperDistribution from "@/assets/images/gallery/goalkeeper-distribution.webp";
import ballAtFeetOnGrass from "@/assets/images/gallery/ball-at-feet-on-grass.webp";
import matchBallsReady from "@/assets/images/gallery/match-balls-ready.webp";
import bootsAndMatchBall from "@/assets/images/gallery/boots-and-match-ball.webp";
import bootOnBallCloseup from "@/assets/images/gallery/boot-on-ball-closeup.webp";

export type SiteImage = {
  src: StaticImageData;
  alt: string;
  /** CSS object-position, used when the subject is not centred */
  position?: string;
};

/** Central registry so every photo has one meaningful alt text. */
export const images = {
  youthMatchAction: { src: youthMatchAction, alt: "Two youth players competing for the ball during a sunny academy match", position: "60% 40%" },
  floodlitEveningTraining: { src: floodlitEveningTraining, alt: "Players training under floodlights on an evening pitch" },
  floodlitTeamHuddle: { src: floodlitTeamHuddle, alt: "Team huddle on a floodlit pitch at dusk" },

  weeklyTrainingCoachHuddle: { src: weeklyTrainingCoachHuddle, alt: "Coach giving instructions to a group of young players in red kits", position: "50% 35%" },
  schoolsProgrammeGirlsMatch: { src: schoolsProgrammeGirlsMatch, alt: "Two girls challenging for the ball in front of goal during a schools fixture" },
  oneToOneShootingTechnique: { src: oneToOneShootingTechnique, alt: "Player striking a volley during a one-to-one technique session", position: "50% 40%" },
  elitePerformanceNightDrills: { src: elitePerformanceNightDrills, alt: "Performance squad player dribbling through cones under floodlights" },
  goalkeeperDivingSave: { src: goalkeeperDivingSave, alt: "Goalkeeper diving full stretch to make a save" },
  girlsFootballDribbling: { src: girlsFootballDribbling, alt: "Girl in a sky-blue kit dribbling the ball on an artificial pitch" },

  closeControlDuel: { src: closeControlDuel, alt: "Close-up of two players battling for the ball" },
  firstTouchBallMastery: { src: firstTouchBallMastery, alt: "Player controlling the ball with the sole of the boot" },
  youthPlayerStrikingBall: { src: youthPlayerStrikingBall, alt: "Youth player in number 16 shirt celebrating after striking the ball", position: "50% 30%" },
  trainingConeAndBall: { src: trainingConeAndBall, alt: "Training cone and match ball on a grass pitch" },
  pitchTrainingSession: { src: pitchTrainingSession, alt: "Squad working through a passing drill with cones on a full-size pitch" },
  matchdayBootsAndSocks: { src: matchdayBootsAndSocks, alt: "Player in blue socks and pink boots standing on the touchline" },

  headCoachTouchline: { src: headCoachTouchline, alt: "Coach watching a session from the touchline" },
  goalkeepingCoachHandling: { src: goalkeepingCoachHandling, alt: "Goalkeeper catching a high ball during a handling drill", position: "50% 25%" },
  foundationCoachSession: { src: foundationCoachSession, alt: "Coach demonstrating a pass on a sunny grass pitch" },

  teamLineUpArmsLinked: { src: teamLineUpArmsLinked, alt: "Youth team lined up with arms linked before kick-off" },
  finishingPracticeMotion: { src: finishingPracticeMotion, alt: "Striker shooting at goal during finishing practice" },
  girlsGoalkeeperSave: { src: girlsGoalkeeperSave, alt: "Girls' goalkeeper diving to stop a shot during a match" },
  playerReadyOnPitch: { src: playerReadyOnPitch, alt: "Player in a red and white number 21 shirt waiting for kick-off" },
  youngPlayerSmilingWithBall: { src: youngPlayerSmilingWithBall, alt: "Young boy smiling while holding a football", position: "50% 80%" },
  keepyUpInThePark: { src: keepyUpInThePark, alt: "Player practising ball juggling on a park pitch" },
  goalkeeperDistribution: { src: goalkeeperDistribution, alt: "Goalkeeper kicking the ball upfield" },
  ballAtFeetOnGrass: { src: ballAtFeetOnGrass, alt: "Match ball at a player's feet on a freshly cut pitch" },
  matchBallsReady: { src: matchBallsReady, alt: "Group of training balls ready for a session" },
  bootsAndMatchBall: { src: bootsAndMatchBall, alt: "Football boots resting against a match ball on grass" },
  bootOnBallCloseup: { src: bootOnBallCloseup, alt: "Close-up of a boot resting on top of a football" }
} satisfies Record<string, SiteImage>;
