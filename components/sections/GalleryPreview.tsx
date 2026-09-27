import { Grid } from "@chakra-ui/react";
import { galleryItems } from "@/data/gallery";
import { CoverImage } from "@/components/ui/CoverImage";

const areas = ["a", "b", "c", "d", "e", "f"];

/** Six-photo mosaic used on the home page. */
export function GalleryPreview() {
  const items = galleryItems.slice(0, areas.length);

  return (
    <Grid
      as="ul"
      listStyleType="none"
      m={0}
      p={0}
      gap={{ base: 3, md: 4 }}
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
      gridAutoRows={{ base: "160px", md: "220px" }}
      templateAreas={{
        base: `"a a" "b c" "d e" "f f"`,
        md: `"a a b c" "a a d d" "e e f f"`
      }}
    >
      {items.map((item, index) => (
        <CoverImage as="li" key={item.caption} gridArea={areas[index]} image={item.image} sizes="(min-width: 768px) 50vw, 100vw" rounded="lg" className="reveal" css={{ "& img": { transition: "transform .6s ease" }, "&:hover img": { transform: "scale(1.05)" } }} />
      ))}
    </Grid>
  );
}
