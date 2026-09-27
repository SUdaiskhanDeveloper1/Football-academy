import { images } from "@/lib/images";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { GalleryBrowser } from "@/components/sections/GalleryBrowser";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";

export const metadata = buildMetadata({
  title: "Gallery",
  description: "Photos from FootballCoin Academy training sessions, match days, goalkeeper coaching, girls’ football and holiday camps.",
  path: "/gallery",
  image: images.teamLineUpArmsLinked
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Life at the academy"
        description="Training nights, match days and camp highlights from across our programmes."
        image={images.finishingPracticeMotion}
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
      >
        <ButtonLink href={siteConfig.socials.instagram.href} tone="outlineLight" size="xl" newTab>
          Follow {siteConfig.socials.instagram.handle}
        </ButtonLink>
      </PageHero>

      <Section>
        <GalleryBrowser />
      </Section>

      <CtaBanner />
    </>
  );
}
