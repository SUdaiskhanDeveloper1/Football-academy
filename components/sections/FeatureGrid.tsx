import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import type { Feature } from "@/data/site";

type FeatureGridProps = {
  items: Feature[];
  columns?: 2 | 3 | 4;
  onDark?: boolean;
};

export function FeatureGrid({ items, columns = 4, onDark = false }: FeatureGridProps) {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: columns }} gap={6}>
      {items.map(({ title, text, icon: Icon }) => (
        <Box
          key={title}
          className="reveal"
          p={{ base: 6, md: 7 }}
          rounded="xl"
          bg={onDark ? "whiteAlpha.100" : "white"}
          borderWidth="1px"
          borderColor={onDark ? "whiteAlpha.200" : "line"}
          transition="transform .25s ease, border-color .25s ease"
          _hover={{ transform: "translateY(-4px)", borderColor: onDark ? "pitch.400" : "pitch.300" }}
        >
          <Flex w="52px" h="52px" rounded="lg" bg={onDark ? "pitch.600" : "pitch.50"} color={onDark ? "white" : "pitch.700"} align="center" justify="center" aria-hidden="true">
            <Icon size={26} />
          </Flex>
          <Heading as="h3" mt={5} fontSize="xl" textTransform="uppercase" fontWeight="800" color={onDark ? "white" : "navy.950"}>
            {title}
          </Heading>
          <Text mt={2} lineHeight="1.7" color={onDark ? "whiteAlpha.800" : "muted"}>
            {text}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}
