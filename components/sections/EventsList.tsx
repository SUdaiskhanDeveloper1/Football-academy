import NextLink from "next/link";
import { Badge, Box, Flex, Heading, LinkBox, LinkOverlay, Stack, Text } from "@chakra-ui/react";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { upcomingEvents, type AcademyEvent } from "@/data/site";

const categoryPalette: Record<AcademyEvent["category"], string> = {
  Trial: "pitch",
  Camp: "gold",
  Fixture: "navy",
  Event: "navy"
};

export function EventsList({ events = upcomingEvents }: { events?: AcademyEvent[] }) {
  return (
    <Stack as="ul" listStyleType="none" m={0} p={0} gap={4}>
      {events.map((event) => {
        const date = new Date(event.isoDate);
        return (
          <LinkBox as="li" key={event.title} className="reveal" display="flex" alignItems="center" gap={{ base: 4, md: 6 }} bg="white" rounded="xl" p={{ base: 4, md: 5 }} borderWidth="1px" borderColor="line" transition="border-color .2s ease, box-shadow .2s ease" _hover={{ borderColor: "pitch.300", shadow: "md" }}>
            <Flex direction="column" align="center" justify="center" flexShrink={0} w={{ base: "64px", md: "76px" }} h={{ base: "64px", md: "76px" }} rounded="lg" bg="navy.950" color="white" aria-hidden="true">
              <Text fontFamily="heading" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="800" lineHeight="1">
                {date.getUTCDate()}
              </Text>
              <Text fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.1em" color="gold.300">
                {date.toLocaleString("en-GB", { month: "short", timeZone: "UTC" })}
              </Text>
            </Flex>
            <Box flex="1" minW={0}>
              <Badge colorPalette={categoryPalette[event.category]} variant="subtle" mb={2}>
                {event.category}
              </Badge>
              <Heading as="h3" fontSize={{ base: "md", md: "lg" }} fontWeight="800" color="navy.950">
                <LinkOverlay asChild>
                  <NextLink href={event.href}>{event.title}</NextLink>
                </LinkOverlay>
              </Heading>
              <Flex mt={1} gap={{ base: 1, md: 5 }} direction={{ base: "column", md: "row" }} fontSize="sm" color="muted">
                <Flex align="center" gap={2}>
                  <Clock size={14} aria-hidden="true" />
                  <time dateTime={event.isoDate}>
                    {event.date} · {event.time}
                  </time>
                </Flex>
                <Flex align="center" gap={2}>
                  <MapPin size={14} aria-hidden="true" />
                  {event.venue}
                </Flex>
              </Flex>
            </Box>
            <Box display={{ base: "none", sm: "block" }} color="pitch.700" aria-hidden="true">
              <ArrowRight />
            </Box>
          </LinkBox>
        );
      })}
    </Stack>
  );
}
