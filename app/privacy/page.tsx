import { siteConfig } from "@/data/site";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { ProseSections, type ProseSection } from "@/components/sections/ProseSections";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How FootballCoin Academy collects, uses and protects personal information in line with UK GDPR.",
  path: "/privacy",
  image: images.ballAtFeetOnGrass
});

const sections: ProseSection[] = [
  {
    heading: "Who we are",
    paragraphs: [`${siteConfig.name} is the data controller for personal information collected through this website and our programmes. You can contact us at ${siteConfig.email}.`]
  },
  {
    heading: "What we collect",
    paragraphs: ["When you book a trial, register for a programme or subscribe to our newsletter we may collect:"],
    list: ["Parent or guardian name, email address and phone number", "Player name, age group and relevant medical or additional needs information", "Payment information, processed securely by our payment provider", "Photographs taken at sessions, only where consent has been given"]
  },
  {
    heading: "How we use it",
    paragraphs: ["We use this information to arrange sessions, keep players safe, process payments, send progress reports and — only if you opt in — send our newsletter. We never sell your data."]
  },
  {
    heading: "Your rights",
    paragraphs: ["Under UK GDPR you have the right to access, correct or delete your personal information, and to withdraw consent at any time. Contact us to make a request. You can also complain to the Information Commissioner’s Office (ico.org.uk)."]
  },
  {
    heading: "Cookies",
    paragraphs: ["This website uses only the essential cookies needed for it to work. We do not use advertising or tracking cookies."]
  }
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" image={images.ballAtFeetOnGrass} breadcrumbs={[{ label: "Privacy Policy", href: "/privacy" }]} />
      <ProseSections sections={sections} updated="September 2026" />
    </>
  );
}
