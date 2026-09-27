import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Box as="figure" className="reveal" m={0} display="flex" flexDirection="column" h="full" bg="white" rounded="xl" p={{ base: 6, md: 8 }} borderWidth="1px" borderColor="line" shadow="sm" position="relative">
      <Box position="absolute" top={6} right={6} color="pitch.100" aria-hidden="true">
        <Quote size={44} />
      </Box>
      <HStack gap={1} color="gold.400" role="img" aria-label="Rated 5 out of 5">
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} size={16} fill="currentColor" aria-hidden="true" />
        ))}
      </HStack>
      <Text as="blockquote" mt={5} fontSize="lg" lineHeight="1.7" color="ink" flex="1">
        “{testimonial.quote}”
      </Text>
      <Flex as="figcaption" mt={6} pt={5} borderTopWidth="1px" borderColor="line" justify="space-between" align="flex-end" gap={3} wrap="wrap">
        <Box>
          <Text fontWeight="800" color="navy.950">
            {testimonial.name}
          </Text>
          <Text fontSize="sm" color="muted">
            {testimonial.role}
          </Text>
        </Box>
        <Text fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em" color="pitch.700">
          {testimonial.programme}
        </Text>
      </Flex>
    </Box>
  );
}
