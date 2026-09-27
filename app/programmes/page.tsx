import NextLink from "next/link";
import { Box, Link, SimpleGrid, Table } from "@chakra-ui/react";
import { programmes } from "@/data/programmes";
import { siteConfig } from "@/data/site";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ProgrammeCard } from "@/components/cards/ProgrammeCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata = buildMetadata({
  title: "Football Programmes",
  description: "Weekly training, holiday camps, schools coaching, 1-to-1 sessions, goalkeeper training and elite performance squads for players aged 4–18.",
  path: "/programmes",
  image: images.pitchTrainingSession
});

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="Find the right programme"
        description="Whether your child is kicking a ball for the first time or preparing for professional trials, there’s a place for them at FootballCoin."
        image={images.pitchTrainingSession}
        breadcrumbs={[{ label: "Programmes", href: "/programmes" }]}
      >
        <ButtonLink href={siteConfig.trialCta.href} size="xl">
          {siteConfig.trialCta.label}
        </ButtonLink>
      </PageHero>

      <Section tone="mist">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {programmes.map((programme) => (
            <ProgrammeCard key={programme.slug} programme={programme} headingLevel="h2" />
          ))}
        </SimpleGrid>
      </Section>

      <Section>
        <Box mb={10}>
          <SectionHeading eyebrow="At a glance" title="Compare programmes" />
        </Box>
        <Table.ScrollArea rounded="xl" borderWidth="1px" borderColor="line">
          <Table.Root size="lg" minW="720px">
            <Table.Caption srOnly>Comparison of FootballCoin Academy programmes by age, format and price</Table.Caption>
            <Table.Header>
              <Table.Row bg="navy.950">
                {["Programme", "Ages", "Key features", "From"].map((heading) => (
                  <Table.ColumnHeader key={heading} color="white" fontWeight="700" textTransform="uppercase" fontSize="xs" letterSpacing="0.1em">
                    {heading}
                  </Table.ColumnHeader>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {programmes.map((programme) => (
                <Table.Row key={programme.slug} _odd={{ bg: "mist" }}>
                  <Table.Cell fontWeight="700">
                    <Link asChild color="navy.950" _hover={{ color: "pitch.700" }}>
                      <NextLink href={`/programmes/${programme.slug}`}>{programme.title}</NextLink>
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{programme.ages}</Table.Cell>
                  <Table.Cell color="muted">{programme.highlights.slice(0, 3).join(" · ")}</Table.Cell>
                  <Table.Cell fontWeight="700" color="pitch.700">
                    {programme.pricing[0].price}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>
      </Section>

      <CtaBanner title="Not sure which programme is right?" text="Book a free trial and our coaches will recommend the best group for your child’s age, experience and goals." />
    </>
  );
}
