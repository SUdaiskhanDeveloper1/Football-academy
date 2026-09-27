import { Box, Grid, SimpleGrid, Stack } from "@chakra-ui/react";
import { programmes } from "@/data/programmes";
import { coaches } from "@/data/coaches";
import { testimonials } from "@/data/testimonials";
import { sortedArticles } from "@/data/news";
import { homeFaqs } from "@/data/faqs";
import { fourCorners } from "@/data/development";
import { siteConfig, whyChooseUs } from "@/data/site";
import { images } from "@/lib/images";
import { absoluteUrl } from "@/lib/seo";
import { HomeHero } from "@/components/sections/HomeHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { StatsBand } from "@/components/sections/StatsBand";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PathwayStages } from "@/components/sections/PathwayStages";
import { EventsList } from "@/components/sections/EventsList";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqList } from "@/components/sections/FaqList";
import { SectionHeaderRow } from "@/components/sections/SectionHeaderRow";
import { ProgrammeCard } from "@/components/cards/ProgrammeCard";
import { CoachCard } from "@/components/cards/CoachCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { NewsCard } from "@/components/cards/NewsCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section, SectionHeading } from "@/components/ui/Section";
import { JsonLd } from "@/components/ui/JsonLd";

const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: siteConfig.name,
  sport: "Football",
  url: siteConfig.url,
  logo: absoluteUrl("/icon.svg"),
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postcode,
    addressCountry: siteConfig.address.country
  },
  sameAs: Object.values(siteConfig.socials).map((social) => social.href)
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organisationJsonLd} />
      <HomeHero />
      <TrustBar />

      <Section tone="mist">
        <SectionHeaderRow
          eyebrow="Our programmes"
          title="Coaching for every stage of the game"
          description="From a four-year-old’s first session to scholarship-ready sixth formers, every programme follows one joined-up curriculum."
          action={{ label: "View all programmes", href: "/programmes" }}
        />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {programmes.map((programme) => (
            <ProgrammeCard key={programme.slug} programme={programme} />
          ))}
        </SimpleGrid>
      </Section>

      <SplitFeature
        image={images.weeklyTrainingCoachHuddle}
        eyebrow="About the academy"
        title="Building players — and people — beyond the game"
        paragraphs={[
          "At FootballCoin we develop more than footballers. We combine professional coaching, clear development plans and a supportive environment so young players grow in skill, confidence and character.",
          "Parents get honest feedback, players get a pathway, and everyone gets coaching that is organised, safe and genuinely fun."
        ]}
        bullets={whyChooseUs}
        badge={{ value: "15+", label: "Years developing young players" }}
        actions={
          <>
            <ButtonLink href="/about">Our story</ButtonLink>
            <ButtonLink href="/coaches" tone="outlineDark">
              Meet the coaches
            </ButtonLink>
          </>
        }
      />

      <StatsBand />

      <Section>
        <SectionHeaderRow
          eyebrow="Player development"
          title="A clear pathway from first kick to first team"
          description="Our curriculum follows the FA Four Corner Model, developing the technical, physical, psychological and social sides of every player."
          action={{ label: "How we develop players", href: "/player-development" }}
        />
        <PathwayStages />
        <Box mt={{ base: 12, md: 16 }}>
          <FeatureGrid items={fourCorners} />
        </Box>
      </Section>

      <Section tone="mist">
        <Grid templateColumns={{ base: "1fr", lg: ".85fr 1.15fr" }} gap={{ base: 10, lg: 16 }} alignItems="start">
          <Stack gap={6} position={{ lg: "sticky" }} top={{ lg: "120px" }}>
            <SectionHeading eyebrow="What’s on" title="Upcoming trials, camps & fixtures" description="Come and see us in action. Trial evenings are free and open to all age groups — just book ahead so we can plan your group." />
            <Box>
              <ButtonLink href={siteConfig.trialCta.href}>{siteConfig.trialCta.label}</ButtonLink>
            </Box>
          </Stack>
          <EventsList />
        </Grid>
      </Section>

      <Section>
        <SectionHeaderRow eyebrow="Our coaches" title="Qualified, experienced and invested in your child" action={{ label: "Meet the full team", href: "/coaches" }} />
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={6}>
          {coaches.map((coach) => (
            <CoachCard key={coach.name} coach={coach} />
          ))}
        </SimpleGrid>
      </Section>

      <Section tone="mist">
        <SectionHeaderRow eyebrow="Testimonials" title="Voices from our community" action={{ label: "Read more reviews", href: "/testimonials" }} />
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </SimpleGrid>
      </Section>

      <Section>
        <SectionHeaderRow eyebrow="Gallery" title="Follow our journey" description={`Training nights, match days and camp highlights. Follow ${siteConfig.socials.instagram.handle} for more.`} action={{ label: "View gallery", href: "/gallery" }} />
        <GalleryPreview />
      </Section>

      <Section tone="mist">
        <SectionHeaderRow eyebrow="Latest news" title="News & updates" action={{ label: "View all news", href: "/news" }} />
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {sortedArticles.slice(0, 3).map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </SimpleGrid>
      </Section>

      <Section>
        <Grid templateColumns={{ base: "1fr", lg: ".8fr 1.2fr" }} gap={{ base: 10, lg: 16 }}>
          <Stack gap={6}>
            <SectionHeading eyebrow="Parents’ questions" title="Good to know" description="The questions we’re asked most often. Can’t see yours? Give us a call — we’re always happy to help." />
            <Box>
              <ButtonLink href="/faq" tone="outlineDark">
                See all FAQs
              </ButtonLink>
            </Box>
          </Stack>
          <FaqList faqs={homeFaqs} />
        </Grid>
      </Section>

      <CtaBanner />
    </>
  );
}
