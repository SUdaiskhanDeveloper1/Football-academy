import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Check } from "lucide-react";

export function CheckList({ items, columns = 1, onDark = false }: { items: string[]; columns?: 1 | 2; onDark?: boolean }) {
  return (
    <SimpleGrid as="ul" columns={{ base: 1, md: columns }} gap={3} listStyleType="none" p={0} m={0}>
      {items.map((item) => (
        <Flex as="li" key={item} gap={3} align="flex-start">
          <Box as="span" flexShrink={0} mt="2px" display="inline-flex" alignItems="center" justifyContent="center" w="22px" h="22px" rounded="full" bg={onDark ? "pitch.500" : "pitch.100"} color={onDark ? "white" : "pitch.700"} aria-hidden="true">
            <Check size={14} strokeWidth={3} />
          </Box>
          <Text color={onDark ? "whiteAlpha.900" : "ink"} lineHeight="1.6">
            {item}
          </Text>
        </Flex>
      ))}
    </SimpleGrid>
  );
}
