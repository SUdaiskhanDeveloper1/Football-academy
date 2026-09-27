import { Box, Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { trustPoints } from "@/data/site";

export function TrustBar() {
  return (
    <Box bg="white" borderBottomWidth="1px" borderColor="line">
      <Container maxW="7xl" px={{ base: 5, md: 8 }} py={{ base: 8, md: 10 }}>
        <SimpleGrid as="ul" listStyleType="none" m={0} p={0} columns={{ base: 1, sm: 2, lg: 4 }} gap={{ base: 6, lg: 8 }}>
          {trustPoints.map(({ title, text, icon: Icon }) => (
            <Flex as="li" key={title} gap={4} align="flex-start">
              <Flex flexShrink={0} w="48px" h="48px" rounded="lg" bg="pitch.50" color="pitch.700" align="center" justify="center" aria-hidden="true">
                <Icon size={24} />
              </Flex>
              <Box>
                <Text fontWeight="800" color="navy.950">
                  {title}
                </Text>
                <Text fontSize="sm" color="muted" lineHeight="1.6">
                  {text}
                </Text>
              </Box>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
