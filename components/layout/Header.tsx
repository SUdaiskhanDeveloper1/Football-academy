"use client";

import { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Box, Button, CloseButton, Container, Drawer, Flex, HStack, IconButton, Link, Portal, Stack, Text } from "@chakra-ui/react";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { mainNav, siteConfig, type NavGroup } from "@/data/site";
import { Logo } from "@/components/layout/Logo";

function useIsActive() {
  const pathname = usePathname();
  return (href: string) => pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopDropdown({ group, active }: { group: NavGroup; active: boolean }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const panelId = `nav-${group.label.toLowerCase()}`;

  return (
    <Box
      ref={wrapperRef}
      position="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={(event) => event.key === "Escape" && setOpen(false)}
      onBlur={(event) => {
        if (!wrapperRef.current?.contains(event.relatedTarget as Node)) setOpen(false);
      }}
    >
      <Button
        variant="plain"
        px={0}
        h="auto"
        fontSize="15px"
        fontWeight="600"
        color={active ? "pitch.700" : "navy.950"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        _hover={{ color: "pitch.700" }}
      >
        {group.label}
        <ChevronDown size={16} aria-hidden="true" style={{ transition: "transform .2s", transform: open ? "rotate(180deg)" : undefined }} />
      </Button>
      <Box id={panelId} display={open ? "block" : "none"} position="absolute" top="100%" left="-24px" pt={4} zIndex={20}>
        <Box as="ul" listStyleType="none" m={0} bg="white" rounded="lg" shadow="xl" borderWidth="1px" borderColor="line" p={2} minW="300px">
          {group.children?.map((child) => (
            <Box as="li" key={child.href}>
              <Link asChild display="block" px={4} py={3} rounded="md" _hover={{ bg: "mist", textDecoration: "none" }} onClick={() => setOpen(false)}>
                <NextLink href={child.href}>
                  <Text fontWeight="700" color="navy.950" fontSize="sm">
                    {child.label}
                  </Text>
                  {child.description ? (
                    <Text fontSize="xs" color="muted" mt="2px">
                      {child.description}
                    </Text>
                  ) : null}
                </NextLink>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = useIsActive();

  useEffect(() => setOpen(false), [pathname]);

  const linkStyles = { display: "block", py: 2, fontWeight: "600", color: "navy.950", _hover: { color: "pitch.700", textDecoration: "none" } } as const;

  return (
    <Drawer.Root open={open} onOpenChange={(event) => setOpen(event.open)} placement="end" size="sm">
      <Drawer.Trigger asChild>
        <IconButton aria-label="Open menu" variant="ghost" color="navy.950" display={{ base: "inline-flex", xl: "none" }}>
          <Menu />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header borderBottomWidth="1px" borderColor="line">
              <Drawer.Title fontFamily="heading" fontSize="2xl" textTransform="uppercase" color="navy.950">
                Menu
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body py={4}>
              <Stack as="nav" aria-label="Mobile" gap={1}>
                {mainNav.map((group) =>
                  group.children ? (
                    <Box key={group.label} py={2}>
                      <Text fontSize="xs" fontWeight="700" letterSpacing="0.14em" textTransform="uppercase" color="pitch.700" mb={1}>
                        {group.label}
                      </Text>
                      {group.children.map((child) => (
                        <Link key={child.href} asChild {...linkStyles} pl={3} aria-current={pathname === child.href ? "page" : undefined} onClick={() => setOpen(false)}>
                          <NextLink href={child.href}>{child.label}</NextLink>
                        </Link>
                      ))}
                    </Box>
                  ) : (
                    <Link key={group.href} asChild {...linkStyles} color={isActive(group.href) ? "pitch.700" : "navy.950"} aria-current={isActive(group.href) ? "page" : undefined} onClick={() => setOpen(false)}>
                      <NextLink href={group.href}>{group.label}</NextLink>
                    </Link>
                  )
                )}
              </Stack>
            </Drawer.Body>
            <Drawer.Footer flexDirection="column" alignItems="stretch" gap={3} borderTopWidth="1px" borderColor="line">
              <Button asChild colorPalette="pitch" size="lg" onClick={() => setOpen(false)}>
                <NextLink href={siteConfig.trialCta.href}>{siteConfig.trialCta.label}</NextLink>
              </Button>
              <Button asChild variant="outline" size="lg" color="navy.950">
                <a href={siteConfig.phoneHref}>
                  <Phone size={16} aria-hidden="true" /> {siteConfig.phone}
                </a>
              </Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" aria-label="Close menu" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}

export function Header() {
  const isActive = useIsActive();

  return (
    <Box as="header" position="sticky" top={0} zIndex={100} bg="rgba(255,255,255,0.96)" backdropFilter="saturate(180%) blur(12px)" borderBottomWidth="1px" borderColor="line">
      <Container maxW="7xl" px={{ base: 5, md: 8 }}>
        <Flex h={{ base: "72px", md: "84px" }} align="center" justify="space-between" gap={6}>
          <Logo />

          <HStack as="nav" aria-label="Main" gap={5} display={{ base: "none", xl: "flex" }}>
            {mainNav.map((group) =>
              group.children ? (
                <DesktopDropdown key={group.label} group={group} active={isActive(group.href) || group.children.some((child) => isActive(child.href))} />
              ) : (
                <Link
                  key={group.href}
                  asChild
                  fontSize="15px"
                  fontWeight="600"
                  color={isActive(group.href) ? "pitch.700" : "navy.950"}
                  aria-current={isActive(group.href) ? "page" : undefined}
                  _hover={{ color: "pitch.700", textDecoration: "none" }}
                >
                  <NextLink href={group.href}>{group.label}</NextLink>
                </Link>
              )
            )}
          </HStack>

          <HStack gap={2}>
            <Button asChild colorPalette="pitch" size={{ base: "sm", sm: "md" }} fontWeight="700" _hover={{ bg: "pitch.700" }}>
              <NextLink href={siteConfig.trialCta.href}>
                <Box as="span" display={{ base: "none", sm: "inline" }}>
                  {siteConfig.trialCta.label}
                </Box>
                <Box as="span" display={{ base: "inline", sm: "none" }}>
                  Free Trial
                </Box>
              </NextLink>
            </Button>
            <MobileMenu />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
