import { Badge, Box, Flex, Heading, SimpleGrid, Stack, Table, Text } from "@chakra-ui/react";
import type { Programme } from "@/data/programmes";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function SessionPlan({ steps }: { steps: Programme["sessionPlan"] }) {
  return (
    <SimpleGrid as="ol" listStyleType="none" m={0} p={0} columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
      {steps.map((step, index) => (
        <Box as="li" key={step.title} className="reveal" position="relative" p={6} rounded="xl" bg="whiteAlpha.100" borderWidth="1px" borderColor="whiteAlpha.200">
          <Flex align="center" gap={3}>
            <Flex w="36px" h="36px" rounded="full" bg="gold.400" color="navy.950" align="center" justify="center" fontWeight="800" aria-hidden="true">
              {index + 1}
            </Flex>
            <Text fontSize="sm" fontWeight="700" color="gold.300" textTransform="uppercase" letterSpacing="0.1em">
              {step.time}
            </Text>
          </Flex>
          <Heading as="h3" mt={4} fontSize="xl" textTransform="uppercase" fontWeight="800" color="white">
            {step.title}
          </Heading>
          <Text mt={2} color="whiteAlpha.800" lineHeight="1.7">
            {step.text}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}

export function ScheduleTable({ rows, caption }: { rows: Programme["schedule"]; caption: string }) {
  return (
    <Table.ScrollArea rounded="xl" borderWidth="1px" borderColor="line" bg="white">
      <Table.Root size="lg" minW="640px">
        <Table.Caption captionSide="top" textAlign="left" srOnly>
          {caption}
        </Table.Caption>
        <Table.Header>
          <Table.Row bg="navy.950">
            {["Group", "Day", "Time", "Venue"].map((heading) => (
              <Table.ColumnHeader key={heading} color="white" fontWeight="700" textTransform="uppercase" fontSize="xs" letterSpacing="0.1em">
                {heading}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((row) => (
            <Table.Row key={row.group + row.day} _odd={{ bg: "mist" }}>
              <Table.Cell fontWeight="700" color="navy.950">
                {row.group}
              </Table.Cell>
              <Table.Cell>{row.day}</Table.Cell>
              <Table.Cell>{row.time}</Table.Cell>
              <Table.Cell>{row.venue}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
}

export function PricingCards({ options, programme }: { options: Programme["pricing"]; programme: string }) {
  return (
    <SimpleGrid columns={{ base: 1, md: options.length > 2 ? 3 : 2 }} gap={6}>
      {options.map((option) => (
        <Stack
          key={option.label}
          className="reveal"
          gap={4}
          p={{ base: 6, md: 8 }}
          rounded="xl"
          bg={option.featured ? "navy.950" : "white"}
          color={option.featured ? "white" : "ink"}
          borderWidth={option.featured ? "0" : "1px"}
          borderColor="line"
          borderTopWidth="4px"
          borderTopColor={option.featured ? "gold.400" : "pitch.500"}
          shadow={option.featured ? "xl" : "sm"}
        >
          <Flex justify="space-between" align="center" gap={3}>
            <Text fontWeight="700" textTransform="uppercase" letterSpacing="0.08em" fontSize="sm" color={option.featured ? "gold.300" : "pitch.700"}>
              {option.label}
            </Text>
            {option.featured ? (
              <Badge colorPalette="gold" variant="solid">
                Most popular
              </Badge>
            ) : null}
          </Flex>
          <Text fontFamily="heading" fontSize="5xl" fontWeight="800" lineHeight="1">
            {option.price}
          </Text>
          <Text color={option.featured ? "whiteAlpha.800" : "muted"} lineHeight="1.7" flex="1">
            {option.note}
          </Text>
          <ButtonLink href={siteConfig.trialCta.href} tone={option.featured ? "gold" : "outlineDark"} aria-label={`Book a free trial — ${programme}, ${option.label}`}>
            Book a free trial
          </ButtonLink>
        </Stack>
      ))}
    </SimpleGrid>
  );
}
