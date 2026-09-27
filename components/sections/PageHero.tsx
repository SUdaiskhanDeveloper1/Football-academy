import NextLink from "next/link";
import { Box, Container, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { ChevronRight } from "lucide-react";
import type { SiteImage } from "@/lib/images";
import { absoluteUrl } from "@/lib/seo";
import { CoverImage } from "@/components/ui/CoverImage";
import { Eyebrow } from "@/components/ui/Section";
import { JsonLd } from "@/components/ui/JsonLd";

type Crumb = { label: string; href: string };

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: SiteImage;
  breadcrumbs: Crumb[];
  children?: React.ReactNode;
};

/** Inner-page banner with photo, breadcrumb trail and BreadcrumbList structured data. */
export function PageHero({ eyebrow, title, description, image, breadcrumbs, children }: PageHeroProps) {
  const trail = [{ label: "Home", href: "/" }, ...breadcrumbs];

  return (
    <Box as="section" position="relative" color="white" overflow="hidden">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((crumb, index) => ({ "@type": "ListItem", position: index + 1, name: crumb.label, item: absoluteUrl(crumb.href) }))
        }}
      />
      <CoverImage image={image} sizes="100vw" priority position="absolute" inset={0} overlay="linear-gradient(90deg, rgba(7,15,38,.94) 0%, rgba(7,15,38,.8) 50%, rgba(7,15,38,.45) 100%)" />
      <Container maxW="7xl" px={{ base: 5, md: 8 }} position="relative" py={{ base: 16, md: 24 }}>
        <Stack gap={5} maxW="760px" className="hero-in">
          <Box as="nav" aria-label="Breadcrumb">
            <Flex as="ol" listStyleType="none" m={0} p={0} gap={2} fontSize="sm" wrap="wrap" align="center" color="whiteAlpha.800">
              {trail.map((crumb, index) => {
                const current = index === trail.length - 1;
                return (
                  <Flex as="li" key={crumb.href} align="center" gap={2}>
                    {current ? (
                      <Text as="span" aria-current="page" color="white" fontWeight="600">
                        {crumb.label}
                      </Text>
                    ) : (
                      <>
                        <Link asChild color="inherit" _hover={{ color: "gold.300" }}>
                          <NextLink href={crumb.href}>{crumb.label}</NextLink>
                        </Link>
                        <ChevronRight size={14} aria-hidden="true" />
                      </>
                    )}
                  </Flex>
                );
              })}
            </Flex>
          </Box>
          {eyebrow ? <Eyebrow onDark>{eyebrow}</Eyebrow> : null}
          <Heading as="h1" fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }} lineHeight="0.95" fontWeight="800" textTransform="uppercase">
            {title}
          </Heading>
          {description ? (
            <Text fontSize={{ base: "lg", md: "xl" }} lineHeight="1.7" color="whiteAlpha.900">
              {description}
            </Text>
          ) : null}
          {children ? (
            <Flex gap={4} wrap="wrap" pt={2}>
              {children}
            </Flex>
          ) : null}
        </Stack>
      </Container>
    </Box>
  );
}
