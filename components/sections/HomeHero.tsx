import NextLink from "next/link";
import { Box, Container, Flex, Grid, Heading, HStack, Link, Stack, Text } from "@chakra-ui/react";
import { CalendarDays, MapPin } from "lucide-react";
import { heroStats, siteConfig, upcomingEvents } from "@/data/site";
import { images } from "@/lib/images";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CoverImage } from "@/components/ui/CoverImage";
import { Eyebrow } from "@/components/ui/Section";

export function HomeHero() {
  const nextTrial = upcomingEvents.find((event) => event.category === "Trial") ?? upcomingEvents[0];

  return (
    <Box as="section" position="relative" color="white" overflow="hidden" aria-labelledby="home-hero-title">
      <CoverImage
        image={images.youthMatchAction}
        sizes="100vw"
        priority
        position="absolute"
        inset={0}
        overlay="linear-gradient(90deg, rgba(7,15,38,.94) 0%, rgba(7,15,38,.78) 45%, rgba(7,15,38,.25) 100%)"
      />
      <Container maxW="7xl" px={{ base: 5, md: 8 }} position="relative" py={{ base: 20, md: 28, lg: 32 }}>
        <Grid templateColumns={{ base: "1fr", lg: "1.35fr .65fr" }} gap={12} alignItems="end">
          <Stack gap={6} maxW="720px" className="hero-in">
            <Eyebrow onDark>Youth football academy · Greater Manchester</Eyebrow>
            <Heading id="home-hero-title" as="h1" fontSize={{ base: "5xl", sm: "6xl", md: "7xl", xl: "8xl" }} lineHeight="0.92" fontWeight="800" textTransform="uppercase">
              Developing talent.
              <Box as="span" display="block" color="pitch.300">
                Creating opportunities.
              </Box>
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} lineHeight="1.7" color="whiteAlpha.900" maxW="600px">
              Professional coaching for players aged 4–18 — from first kicks at Mini Kickers to our elite performance squads. Built on FA-qualified coaches, small groups and real pathways.
            </Text>
            <Flex gap={4} wrap="wrap">
              <ButtonLink href={siteConfig.trialCta.href} size="xl">
                {siteConfig.trialCta.label}
              </ButtonLink>
              <ButtonLink href="/programmes" tone="outlineLight" size="xl">
                Explore programmes
              </ButtonLink>
            </Flex>
            <HStack as="dl" gap={{ base: 6, md: 10 }} pt={4} wrap="wrap">
              {heroStats.map((stat) => (
                <Box key={stat.label} display="flex" flexDirection="column-reverse">
                  <Text as="dt" fontSize="sm" color="whiteAlpha.800" mt={1}>
                    {stat.label}
                  </Text>
                  <Text as="dd" m={0} fontFamily="heading" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="800" lineHeight="1" color="gold.300">
                    {stat.value}
                  </Text>
                </Box>
              ))}
            </HStack>
          </Stack>

          <Box className="hero-in-delay" display={{ base: "none", lg: "block" }} bg="white" color="ink" rounded="xl" p={6} shadow="2xl" borderTopWidth="4px" borderColor="gold.400">
            <Text fontSize="xs" fontWeight="700" letterSpacing="0.14em" textTransform="uppercase" color="pitch.700">
              Next free trial
            </Text>
            <Heading as="p" mt={2} fontSize="2xl" textTransform="uppercase" fontWeight="800" color="navy.950">
              {nextTrial.title}
            </Heading>
            <Stack mt={4} gap={2} fontSize="sm" color="muted">
              <HStack>
                <CalendarDays size={16} aria-hidden="true" />
                <time dateTime={nextTrial.isoDate}>
                  {nextTrial.date}, {nextTrial.time}
                </time>
              </HStack>
              <HStack>
                <MapPin size={16} aria-hidden="true" />
                <span>{nextTrial.venue}</span>
              </HStack>
            </Stack>
            <Link asChild mt={5} fontWeight="700" color="pitch.700">
              <NextLink href={nextTrial.href}>Reserve a place →</NextLink>
            </Link>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
