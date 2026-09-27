import type { Metadata } from "next";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import { Box, Flex, Grid, Link, SimpleGrid, Stack, Text, Wrap } from "@chakra-ui/react";
import { CheckCircle2 } from "lucide-react";
import { getProgramme, programmes } from "@/data/programmes";
import { siteConfig } from "@/data/site";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { PricingCards, ScheduleTable, SessionPlan } from "@/components/sections/ProgrammeDetails";
import { FaqList, faqJsonLd } from "@/components/sections/FaqList";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ProgrammeCard } from "@/components/cards/ProgrammeCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CoverImage } from "@/components/ui/CoverImage";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return programmes.map((programme) => ({ slug: programme.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const programme = getProgramme((await params).slug);
  if (!programme) return {};
  return buildMetadata({ title: `${programme.title} (${programme.ages})`, description: programme.seoDescription, path: `/programmes/${programme.slug}`, image: programme.image });
}

export default async function ProgrammePage({ params }: { params: Promise<Params> }) {
  const programme = getProgramme((await params).slug);
  if (!programme) notFound();

  const related = programmes.filter((item) => item.slug !== programme.slug).slice(0, 3);
  const path = `/programmes/${programme.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${programme.title} — ${siteConfig.name}`,
          serviceType: "Youth football coaching",
          description: programme.seoDescription,
          url: absoluteUrl(path),
          areaServed: "Greater Manchester",
          provider: { "@type": "SportsOrganization", name: siteConfig.name, url: siteConfig.url }
        }}
      />
      {programme.faqs.length ? <JsonLd data={faqJsonLd(programme.faqs)} /> : null}

      <PageHero
        eyebrow={programme.ages}
        title={programme.title}
        description={programme.tagline}
        image={programme.image}
        breadcrumbs={[
          { label: "Programmes", href: "/programmes" },
          { label: programme.title, href: path }
        ]}
      >
        <ButtonLink href={siteConfig.trialCta.href} size="xl">
          {siteConfig.trialCta.label}
        </ButtonLink>
        <ButtonLink href="#timetable" tone="outlineLight" size="xl">
          Times & prices
        </ButtonLink>
      </PageHero>

      <Box bg="navy.900" color="white">
        <Wrap as="ul" listStyleType="none" m={0} maxW="7xl" mx="auto" px={{ base: 5, md: 8 }} py={5} gap={{ base: 4, md: 10 }} justify="center">
          {programme.highlights.map((highlight) => (
            <Flex as="li" key={highlight} align="center" gap={2} fontWeight="600">
              <CheckCircle2 size={18} color="#F5B82E" aria-hidden="true" />
              {highlight}
            </Flex>
          ))}
        </Wrap>
      </Box>

      <SplitFeature image={programme.gallery[0]} eyebrow="Overview" title="What to expect" paragraphs={programme.intro} bullets={programme.includes} />

      <Section tone="navy">
        <Box mb={{ base: 10, md: 14 }}>
          <SectionHeading eyebrow="Session structure" title="How a session works" onDark />
        </Box>
        <SessionPlan steps={programme.sessionPlan} />
      </Section>

      <Section tone="mist" id="timetable">
        <Stack gap={{ base: 10, md: 14 }}>
          <SectionHeading eyebrow="Timetable" title="When & where" description="Times may vary slightly each term — we confirm everything when you book." />
          <ScheduleTable rows={programme.schedule} caption={`${programme.title} timetable`} />
          <SectionHeading eyebrow="Pricing" title="Clear, simple pricing" description="No joining fee. Your first session is free, so you can be sure it’s the right fit." />
          <PricingCards options={programme.pricing} programme={programme.title} />
        </Stack>
      </Section>

      <Section>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
          {programme.gallery.map((image) => (
            <CoverImage key={image.alt} image={image} sizes="(min-width: 768px) 33vw, 100vw" aspectRatio={4 / 3} rounded="xl" className="reveal" />
          ))}
        </SimpleGrid>
      </Section>

      {programme.faqs.length ? (
        <Section tone="mist">
          <Grid templateColumns={{ base: "1fr", lg: ".8fr 1.2fr" }} gap={{ base: 8, lg: 16 }}>
            <Stack gap={4}>
              <SectionHeading eyebrow="FAQs" title={`${programme.title} questions`} />
              <Text color="muted">
                More answers on our{" "}
                <Link asChild color="pitch.700" fontWeight="700" textDecoration="underline">
                  <NextLink href="/faq">FAQ page</NextLink>
                </Link>
                .
              </Text>
            </Stack>
            <FaqList faqs={programme.faqs} />
          </Grid>
        </Section>
      ) : null}

      <Section>
        <Box mb={{ base: 10, md: 14 }}>
          <SectionHeading eyebrow="Explore more" title="Other programmes" />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {related.map((item) => (
            <ProgrammeCard key={item.slug} programme={item} />
          ))}
        </SimpleGrid>
      </Section>

      <CtaBanner title={`Try ${programme.title} for free`} image={programme.image} />
    </>
  );
}
