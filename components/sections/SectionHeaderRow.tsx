import { Flex } from "@chakra-ui/react";
import { SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";

type SectionHeaderRowProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: { label: string; href: string };
  onDark?: boolean;
};

/** Section heading on the left with a "view all" style action on the right. */
export function SectionHeaderRow({ eyebrow, title, description, action, onDark = false }: SectionHeaderRowProps) {
  return (
    <Flex mb={{ base: 10, md: 14 }} direction={{ base: "column", md: "row" }} align={{ base: "flex-start", md: "flex-end" }} justify="space-between" gap={6}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} onDark={onDark} />
      {action ? (
        <ButtonLink href={action.href} tone={onDark ? "outlineLight" : "outlineDark"} flexShrink={0}>
          {action.label}
        </ButtonLink>
      ) : null}
    </Flex>
  );
}
