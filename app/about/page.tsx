import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { values, venues, siteConfig } from "@/data/site";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { StatsBand } from "@/components/sections/StatsBand";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata = buildMetadata({
  title: "About Us",
  description: "Founded in 2011, FootballCoin Academy develops confident young footballers across Greater Manchester through qualified coaching, clear pathways and strong values.",
  path: "/about",
  image: images.teamLineUpArmsLinked
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="More than a football academy"
        description="For over 15 years we’ve helped young players across Greater Manchester fall in love with football, fulfil their potential and grow into confident young people."
        image={images.teamLineUpArmsLinked}
        breadcrumbs={[{ label: "About", href: "/about" }]}
      >
        <ButtonLink href={siteConfig.trialCta.href} size="xl">
          {siteConfig.trialCta.label}
        </ButtonLink>
      </PageHero>

      <SplitFeature
        image={images.weeklyTrainingCoachHuddle}
        eyebrow="Our story"
        title="Started on one pitch with twelve players"
        paragraphs={[
          "FootballCoin Academy began in 2011 as a Saturday morning session run by two coaches who believed young players deserved better: better coaching, better organisation and more honest feedback.",
          "Today we coach hundreds of players every week across weekly training, holiday camps, schools and performance squads — but the same principles still guide everything we do. Every child is known by name, every session is planned, and every family knows how their player is progressing."
        ]}
        badge={{ value: "2011", label: "Founded in Manchester" }}
      />

      <Section tone="navy">
        <Box mb={{ base: 10, md: 14 }}>
          <SectionHeading eyebrow="Our values" title="What we stand for" onDark description="Four values shape how we coach, how we communicate and how we behave — on the pitch and off it." />
        </Box>
        <FeatureGrid items={values} onDark />
      </Section>

      <SplitFeature
        image={images.girlsFootballDribbling}
        imageSide="right"
        tone="mist"
        eyebrow="Inclusive by design"
        title="Football for every child"
        paragraphs={[
          "Our sessions welcome all abilities, backgrounds and genders. We run dedicated girls’ sessions, work with families to support additional needs and keep our pricing clear and fair.",
          "Talent can come from anywhere. Our job is to give every player the chance to discover what they are capable of."
        ]}
        bullets={["Girls-only sessions for ages 7–14", "Sibling discounts and flexible payment", "Reasonable adjustments for additional needs", "Bursary places for families who need support"]}
      />

      <StatsBand />

      <Section>
        <Box mb={{ base: 10, md: 14 }}>
          <SectionHeading eyebrow="Where we train" title="Our venues" description="Floodlit 3G pitches, indoor space for winter and a proper match-day stadium for performance fixtures." />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {venues.map((venue) => (
            <Box key={venue.name} className="reveal" p={7} rounded="xl" borderWidth="1px" borderColor="line" borderTopWidth="4px" borderTopColor="pitch.500">
              <Heading as="h3" fontSize="2xl" textTransform="uppercase" fontWeight="800" color="navy.950">
                {venue.name}
              </Heading>
              <Text mt={3} color="muted" lineHeight="1.7">
                {venue.detail}
              </Text>
              <Text mt={4} fontSize="sm" fontWeight="600" color="ink">
                {venue.address}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Section>

      <CtaBanner />
    </>
  );
}
