import NextLink from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";

export function Crest({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 40 48" aria-hidden="true" focusable="false">
      <path d="M20 1.5 38 7.5v14.8C38 34 30.3 41.7 20 46.5 9.7 41.7 2 34 2 22.3V7.5L20 1.5Z" fill="#0B1838" stroke="#F5B82E" strokeWidth="2" />
      <path d="M6 12h28v4H6z" fill="#0B7F42" />
      <circle cx="20" cy="28" r="9" fill="#fff" />
      <path d="m20 23.2 3.6 2.6-1.4 4.2h-4.4l-1.4-4.2L20 23.2Z" fill="#0B1838" />
      <path d="m20 5.6.9 1.9 2 .2-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.2.9-1.9Z" fill="#F5B82E" />
    </svg>
  );
}

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <NextLink href="/" aria-label="FootballCoin Academy — home">
      <Flex align="center" gap={3}>
        <Crest />
        <Box lineHeight="1">
          <Text fontFamily="heading" fontWeight="800" fontSize="2xl" textTransform="uppercase" letterSpacing="0.01em" color={onDark ? "white" : "navy.950"}>
            FootballCoin
          </Text>
          <Text fontSize="2xs" fontWeight="700" letterSpacing="0.32em" textTransform="uppercase" color={onDark ? "gold.300" : "pitch.700"} mt="3px">
            Academy
          </Text>
        </Box>
      </Flex>
    </NextLink>
  );
}
