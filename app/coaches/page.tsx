import { Box, SimpleGrid } from "@chakra-ui/react";
import { coaches, coachingStandards } from "@/data/coaches";
import { siteConfig } from "@/data/site";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { CoachCard } from "@/components/cards/CoachCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata = buildMetadata({
  title: "Our Coaches",
  description: "Meet the UEFA and FA-qualified coaching team at FootballCoin Academy. Every coach is enhanced DBS checked, safeguarding trained and first-aid qualified.",
  path: "/coaches",
  image: images.headCoachTouchline
});

export default function CoachesPage() {
  return (
    <>
      <PageHero
        eyebrow="Coaching team"
        title="Meet our coaches"
        description="Qualified, experienced and invested in every player. Our coaches combine professional standards with a genuine passion for youth development."
        image={images.weeklyTrainingCoachHuddle}
        breadcrumbs={[{ label: "Coaches", href: "/coaches" }]}
      />

      <Section tone="mist">
        <Box mb={{ base: 10, md: 14 }}>
          <SectionHeading eyebrow="Leadership team" title="The people behind the programme" />
        </Box>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={6}>
          {coaches.map((coach) => (
            <CoachCard key={coach.name} coach={coach} detailed />
          ))}
        </SimpleGrid>
      </Section>

      <SplitFeature
        image={images.headCoachTouchline}
        eyebrow="Coaching standards"
        title="Every coach, every session"
        paragraphs={["We hold every member of our team to the same high standard, whether they are coaching Mini Kickers on a Saturday morning or our U18 performance squad on a Friday night."]}
        bullets={coachingStandards}
        actions={
          <ButtonLink href="/safeguarding" tone="outlineDark">
            Our safeguarding policy
          </ButtonLink>
        }
      />

      <Section tone="navy">
        <SectionHeading
          eyebrow="Join the team"
          title="Coach with FootballCoin"
          onDark
          description={`We’re always keen to hear from qualified, enthusiastic coaches and FA Level 1 volunteers who want to develop. Send your CV to ${siteConfig.email}.`}
        />
        <Box mt={8}>
          <ButtonLink href={`mailto:${siteConfig.email}?subject=Coaching%20vacancies`} tone="gold">
            Enquire about coaching roles
          </ButtonLink>
        </Box>
      </Section>

      <CtaBanner />
    </>
  );
}
