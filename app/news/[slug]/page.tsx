import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Box, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { articles, getArticle, sortedArticles } from "@/data/news";
import { siteConfig } from "@/data/site";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { NewsCard } from "@/components/cards/NewsCard";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  return buildMetadata({ title: article.title, description: article.excerpt, path: `/news/${article.slug}`, image: article.image, type: "article", publishedTime: article.isoDate });
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const article = getArticle((await params).slug);
  if (!article) notFound();

  const path = `/news/${article.slug}`;
  const more = sortedArticles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.isoDate,
          image: [absoluteUrl(article.image.src.src)],
          author: { "@type": "Person", name: article.author },
          publisher: { "@type": "SportsOrganization", name: siteConfig.name, logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg") } },
          mainEntityOfPage: absoluteUrl(path)
        }}
      />
      <PageHero
        eyebrow={article.category}
        title={article.title}
        image={article.image}
        breadcrumbs={[
          { label: "News", href: "/news" },
          { label: article.title, href: path }
        ]}
      />

      <Box as="article" bg="white" py={{ base: 12, md: 20 }}>
        <Container maxW="3xl" px={{ base: 5, md: 8 }}>
          <Text fontSize="sm" color="muted" mb={8} pb={6} borderBottomWidth="1px" borderColor="line">
            By <strong>{article.author}</strong> · <time dateTime={article.isoDate}>{article.date}</time> · {article.readTime}
          </Text>
          <Text fontSize={{ base: "xl", md: "2xl" }} lineHeight="1.6" color="navy.950" fontWeight="500" mb={8}>
            {article.excerpt}
          </Text>
          <Stack gap={8}>
            {article.body.map((section, index) => (
              <Stack key={section.heading ?? index} gap={5}>
                {section.heading ? (
                  <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} textTransform="uppercase" fontWeight="800" color="navy.950">
                    {section.heading}
                  </Heading>
                ) : null}
                {section.paragraphs.map((paragraph) => (
                  <Text key={paragraph.slice(0, 32)} fontSize="lg" lineHeight="1.85" color="ink">
                    {paragraph}
                  </Text>
                ))}
              </Stack>
            ))}
          </Stack>
        </Container>
      </Box>

      <Section tone="mist">
        <Box mb={10}>
          <SectionHeading eyebrow="Keep reading" title="More from the academy" />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {more.map((item) => (
            <NewsCard key={item.slug} article={item} />
          ))}
        </SimpleGrid>
      </Section>

      <CtaBanner />
    </>
  );
}
