import { images, type SiteImage } from "@/lib/images";

export type Faq = { question: string; answer: string };

export type Programme = {
  slug: string;
  title: string;
  ages: string;
  tagline: string;
  summary: string;
  seoDescription: string;
  image: SiteImage;
  intro: string[];
  highlights: string[];
  includes: string[];
  sessionPlan: { time: string; title: string; text: string }[];
  schedule: { group: string; day: string; time: string; venue: string }[];
  pricing: { label: string; price: string; note: string; featured?: boolean }[];
  gallery: SiteImage[];
  faqs: Faq[];
};

export const programmes: Programme[] = [
  {
    slug: "weekly-training",
    title: "Weekly Training",
    ages: "Ages 4–16",
    tagline: "Structured term-time coaching that builds skill, confidence and a love of the game.",
    summary: "Age-grouped sessions every week during term time, following a clear technical curriculum with small coach-to-player ratios.",
    seoDescription: "Weekly youth football training in Manchester for ages 4–16. FA-qualified coaches, small groups, termly progress reports. Book a free trial session.",
    image: images.weeklyTrainingCoachHuddle,
    intro: [
      "Our weekly programme is the heart of the academy. Players train in their age group with the same coaches each week, so relationships build and progress is tracked properly.",
      "Every block of six weeks focuses on a theme — from ball mastery and 1v1 skills to passing, receiving and game understanding — before finishing with small-sided games where players put it into practice."
    ],
    highlights: ["Maximum 1:12 ratio", "Same coach every week", "Termly progress reports", "Free first session"],
    includes: [
      "60 or 90-minute sessions depending on age group",
      "Six-week technical themes linked to the FA Four Corner Model",
      "Termly written progress report and coach feedback",
      "Academy training top on joining",
      "Priority booking for holiday camps and tours",
      "Access to internal leagues and friendly fixtures"
    ],
    sessionPlan: [
      { time: "0–10 min", title: "Arrival & warm-up", text: "Movement preparation, coordination and ball familiarisation." },
      { time: "10–30 min", title: "Technical block", text: "The week’s theme, broken into progressive, repeatable practices." },
      { time: "30–50 min", title: "Opposed practice", text: "The same skill under pressure in 1v1, 2v1 and small-group games." },
      { time: "50–60 min", title: "Game time", text: "Small-sided matches with coach questioning and positive feedback." }
    ],
    schedule: [
      { group: "Mini Kickers (4–6)", day: "Saturday", time: "9:00am – 10:00am", venue: "Parkside Sports Centre" },
      { group: "Foundation (7–9)", day: "Monday & Saturday", time: "5:00pm – 6:00pm / 10:15am – 11:15am", venue: "Parkside Sports Centre" },
      { group: "Development (10–12)", day: "Tuesday & Thursday", time: "5:30pm – 7:00pm", venue: "Parkside Sports Centre" },
      { group: "Youth (13–16)", day: "Wednesday", time: "6:00pm – 7:30pm", venue: "Parkside Sports Centre" }
    ],
    pricing: [
      { label: "Pay monthly", price: "£36 / month", note: "One session per week, rolling monthly, cancel any time", featured: true },
      { label: "Two sessions a week", price: "£64 / month", note: "Available for Foundation and Development groups" },
      { label: "Sibling discount", price: "10% off", note: "Applied automatically for each additional child" }
    ],
    gallery: [images.firstTouchBallMastery, images.matchBallsReady, images.youngPlayerSmilingWithBall],
    faqs: [
      { question: "Can my child try a session before signing up?", answer: "Yes. The first session is completely free with no obligation. Book online and we will confirm the group and time that suits your child." },
      { question: "What happens if we miss a session?", answer: "Let us know in advance and you can make it up in another session for the same age group within the same month, subject to space." },
      { question: "Do sessions run during school holidays?", answer: "Weekly training follows the school term. During holidays we run our separate Holiday Camps instead." }
    ]
  },
  {
    slug: "holiday-camps",
    title: "Holiday Camps",
    ages: "Ages 5–14",
    tagline: "Action-packed football days every half-term, Easter, summer and Christmas holiday.",
    summary: "Full and half-day camps with skills, tournaments and themed challenges — run by the same qualified coaches as our weekly sessions.",
    seoDescription: "Football holiday camps in Manchester for ages 5–14. Half-term, Easter, summer and Christmas camps with early drop-off and late pick-up. Book online.",
    image: images.pitchTrainingSession,
    intro: [
      "Our holiday camps give children a safe, active and fun week with friends old and new. Each day blends skills coaching, team challenges and a World Cup-style tournament.",
      "Camps are open to all abilities. Players are grouped by age and experience, so beginners are supported and more experienced players are properly challenged."
    ],
    highlights: ["9am – 3pm daily", "Early drop-off 8:15am", "Late pick-up until 4:30pm", "Book single days or the full week"],
    includes: [
      "Daily skills sessions and small-sided tournaments",
      "Themed days: World Cup, Skills Challenge, Goalkeeper Day",
      "Awards for effort, teamwork and Player of the Camp",
      "Indoor facilities available if the weather turns",
      "Qualified first aider on site at all times",
      "Camp certificate for every player"
    ],
    sessionPlan: [
      { time: "9:00am", title: "Welcome & warm-up", text: "Registration, group games and the day’s challenge." },
      { time: "10:00am", title: "Skills stations", text: "Rotating stations: dribbling, finishing, passing and speed." },
      { time: "12:00pm", title: "Lunch break", text: "Supervised packed lunch and chill-out time." },
      { time: "1:00pm", title: "Camp tournament", text: "Team competition with fair play points and daily awards." }
    ],
    schedule: [
      { group: "October Half-Term", day: "Mon 26 – Fri 30 Oct 2026", time: "9:00am – 3:00pm", venue: "Parkside Sports Centre" },
      { group: "Christmas Skills Camp", day: "Mon 21 – Wed 23 Dec 2026", time: "9:00am – 3:00pm", venue: "St Anne's Academy (indoor)" },
      { group: "February Half-Term", day: "Mon 15 – Fri 19 Feb 2027", time: "9:00am – 3:00pm", venue: "Parkside Sports Centre" },
      { group: "Easter Camp", day: "Tue 30 Mar – Fri 2 Apr 2027", time: "9:00am – 3:00pm", venue: "Parkside Sports Centre" }
    ],
    pricing: [
      { label: "Single day", price: "£28 / day", note: "Book as many individual days as you need" },
      { label: "Full week", price: "£120 / week", note: "Best value — five days for the price of four and a bit", featured: true },
      { label: "Extended hours", price: "£5 / session", note: "Early drop-off from 8:15am or late pick-up until 4:30pm" }
    ],
    gallery: [images.keepyUpInThePark, images.matchBallsReady, images.youngPlayerSmilingWithBall],
    faqs: [
      { question: "What does my child need to bring?", answer: "Comfortable sports kit, football boots and trainers, shin pads, a named water bottle, sun cream or a warm layer depending on the weather, and a packed lunch." },
      { question: "Can I use Tax-Free Childcare?", answer: "Yes. Our camps are eligible for Tax-Free Childcare and many workplace childcare voucher schemes. Contact us for our registration details." },
      { question: "Is my child too inexperienced for a camp?", answer: "Not at all. Camps are for all abilities, and players are grouped so everyone is comfortable and challenged at the right level." }
    ]
  },
  {
    slug: "schools-programme",
    title: "Schools Programme",
    ages: "Primary & secondary",
    tagline: "High-quality PE, after-school clubs and PPA cover delivered by qualified coaches.",
    summary: "Curriculum PE support, lunchtime and after-school football clubs, and inter-school festivals for primary and secondary schools.",
    seoDescription: "Football coaching for schools: curriculum PE, PPA cover, after-school clubs and festivals. DBS-checked FA-qualified coaches. Funded through the PE and Sport Premium.",
    image: images.schoolsProgrammeGirlsMatch,
    intro: [
      "We partner with primary and secondary schools to deliver consistent, inclusive football and PE that supports the National Curriculum and raises activity levels.",
      "Our coaches plan each unit with class teachers, assess progress against clear outcomes and share reports that support your PE and Sport Premium reporting."
    ],
    highlights: ["Curriculum-linked planning", "PPA cover available", "Girls’ football focus", "PE & Sport Premium reporting"],
    includes: [
      "Curriculum PE units for KS1, KS2 and KS3",
      "PPA cover delivered by the same coach each week",
      "Lunchtime and after-school football clubs",
      "Girls-only clubs to grow participation",
      "Inter-school festivals and tournaments",
      "Termly impact report for governors and Ofsted"
    ],
    sessionPlan: [
      { time: "Plan", title: "Unit planning", text: "We agree outcomes with your PE lead and share lesson plans in advance." },
      { time: "Deliver", title: "Weekly lessons", text: "Inclusive, active lessons with high participation and clear progressions." },
      { time: "Assess", title: "Pupil progress", text: "Simple assessment against unit objectives for every pupil." },
      { time: "Report", title: "Impact report", text: "Evidence for PE and Sport Premium spend and school development plans." }
    ],
    schedule: [
      { group: "Curriculum PE / PPA", day: "Monday – Friday", time: "School hours", venue: "At your school" },
      { group: "Lunchtime clubs", day: "Monday – Friday", time: "12:00pm – 1:00pm", venue: "At your school" },
      { group: "After-school clubs", day: "Monday – Friday", time: "3:15pm – 4:30pm", venue: "At your school" }
    ],
    pricing: [
      { label: "PPA cover", price: "From £38 / hour", note: "Includes planning, delivery and assessment", featured: true },
      { label: "After-school club", price: "From £5 / pupil", note: "Parent-paid or school-funded options" },
      { label: "Festival days", price: "Quote on request", note: "Tailored inter-school events and tournaments" }
    ],
    gallery: [images.girlsFootballDribbling, images.girlsGoalkeeperSave, images.playerReadyOnPitch],
    faqs: [
      { question: "Are your coaches DBS checked?", answer: "Yes. Every coach holds an enhanced DBS check, safeguarding training and first-aid certification. Copies are provided to your school business manager." },
      { question: "Can you work with our PE and Sport Premium?", answer: "Yes. Many schools fund our work through the PE and Sport Premium. We provide the reporting you need to evidence impact." }
    ]
  },
  {
    slug: "one-to-one-coaching",
    title: "1-to-1 Coaching",
    ages: "Ages 6–18",
    tagline: "Individual coaching built around your player’s position, goals and next step.",
    summary: "Personalised sessions focused on technique, finishing, speed and decision-making, with optional video analysis.",
    seoDescription: "1-to-1 football coaching in Manchester for ages 6–18. Personal technical sessions, small-group options and video analysis with UEFA-licensed coaches.",
    image: images.oneToOneShootingTechnique,
    intro: [
      "One-to-one coaching gives players the repetitions and detailed feedback that are hard to get in a team environment. Sessions start with an assessment and a clear plan.",
      "Whether your child wants to strengthen their weaker foot, prepare for a trial or return confidently from injury, every session is designed around them."
    ],
    highlights: ["Initial assessment", "Position-specific work", "Video analysis option", "Flexible times"],
    includes: [
      "60-minute sessions with a UEFA or FA Level 2+ coach",
      "Initial assessment and written development plan",
      "Position-specific technical and decision-making work",
      "Optional video analysis and clip review",
      "Small-group sessions for 2–3 players",
      "Trial preparation blocks for older players"
    ],
    sessionPlan: [
      { time: "0–10 min", title: "Activation", text: "Movement preparation and ball warm-up targeted to the session focus." },
      { time: "10–35 min", title: "Technical focus", text: "High-repetition technique with detailed, individual feedback." },
      { time: "35–50 min", title: "Game-realistic work", text: "Decision-making under pressure: scanning, timing and choosing the right option." },
      { time: "50–60 min", title: "Review", text: "What went well, what to work on at home, and targets for next time." }
    ],
    schedule: [
      { group: "Weekday evenings", day: "Monday – Friday", time: "4:00pm – 8:00pm", venue: "Parkside Sports Centre" },
      { group: "Weekend mornings", day: "Saturday & Sunday", time: "8:00am – 12:00pm", venue: "Parkside Sports Centre" }
    ],
    pricing: [
      { label: "Single session", price: "£45", note: "60 minutes, including session notes" },
      { label: "Block of five", price: "£200", note: "Includes assessment and development plan", featured: true },
      { label: "Small group (2–3)", price: "£30 per player", note: "Train with a friend or teammate" }
    ],
    gallery: [images.firstTouchBallMastery, images.finishingPracticeMotion, images.bootOnBallCloseup],
    faqs: [
      { question: "Does my child need to be at a certain level?", answer: "No. One-to-one coaching works for all levels — from building confidence as a beginner to preparing for professional trials." },
      { question: "Can a parent watch?", answer: "Yes, parents are welcome to watch from the side of the pitch and we encourage you to join the review at the end." }
    ]
  },
  {
    slug: "elite-performance",
    title: "Elite Performance",
    ages: "Ages 11–18",
    tagline: "An invitation-only pathway for ambitious players aiming for the next level.",
    summary: "Three sessions a week, competitive fixtures, strength and conditioning, and analysis — with links to professional club scouts and scholarships.",
    seoDescription: "Elite youth football performance squads for ages 11–18. Three sessions per week, fixtures, S&C, video analysis and pathways to professional trials and scholarships.",
    image: images.elitePerformanceNightDrills,
    intro: [
      "Our performance squads bring together committed players who want to train in a demanding, professional environment. Entry is by assessment and places are limited.",
      "Players follow an individual development plan reviewed every six weeks, compete in regular fixtures and tournaments, and receive support with trials, scholarships and education."
    ],
    highlights: ["3 sessions per week", "Competitive fixtures", "S&C and analysis", "Scouting & scholarship links"],
    includes: [
      "Two technical/tactical sessions and one strength & conditioning session weekly",
      "Regular fixtures against academy and elite grassroots opposition",
      "Individual development plans reviewed every six weeks",
      "Match video analysis and one-to-one reviews",
      "Mental performance workshops: focus, confidence and resilience",
      "Support with professional trials, US scholarships and tours"
    ],
    sessionPlan: [
      { time: "Monday", title: "Technical & tactical", text: "Position-specific units, pressing, build-up play and transitions." },
      { time: "Wednesday", title: "Strength & conditioning", text: "Speed, agility, strength and injury-prevention with a qualified S&C coach." },
      { time: "Friday", title: "Game preparation", text: "Opposition-specific shape, set pieces and high-intensity small-sided games." },
      { time: "Weekend", title: "Fixture or showcase", text: "Competitive matches, filmed and reviewed with players the following week." }
    ],
    schedule: [
      { group: "U12 – U14 squads", day: "Mon, Wed & Fri", time: "5:30pm – 7:00pm", venue: "Parkside Sports Centre" },
      { group: "U15 – U18 squads", day: "Mon, Wed & Fri", time: "7:00pm – 8:30pm", venue: "Parkside Sports Centre" },
      { group: "Fixtures", day: "Saturday", time: "Varies", venue: "Riverside Community Stadium & away" }
    ],
    pricing: [
      { label: "Performance membership", price: "£95 / month", note: "All training, fixtures, analysis and reviews", featured: true },
      { label: "Kit package", price: "£65 one-off", note: "Training kit, match kit and bag" },
      { label: "Assessment", price: "Free", note: "Assessment sessions held each term" }
    ],
    gallery: [images.floodlitEveningTraining, images.closeControlDuel, images.teamLineUpArmsLinked],
    faqs: [
      { question: "How do players join a performance squad?", answer: "Players are invited following an assessment. Book a free trial and mention the performance programme, or ask your weekly coach to recommend your child." },
      { question: "Can my child also play for their grassroots club?", answer: "Yes. We work around grassroots commitments and actively support players playing regular football for their Sunday league team." }
    ]
  },
  {
    slug: "goalkeeper-training",
    title: "Goalkeeper Training",
    ages: "Ages 7–18",
    tagline: "Specialist coaching for the most demanding position on the pitch.",
    summary: "Focused sessions on handling, footwork, diving, distribution and positioning, taught by a specialist goalkeeping coach.",
    seoDescription: "Specialist goalkeeper training in Manchester for ages 7–18. Handling, diving, distribution and positioning with a qualified goalkeeping coach.",
    image: images.goalkeeperDivingSave,
    intro: [
      "Goalkeepers need specialist coaching. Our sessions are built entirely around the position, with small groups so every keeper gets plenty of work.",
      "Keepers develop the technical basics, then learn to organise their defence, deal with crosses and start attacks with confident distribution."
    ],
    highlights: ["Specialist GK coach", "Groups of up to six", "Handling & diving", "Distribution & positioning"],
    includes: [
      "Weekly 75-minute goalkeeper-only session",
      "Handling, footwork, diving and recovery technique",
      "Crosses, 1v1 situations and shot-stopping",
      "Distribution with hands and feet",
      "Communication and organising a back line",
      "Termly goalkeeper progress review"
    ],
    sessionPlan: [
      { time: "0–15 min", title: "Footwork & handling", text: "Set position, footwork patterns and clean handling." },
      { time: "15–40 min", title: "Technical focus", text: "Diving, crosses or 1v1s depending on the six-week theme." },
      { time: "40–60 min", title: "Distribution", text: "Throws, goal kicks and playing out under pressure." },
      { time: "60–75 min", title: "Live shot-stopping", text: "Game-realistic finishing with outfield players." }
    ],
    schedule: [
      { group: "Junior keepers (7–11)", day: "Thursday", time: "5:00pm – 6:15pm", venue: "Parkside Sports Centre" },
      { group: "Senior keepers (12–18)", day: "Thursday", time: "6:30pm – 7:45pm", venue: "Parkside Sports Centre" }
    ],
    pricing: [
      { label: "Monthly", price: "£40 / month", note: "One 75-minute session per week", featured: true },
      { label: "Drop-in", price: "£12 / session", note: "Subject to availability" }
    ],
    gallery: [images.goalkeepingCoachHandling, images.goalkeeperDistribution, images.girlsGoalkeeperSave],
    faqs: [
      { question: "Does my child need goalkeeper gloves?", answer: "Yes, a pair of properly fitting goalkeeper gloves is essential. Padded goalkeeper tops and trousers are recommended, especially on artificial surfaces." }
    ]
  }
];

export function getProgramme(slug: string) {
  return programmes.find((programme) => programme.slug === slug);
}
