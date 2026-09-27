import NextLink from "next/link";
import { Button, type ButtonProps } from "@chakra-ui/react";

type Tone = "primary" | "navy" | "gold" | "outlineLight" | "outlineDark";

const toneStyles: Record<Tone, ButtonProps> = {
  primary: { colorPalette: "pitch", variant: "solid", _hover: { bg: "pitch.700" } },
  navy: { colorPalette: "navy", variant: "solid", _hover: { bg: "navy.700" } },
  gold: { colorPalette: "gold", variant: "solid", _hover: { bg: "gold.300" } },
  outlineLight: { variant: "outline", color: "white", borderColor: "whiteAlpha.700", _hover: { bg: "whiteAlpha.200" } },
  outlineDark: { variant: "outline", color: "navy.900", borderColor: "navy.200", _hover: { bg: "navy.50" } }
};

type ButtonLinkProps = Omit<ButtonProps, "asChild"> & {
  href: string;
  tone?: Tone;
  /** Opens external links in a new tab with safe `rel` attributes */
  newTab?: boolean;
};

/** A Chakra button rendered as a Next.js link (works in server components). */
export function ButtonLink({ href, tone = "primary", newTab = false, children, size = "lg", ...rest }: ButtonLinkProps) {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  const tabProps = newTab ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Button asChild size={size} rounded="md" fontWeight="700" letterSpacing="0.01em" transition="background .2s ease, transform .2s ease" _active={{ transform: "translateY(1px)" }} {...toneStyles[tone]} {...rest}>
      {external ? (
        <a href={href} {...tabProps}>
          {children}
        </a>
      ) : (
        <NextLink href={href}>{children}</NextLink>
      )}
    </Button>
  );
}
