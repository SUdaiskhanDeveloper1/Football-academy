import NextLink from "next/link";
import { Box, Grid, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { faqGroups } from "@/data/faqs";
import { siteConfig } from "@/data/site";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { FaqList, faqJsonLd } from "@/components/sections/FaqList";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description: "Answers to parents’ most common questions about FootballCoin Academy: trials, age groups, kit, weather, payments, camps and safeguarding.",
  path: "/faq",
  image: images.matchBallsReady
});

const slug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqGroups.flatMap((group) => group.faqs))} />
      <PageHero eyebrow="FAQs" title="Questions from parents" description="Everything you need to know before your child’s first session." image={images.matchBallsReady} breadcrumbs={[{ label: "FAQs", href: "/faq" }]} />

      <Section tone="mist">
        <Grid templateColumns={{ base: "1fr", lg: "260px 1fr" }} gap={{ base: 8, lg: 16 }} alignItems="start">
          <Box as="nav" aria-label="FAQ topics" position={{ lg: "sticky" }} top={{ lg: "120px" }}>
            <Text fontSize="xs" fontWeight="700" letterSpacing="0.14em" textTransform="uppercase" color="pitch.700" mb={3}>
              Topics
            </Text>
            <Stack as="ul" listStyleType="none" m={0} p={0} gap={2}>
              {faqGroups.map((group) => (
                <li key={group.title}>
                  <Link href={`#${slug(group.title)}`} fontWeight="600" color="navy.950" _hover={{ color: "pitch.700" }}>
                    {group.title}
                  </Link>
                </li>
              ))}
            </Stack>
            <Box mt={8} p={5} rounded="lg" bg="white" borderWidth="1px" borderColor="line">
              <Text fontWeight="700" color="navy.950">
                Still have a question?
              </Text>
              <Text fontSize="sm" color="muted" mt={1}>
                Call{" "}
                <Link href={siteConfig.phoneHref} color="pitch.700" fontWeight="700">
                  {siteConfig.phone}
                </Link>{" "}
                or{" "}
                <Link asChild color="pitch.700" fontWeight="700">
                  <NextLink href="/contact">send us a message</NextLink>
                </Link>
                .
              </Text>
            </Box>
          </Box>

          <Stack gap={{ base: 12, md: 16 }}>
            {faqGroups.map((group) => (
              <Box as="section" key={group.title} id={slug(group.title)} aria-labelledby={`${slug(group.title)}-title`}>
                <Heading id={`${slug(group.title)}-title`} as="h2" fontSize={{ base: "3xl", md: "4xl" }} textTransform="uppercase" fontWeight="800" color="navy.950" mb={6}>
                  {group.title}
                </Heading>
                <FaqList faqs={group.faqs} />
              </Box>
            ))}
          </Stack>
        </Grid>
      </Section>

      <CtaBanner />
    </>
  );
}
