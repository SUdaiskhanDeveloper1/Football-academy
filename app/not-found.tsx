import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { images } from "@/lib/images";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CoverImage } from "@/components/ui/CoverImage";

export default function NotFound() {
  return (
    <CoverImage image={images.floodlitEveningTraining} sizes="100vw" overlay="rgba(7,15,38,.85)">
      <Flex position="relative" minH="70vh" align="center" justify="center" px={5} py={20} textAlign="center" color="white">
        <Stack gap={5} align="center" maxW="560px">
          <Text fontFamily="heading" fontSize="8xl" fontWeight="800" lineHeight="1" color="gold.300">
            404
          </Text>
          <Heading as="h1" fontSize={{ base: "4xl", md: "5xl" }} textTransform="uppercase" fontWeight="800">
            Wide of the post
          </Heading>
          <Text fontSize="lg" color="whiteAlpha.900">
            We couldn’t find that page. It may have moved, or the link might be out of date.
          </Text>
          <Flex gap={4} wrap="wrap" justify="center">
            <ButtonLink href="/">Back to home</ButtonLink>
            <ButtonLink href={siteConfig.trialCta.href} tone="outlineLight">
              {siteConfig.trialCta.label}
            </ButtonLink>
          </Flex>
        </Stack>
      </Flex>
    </CoverImage>
  );
}
