import NextLink from "next/link";
import { Badge, Box, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import type { Programme } from "@/data/programmes";
import { CoverImage } from "@/components/ui/CoverImage";

export function ProgrammeCard({ programme, headingLevel = "h3" }: { programme: Programme; headingLevel?: "h2" | "h3" }) {
  return (
    <LinkBox
      as="article"
      className="reveal"
      display="flex"
      flexDirection="column"
      bg="white"
      rounded="xl"
      overflow="hidden"
      borderWidth="1px"
      borderColor="line"
      shadow="sm"
      transition="transform .25s ease, box-shadow .25s ease"
      _hover={{ transform: "translateY(-6px)", shadow: "xl" }}
      css={{ "&:hover .card-image img": { transform: "scale(1.05)" }, "& .card-image img": { transition: "transform .6s ease" } }}
    >
      <CoverImage className="card-image" image={programme.image} sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw" aspectRatio={4 / 3}>
        <Badge position="absolute" top={4} left={4} colorPalette="gold" variant="solid" px={3} py={1} rounded="full" fontWeight="700">
          {programme.ages}
        </Badge>
      </CoverImage>
      <Box p={6} display="flex" flexDirection="column" flex="1">
        <Heading as={headingLevel} fontSize="2xl" textTransform="uppercase" fontWeight="800" color="navy.950">
          <LinkOverlay asChild>
            <NextLink href={`/programmes/${programme.slug}`}>{programme.title}</NextLink>
          </LinkOverlay>
        </Heading>
        <Text mt={3} color="muted" lineHeight="1.7" flex="1">
          {programme.summary}
        </Text>
        <Text mt={5} display="inline-flex" alignItems="center" gap={2} fontWeight="700" color="pitch.700">
          Find out more <ArrowRight size={18} aria-hidden="true" />
        </Text>
      </Box>
    </LinkBox>
  );
}
