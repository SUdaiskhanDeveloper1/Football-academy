import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { ProseSections, type ProseSection } from "@/components/sections/ProseSections";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "Safeguarding & Welfare",
  description: "How FootballCoin Academy keeps children safe: DBS-checked staff, safeguarding training, our Designated Safeguarding Lead and how to raise a concern.",
  path: "/safeguarding",
  image: images.weeklyTrainingCoachHuddle
});

const sections: ProseSection[] = [
  {
    heading: "Our commitment",
    paragraphs: [
      "The welfare of every child who attends FootballCoin Academy is our first priority. We are committed to providing a safe, positive and inclusive environment in which young people can enjoy football and develop."
    ]
  },
  {
    heading: "Safer recruitment",
    paragraphs: ["Everyone who works with children on our behalf goes through a safer recruitment process."],
    list: ["Enhanced DBS check, renewed every three years", "Two references, including one from a previous role working with children", "FA Safeguarding Children certificate", "Emergency first aid qualification", "Induction on our codes of conduct and reporting procedures"]
  },
  {
    heading: "At every session",
    paragraphs: ["We keep ratios of at least one coach to twelve players, keep an up-to-date register, and hold emergency contact and medical information for every child. Players are only released to a parent or an authorised adult."]
  },
  {
    heading: "Raising a concern",
    paragraphs: [
      "If you have any concern about the welfare of a child, please speak to our Designated Safeguarding Lead in confidence by emailing safeguarding@footballcoinacademy.co.uk or calling the office.",
      "If a child is in immediate danger, call 999. You can also contact the NSPCC helpline on 0808 800 5000."
    ]
  },
  {
    heading: "Codes of conduct",
    paragraphs: ["We ask players, parents and coaches to follow our codes of conduct, based on the FA’s Respect programme, so that sessions and matches are positive for everyone."]
  }
];

export default function SafeguardingPage() {
  return (
    <>
      <PageHero eyebrow="Parents" title="Safeguarding & welfare" description="Keeping children safe is at the heart of everything we do." image={images.weeklyTrainingCoachHuddle} breadcrumbs={[{ label: "Safeguarding", href: "/safeguarding" }]} />
      <ProseSections sections={sections} updated="September 2026" />
      <CtaBanner />
    </>
  );
}
