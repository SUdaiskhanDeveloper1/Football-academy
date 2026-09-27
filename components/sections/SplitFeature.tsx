import { Box, Grid, Stack, Text } from "@chakra-ui/react";
import type { SiteImage } from "@/lib/images";
import { CoverImage } from "@/components/ui/CoverImage";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CheckList } from "@/components/ui/CheckList";

type SplitFeatureProps = {
  image: SiteImage;
  eyebrow?: string;
  title: React.ReactNode;
  paragraphs?: string[];
  bullets?: string[];
  imageSide?: "left" | "right";
  tone?: "white" | "mist";
  /** Small highlight card overlapping the photo, e.g. a key stat */
  badge?: { value: string; label: string };
  actions?: React.ReactNode;
  children?: React.ReactNode;
};

export function SplitFeature({ image, eyebrow, title, paragraphs = [], bullets, imageSide = "left", tone = "white", badge, actions, children }: SplitFeatureProps) {
  return (
    <Section tone={tone}>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 10, lg: 16 }} alignItems="center">
        <Box position="relative" isolation="isolate" order={{ base: 0, lg: imageSide === "left" ? 0 : 1 }} className="reveal">
          <CoverImage image={image} sizes="(min-width: 1024px) 50vw, 100vw" aspectRatio={{ base: 4 / 3, lg: 5 / 5.2 }} rounded="xl" shadow="xl" />
          <Box aria-hidden="true" position="absolute" zIndex={-1} w="40%" h="40%" bottom="-16px" left={imageSide === "left" ? "-16px" : undefined} right={imageSide === "right" ? "-16px" : undefined} bg="gold.400" rounded="xl" display={{ base: "none", md: "block" }} />
          {badge ? (
            <Box position="absolute" bottom={{ base: 4, md: 8 }} right={imageSide === "left" ? { base: 4, md: -6 } : undefined} left={imageSide === "right" ? { base: 4, md: -6 } : undefined} bg="navy.950" color="white" rounded="lg" px={6} py={5} shadow="xl" borderLeftWidth="4px" borderColor="pitch.500">
              <Text fontFamily="heading" fontSize="4xl" fontWeight="800" lineHeight="1" color="gold.300">
                {badge.value}
              </Text>
              <Text fontSize="sm" mt={1} color="whiteAlpha.900">
                {badge.label}
              </Text>
            </Box>
          ) : null}
        </Box>
        <Stack gap={6} className="reveal">
          <SectionHeading eyebrow={eyebrow} title={title} />
          {paragraphs.map((paragraph) => (
            <Text key={paragraph.slice(0, 24)} fontSize={{ base: "md", md: "lg" }} lineHeight="1.8" color="muted">
              {paragraph}
            </Text>
          ))}
          {bullets ? <CheckList items={bullets} columns={bullets.length > 4 ? 2 : 1} /> : null}
          {children}
          {actions ? (
            <Box display="flex" gap={4} flexWrap="wrap" pt={2}>
              {actions}
            </Box>
          ) : null}
        </Stack>
      </Grid>
    </Section>
  );
}
