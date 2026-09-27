import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { images, type SiteImage } from "@/lib/images";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CoverImage } from "@/components/ui/CoverImage";

type CtaBannerProps = {
  title?: string;
  text?: string;
  image?: SiteImage;
};

export function CtaBanner({
  title = "Ready to start your football journey?",
  text = "Your first session is free. Tell us a little about your player and we’ll find the right group, day and venue — usually within one working day.",
  image = images.floodlitEveningTraining
}: CtaBannerProps) {
  return (
    <Box as="section" aria-label="Book a free trial" bg="white" py={{ base: 12, md: 20 }}>
      <Container maxW="7xl" px={{ base: 5, md: 8 }}>
        <CoverImage image={image} sizes="(min-width: 1280px) 1216px, 100vw" rounded="2xl" overlay="linear-gradient(100deg, rgba(7,15,38,.96) 0%, rgba(7,15,38,.82) 55%, rgba(11,127,66,.55) 100%)" className="reveal">
          <Flex position="relative" direction={{ base: "column", lg: "row" }} align={{ base: "flex-start", lg: "center" }} justify="space-between" gap={8} px={{ base: 6, md: 12, lg: 16 }} py={{ base: 12, md: 16 }} color="white">
            <Box maxW="640px">
              <Heading as="h2" fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1" fontWeight="800" textTransform="uppercase">
                {title}
              </Heading>
              <Text mt={4} fontSize={{ base: "md", md: "lg" }} lineHeight="1.7" color="whiteAlpha.900">
                {text}
              </Text>
            </Box>
            <Flex gap={4} wrap="wrap" flexShrink={0}>
              <ButtonLink href={siteConfig.trialCta.href} tone="gold" size="xl">
                {siteConfig.trialCta.label}
              </ButtonLink>
              <ButtonLink href={siteConfig.phoneHref} tone="outlineLight" size="xl">
                <Phone size={18} aria-hidden="true" /> {siteConfig.phone}
              </ButtonLink>
            </Flex>
          </Flex>
        </CoverImage>
      </Container>
    </Box>
  );
}
