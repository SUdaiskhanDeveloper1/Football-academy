import NextLink from "next/link";
import { Badge, Box, Heading, HStack, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import type { Article } from "@/data/news";
import { CoverImage } from "@/components/ui/CoverImage";

export function NewsCard({ article, headingLevel = "h3" }: { article: Article; headingLevel?: "h2" | "h3" }) {
  return (
    <LinkBox as="article" className="reveal" display="flex" flexDirection="column" bg="white" rounded="xl" overflow="hidden" borderWidth="1px" borderColor="line" shadow="sm" transition="transform .25s ease, box-shadow .25s ease" _hover={{ transform: "translateY(-4px)", shadow: "lg" }}>
      <CoverImage image={article.image} sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw" aspectRatio={16 / 10}>
        <Badge position="absolute" top={4} left={4} colorPalette="pitch" variant="solid" px={3} py={1} rounded="full">
          {article.category}
        </Badge>
      </CoverImage>
      <Box p={6} flex="1" display="flex" flexDirection="column">
        <HStack fontSize="sm" color="muted" gap={2}>
          <time dateTime={article.isoDate}>{article.date}</time>
          <Box as="span" aria-hidden="true">
            ·
          </Box>
          <span>{article.readTime}</span>
        </HStack>
        <Heading as={headingLevel} mt={3} fontSize="xl" lineHeight="1.25" fontWeight="800" color="navy.950">
          <LinkOverlay asChild _hover={{ color: "pitch.700" }}>
            <NextLink href={`/news/${article.slug}`}>{article.title}</NextLink>
          </LinkOverlay>
        </Heading>
        <Text mt={3} color="muted" lineHeight="1.7">
          {article.excerpt}
        </Text>
      </Box>
    </LinkBox>
  );
}
