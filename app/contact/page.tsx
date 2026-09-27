import { Box, Flex, Grid, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, venues } from "@/data/site";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { EventsList } from "@/components/sections/EventsList";
import { TrialBookingForm } from "@/components/forms/TrialBookingForm";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata = buildMetadata({
  title: "Contact Us & Book a Free Trial",
  description: "Book a free football trial session or contact FootballCoin Academy in Manchester. Call, email or complete our booking form — we reply within one working day.",
  path: "/contact",
  image: images.playerReadyOnPitch
});

function ContactRow({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <Flex gap={4} align="flex-start">
      <Flex flexShrink={0} w="44px" h="44px" rounded="lg" bg="pitch.600" color="white" align="center" justify="center" aria-hidden="true">
        {icon}
      </Flex>
      <Box>
        <Text fontWeight="700" color="white">
          {title}
        </Text>
        <Box color="whiteAlpha.800" fontSize="sm" lineHeight="1.7">
          {children}
        </Box>
      </Box>
    </Flex>
  );
}

export default function ContactPage() {
  const { address } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a free trial"
        description="Tell us a little about your player and we’ll recommend the right group. Your first session is on us — no obligation."
        image={images.playerReadyOnPitch}
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <Section tone="mist" id="book-a-trial">
        <Grid templateColumns={{ base: "1fr", lg: "1.35fr .9fr" }} gap={{ base: 10, lg: 12 }} alignItems="start">
          <Box bg="white" rounded="2xl" p={{ base: 6, md: 10 }} shadow="lg" borderWidth="1px" borderColor="line">
            <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} textTransform="uppercase" fontWeight="800" color="navy.950">
              Your trial request
            </Heading>
            <Text mt={2} mb={8} color="muted">
              Fields marked * are required. It takes less than two minutes.
            </Text>
            <TrialBookingForm />
          </Box>

          <Stack gap={6}>
            <Stack bg="navy.950" color="white" rounded="2xl" p={{ base: 6, md: 8 }} gap={6}>
              <Heading as="h2" fontSize="2xl" textTransform="uppercase" fontWeight="800">
                Get in touch
              </Heading>
              <ContactRow icon={<Phone size={20} />} title="Call us">
                <Link href={siteConfig.phoneHref} color="gold.300" fontWeight="700">
                  {siteConfig.phone}
                </Link>
              </ContactRow>
              <ContactRow icon={<Mail size={20} />} title="Email">
                <Link href={`mailto:${siteConfig.email}`} color="gold.300" fontWeight="700" wordBreak="break-all">
                  {siteConfig.email}
                </Link>
              </ContactRow>
              <ContactRow icon={<MapPin size={20} />} title="Head office">
                <address style={{ fontStyle: "normal" }}>
                  {address.street}
                  <br />
                  {address.locality} {address.postcode}
                </address>
              </ContactRow>
              <ContactRow icon={<Clock size={20} />} title="Office hours">
                {siteConfig.officeHours.map((slot) => (
                  <Text key={slot.days}>
                    {slot.days}: {slot.hours}
                  </Text>
                ))}
              </ContactRow>
            </Stack>

            <Box bg="white" rounded="2xl" p={{ base: 6, md: 8 }} borderWidth="1px" borderColor="line">
              <Heading as="h2" fontSize="2xl" textTransform="uppercase" fontWeight="800" color="navy.950" mb={4}>
                Our venues
              </Heading>
              <Stack gap={4}>
                {venues.map((venue) => (
                  <Box key={venue.name}>
                    <Text fontWeight="700" color="navy.950">
                      {venue.name}
                    </Text>
                    <Text fontSize="sm" color="muted">
                      {venue.address}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Section>

      <Section>
        <Box mb={10}>
          <SectionHeading eyebrow="Dates for the diary" title="Upcoming trials & camps" />
        </Box>
        <EventsList />
      </Section>
    </>
  );
}
