import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

export type ProseSection = { heading: string; paragraphs: string[]; list?: string[] };

/** Long-form text layout for policy pages. */
export function ProseSections({ sections, updated }: { sections: ProseSection[]; updated: string }) {
  return (
    <Box bg="white" py={{ base: 12, md: 20 }}>
      <Container maxW="3xl" px={{ base: 5, md: 8 }}>
        <Text fontSize="sm" color="muted" mb={10}>
          Last updated: {updated}
        </Text>
        <Stack gap={10}>
          {sections.map((section) => (
            <Stack as="section" key={section.heading} gap={4}>
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} textTransform="uppercase" fontWeight="800" color="navy.950">
                {section.heading}
              </Heading>
              {section.paragraphs.map((paragraph) => (
                <Text key={paragraph.slice(0, 32)} fontSize="lg" lineHeight="1.8" color="ink">
                  {paragraph}
                </Text>
              ))}
              {section.list ? (
                <Box as="ul" pl={6} listStyleType="disc" fontSize="lg" lineHeight="1.9" color="ink">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </Box>
              ) : null}
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
