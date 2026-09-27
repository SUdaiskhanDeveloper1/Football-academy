import { Box, SimpleGrid } from "@chakra-ui/react";
import { testimonials } from "@/data/testimonials";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata = buildMetadata({
  title: "Testimonials",
  description: "What parents, players and schools say about FootballCoin Academy’s weekly training, holiday camps, 1-to-1 coaching and performance programme.",
  path: "/testimonials",
  image: images.youngPlayerSmilingWithBall
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Voices from our community"
        description="The best measure of our work is what players, parents and schools tell us. Here’s a selection."
        image={images.girlsGoalkeeperSave}
        breadcrumbs={[{ label: "Testimonials", href: "/testimonials" }]}
      />

      <Section tone="mist">
        <Box mb={{ base: 10, md: 14 }}>
          <SectionHeading eyebrow="Reviews" title="In their own words" />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </SimpleGrid>
      </Section>

      <StatsBand />
      <CtaBanner title="Become part of the story" />
    </>
  );
}
