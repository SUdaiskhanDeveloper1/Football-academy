import NextLink from "next/link";
import { Badge, Box, Grid, Heading, LinkBox, LinkOverlay, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { sortedArticles } from "@/data/news";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { NewsCard } from "@/components/cards/NewsCard";
import { CoverImage } from "@/components/ui/CoverImage";
import { Section } from "@/components/ui/Section";

export const metadata = buildMetadata({
  title: "News & Blog",
  description: "Academy news, camp announcements, player success stories and coaching advice for parents from FootballCoin Academy.",
  path: "/news",
  image: images.youthMatchAction
});

export default function NewsPage() {
  const [featured, ...rest] = sortedArticles;

  return (
    <>
      <PageHero eyebrow="News" title="News & updates" description="Academy announcements, success stories and practical advice from our coaches." image={images.floodlitTeamHuddle} breadcrumbs={[{ label: "News", href: "/news" }]} />

      <Section tone="mist">
        <LinkBox as="article" className="reveal" bg="white" rounded="2xl" overflow="hidden" borderWidth="1px" borderColor="line" shadow="md" mb={{ base: 10, md: 14 }}>
          <Grid templateColumns={{ base: "1fr", lg: "1.2fr 1fr" }}>
            <CoverImage image={featured.image} sizes="(min-width: 1024px) 55vw, 100vw" priority minH={{ base: "260px", lg: "440px" }} />
            <Stack p={{ base: 6, md: 10 }} gap={4} justify="center">
              <Badge colorPalette="gold" variant="solid" alignSelf="flex-start">
                Featured · {featured.category}
              </Badge>
              <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.05" textTransform="uppercase" fontWeight="800" color="navy.950">
                <LinkOverlay asChild _hover={{ color: "pitch.700" }}>
                  <NextLink href={`/news/${featured.slug}`}>{featured.title}</NextLink>
                </LinkOverlay>
              </Heading>
              <Text color="muted" fontSize="lg" lineHeight="1.7">
                {featured.excerpt}
              </Text>
              <Text fontSize="sm" color="muted">
                <time dateTime={featured.isoDate}>{featured.date}</time> · {featured.readTime} · By {featured.author}
              </Text>
            </Stack>
          </Grid>
        </LinkBox>

        <Box>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
            {rest.map((article) => (
              <NewsCard key={article.slug} article={article} headingLevel="h2" />
            ))}
          </SimpleGrid>
        </Box>
      </Section>

      <CtaBanner />
    </>
  );
}
