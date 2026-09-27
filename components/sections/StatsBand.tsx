import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { impactStats, type Stat } from "@/data/site";

export function StatsBand({ stats = impactStats }: { stats?: Stat[] }) {
  return (
    <Box as="section" aria-label="Academy in numbers" bg="pitch.700" color="white" position="relative" overflow="hidden">
      <Box position="absolute" inset={0} opacity={0.08} bgImage="repeating-linear-gradient(90deg, #fff 0 80px, transparent 80px 160px)" aria-hidden="true" />
      <Container maxW="7xl" px={{ base: 5, md: 8 }} py={{ base: 12, md: 16 }} position="relative">
        <SimpleGrid as="dl" columns={{ base: 2, lg: 4 }} gap={{ base: 8, md: 10 }}>
          {stats.map((stat) => (
            <Box key={stat.label} display="flex" flexDirection="column-reverse" textAlign="center" className="reveal">
              <Text as="dt" mt={2} fontWeight="600" color="whiteAlpha.900">
                {stat.label}
              </Text>
              <Text as="dd" m={0} fontFamily="heading" fontWeight="800" fontSize={{ base: "5xl", md: "6xl" }} lineHeight="1">
                {stat.value}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
