import NextLink from "next/link";
import { Box, Container, Flex, Grid, Heading, HStack, Link, Stack, Text } from "@chakra-ui/react";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { footerNav, siteConfig } from "@/data/site";
import { Logo } from "@/components/layout/Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

const socialLinks = [
  { label: "Instagram", href: siteConfig.socials.instagram.href, icon: <Instagram size={18} aria-hidden="true" /> },
  { label: "Facebook", href: siteConfig.socials.facebook.href, icon: <Facebook size={18} aria-hidden="true" /> },
  { label: "YouTube", href: siteConfig.socials.youtube.href, icon: <Youtube size={18} aria-hidden="true" /> }
];

export function Footer() {
  const { address } = siteConfig;

  return (
    <Box as="footer" bg="navy.950" color="whiteAlpha.800">
      <Box borderBottomWidth="1px" borderColor="whiteAlpha.200">
        <Container maxW="7xl" px={{ base: 5, md: 8 }} py={{ base: 10, md: 12 }}>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6} alignItems="center">
            <Box>
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} textTransform="uppercase" color="white" fontWeight="800">
                Stay in the game
              </Heading>
              <Text mt={2}>Academy news, camp dates, training tips and success stories — once a month, no spam.</Text>
            </Box>
            <NewsletterForm />
          </Grid>
        </Container>
      </Box>

      <Container maxW="7xl" px={{ base: 5, md: 8 }} py={{ base: 12, md: 16 }}>
        <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr", lg: "1.3fr repeat(3, .85fr) 1.7fr" }} gap={{ base: 10, lg: 8 }}>
          <Stack gap={5}>
            <Logo onDark />
            <Text lineHeight="1.7">{siteConfig.tagline} Building confident footballers and good people across Greater Manchester since 2011.</Text>
            <HStack gap={3}>
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`${siteConfig.name} on ${social.label}`} display="inline-flex" alignItems="center" justifyContent="center" w="40px" h="40px" rounded="full" bg="whiteAlpha.100" color="white" _hover={{ bg: "pitch.600" }}>
                  {social.icon}
                </Link>
              ))}
            </HStack>
          </Stack>

          {footerNav.map((column) => (
            <Box as="nav" key={column.title} aria-label={column.title}>
              <Heading as="h3" fontSize="md" color="white" textTransform="uppercase" letterSpacing="0.08em" mb={4}>
                {column.title}
              </Heading>
              <Stack as="ul" listStyleType="none" m={0} p={0} gap={3}>
                {column.links.map((link) => (
                  <Box as="li" key={link.href}>
                    <Link asChild color="whiteAlpha.800" fontSize="sm" _hover={{ color: "gold.300" }}>
                      <NextLink href={link.href}>{link.label}</NextLink>
                    </Link>
                  </Box>
                ))}
              </Stack>
            </Box>
          ))}

          <Box>
            <Heading as="h3" fontSize="md" color="white" textTransform="uppercase" letterSpacing="0.08em" mb={4}>
              Get in touch
            </Heading>
            <Stack as="address" fontStyle="normal" gap={3} fontSize="sm">
              <Flex gap={3}>
                <MapPin size={18} aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }} />
                <Text>
                  {address.street}
                  <br />
                  {address.locality} {address.postcode}
                </Text>
              </Flex>
              <Link href={siteConfig.phoneHref} color="whiteAlpha.800" gap={3} _hover={{ color: "gold.300" }}>
                <Phone size={18} aria-hidden="true" /> {siteConfig.phone}
              </Link>
              <Link href={`mailto:${siteConfig.email}`} color="whiteAlpha.800" gap={3} overflowWrap="anywhere" _hover={{ color: "gold.300" }}>
                <Mail size={18} aria-hidden="true" style={{ flexShrink: 0 }} /> {siteConfig.email}
              </Link>
            </Stack>
          </Box>
        </Grid>

        <Flex mt={12} pt={6} borderTopWidth="1px" borderColor="whiteAlpha.200" justify="space-between" direction={{ base: "column", md: "row" }} gap={3} fontSize="sm" color="whiteAlpha.700">
          <Text>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </Text>
          <HStack gap={5}>
            <Link asChild color="inherit" _hover={{ color: "gold.300" }}>
              <NextLink href="/privacy">Privacy</NextLink>
            </Link>
            <Link asChild color="inherit" _hover={{ color: "gold.300" }}>
              <NextLink href="/safeguarding">Safeguarding</NextLink>
            </Link>
            <Link asChild color="inherit" _hover={{ color: "gold.300" }}>
              <NextLink href="/sitemap.xml">Sitemap</NextLink>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
