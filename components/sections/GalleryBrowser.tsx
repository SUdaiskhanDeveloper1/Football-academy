"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Box, Button, chakra, CloseButton, Dialog, Flex, Portal, SimpleGrid, Text } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/data/gallery";

type Filter = "All" | GalleryCategory;
const filters: Filter[] = ["All", ...galleryCategories];

export function GalleryBrowser() {
  const [filter, setFilter] = useState<Filter>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = useMemo(() => (filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter)), [filter]);
  const active = activeIndex === null ? null : items[activeIndex];

  const step = (delta: number) => setActiveIndex((index) => (index === null ? null : (index + delta + items.length) % items.length));

  return (
    <>
      <Flex role="group" aria-label="Filter photos" gap={2} wrap="wrap" mb={8}>
        {filters.map((option) => (
          <Button
            key={option}
            size="sm"
            rounded="full"
            variant={filter === option ? "solid" : "outline"}
            colorPalette={filter === option ? "navy" : undefined}
            color={filter === option ? "white" : "navy.950"}
            aria-pressed={filter === option}
            onClick={() => setFilter(option)}
          >
            {option}
          </Button>
        ))}
      </Flex>

      <Text srOnly aria-live="polite">
        Showing {items.length} photos
      </Text>

      <SimpleGrid as="ul" listStyleType="none" m={0} p={0} columns={{ base: 2, md: 3, lg: 4 }} gap={{ base: 3, md: 4 }}>
        {items.map((item, index) => (
          <Box as="li" key={item.caption}>
            <chakra.button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open photo: ${item.caption}`}
              position="relative"
              display="block"
              w="full"
              aspectRatio={1}
              rounded="lg"
              overflow="hidden"
              bg="navy.900"
              cursor="zoom-in"
              css={{ "& img": { transition: "transform .5s ease" }, "&:hover img, &:focus-visible img": { transform: "scale(1.06)" } }}
            >
              <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" placeholder="blur" style={{ objectFit: "cover", objectPosition: item.image.position ?? "center" }} />
              <Box position="absolute" insetX={0} bottom={0} p={3} bg="linear-gradient(180deg, transparent, rgba(7,15,38,.85))" textAlign="left">
                <Text fontSize="xs" fontWeight="700" color="gold.300" textTransform="uppercase" letterSpacing="0.08em">
                  {item.category}
                </Text>
                <Text fontSize="sm" fontWeight="600" color="white">
                  {item.caption}
                </Text>
              </Box>
            </chakra.button>
          </Box>
        ))}
      </SimpleGrid>

      <Dialog.Root open={active !== null} onOpenChange={(details) => !details.open && setActiveIndex(null)} size="cover" placement="center">
        <Portal>
          <Dialog.Backdrop bg="rgba(7,15,38,.92)" />
          <Dialog.Positioner>
            <Dialog.Content bg="transparent" shadow="none" onKeyDown={(event) => {
              if (event.key === "ArrowRight") step(1);
              if (event.key === "ArrowLeft") step(-1);
            }}>
              {active ? (
                <>
                  <Dialog.Title srOnly>{active.caption}</Dialog.Title>
                  <Box position="relative" flex="1" minH="60vh">
                    <Image src={active.image.src} alt={active.image.alt} fill sizes="100vw" placeholder="blur" style={{ objectFit: "contain" }} />
                  </Box>
                  <Flex mt={4} align="center" justify="space-between" color="white" gap={4}>
                    <Button variant="outline" color="white" borderColor="whiteAlpha.500" _hover={{ bg: "whiteAlpha.200" }} onClick={() => step(-1)} aria-label="Previous photo">
                      <ChevronLeft />
                    </Button>
                    <Box textAlign="center">
                      <Text fontWeight="700">{active.caption}</Text>
                      <Text fontSize="sm" color="whiteAlpha.700">
                        {(activeIndex ?? 0) + 1} of {items.length} · {active.category}
                      </Text>
                    </Box>
                    <Button variant="outline" color="white" borderColor="whiteAlpha.500" _hover={{ bg: "whiteAlpha.200" }} onClick={() => step(1)} aria-label="Next photo">
                      <ChevronRight />
                    </Button>
                  </Flex>
                </>
              ) : null}
              <Dialog.CloseTrigger asChild>
                <CloseButton size="lg" color="white" _hover={{ bg: "whiteAlpha.200" }} aria-label="Close photo" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
}
