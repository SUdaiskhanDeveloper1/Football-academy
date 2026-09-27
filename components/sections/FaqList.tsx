import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { Plus } from "lucide-react";
import type { Faq } from "@/data/programmes";

/** Accessible, zero-JavaScript accordion built on native <details>. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <Stack gap={3}>
      {faqs.map((faq) => (
        <Box as="details" key={faq.question} className="faq-item" bg="white" rounded="lg" borderWidth="1px" borderColor="line" _open={{ borderColor: "pitch.300", shadow: "sm" }}>
          <Flex as="summary" align="center" justify="space-between" gap={4} px={{ base: 5, md: 6 }} py={5} fontWeight="700" fontSize={{ base: "md", md: "lg" }} color="navy.950">
            {faq.question}
            <Flex className="faq-icon" flexShrink={0} w="32px" h="32px" rounded="full" bg="pitch.50" color="pitch.700" align="center" justify="center" aria-hidden="true">
              <Plus size={18} />
            </Flex>
          </Flex>
          <Text px={{ base: 5, md: 6 }} pb={6} color="muted" lineHeight="1.8">
            {faq.answer}
          </Text>
        </Box>
      ))}
    </Stack>
  );
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } }))
  };
}
