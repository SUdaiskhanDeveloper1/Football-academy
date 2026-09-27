import { Badge, Box, Flex, Heading, Text, Wrap } from "@chakra-ui/react";
import type { Coach } from "@/data/coaches";
import { CoverImage } from "@/components/ui/CoverImage";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export function CoachCard({ coach, detailed = false }: { coach: Coach; detailed?: boolean }) {
  return (
    <Box as="article" className="reveal" bg="white" rounded="xl" overflow="hidden" borderWidth="1px" borderColor="line" shadow="sm" transition="box-shadow .25s ease" _hover={{ shadow: "lg" }}>
      <CoverImage image={coach.image} sizes="(min-width: 1280px) 300px, (min-width: 768px) 50vw, 100vw" aspectRatio={4 / 3} overlay="linear-gradient(180deg, transparent 65%, rgba(7,15,38,.55))">
        <Text position="absolute" left={4} top={4} maxW="calc(100% - 32px)" px={2.5} py={1} rounded="sm" bg="rgba(7,15,38,.85)" fontSize="2xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase" color="gold.300">
          {coach.specialism}
        </Text>
      </CoverImage>
      <Box p={6} pt={0} position="relative">
        <Flex mt="-28px" mb={3} w="56px" h="56px" rounded="full" bg="pitch.600" color="white" align="center" justify="center" fontFamily="heading" fontWeight="800" fontSize="xl" borderWidth="4px" borderColor="white" position="relative" aria-hidden="true">
          {initials(coach.name)}
        </Flex>
        <Heading as="h3" fontSize="2xl" textTransform="uppercase" fontWeight="800" color="navy.950">
          {coach.name}
        </Heading>
        <Text color="pitch.700" fontWeight="700">
          {coach.role}
        </Text>
        {detailed ? (
          <Text mt={3} color="muted" lineHeight="1.7">
            {coach.bio}
          </Text>
        ) : null}
        <Wrap mt={4} gap={2}>
          {coach.qualifications.map((qualification) => (
            <Badge key={qualification} variant="subtle" colorPalette="navy" px={2} py={1}>
              {qualification}
            </Badge>
          ))}
        </Wrap>
      </Box>
    </Box>
  );
}
