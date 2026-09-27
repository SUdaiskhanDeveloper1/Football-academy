import { images, type SiteImage } from "@/lib/images";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Academy" | "Training" | "Events" | "Parents";
  date: string;
  isoDate: string;
  readTime: string;
  author: string;
  image: SiteImage;
  body: { heading?: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "rising-stars-next-generation-of-talent",
    title: "Rising Stars: The Next Generation of Football Talent",
    excerpt: "Three academy players have earned professional club trials this season. We look at the habits that set them apart.",
    category: "Academy",
    date: "18 September 2026",
    isoDate: "2026-09-18",
    readTime: "4 min read",
    author: "James Wilson",
    image: images.youthMatchAction,
    body: [
      {
        paragraphs: [
          "This season three players from our performance squads have been invited to trial with professional club academies. It is a proud moment for the players, their families and every coach who has worked with them.",
          "What stands out is not just talent. All three have shown the same habits week after week: they arrive early, ask questions, and take feedback from one session into the next."
        ]
      },
      {
        heading: "Consistency beats flashes of brilliance",
        paragraphs: [
          "Scouts tell us they look for players who perform to a high standard repeatedly. Our individual development plans are built around exactly that — small, measurable targets reviewed every six weeks.",
          "Players who treat each target seriously make steady, visible progress, and that progress is what earns opportunities."
        ]
      },
      {
        heading: "A pathway, not a promise",
        paragraphs: [
          "Not every player will become a professional, and that is not the only measure of success. Many of our graduates now play at university, in semi-professional football or coach younger players themselves. The skills they learn here — resilience, teamwork and discipline — go with them wherever they go."
        ]
      }
    ]
  },
  {
    slug: "mental-strength-the-hidden-advantage",
    title: "Mental Strength: The Hidden Advantage",
    excerpt: "Why confidence, focus and resilience are trained as deliberately as passing and shooting at FootballCoin.",
    category: "Training",
    date: "4 September 2026",
    isoDate: "2026-09-04",
    readTime: "5 min read",
    author: "Marie Sanchez",
    image: images.floodlitTeamHuddle,
    body: [
      {
        paragraphs: [
          "Two players with the same technical ability can perform very differently on match day. The difference is often how they handle pressure, mistakes and setbacks.",
          "That is why psychological development is one of the four corners of our coaching curriculum, sitting alongside technical, physical and social development."
        ]
      },
      {
        heading: "What it looks like in sessions",
        paragraphs: [
          "Coaches build challenge into practices so players get used to making mistakes and trying again. We praise effort and decision-making, not just outcomes.",
          "Older players take part in workshops on focus routines, self-talk and goal setting, and reflect on their performances in short video reviews."
        ]
      },
      {
        heading: "How parents can help",
        paragraphs: [
          "The car journey home matters. Asking “Did you enjoy it?” and “What did you learn?” instead of “Did you win?” helps young players stay motivated and keeps football fun."
        ]
      }
    ]
  },
  {
    slug: "international-tour-experience-2026",
    title: "International Tour Experience 2026",
    excerpt: "Our U14 and U16 squads travelled to Spain for a week of fixtures, training at a professional facility and memories for life.",
    category: "Events",
    date: "21 August 2026",
    isoDate: "2026-08-21",
    readTime: "3 min read",
    author: "James Wilson",
    image: images.teamLineUpArmsLinked,
    body: [
      {
        paragraphs: [
          "Thirty-two players from our U14 and U16 performance squads spent a week in Spain this summer, playing against local academy sides and training at a professional club facility.",
          "Playing against different styles of football is one of the fastest ways to learn. Our players had to adapt to a slower, more patient build-up and high technical standards."
        ]
      },
      {
        heading: "More than football",
        paragraphs: [
          "Tours also teach independence, responsibility and teamwork off the pitch. Players shared rooms, managed their own kit and supported each other through a demanding schedule.",
          "Registration for the 2027 tour opens to performance squad families in November."
        ]
      }
    ]
  },
  {
    slug: "october-half-term-camp-now-booking",
    title: "October Half-Term Camp Now Booking",
    excerpt: "Five days of skills, tournaments and themed challenges for ages 5–14. Early booking recommended — last year’s camp sold out.",
    category: "Events",
    date: "10 September 2026",
    isoDate: "2026-09-10",
    readTime: "2 min read",
    author: "Tom Gallagher",
    image: images.pitchTrainingSession,
    body: [
      {
        paragraphs: [
          "Our October half-term camp runs from Monday 26 to Friday 30 October at Parkside Sports Centre, with indoor space available if the weather turns.",
          "Each day includes skills stations, a camp tournament and awards for effort and teamwork. Themed days include World Cup Day, Skills Challenge Day and Goalkeeper Day."
        ]
      },
      {
        heading: "Booking information",
        paragraphs: [
          "Places can be booked by the day or for the full week, with early drop-off from 8:15am and late pick-up until 4:30pm. Tax-Free Childcare is accepted."
        ]
      }
    ]
  },
  {
    slug: "choosing-the-right-football-boots",
    title: "A Parent’s Guide to Choosing Football Boots",
    excerpt: "Firm ground, artificial grass or astro trainers? Our coaches explain what your child actually needs.",
    category: "Parents",
    date: "28 August 2026",
    isoDate: "2026-08-28",
    readTime: "4 min read",
    author: "Tom Gallagher",
    image: images.bootsAndMatchBall,
    body: [
      {
        paragraphs: [
          "The right footwear keeps young players comfortable and reduces the risk of injury. The most expensive boots are rarely necessary — the right type and fit matter far more."
        ]
      },
      {
        heading: "Match the boot to the surface",
        paragraphs: [
          "Most of our sessions are on 3G artificial pitches, where artificial ground (AG) boots or firm ground (FG) boots work well. For indoor sessions and very hard ground, astro trainers are the better choice.",
          "Leave a thumb’s width of space at the toe, and check the fit every few months — children’s feet grow quickly."
        ]
      },
      {
        heading: "Don’t forget shin pads",
        paragraphs: ["Shin pads are required for all sessions, camps and fixtures. Make sure they cover most of the shin and fit securely under socks."]
      }
    ]
  },
  {
    slug: "girls-football-programme-expands",
    title: "Girls’ Football Programme Expands for 2026/27",
    excerpt: "New girls-only sessions for ages 7–14 on Friday evenings, led by our Technical Director Marie Sanchez.",
    category: "Academy",
    date: "1 August 2026",
    isoDate: "2026-08-01",
    readTime: "3 min read",
    author: "Marie Sanchez",
    image: images.girlsFootballDribbling,
    body: [
      {
        paragraphs: [
          "Following record demand, we are adding girls-only sessions every Friday evening from September for players aged 7–14.",
          "The sessions follow the same curriculum as our weekly training, in a supportive environment where girls can build confidence, make friends and progress into our mixed and performance groups."
        ]
      },
      {
        heading: "Try it for free",
        paragraphs: ["As with all our weekly programmes, the first session is free. Book online and select “Girls’ football” as the programme."]
      }
    ]
  }
];

export const sortedArticles = [...articles].sort((a, b) => b.isoDate.localeCompare(a.isoDate));

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
