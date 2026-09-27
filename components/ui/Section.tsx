import { Box, Container, Heading, Text, VStack, type BoxProps } from "@chakra-ui/react";

type Tone = "white" | "mist" | "navy";

const toneStyles: Record<Tone, BoxProps> = {
  white: { bg: "white", color: "ink" },
  mist: { bg: "mist", color: "ink" },
  navy: { bg: "navy.950", color: "white" }
};

type SectionProps = BoxProps & { tone?: Tone };

/** Page section with consistent vertical rhythm and container width. */
export function Section({ tone = "white", children, ...rest }: SectionProps) {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} {...toneStyles[tone]} {...rest}>
      <Container maxW="7xl" px={{ base: 5, md: 8 }}>
        {children}
      </Container>
    </Box>
  );
}

export function Eyebrow({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <Text as="span" display="inline-flex" alignItems="center" gap={3} fontSize="sm" fontWeight="700" letterSpacing="0.14em" textTransform="uppercase" color={onDark ? "gold.300" : "pitch.700"}>
      <Box as="span" aria-hidden="true" w="28px" h="3px" bg="gold.400" rounded="full" />
      {children}
    </Text>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  as?: "h1" | "h2" | "h3";
  maxW?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", onDark = false, as = "h2", maxW = "760px" }: SectionHeadingProps) {
  const centred = align === "center";

  return (
    <VStack align={centred ? "center" : "flex-start"} textAlign={align} gap={4} maxW={maxW} mx={centred ? "auto" : undefined}>
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <Heading as={as} fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} lineHeight="0.98" fontWeight="800" textTransform="uppercase" letterSpacing="-0.005em" color={onDark ? "white" : "navy.950"}>
        {title}
      </Heading>
      {description ? (
        <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.75" color={onDark ? "whiteAlpha.800" : "muted"}>
          {description}
        </Text>
      ) : null}
    </VStack>
  );
}
