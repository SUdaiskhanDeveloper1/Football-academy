import NextLink from "next/link";
import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export function TopBar() {
  return (
    <Box bg="navy.950" color="whiteAlpha.900" fontSize="sm">
      <Container maxW="7xl" px={{ base: 5, md: 8 }} py={2}>
        <Flex justify={{ base: "center", md: "space-between" }} align="center" gap={4}>
          <HStack gap={6} display={{ base: "none", md: "flex" }}>
            <Link href={siteConfig.phoneHref} color="inherit" display="inline-flex" gap={2} _hover={{ color: "gold.300" }}>
              <Phone size={14} aria-hidden="true" /> {siteConfig.phone}
            </Link>
            <Link href={`mailto:${siteConfig.email}`} color="inherit" display="inline-flex" gap={2} _hover={{ color: "gold.300" }}>
              <Mail size={14} aria-hidden="true" /> {siteConfig.email}
            </Link>
          </HStack>
          <Link asChild color="inherit" fontWeight="600" _hover={{ color: "gold.300" }}>
            <NextLink href="/programmes/holiday-camps">
              <Text as="span" color="gold.300" fontWeight="700" mr={1}>
                Now booking:
              </Text>
              October half-term camps
              <ArrowRight size={14} aria-hidden="true" />
            </NextLink>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
