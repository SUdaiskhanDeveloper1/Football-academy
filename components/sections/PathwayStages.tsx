import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { pathwayStages } from "@/data/development";
import { CoverImage } from "@/components/ui/CoverImage";

export function PathwayStages() {
  return (
    <SimpleGrid as="ol" listStyleType="none" m={0} p={0} columns={{ base: 1, sm: 2, lg: 4 }} gap={6}>
      {pathwayStages.map((stage, index) => (
        <Box as="li" key={stage.stage} className="reveal" bg="white" rounded="xl" overflow="hidden" borderWidth="1px" borderColor="line" shadow="sm">
          <CoverImage image={stage.image} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" aspectRatio={3 / 2} overlay="linear-gradient(180deg, transparent 40%, rgba(7,15,38,.8))">
            <Text position="absolute" left={5} bottom={3} fontFamily="heading" fontWeight="800" fontSize="5xl" lineHeight="1" color="gold.300" aria-hidden="true">
              0{index + 1}
            </Text>
          </CoverImage>
          <Box p={6}>
            <Text fontSize="sm" fontWeight="700" color="pitch.700" textTransform="uppercase" letterSpacing="0.1em">
              {stage.ages}
            </Text>
            <Heading as="h3" mt={1} fontSize="2xl" textTransform="uppercase" fontWeight="800" color="navy.950">
              {stage.stage}
            </Heading>
            <Text mt={1} fontWeight="600" color="ink">
              {stage.focus}
            </Text>
            <Box as="ul" mt={4} pl={5} listStyleType="disc" color="muted" lineHeight="1.8" fontSize="sm" css={{ "& li::marker": { color: "var(--chakra-colors-pitch-500)" } }}>
              {stage.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}
