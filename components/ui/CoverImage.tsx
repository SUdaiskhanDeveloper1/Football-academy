import Image from "next/image";
import { Box, type BoxProps } from "@chakra-ui/react";
import type { SiteImage } from "@/lib/images";

type CoverImageProps = BoxProps & {
  image: SiteImage;
  /** Responsive `sizes` hint so the browser downloads the right width */
  sizes: string;
  priority?: boolean;
  overlay?: string;
};

/** Fills its box with an optimised, blur-up photo (next/image `fill`). */
export function CoverImage({ image, sizes, priority = false, overlay, children, ...rest }: CoverImageProps) {
  return (
    <Box position="relative" overflow="hidden" bg="navy.900" {...rest}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        style={{ objectFit: "cover", objectPosition: image.position ?? "center" }}
      />
      {overlay ? <Box position="absolute" inset={0} bg={overlay} aria-hidden="true" /> : null}
      {children}
    </Box>
  );
}
