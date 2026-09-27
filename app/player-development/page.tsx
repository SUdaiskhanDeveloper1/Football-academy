import { Box } from "@chakra-ui/react";
import { fourCorners, progressTools, specialistSupport } from "@/data/development";
import { siteConfig } from "@/data/site";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { PathwayStages } from "@/components/sections/PathwayStages";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata = buildMetadata({
  title: "Player Development Pathway",
  description: "How FootballCoin Academy develops players aged 4–18: the FA Four Corner Model, age-appropriate pathway stages, individual development plans and termly reports.",
  path: "/player-development",
  image: images.closeControlDuel
});

export default function PlayerDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Player development"
        title="Our player pathway"
        description="A joined-up curriculum from age 4 to 18, so every player knows what they’re working on, why it matters and what comes next."
        image={images.closeControlDuel}
        breadcrumbs={[{ label: "Player Development", href: "/player-development" }]}
      >
        <ButtonLink href={siteConfig.trialCta.href} size="xl">
          {siteConfig.trialCta.label}
        </ButtonLink>
      </PageHero>

      <Section tone="mist">
        <Box mb={{ base: 10, md: 14 }}>
          <SectionHeading eyebrow="The pathway" title="Four stages, one curriculum" description="Each stage builds on the one before, with clear priorities for the age and stage of the player — not just their birthday." />
        </Box>
        <PathwayStages />
      </Section>

      <Section>
        <Box mb={{ base: 10, md: 14 }}>
          <SectionHeading eyebrow="The Four Corner Model" title="Developing the whole player" description="Based on the FA’s Four Corner Model, every session and review considers four areas of development." />
        </Box>
        <FeatureGrid items={fourCorners} />
      </Section>

      <SplitFeature
        image={images.firstTouchBallMastery}
        tone="mist"
        imageSide="right"
        eyebrow="Tracking progress"
        title="Progress you can see"
        paragraphs={[
          "Development is only meaningful if it’s measured. Players set three personal targets each block with their coach, and parents receive a clear written report every term.",
          "For 1-to-1 and performance players, video analysis helps them see exactly what good looks like — and how close they are to it."
        ]}
      />

      <Section>
        <FeatureGrid items={progressTools} />
      </Section>

      <Section tone="navy">
        <Box mb={{ base: 10, md: 14 }}>
          <SectionHeading eyebrow="Specialist support" title="Beyond the technical" onDark description="Specialist coaching that complements our core programmes and supports older and performance players." />
        </Box>
        <FeatureGrid items={specialistSupport} columns={3} onDark />
      </Section>

      <CtaBanner title="See the pathway in action" />
    </>
  );
}
